/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Observable } from 'rxjs';
import { isTruthy } from '@uiux/fn';

export function isTruthyPipe<T>(): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> => {
    return new Observable((observer) => {
      return source.subscribe({
        next(x: any) {
          if (isTruthy(x)) {
            observer.next(x);
          }
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        },
      });
    });
  };
}
