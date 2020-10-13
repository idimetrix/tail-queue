export interface Queue<Element, Options> {
  size: number;
  filter: (options: Partial<Options>) => Element[];
  dequeue: () => Element | undefined;
  enqueue: (run: Element, options?: Partial<Options>) => void;
}

export type RunFunction = () => Promise<unknown>;
export type ResolveFunction<T = void> = (value?: T | PromiseLike<T>) => void;
export type Task<TaskResultType> =
  | (() => PromiseLike<TaskResultType>)
  | (() => TaskResultType);

export interface QueueAddOptions {
  readonly [key: string]: unknown;
}

export interface PriorityQueueOptions extends QueueAddOptions {
  priority?: number;
}

export interface PriorityQueueRunOptions extends PriorityQueueOptions {
  run: RunFunction;
}
