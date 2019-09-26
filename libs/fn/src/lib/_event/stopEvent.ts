/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

/**
 * Stop DOM event default and propogation
 * @param event
 */
export function stopEvent(event: MouseEvent): void {
  event.stopPropagation();
  event.preventDefault();
}

