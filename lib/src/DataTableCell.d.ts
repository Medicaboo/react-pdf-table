import * as React from "react";
import { TableCellProps } from "./TableCell";
interface DataTableCellProps extends TableCellProps {
    data?: any;
    getContent: (data: any, columnIndex?: number) => React.ReactNode | JSX.Element | string | number;
    columnIndex?: number;
}
export declare class DataTableCell extends React.PureComponent<DataTableCellProps> {
    render(): JSX.Element;
}
export {};
