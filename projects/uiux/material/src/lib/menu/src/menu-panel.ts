/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {EventEmitter, TemplateRef, InjectionToken} from '@angular/core';
import {MenuPositionX, MenuPositionY} from './menu-positions';
import {Direction} from '@angular/cdk/bidi';
import {FocusOrigin} from '@angular/cdk/a11y';
import {SPMenuContent} from './menu-content';

/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
export const MAT_MENU_PANEL = new InjectionToken<SPMenuPanel>('MAT_MENU_PANEL');

/**
 * Interface for a custom menu panel that can be used with `SPMenuTriggerFor`.
 * @docs-private
 */
export interface SPMenuPanel<T = any> {
  xPosition: MenuPositionX;
  yPosition: MenuPositionY;
  overlapTrigger: boolean;
  templateRef: TemplateRef<any>;
  close: EventEmitter<void | 'click' | 'keydown' | 'tab'>;
  parentMenu?: SPMenuPanel | undefined;
  direction?: Direction;
  focusFirstItem: (origin?: FocusOrigin) => void;
  resetActiveItem: () => void;
  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;
  setElevation?(depth: number): void;
  lazyContent?: SPMenuContent;
  backdropClass?: string;
  hasBackdrop?: boolean;
  addItem?: (item: T) => void;
  removeItem?: (item: T) => void;
}
