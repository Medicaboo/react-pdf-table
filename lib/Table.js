"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var React = require("react");
var TableHeader_1 = require("./TableHeader");
var TableBody_1 = require("./TableBody");
var renderer_1 = require("@react-pdf/renderer");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var tableHeader = null;
        var tableBody = null;
        React.Children.forEach(this.props.children, function (c) {
            var _a, _b;
            if (c.type === TableHeader_1.TableHeader) {
                tableHeader = c;
            }
            else if (c.type === TableBody_1.TableBody) {
                tableBody = React.cloneElement(c, {
                    data: (_b = (_a = c.props.data) !== null && _a !== void 0 ? _a : _this.props.data) !== null && _b !== void 0 ? _b : []
                });
            }
        });
        return (React.createElement(renderer_1.View, { style: __assign({ width: "100%" }, this.props.style) },
            tableHeader,
            tableBody));
    };
    return Table;
}(React.PureComponent));
exports.Table = Table;
//# sourceMappingURL=Table.js.map