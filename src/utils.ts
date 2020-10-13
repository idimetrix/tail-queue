export async function PromiseFinally<T = any>(
  promise: T,
  fallback: any
): Promise<T> {
  let value: any;
  try {
    value = await promise;
  } catch (error) {
    await fallback();
    throw error;
  }

  await fallback();

  return value;
}

export async function PromiseTimeout(
  promise: any,
  milliseconds: number,
  fallback: any
): Promise<any> {
  return new Promise((resolve: any, reject: any): void => {
    if (milliseconds < 0) {
      throw new TypeError('Expected `milliseconds` to be a positive number');
    }

    if (milliseconds === Infinity) {
      resolve(promise);
      return;
    }

    const timer: number = setTimeout(() => {
      if (typeof fallback === 'function') {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }

        return;
      }

      promise?.cancel?.();

      const message: string =
        typeof fallback === 'string'
          ? fallback
          : `Promise timed out after ${milliseconds} milliseconds`;

      reject(fallback instanceof Error ? fallback : new Error(message));
    }, milliseconds);

    PromiseFinally(promise.then(resolve, reject), () => {
      clearTimeout(timer);
    });
  });
}

export function lowerBound<T>(
  array: readonly T[],
  value: T,
  comparator: (a: T, b: T) => number
): number {
  let first: number = 0;
  let count: number = array.length;

  while (count > 0) {
    const step: number = (count / 2) | 0;
    let it: number = first + step;

    if (comparator(array[it], value) <= 0) {
      first = ++it;
      count -= step + 1;
    } else {
      count = step;
    }
  }

  return first;
}

export const empty: () => void = (): void => {
  //
};
