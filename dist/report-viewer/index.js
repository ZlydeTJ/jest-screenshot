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
const ReactDOM = __importStar(require("react-dom"));
const bulma = __importStar(require("bulma"));
const bind_1 = __importDefault(require("classnames/bind"));
const tsdi_1 = require("tsdi");
const components_1 = require("./components");
const tsdi = new tsdi_1.TSDI();
tsdi.enableComponentScanner();
const cx = bind_1.default.bind(bulma);
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(components_1.Navigation, null),
    React.createElement("div", { className: cx("columns") },
        React.createElement(components_1.Sidebar, null),
        React.createElement(components_1.Main, null))), document.getElementById("root"));
//# sourceMappingURL=index.js.map