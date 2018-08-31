/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { myStarterFunction } from './my-starter-function';

describe('my-starter-function', () => {
  it('should return foobar', () => {
    expect(myStarterFunction('foo')).toEqual('foobar');
  });
});
