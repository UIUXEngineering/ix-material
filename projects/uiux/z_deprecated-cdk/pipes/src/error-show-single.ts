/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Pipe, PipeTransform } from '@angular/core';
/*
 * For errors that come in this type of object:
 *
 * {
 *   required: { message: 'Value is required },
 *   length: { min: 10, message, 'Minimum Characters is 10' },
 * }
 *
 * Show only one error message.
 */
@Pipe({ name: 'spShowSingleError' })
export class SpShowSingleErrorPipe implements PipeTransform {
  transform(errors: any): string | undefined {
    let message: string;

    if (errors) {
      const firstError: string | undefined = Object.keys(errors).shift();

      switch (firstError) {
        // https://github.com/angular/angular/blob/4.3.4/packages/forms/src/validators.ts#L96
        case 'required':
          message = 'Required';
          break;
        case 'min':
          message = 'Min: ' + errors.min.min;
          break;
        case 'max':
          message = 'Max: ' + errors.max.max;
          break;
        case 'email':
          // https://github.com/angular/angular/blob/4.3.4/packages/forms/src/validators.ts#L110
          message = 'Invalid Email';
          break;
        case 'minlength':
          // https://github.com/angular/angular/blob/4.3.4/packages/forms/src/validators.ts#L123
          message = 'Min length: ' + errors.minlength.requiredLength;
          break;
        case 'maxlength':
          // https://github.com/angular/angular/blob/4.3.4/packages/forms/src/validators.ts#L135
          message = 'Max length: ' + errors.maxlength.requiredLength;
          break;
        case 'pattern':
          // https://github.com/angular/angular/blob/4.3.4/packages/forms/src/validators.ts#L135
          message = 'Pattern required: ' + errors.pattern.requiredPattern;
          break;
        case 'forbiddenWhitespace':
          // https://github.com/angular/angular/blob/4.3.4/packages/forms/src/validators.ts#L135
          message = 'No leading or trailing whitespace.';
          break;

        default:
          // Test if at least one error exists
          for (const prop in errors) {
            if (errors.hasOwnProperty(prop) && errors[prop].hasOwnProperty('message')) {
              message = errors[prop].message;
              break;
            }
          }
      }
    }
    return message;
  }
}
