<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [tail-queue](#tail-queue)
  - [Installation](#installation)
  - [Demo](#demo)
  - [Documentation](#documentation)
- [Classes](#classes)
  - [Class: default\<QueueType, EnqueueOptionsType>](#class-default%5Cqueuetype-enqueueoptionstype)
    - [Type parameters](#type-parameters)
    - [Hierarchy](#hierarchy)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Accessors](#accessors)
    - [Methods](#methods)
  - [Class: PriorityQueue](#class-priorityqueue)
    - [Hierarchy](#hierarchy-1)
    - [Implements](#implements)
    - [Index](#index-1)
    - [Accessors](#accessors-1)
    - [Methods](#methods-1)
- [tail-queue](#tail-queue)
  - [Index](#index-2)
    - [Classes](#classes-1)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Type aliases](#type-aliases-1)
    - [ResolveFunction](#resolvefunction)
    - [RunFunction](#runfunction)
    - [Task](#task)
  - [Functions](#functions-1)
    - [PromiseFinally](#promisefinally)
    - [PromiseTimeout](#promisetimeout)
    - [empty](#empty)
    - [lowerBound](#lowerbound)
- [Interfaces](#interfaces-1)
  - [Interface: DefaultAddOptions](#interface-defaultaddoptions)
    - [Hierarchy](#hierarchy-2)
    - [Indexable](#indexable)
    - [Index](#index-3)
    - [Properties](#properties-1)
  - [Interface: Options\<QueueType, QueueOptions>](#interface-options%5Cqueuetype-queueoptions)
    - [Type parameters](#type-parameters-1)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-4)
    - [Properties](#properties-2)
  - [Interface: PriorityQueueOptions](#interface-priorityqueueoptions)
    - [Hierarchy](#hierarchy-4)
    - [Indexable](#indexable-1)
    - [Index](#index-5)
    - [Properties](#properties-3)
  - [Interface: PriorityQueueRunOptions](#interface-priorityqueuerunoptions)
    - [Hierarchy](#hierarchy-5)
    - [Indexable](#indexable-2)
    - [Index](#index-6)
    - [Properties](#properties-4)
  - [Interface: Queue\<Element, Options>](#interface-queue%5Celement-options)
    - [Type parameters](#type-parameters-2)
    - [Hierarchy](#hierarchy-6)
    - [Implemented by](#implemented-by)
    - [Index](#index-7)
    - [Properties](#properties-5)
  - [Interface: QueueAddOptions](#interface-queueaddoptions)
    - [Hierarchy](#hierarchy-7)
    - [Indexable](#indexable-3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd)

## tail-queue

#### TypeScript/JavaScript promise queue client library with concurrency control

## Installation

Install with [npm](https://www.npmjs.com):

```sh
$ npm install --save tail-queue
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add tail-queue
```

## [Demo](https://www.npmjs.com/package/tail-queue)

#### [Try online demo](https://www.npmjs.com/package/tail-queue)

## [Documentation](https://www.npmjs.com/package/tail-queue)

#### [Try online documentation](https://www.npmjs.com/package/tail-queue)

# Classes


<a name="classesdefaultmd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / default

## Class: default\<QueueType, EnqueueOptionsType>

Promise queue with concurrency control.

### Type parameters

Name | Type | Default |
------ | ------ | ------ |
`QueueType` | [Queue](#interfacesqueuemd)\<[RunFunction](#runfunction), EnqueueOptionsType> | PriorityQueue |
`EnqueueOptionsType` | [QueueAddOptions](#interfacesqueueaddoptionsmd) | DefaultAddOptions |

### Hierarchy

* EventEmitter

  ↳ **default**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [defaultMaxListeners](#defaultmaxlisteners)

#### Accessors

* [concurrency](#concurrency)
* [isPaused](#ispaused)
* [pending](#pending)
* [size](#size)
* [timeout](#timeout)

#### Methods

* [add](#add)
* [addAll](#addall)
* [addListener](#addlistener)
* [clear](#clear)
* [emit](#emit)
* [eventNames](#eventnames)
* [getMaxListeners](#getmaxlisteners)
* [listenerCount](#listenercount)
* [listeners](#listeners)
* [off](#off)
* [on](#on)
* [onEmpty](#onempty)
* [onIdle](#onidle)
* [once](#once)
* [pause](#pause)
* [prependListener](#prependlistener)
* [prependOnceListener](#prependoncelistener)
* [rawListeners](#rawlisteners)
* [removeAllListeners](#removealllisteners)
* [removeListener](#removelistener)
* [setMaxListeners](#setmaxlisteners)
* [sizeBy](#sizeby)
* [start](#start)
* [listenerCount](#listenercount)

### Constructors

#### constructor

\+ **new default**(`options?`: Options\<QueueType, EnqueueOptionsType>): [default](#classesdefaultmd)

*Defined in [src/lib/index.ts:37](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L37)*

##### Parameters:

Name | Type |
------ | ------ |
`options?` | Options\<QueueType, EnqueueOptionsType> |

**Returns:** [default](#classesdefaultmd)

### Properties

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [default](#classesdefaultmd).[defaultMaxListeners](#defaultmaxlisteners)*

*Defined in node_modules/@types/events/index.d.ts:11*

### Accessors

#### concurrency

• get **concurrency**(): number

*Defined in [src/lib/index.ts:215](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L215)*

**Returns:** number

• set **concurrency**(`newConcurrency`: number): void

*Defined in [src/lib/index.ts:219](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L219)*

##### Parameters:

Name | Type |
------ | ------ |
`newConcurrency` | number |

**Returns:** void

___

#### isPaused

• get **isPaused**(): boolean

*Defined in [src/lib/index.ts:395](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L395)*

Whether the queue is currently paused.

**Returns:** boolean

___

#### pending

• get **pending**(): number

*Defined in [src/lib/index.ts:388](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L388)*

Number of pending promises.

**Returns:** number

___

#### size

• get **size**(): number

*Defined in [src/lib/index.ts:372](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L372)*

Size of the queue.

**Returns:** number

___

#### timeout

• get **timeout**(): number \| undefined

*Defined in [src/lib/index.ts:399](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L399)*

Set the timeout for future operations.

**Returns:** number \| undefined

• set **timeout**(`milliseconds`: number \| undefined): void

*Defined in [src/lib/index.ts:406](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L406)*

Set the timeout for future operations.

##### Parameters:

Name | Type |
------ | ------ |
`milliseconds` | number \| undefined |

**Returns:** void

### Methods

#### add

▸ **add**\<TaskResultType>(`fn`: [Task](#task)\<TaskResultType>, `options`: Partial\<EnqueueOptionsType>): Promise\<TaskResultType>

*Defined in [src/lib/index.ts:234](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L234)*

Adds a sync or async task to the queue. Always returns a promise.

##### Type parameters:

Name |
------ |
`TaskResultType` |

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fn` | [Task](#task)\<TaskResultType> | - |
`options` | Partial\<EnqueueOptionsType> | {} |

**Returns:** Promise\<TaskResultType>

___

#### addAll

▸ **addAll**\<TaskResultsType>(`functions`: ReadonlyArray\<[Task](#task)\<TaskResultsType>>, `options?`: EnqueueOptionsType): Promise\<TaskResultsType[]>

*Defined in [src/lib/index.ts:285](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L285)*

Same as `.add()`, but accepts an array of sync or async functions.

##### Type parameters:

Name |
------ |
`TaskResultsType` |

##### Parameters:

Name | Type |
------ | ------ |
`functions` | ReadonlyArray\<[Task](#task)\<TaskResultsType>> |
`options?` | EnqueueOptionsType |

**Returns:** Promise\<TaskResultsType[]>

A promise that resolves when all functions are resolved.

___

#### addListener

▸ **addListener**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[addListener](#addlistener)*

*Defined in node_modules/@types/events/index.d.ts:17*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### clear

▸ **clear**(): void

*Defined in [src/lib/index.ts:323](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L323)*

Clear the queue.

**Returns:** void

___

#### emit

▸ **emit**(`type`: string \| number, ...`args`: any[]): boolean

*Inherited from [default](#classesdefaultmd).[emit](#emit)*

*Defined in node_modules/@types/events/index.d.ts:16*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`...args` | any[] |

**Returns:** boolean

___

#### eventNames

▸ **eventNames**(): Array\<string \| number>

*Inherited from [default](#classesdefaultmd).[eventNames](#eventnames)*

*Defined in node_modules/@types/events/index.d.ts:13*

**Returns:** Array\<string \| number>

___

#### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [default](#classesdefaultmd).[getMaxListeners](#getmaxlisteners)*

*Defined in node_modules/@types/events/index.d.ts:15*

**Returns:** number

___

#### listenerCount

▸ **listenerCount**(`type`: string \| number): number

*Inherited from [default](#classesdefaultmd).[listenerCount](#listenercount)*

*Defined in node_modules/@types/events/index.d.ts:26*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |

**Returns:** number

___

#### listeners

▸ **listeners**(`type`: string \| number): Listener[]

*Inherited from [default](#classesdefaultmd).[listeners](#listeners)*

*Defined in node_modules/@types/events/index.d.ts:25*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |

**Returns:** Listener[]

___

#### off

▸ **off**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[off](#off)*

*Defined in node_modules/@types/events/index.d.ts:23*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### on

▸ **on**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[on](#on)*

*Defined in node_modules/@types/events/index.d.ts:18*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### onEmpty

▸ **onEmpty**(): Promise\<void>

*Defined in [src/lib/index.ts:332](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L332)*

Can be called multiple times. Useful if you for example add additional items at a later time.

**Returns:** Promise\<void>

A promise that settles when the queue becomes empty.

___

#### onIdle

▸ **onIdle**(): Promise\<void>

*Defined in [src/lib/index.ts:353](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L353)*

The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

**Returns:** Promise\<void>

A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.

___

#### once

▸ **once**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[once](#once)*

*Defined in node_modules/@types/events/index.d.ts:19*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### pause

▸ **pause**(): void

*Defined in [src/lib/index.ts:316](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L316)*

Put queue execution on hold.

**Returns:** void

___

#### prependListener

▸ **prependListener**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[prependListener](#prependlistener)*

*Defined in node_modules/@types/events/index.d.ts:20*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### prependOnceListener

▸ **prependOnceListener**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[prependOnceListener](#prependoncelistener)*

*Defined in node_modules/@types/events/index.d.ts:21*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### rawListeners

▸ **rawListeners**(`type`: string \| number): Listener[]

*Inherited from [default](#classesdefaultmd).[rawListeners](#rawlisteners)*

*Defined in node_modules/@types/events/index.d.ts:27*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |

**Returns:** Listener[]

___

#### removeAllListeners

▸ **removeAllListeners**(`type?`: string \| number): this

*Inherited from [default](#classesdefaultmd).[removeAllListeners](#removealllisteners)*

*Defined in node_modules/@types/events/index.d.ts:24*

##### Parameters:

Name | Type |
------ | ------ |
`type?` | string \| number |

**Returns:** this

___

#### removeListener

▸ **removeListener**(`type`: string \| number, `listener`: Listener): this

*Inherited from [default](#classesdefaultmd).[removeListener](#removelistener)*

*Defined in node_modules/@types/events/index.d.ts:22*

##### Parameters:

Name | Type |
------ | ------ |
`type` | string \| number |
`listener` | Listener |

**Returns:** this

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [default](#classesdefaultmd).[setMaxListeners](#setmaxlisteners)*

*Defined in node_modules/@types/events/index.d.ts:14*

##### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

#### sizeBy

▸ **sizeBy**(`options`: Readonly\<Partial\<EnqueueOptionsType>>): number

*Defined in [src/lib/index.ts:381](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L381)*

Size of the queue, filtered by the given options.

For example, this can be used to find the number of items remaining in the queue with a specific priority level.

##### Parameters:

Name | Type |
------ | ------ |
`options` | Readonly\<Partial\<EnqueueOptionsType>> |

**Returns:** number

___

#### start

▸ **start**(): this

*Defined in [src/lib/index.ts:301](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/index.ts#L301)*

Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)

**Returns:** this

___

#### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `type`: string \| number): number

*Inherited from [default](#classesdefaultmd).[listenerCount](#listenercount)*

*Defined in node_modules/@types/events/index.d.ts:10*

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`type` | string \| number |

**Returns:** number


<a name="classespriorityqueuemd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / PriorityQueue

## Class: PriorityQueue

### Hierarchy

* **PriorityQueue**

### Implements

* [Queue](#interfacesqueuemd)\<[RunFunction](#runfunction), [PriorityQueueOptions](#interfacespriorityqueueoptionsmd)>

### Index

#### Accessors

* [size](#size)

#### Methods

* [dequeue](#dequeue)
* [enqueue](#enqueue)
* [filter](#filter)

### Accessors

#### size

• get **size**(): number

*Defined in [src/lib/priority-queue.ts:60](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/priority-queue.ts#L60)*

**Returns:** number

### Methods

#### dequeue

▸ **dequeue**(): [RunFunction](#runfunction) \| undefined

*Defined in [src/lib/priority-queue.ts:45](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/priority-queue.ts#L45)*

**Returns:** [RunFunction](#runfunction) \| undefined

___

#### enqueue

▸ **enqueue**(`run`: [RunFunction](#runfunction), `options?`: Partial\<[PriorityQueueOptions](#interfacespriorityqueueoptionsmd)>): void

*Defined in [src/lib/priority-queue.ts:13](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/priority-queue.ts#L13)*

##### Parameters:

Name | Type |
------ | ------ |
`run` | [RunFunction](#runfunction) |
`options?` | Partial\<[PriorityQueueOptions](#interfacespriorityqueueoptionsmd)> |

**Returns:** void

___

#### filter

▸ **filter**(`options`: Readonly\<Partial\<[PriorityQueueOptions](#interfacespriorityqueueoptionsmd)>>): [RunFunction](#runfunction)[]

*Defined in [src/lib/priority-queue.ts:49](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/priority-queue.ts#L49)*

##### Parameters:

Name | Type |
------ | ------ |
`options` | Readonly\<Partial\<[PriorityQueueOptions](#interfacespriorityqueueoptionsmd)>> |

**Returns:** [RunFunction](#runfunction)[]


<a name="globalsmd"></a>

**[tail-queue](#readmemd)**

> Globals

# tail-queue

## Index

### Classes

* [PriorityQueue](#classespriorityqueuemd)
* [default](#classesdefaultmd)

### Interfaces

* [DefaultAddOptions](#interfacesdefaultaddoptionsmd)
* [Options](#interfacesoptionsmd)
* [PriorityQueueOptions](#interfacespriorityqueueoptionsmd)
* [PriorityQueueRunOptions](#interfacespriorityqueuerunoptionsmd)
* [Queue](#interfacesqueuemd)
* [QueueAddOptions](#interfacesqueueaddoptionsmd)

### Type aliases

* [ResolveFunction](#resolvefunction)
* [RunFunction](#runfunction)
* [Task](#task)

### Functions

* [PromiseFinally](#promisefinally)
* [PromiseTimeout](#promisetimeout)
* [empty](#empty)
* [lowerBound](#lowerbound)

## Type aliases

### ResolveFunction

Ƭ  **ResolveFunction**\<T>: (value?: T \| PromiseLike\<T>) => void

*Defined in [src/lib/types.ts:9](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L9)*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | void |

___

### RunFunction

Ƭ  **RunFunction**: () => Promise\<unknown>

*Defined in [src/lib/types.ts:8](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L8)*

___

### Task

Ƭ  **Task**\<TaskResultType>: () => PromiseLike\<TaskResultType> \| () => TaskResultType

*Defined in [src/lib/types.ts:10](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L10)*

#### Type parameters:

Name |
------ |
`TaskResultType` |

## Functions

### PromiseFinally

▸ **PromiseFinally**\<T>(`promise`: T, `fallback`: any): Promise\<T>

*Defined in [src/lib/utils.ts:1](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/utils.ts#L1)*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

#### Parameters:

Name | Type |
------ | ------ |
`promise` | T |
`fallback` | any |

**Returns:** Promise\<T>

___

### PromiseTimeout

▸ **PromiseTimeout**(`promise`: any, `milliseconds`: number, `fallback`: any): Promise\<any>

*Defined in [src/lib/utils.ts:18](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/utils.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`promise` | any |
`milliseconds` | number |
`fallback` | any |

**Returns:** Promise\<any>

___

### empty

▸ `Const`**empty**(): void

*Defined in [src/lib/utils.ts:83](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/utils.ts#L83)*

**Returns:** void

___

### lowerBound

▸ **lowerBound**\<T>(`array`: readonly T[], `value`: T, `comparator`: (a: T,b: T) => number): number

*Defined in [src/lib/utils.ts:60](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/utils.ts#L60)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`array` | readonly T[] |
`value` | T |
`comparator` | (a: T,b: T) => number |

**Returns:** number

# Interfaces


<a name="interfacesdefaultaddoptionsmd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / DefaultAddOptions

## Interface: DefaultAddOptions

### Hierarchy

* [QueueAddOptions](#interfacesqueueaddoptionsmd)

  ↳ **DefaultAddOptions**

### Indexable

▪ [key: string]: unknown

### Index

#### Properties

* [priority](#priority)

### Properties

#### priority

• `Optional` `Readonly` **priority**: undefined \| number

*Defined in [src/lib/options.ts:72](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L72)*

Priority of operation. Operations with greater priority will be scheduled first.

**`default`** 0


<a name="interfacesoptionsmd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / Options

## Interface: Options\<QueueType, QueueOptions>

### Type parameters

Name | Type |
------ | ------ |
`QueueType` | [Queue](#interfacesqueuemd)\<[RunFunction](#runfunction), QueueOptions> |
`QueueOptions` | [QueueAddOptions](#interfacesqueueaddoptionsmd) |

### Hierarchy

* **Options**

### Index

#### Properties

* [autoStart](#autostart)
* [carryoverConcurrencyCount](#carryoverconcurrencycount)
* [concurrency](#concurrency)
* [interval](#interval)
* [intervalCap](#intervalcap)
* [queueClass](#queueclass)
* [throwOnTimeout](#throwontimeout)
* [timeout](#timeout)

### Properties

#### autoStart

• `Optional` `Readonly` **autoStart**: undefined \| false \| true

*Defined in [src/lib/options.ts:21](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L21)*

Whether queue tasks within concurrency limit, are auto-executed as soon as they're added.

**`default`** true

___

#### carryoverConcurrencyCount

• `Optional` `Readonly` **carryoverConcurrencyCount**: undefined \| false \| true

*Defined in [src/lib/options.ts:51](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L51)*

Whether the task must finish in the given interval or will be carried over into the next interval count.

**`default`** false

___

#### concurrency

• `Optional` `Readonly` **concurrency**: undefined \| number

*Defined in [src/lib/options.ts:14](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L14)*

Concurrency limit.

Minimum: `1`.

**`default`** Infinity

___

#### interval

• `Optional` `Readonly` **interval**: undefined \| number

*Defined in [src/lib/options.ts:44](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L44)*

The length of time in milliseconds before the interval count resets. Must be finite.

Minimum: `0`.

**`default`** 0

___

#### intervalCap

• `Optional` `Readonly` **intervalCap**: undefined \| number

*Defined in [src/lib/options.ts:35](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L35)*

The max number of runs in the given interval of time.

Minimum: `1`.

**`default`** Infinity

___

#### queueClass

• `Optional` `Readonly` **queueClass**: undefined \| {}

*Defined in [src/lib/options.ts:26](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L26)*

Class with a `enqueue` and `dequeue` method, and a `size` getter. See the [Custom QueueClass](https://github.com/sindresorhus/p-queue#custom-queueclass) section.

___

#### throwOnTimeout

• `Optional` **throwOnTimeout**: undefined \| false \| true

*Defined in [src/lib/options.ts:63](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L63)*

Whether or not a timeout is considered an exception.

**`default`** false

___

#### timeout

• `Optional` **timeout**: undefined \| number

*Defined in [src/lib/options.ts:56](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/options.ts#L56)*

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.


<a name="interfacespriorityqueueoptionsmd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / PriorityQueueOptions

## Interface: PriorityQueueOptions

### Hierarchy

* [QueueAddOptions](#interfacesqueueaddoptionsmd)

  ↳ **PriorityQueueOptions**

  ↳↳ [PriorityQueueRunOptions](#interfacespriorityqueuerunoptionsmd)

### Indexable

▪ [key: string]: unknown

### Index

#### Properties

* [priority](#priority)

### Properties

#### priority

• `Optional` **priority**: undefined \| number

*Defined in [src/lib/types.ts:19](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L19)*


<a name="interfacespriorityqueuerunoptionsmd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / PriorityQueueRunOptions

## Interface: PriorityQueueRunOptions

### Hierarchy

* [PriorityQueueOptions](#interfacespriorityqueueoptionsmd)

  ↳ **PriorityQueueRunOptions**

### Indexable

▪ [key: string]: unknown

### Index

#### Properties

* [priority](#priority)
* [run](#run)

### Properties

#### priority

• `Optional` **priority**: undefined \| number

*Inherited from [PriorityQueueOptions](#interfacespriorityqueueoptionsmd).[priority](#priority)*

*Defined in [src/lib/types.ts:19](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L19)*

___

#### run

•  **run**: [RunFunction](#runfunction)

*Defined in [src/lib/types.ts:23](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L23)*


<a name="interfacesqueuemd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / Queue

## Interface: Queue\<Element, Options>

### Type parameters

Name |
------ |
`Element` |
`Options` |

### Hierarchy

* **Queue**

### Implemented by

* [PriorityQueue](#classespriorityqueuemd)

### Index

#### Properties

* [dequeue](#dequeue)
* [enqueue](#enqueue)
* [filter](#filter)
* [size](#size)

### Properties

#### dequeue

•  **dequeue**: () => Element \| undefined

*Defined in [src/lib/types.ts:4](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L4)*

___

#### enqueue

•  **enqueue**: (run: Element,options?: Partial\<Options>) => void

*Defined in [src/lib/types.ts:5](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L5)*

___

#### filter

•  **filter**: (options: Partial\<Options>) => Element[]

*Defined in [src/lib/types.ts:3](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L3)*

___

#### size

•  **size**: number

*Defined in [src/lib/types.ts:2](https://github.com/idimetrix/tail-queue/blob/55e37e6/src/lib/types.ts#L2)*


<a name="interfacesqueueaddoptionsmd"></a>

**[tail-queue](#readmemd)**

> [Globals](#globalsmd) / QueueAddOptions

## Interface: QueueAddOptions

### Hierarchy

* **QueueAddOptions**

  ↳ [PriorityQueueOptions](#interfacespriorityqueueoptionsmd)

  ↳ [DefaultAddOptions](#interfacesdefaultaddoptionsmd)

### Indexable

▪ [key: string]: unknown
