[@medicaboo/react-pdf-table](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [DataTableCell](../classes/index.datatablecell.md)
- [Table](../classes/index.table.md)
- [TableBody](../classes/index.tablebody.md)
- [TableCell](../classes/index.tablecell.md)
- [TableHeader](../classes/index.tableheader.md)

### Interfaces

- [TableBodyProps](../interfaces/index.tablebodyprops.md)
- [TableBorder](../interfaces/index.tableborder.md)
- [TableCellProps](../interfaces/index.tablecellprops.md)

### Functions

- [getDefaultBorderIncludes](index.md#getdefaultborderincludes)
- [transformToArray](index.md#transformtoarray)

## Functions

### getDefaultBorderIncludes

▸ **getDefaultBorderIncludes**(`border`: [*TableBorder*](../interfaces/tablecell.tableborder.md)): [*TableBorder*](../interfaces/tablecell.tableborder.md)

Return whether particular borders need to be included.
If the value is undefined then return true for that border.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`border` | [*TableBorder*](../interfaces/tablecell.tableborder.md) | the border item to parse.    |

**Returns:** [*TableBorder*](../interfaces/tablecell.tableborder.md)

Defined in: [src/Utils.ts:9](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/Utils.ts#L9)

___

### transformToArray

▸ **transformToArray**<T\>(`items?`: T \| T[]): T[]

Transform a single item to an array (with one element).
Or return the array.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`items?` | T \| T[] | the item or items to transform to an array.   |

**Returns:** T[]

an array of items or an empty array.

Defined in: [src/Utils.ts:25](https://github.com/Medicaboo/react-pdf-table/blob/146ee4e/src/Utils.ts#L25)
