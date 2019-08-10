import { hasValueIn } from '@uiux/fn';
/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Observable } from 'rxjs';

export function hasValueInPipe<T>(keys: string | string[]): any {
  return (source: Observable<T>): Observable<T> => {
    return new Observable((observer) => {
      return source.subscribe({
        next(x: any) {
          if (hasValueIn(x, keys)) {
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
