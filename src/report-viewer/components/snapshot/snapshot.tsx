import * as React from "react";
import * as bulma from "bulma";
import Ansi from "ansi-to-react"; // tslint:disable-line
import classNames from "classnames/bind";
import { FailedSnapshotInfo } from "../../../reporter-types";
import { LevelItem } from "../level-item";
import { ImageDiffViewer } from "../image-diff-viewer";
import * as css from "./snapshot.scss";

const cx = classNames.bind({ ...bulma, ...css });

export interface SnapshotProps {
    snapshot: FailedSnapshotInfo;
}

export class Snapshot extends React.Component<SnapshotProps> {
    private get snapshot() { return this.props.snapshot; }

    public render() {
        const { receivedPath, snapshotPath, diffPath, width, height, testFileName } = this.snapshot;
        return (
            <article>
                <nav className={cx("level")}>
                    <LevelItem name="Total Pixels" value={String(this.snapshot.totalPixels)}/>
                    <LevelItem name="Changed Pixels" value={String(this.snapshot.changedPixels)}/>
                    <LevelItem name="Difference" value={`${(this.snapshot.changedRelative * 100).toFixed(2)}%`}/>
                </nav>
                <div className={cx("message", "test-message")}>
                    <div className={cx("message-body")}>
                        <Ansi>
                            {this.snapshot.message}
                        </Ansi>
                    </div>
                </div>
                <div className={cx("level")}>
                  <button type="button" className={cx("button", "is-warning")} onClick={function overwriteSnapshot() {
                    if (!confirm("Do you really want to overwrite the current snapshot and update the test definition?")) {
                      return;
                    }
                    // TODO: change URL
                    // TODO: await result and change UI (permanently)
                    fetch(`http://localhost:5000/snapshotOverwrite?receivedPath=${encodeURIComponent(receivedPath)}&testFileName=${encodeURIComponent(testFileName)}`);
                  }}>
                    Update Snapshot
                  </button>
                </div>
                <ImageDiffViewer
                    received={receivedPath}
                    snapshot={snapshotPath}
                    diff={diffPath}
                    width={width}
                    height={height}
                />
            </article>
        );
    }
}
