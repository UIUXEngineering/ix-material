/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isEqual } from 'lodash-es/isEqual';
import { default as includes } from 'lodash-es/includes';
import { getRandomFromArray } from './get-random-from-array';

/**
 * Choose a range of items from array, excluding an item.
 * @param arr
 * @param exclude
 * @param numberItemsToChoose
 * @returns any[]
 */
export function getRandomRangeFromArray(
  arr: any[],
  numberItemsToChoose: number,
  exclude?: any
): any[] {
  let chosenCount = 0;
  const chosenAccepted: any[] = [];
  while (chosenCount < numberItemsToChoose) {
    const rand = getRandomFromArray(arr);
    if (!isEqual(exclude, rand) && !includes(chosenAccepted, rand)) {
      chosenAccepted.push(rand);
      chosenCount++;
    }
  }

  return chosenAccepted;
}
