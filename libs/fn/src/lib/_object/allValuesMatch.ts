import { isFunction } from '../_common/isFunction';
import { isPlainObject } from '../_common/isPlainObject';
import { isScalar } from '../_common/isScalar';
import { isArray } from '../_common/isArray';
import { hasValue } from '../_common/hasValue';
import { isDefined } from '../_common/isDefined';

export interface IAllValuesMatchConfig {
  includeArrays?: boolean;
  excludeKeys?: string[];
}

function keyIsExcludedIn(key: string, keys: string[]): boolean {
  return !!keys.filter((_key: string) => key === _key).length;
}

export function allValuesMatch(src: any, tar: any, config?: IAllValuesMatchConfig): boolean {
  if (isDefined(src) && isDefined(tar)) {
    const keys: string[] = Object.keys(tar);
    const includeArrays: boolean =
      config && hasValue(config.includeArrays) ? config.includeArrays : false;
    const exludeKeys: string[] = config && hasValue(config.excludeKeys) ? config.excludeKeys : [];

    return keys.reduce(function(acc: boolean, key: string) {
      if (acc && !keyIsExcludedIn(key, exludeKeys)) {
        if (isArray(tar[key])) {
          if (includeArrays) {
            let isMatch = true;
            for (let i = 0; i < tar[key].length; i++) {
              if (isScalar(tar[key][i])) {
                isMatch = src[key][i] === tar[key][i];
              } else {
                isMatch = allValuesMatch(src[key][i], tar[key][i], config);
              }

              if (!isMatch) {
                break;
              }
            }

            return isMatch;
          } else {
            return isDefined(src[key]) && isDefined(tar[key]);
          }
        } else if (isScalar(tar[key])) {
          return src[key] === tar[key];
        } else if (isPlainObject(tar[key])) {
          return allValuesMatch(src[key], tar[key], config);
        } else if (isFunction(tar[key])) {
          return isDefined(src[key]) && isDefined(tar[key]);
        } else {
          return false;
        }
      }

      return acc;
    }, true);
  } else {
    return false;
  }
}
