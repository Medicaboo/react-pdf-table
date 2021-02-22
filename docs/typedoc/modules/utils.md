[@medicaboo/react-pdf-table](../README.md) / [Exports](../modules.md) / Utils

# Module: Utils

## Table of contents

### Functions

- [getDefaultBorderIncludes](utils.md#getdefaultborderincludes)
- [transformToArray](utils.md#transformtoarray)

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

Defined in: [src/Utils.ts:9](https://github.com/Medicaboo/react-pdf-table/blob/6c04208/src/Utils.ts#L9)

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

Defined in: [src/Utils.ts:25](https://github.com/Medicaboo/react-pdf-table/blob/6c04208/src/Utils.ts#L25)
