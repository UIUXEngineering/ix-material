/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Observable } from 'rxjs';
import { hasValue } from '@uiux/fn';

export function hasValuePipe<T>(): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> => {
    return new Observable((observer) => {
      return source.subscribe({
        next(x: T) {
          if (hasValue(x)) {
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
