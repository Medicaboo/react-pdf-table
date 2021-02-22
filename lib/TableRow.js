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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
var React = require("react");
var renderer_1 = require("@react-pdf/renderer");
var Utils_1 = require("./Utils");
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRow.prototype.render = function () {
        var _this = this;
        var rowCells = React.Children.toArray(this.props.children);
        var _a = Utils_1.getDefaultBorderIncludes(this.props), includeLeftBorder = _a.includeLeftBorder, includeBottomBorder = _a.includeBottomBorder, includeRightBorder = _a.includeRightBorder, includeTopBorder = _a.includeTopBorder;
        var remainingWeighting = 1;
        var numberOfWeightingsDefined = 0;
        rowCells.forEach(function (i) {
            if (i.props.weighting !== undefined) {
                remainingWeighting -= i.props.weighting;
                numberOfWeightingsDefined++;
            }
        });
        var weightingsPerNotSpecified = Math.ceil(remainingWeighting / (rowCells.length - numberOfWeightingsDefined));
        return (React.createElement(renderer_1.View, { style: {
                borderBottom: includeBottomBorder && "1pt solid black",
                borderRight: includeRightBorder && "1pt solid black",
                borderLeft: includeLeftBorder && "1pt solid black",
                borderTop: includeTopBorder && "1pt solid black",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "stretch"
            } }, rowCells.map(function (rc, columnIndex) {
            var _a;
            return React.cloneElement(rc, {
                weighting: (_a = rc.props.weighting) !== null && _a !== void 0 ? _a : weightingsPerNotSpecified,
                data: _this.props.data,
                columnIndex: columnIndex,
                key: columnIndex,
                fontSize: _this.props.fontSize,
                textAlign: _this.props.textAlign,
                includeLeftBorder: columnIndex === 0,
                includeRightBorder: columnIndex !== (rowCells.length - 1),
            });
        })));
    };
    return TableRow;
}(React.PureComponent));
exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.js.map