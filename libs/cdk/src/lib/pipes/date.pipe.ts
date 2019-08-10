/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';

const moment = _moment;

@Pipe({
  name: 'spDate',
})
export class SpDatePipe implements PipeTransform {
  transform(value: any): string {
    if (!value || value === '') {
      return '';
    }

    const isToday: boolean = moment(value).isSame(moment(), 'day');

    return moment(value).format(isToday ? 'LT' : 'lll');
  }
}
