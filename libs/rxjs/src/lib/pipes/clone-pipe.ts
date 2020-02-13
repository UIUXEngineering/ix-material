/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Observable, Subscriber } from 'rxjs';
import { clone } from '@uiux/fn';

export function clonePipe<T>(): any {
  return (source: Observable<T>): Observable<T> => {
    return new Observable((observer: Subscriber<T>) => {
      return source.subscribe({
        next(x: any) {
          if (x) {
            observer.next(clone(x));
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
