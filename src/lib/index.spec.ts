import test, { ExecutionContext } from 'ava';

import Queue from './';

test('Queue', async (t: ExecutionContext<any>): Promise<void> => {
  const queue: Queue = new Queue({ concurrency: 1 });

  const count: number = 3;

  for (let i: number = 0; i < count; i++) {
    queue.add(
      (): any =>
        new Promise((resolve: any): number =>
          setTimeout((): void => resolve(), (i + 1) * 1000)
        )
    );
  }

  t.is(queue.size, count - 1);

  await queue.onEmpty();

  t.is(queue.size, 0);
  t.is(queue.concurrency, 1);
  t.is(queue.isPaused, false);
});
