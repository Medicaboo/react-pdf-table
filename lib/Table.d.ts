import * as React from "react";
import ReactPDF from "@react-pdf/renderer";
interface TableProps {
    data?: any[];
    style?: ReactPDF.Style;
}
export declare class Table extends React.PureComponent<TableProps> {
    render(): JSX.Element;
}
export {};
