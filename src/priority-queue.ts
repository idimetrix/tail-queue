import {
  PriorityQueueOptions,
  PriorityQueueRunOptions,
  Queue,
  RunFunction,
} from './types';
import { lowerBound } from './utils';

export default class PriorityQueue
  implements Queue<RunFunction, PriorityQueueOptions> {
  private readonly _queue: Array<PriorityQueueRunOptions> = [];

  public enqueue(
    run: RunFunction,
    options?: Partial<PriorityQueueOptions>
  ): void {
    options = {
      priority: 0,
      ...(options || {}),
    };

    const element: PriorityQueueRunOptions = {
      priority: options.priority,
      run,
    };

    if (
      this.size &&
      this._queue[this.size - 1].priority! >= options.priority!
    ) {
      this._queue.push(element);
      return;
    }

    const index: number = lowerBound(
      this._queue,
      element,
      (a: Readonly<PriorityQueueOptions>, b: Readonly<PriorityQueueOptions>) =>
        b.priority! - a.priority!
    );

    this._queue.splice(index, 0, element);
  }

  public dequeue(): RunFunction | undefined {
    return this._queue.shift()?.run;
  }

  public filter(
    options: Readonly<Partial<PriorityQueueOptions>>
  ): RunFunction[] {
    return this._queue
      .filter(
        (element: Readonly<PriorityQueueOptions>) =>
          element.priority === options.priority
      )
      .map(({ run }: PriorityQueueRunOptions): RunFunction => run);
  }

  public get size(): number {
    return this._queue.length;
  }
}
