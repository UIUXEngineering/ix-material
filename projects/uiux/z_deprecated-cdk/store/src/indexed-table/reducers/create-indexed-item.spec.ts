/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { createIndexItem } from './create-indexed-item';
import { IIndexedItem } from './interfaces';

describe('createIndexItem', () => {
  it('should create with value', () => {
    const item: IIndexedItem = createIndexItem('z');
    expect(item.hashKey).toBe('z');
    expect(item.path).toBe('_$tmp.z');
    expect(item.search.length).toBe(0);
  });

  it('should create empty item', () => {
    const item: IIndexedItem = createIndexItem('z');
    expect(item.hashKey).toBe('z');
    expect(item.path).toBe('_$tmp.z');
    expect(item.search.length).toBe(0);
  });
});
