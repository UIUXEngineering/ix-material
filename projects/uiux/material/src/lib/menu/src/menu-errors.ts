/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Throws an exception for the case when menu trigger doesn't have a valid ix-menu instance
 * @docs-private
 */
export function throwMatMenuMissingError() {
  throw Error(`ix-menu-trigger: must pass in an ix-menu instance.

    Example:
      <ix-menu #menu="matMenu"></ix-menu>
      <button [matMenuTriggerFor]="menu"></button>`);
}

/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
export function throwMatMenuInvalidPositionX() {
  throw Error(`x-position value must be either 'before' or after'.
      Example: <ix-menu x-position="before" #menu="matMenu"></ix-menu>`);
}

/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
export function throwMatMenuInvalidPositionY() {
  throw Error(`y-position value must be either 'above' or below'.
      Example: <ix-menu y-position="above" #menu="matMenu"></ix-menu>`);
}
