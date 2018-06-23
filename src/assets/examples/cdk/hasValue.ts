import { hasValue } from '@uiux/cdk/object';

const _null = null;
console.log(hasValue(_null)); // false

const _undefined = undefined;
console.log(hasValue(_undefined)); // false

const arrayValue = ['foo'];
console.log(hasValue(arrayValue)); // true

const arrayEmpty = [];
console.log(hasValue(arrayEmpty)); // false

const number0 = 0;
console.log(hasValue(number0)); // true

const number = 1;
console.log(hasValue(number)); // true

const objValue = { foo: 'foo' };
console.log(hasValue(objValue)); // true

const objEmpty = {};
console.log(hasValue(objEmpty)); // false

const stringValue = 'foo';
console.log(hasValue(stringValue)); // true

const stringEmpty = '';
console.log(hasValue(stringEmpty)); // false
