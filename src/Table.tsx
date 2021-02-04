import * as React from "react";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import ReactPDF, {View} from "@react-pdf/renderer";

interface TableProps {
    data?: any[];
    style?: ReactPDF.Style,
}

export class Table extends React.PureComponent<TableProps> {
    render() {
        let tableHeader: JSX.Element = null;
        let tableBody: JSX.Element = null;

        React.Children.forEach(this.props.children, (c: any) => {
            if (c.type === TableHeader) {
                tableHeader = c;
            } else if (c.type === TableBody) {
                tableBody = React.cloneElement(c, {
                    data: c.props.data ?? this.props.data ?? []
                });
            }
        });

        return (
            <View
                style={{
                    width: "100%",
                    ...this.props.style,
                }}
            >
                {tableHeader}
                {tableBody}
            </View>
        );
    }
}
