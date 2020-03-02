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
const mobx_react_1 = require("mobx-react");
const tsdi_1 = require("tsdi");
const mobx_1 = require("mobx");
const css = __importStar(require("./navigation.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
let Navigation = class Navigation extends React.Component {
    handleHamburgerClick() {
        this.ui.toggleMenu();
    }
    render() {
        return (React.createElement("nav", { className: cx("navbar", "is-dark") },
            React.createElement("div", { className: cx("navbar-brand", "brand") }, "Jest Screenshot Report"),
            React.createElement("div", { className: cx("navbar-menu", "is-active") },
                React.createElement("div", { className: cx("navbar-end") },
                    React.createElement("a", { className: cx("navbar-item"), onClick: this.handleHamburgerClick }, this.ui.menuVisible ? "Hide Sidebar" : "Show Sidebar")))));
    }
};
__decorate([
    tsdi_1.inject
], Navigation.prototype, "ui", void 0);
__decorate([
    mobx_1.action.bound
], Navigation.prototype, "handleHamburgerClick", null);
Navigation = __decorate([
    tsdi_1.external, mobx_react_1.observer
], Navigation);
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map