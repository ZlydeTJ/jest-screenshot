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
const cx = bind_1.default.bind(bulma);
function LevelItem({ name, value }) {
    return (React.createElement("div", { className: cx("level-item", "has-text-centered") },
        React.createElement("div", null,
            React.createElement("p", { className: cx("heading") }, name),
            React.createElement("p", { className: cx("title") }, value))));
}
exports.LevelItem = LevelItem;
//# sourceMappingURL=level-item.js.map