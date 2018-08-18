/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IFormValue } from './interfaces';

export const INITIAL_FORM_VALUE: IFormValue = {
  dirty: false,
  pristine: true,
  touched: false,
  valid: true,
  invalid: false,
  hasErrors: false,
  controls: null,
  value: null,
  errors: null,
};
