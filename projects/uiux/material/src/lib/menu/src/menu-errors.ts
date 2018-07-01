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
export function throwSPMenuMissingError() {
  throw Error(`ix-menu-trigger: must pass in an ix-menu instance.

    Example:
      <ix-menu #menu="SPMenu"></ix-menu>
      <button [SPMenuTriggerFor]="menu"></button>`);
}

/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
export function throwSPMenuInvalidPositionX() {
  throw Error(`x-position value must be either 'before' or after'.
      Example: <ix-menu x-position="before" #menu="SPMenu"></ix-menu>`);
}

/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
export function throwSPMenuInvalidPositionY() {
  throw Error(`y-position value must be either 'above' or below'.
      Example: <ix-menu y-position="above" #menu="SPMenu"></ix-menu>`);
}
