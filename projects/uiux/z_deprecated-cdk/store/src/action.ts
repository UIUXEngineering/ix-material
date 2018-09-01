/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

export class Action<A> {
  constructor(private _reducer: Function) {
    /* noop */
  }

  action(_action?: A): void {
    this._reducer.apply(null, [_action]);
  }
}
