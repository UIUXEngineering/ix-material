// tslint:disable
import { freeGlobal } from './_freeGlobal';

// /** Detect free variable `self`. */
const freeSelf = typeof self === 'object' && self && self['Object'] === Object && self;

/** Used as a reference to the global object. */
export let root: any = freeGlobal || freeSelf || Function('return this')();
