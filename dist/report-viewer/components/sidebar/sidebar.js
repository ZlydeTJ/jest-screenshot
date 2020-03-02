"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const css = __importStar(require("./sidebar.scss"));
const mobx_react_1 = require("mobx-react");
const tsdi_1 = require("tsdi");
const file_list_1 = require("../file-list");
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
let Sidebar = class Sidebar extends React.Component {
    render() {
        if (!this.ui.menuVisible) {
            return null;
        }
        const classes = cx("column", "is-3", "section", "is-fullheight", "menu");
        return (React.createElement("aside", { className: classes },
            React.createElement("p", { className: cx("menu-label") }),
            React.createElement(file_list_1.FileList, null)));
    }
};
__decorate([
    tsdi_1.inject
], Sidebar.prototype, "ui", void 0);
Sidebar = __decorate([
    tsdi_1.external, mobx_react_1.observer
], Sidebar);
exports.Sidebar = Sidebar;
//# sourceMappingURL=sidebar.js.map