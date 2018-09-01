/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { kebabCase } from './to-kebab-case';

describe('toKebabCase', () => {
  it('should convert words separated by spaces', () => {
    expect(kebabCase('Foo Bar')).toEqual('foo-bar');
  });

  it('should convert camel case', () => {
    expect(kebabCase('fooBar')).toEqual('foo-bar');
  });
});
