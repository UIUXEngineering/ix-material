/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import * as moment from 'moment';
import { SpDatePipe } from './date.pipe';

describe('spDatePipe', () => {
  const pipe = new SpDatePipe();
  const dateInThePast = 1513886387;
  const formattedDateInThePast = moment(dateInThePast).format('lll');
  const now = moment();
  const formattedDateNow = moment(now).format('LT');

  it('should transform current time to format of "H:mm A"', () => {
    expect(pipe.transform(now)).toBe(formattedDateNow);
  });

  it('should transform "1513886387" to "Jan 18, 1970 6:31 AM"', () => {
    expect(pipe.transform(dateInThePast)).toBe(formattedDateInThePast);
  });
});
