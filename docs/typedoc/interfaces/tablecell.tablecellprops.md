[@medicaboo/react-pdf-table](../README.md) / [Exports](../modules.md) / [TableCell](../modules/tablecell.md) / TableCellProps

# Interface: TableCellProps

[TableCell](../modules/tablecell.md).TableCellProps

## Hierarchy

* [*TableBorder*](tablecell.tableborder.md)

  ↳ **TableCellProps**

## Table of contents

### Properties

- [fontSize](tablecell.tablecellprops.md#fontsize)
- [includeBottomBorder](tablecell.tablecellprops.md#includebottomborder)
- [includeLeftBorder](tablecell.tablecellprops.md#includeleftborder)
- [includeRightBorder](tablecell.tablecellprops.md#includerightborder)
- [includeTopBorder](tablecell.tablecellprops.md#includetopborder)
- [isHeader](tablecell.tablecellprops.md#isheader)
- [style](tablecell.tablecellprops.md#style)
- [textAlign](tablecell.tablecellprops.md#textalign)
- [weighting](tablecell.tablecellprops.md#weighting)

## Properties

### fontSize

• `Optional` **fontSize**: ReactText

The font-size to apply to the cell.

Defined in: [src/TableCell.tsx:56](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L56)

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

### isHeader

• `Optional` **isHeader**: *boolean*

Whether this is a header cell or not. If not defined it will be false.

Defined in: [src/TableCell.tsx:51](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L51)

___

### style

• `Optional` **style**: Style \| Style[]

Extra styling to apply. These will override existing style with the same key.

Defined in: [src/TableCell.tsx:41](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L41)

___

### textAlign

• `Optional` **textAlign**: *left* \| *center* \| *right*

How to align the text

Defined in: [src/TableCell.tsx:46](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L46)

___

### weighting

• `Optional` **weighting**: *number*

The weighting of a cell based on the flex layout style.
This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.

Defined in: [src/TableCell.tsx:36](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/TableCell.tsx#L36)
