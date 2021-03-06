[@medicaboo/react-pdf-table](../README.md) / [Exports](../modules.md) / [TableRow](../modules/tablerow.md) / TableRow

# Class: TableRow

[TableRow](../modules/tablerow.md).TableRow

This component describes how to display a row.

## Hierarchy

* *PureComponent*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>

  ↳ **TableRow**

## Table of contents

### Constructors

- [constructor](tablerow.tablerow-1.md#constructor)

### Properties

- [context](tablerow.tablerow-1.md#context)
- [props](tablerow.tablerow-1.md#props)
- [refs](tablerow.tablerow-1.md#refs)
- [state](tablerow.tablerow-1.md#state)
- [contextType](tablerow.tablerow-1.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](tablerow.tablerow-1.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](tablerow.tablerow-1.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](tablerow.tablerow-1.md#unsafe_componentwillupdate)
- [componentDidCatch](tablerow.tablerow-1.md#componentdidcatch)
- [componentDidMount](tablerow.tablerow-1.md#componentdidmount)
- [componentDidUpdate](tablerow.tablerow-1.md#componentdidupdate)
- [componentWillMount](tablerow.tablerow-1.md#componentwillmount)
- [componentWillReceiveProps](tablerow.tablerow-1.md#componentwillreceiveprops)
- [componentWillUnmount](tablerow.tablerow-1.md#componentwillunmount)
- [componentWillUpdate](tablerow.tablerow-1.md#componentwillupdate)
- [forceUpdate](tablerow.tablerow-1.md#forceupdate)
- [getSnapshotBeforeUpdate](tablerow.tablerow-1.md#getsnapshotbeforeupdate)
- [render](tablerow.tablerow-1.md#render)
- [setState](tablerow.tablerow-1.md#setstate)
- [shouldComponentUpdate](tablerow.tablerow-1.md#shouldcomponentupdate)

## Constructors

### constructor

\+ **new TableRow**(`props`: *Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\> \| *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>): [*TableRow*](tablerow.tablerow-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`props` | *Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\> \| *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |

**Returns:** [*TableRow*](tablerow.tablerow-1.md)

Defined in: node_modules/@types/react/index.d.ts:473

\+ **new TableRow**(`props`: *Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>, `context`: *any*): [*TableRow*](tablerow.tablerow-1.md)

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
------ | ------ |
`props` | *Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\> |
`context` | *any* |

**Returns:** [*TableRow*](tablerow.tablerow-1.md)

Defined in: node_modules/@types/react/index.d.ts:475

## Properties

### context

• **context**: *any*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

Defined in: node_modules/@types/react/index.d.ts:473

___

### props

• `Readonly` **props**: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> & *Readonly*<{ `children?`: ReactNode  }\>

Defined in: node_modules/@types/react/index.d.ts:498

___

### refs

• **refs**: { [key: string]: ReactInstance;  }

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

Defined in: node_modules/@types/react/index.d.ts:504

___

### state

• **state**: *Readonly*<{}\>

Defined in: node_modules/@types/react/index.d.ts:499

___

### contextType

▪ `Optional` `Static` **contextType**: *Context*<*any*\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

Defined in: node_modules/@types/react/index.d.ts:455

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:711

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:743

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:771

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:640

___

### componentDidMount

▸ `Optional`**componentDidMount**(): *void*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:619

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `prevState`: *Readonly*<{}\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`prevState` | *Readonly*<{}\> |
`snapshot?` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:682

___

### componentWillMount

▸ `Optional`**componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:697

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:726

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): *void*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:635

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:756

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:490

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `prevState`: *Readonly*<{}\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`prevState` | *Readonly*<{}\> |

**Returns:** *any*

Defined in: node_modules/@types/react/index.d.ts:676

___

### render

▸ **render**(): *Element*

**Returns:** *Element*

Defined in: [src/TableRow.tsx:29](https://github.com/Medicaboo/react-pdf-table/blob/9b1c3ff/src/TableRow.tsx#L29)

___

### setState

▸ **setState**<K\>(`state`: {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\>, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *never* |

#### Parameters:

Name | Type |
------ | ------ |
`state` | {} \| (`prevState`: *Readonly*<{}\>, `props`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>) => {} \| *Pick*<{}, K\> \| *Pick*<{}, K\> |
`callback?` | () => *void* |

**Returns:** *void*

Defined in: node_modules/@types/react/index.d.ts:485

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\>, `nextState`: *Readonly*<{}\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | *Readonly*<*Partial*<[*TableBodyProps*](../interfaces/tablebody.tablebodyprops.md)\>\> |
`nextState` | *Readonly*<{}\> |
`nextContext` | *any* |

**Returns:** *boolean*

Defined in: node_modules/@types/react/index.d.ts:630
