/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { kebabCase } from './kebabCase';

describe('toKebabCase', () => {
  it('should convert words separated by spaces', () => {
    expect(kebabCase('Foo Bar')).toEqual('foo-bar');
  });

  it('should convert camel case', () => {
    expect(kebabCase('fooBar')).toEqual('foo-bar');
  });
});
