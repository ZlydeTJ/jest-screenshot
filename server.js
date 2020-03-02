const express = require("express");
const path = require('path');
const fs = require('fs');

console.log('------------ WARNING ------------');
console.log('---- DO NOT USE IN PRODUCTION / PUBLIC SERVER ----');
console.log('------------ WARNING ------------');

// TODO: what if we changed the name of the snapshot via the jest-screenshot config?
const snapshotFolder = '__snapshots__';
// TODO: Can this change throught the config?
const reportFolder = 'jest-screenshot-report';
// TODO: What if we cannot listen? Might be a problem since the url is hardcoded in React APP!
const port = 5000;

const app = express();

// route to overwrite existing snapshots
app.get("/snapshotOverwrite", (request, response) => {
  // these will look like this:
  // receivedPath: "reports/project-edit-meta-js-src-tests-project-edi…s-project-edit-meta-1-6f0ec.snap.png/received.png",
  // testFileName: "src/__tests__/scripts/project-edit-meta.js"
  const {receivedPath, testFileName} = request.query;
  console.log({receivedPath, testFileName});
  const testDir = path.dirname(testFileName);
  // "src/__tests__/scripts/__snapshot__"
  const snapshotDirectory = path.join(process.cwd(), testDir, snapshotFolder);
  const [_, originalFileName] = receivedPath.split('/');
  // "src/__tests__/scripts/__snapshot__/project-edit-meta-js-src-tests-project-edi…s-project-edit-meta-1-6f0ec.snap.png"
  const snapshotFileName = path.join(snapshotDirectory, originalFileName);
  // "jest-screenshot-report/reports/project-edit-meta-js-src-tests-project-edi…s-project-edit-meta-1-6f0ec.snap.png/received.png"
  const snapshotNewName = path.join(process.cwd(), reportFolder, receivedPath);

  // exit if the new snapshot cannot be found
  if (!fs.existsSync(snapshotNewName)) {
    throw new Error(`New File: "${snapshotNewName}" does not exit`);
  }

  // delete original snapshot before copying new one
  if (fs.existsSync(snapshotFileName)) {
    console.log(`Deleting current snapshot "${snapshotFileName}"`);
    fs.unlinkSync(snapshotFileName);
  }

  // copy the new snapshot to the snapshot location
  fs.copyFileSync(snapshotNewName, snapshotFileName);
  console.log(`Updated the snapshot with File from "${snapshotNewName}"`);

  // TODO: implement a correct message, which can be checked, instead of this
  response.send("Success!");
});

// serve all files under jest-screenshot-report/ as static files
app.use(express.static(reportFolder))

app.listen(port);
console.log(`Server started on Port 5000`);
