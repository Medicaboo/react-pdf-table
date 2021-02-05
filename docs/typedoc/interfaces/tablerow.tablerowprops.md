[@medicaboo/react-pdf-table](../README.md) / [Exports](../modules.md) / [TableRow](../modules/tablerow.md) / TableRowProps

# Interface: TableRowProps

[TableRow](../modules/tablerow.md).TableRowProps

## Hierarchy

* [*TableBorder*](tablecell.tableborder.md)

  ↳ **TableRowProps**

  ↳↳ [*TableBodyProps*](tablebody.tablebodyprops.md)

  ↳↳ [*TableBodyProps*](index.tablebodyprops.md)

## Table of contents

### Properties

- [data](tablerow.tablerowprops.md#data)
- [fontSize](tablerow.tablerowprops.md#fontsize)
- [includeBottomBorder](tablerow.tablerowprops.md#includebottomborder)
- [includeLeftBorder](tablerow.tablerowprops.md#includeleftborder)
- [includeRightBorder](tablerow.tablerowprops.md#includerightborder)
- [includeTopBorder](tablerow.tablerowprops.md#includetopborder)
- [textAlign](tablerow.tablerowprops.md#textalign)

## Properties

### data

• `Optional` **data**: *any*

Any data associated, relevant if the parent is a {@see DataTableCell}.

Defined in: [src/TableRow.tsx:22](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableRow.tsx#L22)

___

### fontSize

• `Optional` **fontSize**: ReactText

The font size as a valid unit defined in react-pdf.

Defined in: [src/TableRow.tsx:12](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableRow.tsx#L12)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: *boolean*

Include the bottom border. Default true.

Inherited from: [TableBorder](tablecell.tableborder.md).[includeBottomBorder](tablecell.tableborder.md#includebottomborder)

Defined in: [src/TableCell.tsx:23](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L23)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: *boolean*

Include the left border. Default true.

Inherited from: [TableBorder](tablecell.tableborder.md).[includeLeftBorder](tablecell.tableborder.md#includeleftborder)

Defined in: [src/TableCell.tsx:28](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L28)

___

### includeRightBorder

• `Optional` **includeRightBorder**: *boolean*

Include the right border. Default true.

Inherited from: [TableBorder](tablecell.tableborder.md).[includeRightBorder](tablecell.tableborder.md#includerightborder)

Defined in: [src/TableCell.tsx:18](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L18)

___

### includeTopBorder

• `Optional` **includeTopBorder**: *boolean*

Include the top border. Default true.

Inherited from: [TableBorder](tablecell.tableborder.md).[includeTopBorder](tablecell.tableborder.md#includetopborder)

Defined in: [src/TableCell.tsx:13](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L13)

___

### textAlign

• `Optional` **textAlign**: *left* \| *center* \| *right*

Whether to align the text. Defaults to left.

Defined in: [src/TableRow.tsx:17](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableRow.tsx#L17)
