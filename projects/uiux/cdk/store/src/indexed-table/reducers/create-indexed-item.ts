/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IIndexedItem } from './interfaces';
import { CON } from '../constants';

export function createIndexItem(hashKey = ''): IIndexedItem {
  return {
    hashKey: hashKey,
    path: CON.NO_PATH + '.' + hashKey, // _$tmp.hashKey
    _isScalar: null,
    search: [],
    _type: null,
    parent: {
      hashKey: '',
      path: '',
    },
  };
}
