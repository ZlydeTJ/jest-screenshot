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
const bind_1 = __importDefault(require("classnames/bind"));
const file_list_entry_1 = require("./file-list-entry");
const cx = bind_1.default.bind(bulma);
class FileList extends React.Component {
    render() {
        return (React.createElement("ul", { className: cx("menu-list") }, testResults.files.map(file => React.createElement(file_list_entry_1.FileListEntry, { key: file.testFilePath, file: file }))));
    }
}
exports.FileList = FileList;
//# sourceMappingURL=file-list.js.map