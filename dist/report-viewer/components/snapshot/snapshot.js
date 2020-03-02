"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const ansi_to_react_1 = __importDefault(require("ansi-to-react")); // tslint:disable-line
const bind_1 = __importDefault(require("classnames/bind"));
const level_item_1 = require("../level-item");
const image_diff_viewer_1 = require("../image-diff-viewer");
const css = __importStar(require("./snapshot.scss"));
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
class Snapshot extends React.Component {
    get snapshot() { return this.props.snapshot; }
    render() {
        const { receivedPath, snapshotPath, diffPath, width, height, testFileName } = this.snapshot;
        return (React.createElement("article", null,
            React.createElement("nav", { className: cx("level") },
                React.createElement(level_item_1.LevelItem, { name: "Total Pixels", value: String(this.snapshot.totalPixels) }),
                React.createElement(level_item_1.LevelItem, { name: "Changed Pixels", value: String(this.snapshot.changedPixels) }),
                React.createElement(level_item_1.LevelItem, { name: "Difference", value: `${(this.snapshot.changedRelative * 100).toFixed(2)}%` })),
            React.createElement("div", { className: cx("message", "test-message") },
                React.createElement("div", { className: cx("message-body") },
                    React.createElement(ansi_to_react_1.default, null, this.snapshot.message))),
            React.createElement("div", { className: cx("level") },
                React.createElement("button", { type: "button", className: cx("button", "is-warning"), onClick: function overwriteSnapshot() {
                        if (!confirm("Do you really want to overwrite the current snapshot and update the test definition?")) {
                            return;
                        }
                        // TODO: change URL
                        // TODO: await result and change UI (permanently)
                        fetch(`http://localhost:5000/snapshotOverwrite?receivedPath=${encodeURIComponent(receivedPath)}&testFileName=${encodeURIComponent(testFileName)}`);
                    } }, "Update Snapshot")),
            React.createElement(image_diff_viewer_1.ImageDiffViewer, { received: receivedPath, snapshot: snapshotPath, diff: diffPath, width: width, height: height })));
    }
}
exports.Snapshot = Snapshot;
//# sourceMappingURL=snapshot.js.map