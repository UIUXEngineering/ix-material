/**
 * https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
 */
import { freeGlobal } from './free-global';

const isNode: Function = new Function('try {return this===global;}catch(e){return false;}');

const getExports: Function = new Function('return exports');
const getModule: Function = new Function('return module');

/** Detect free variable `exports`. */
const freeExports =
  isNode() && typeof getExports() === 'object' && !getExports().nodeType ? getExports() : null;

// declare const module;
/** Detect free variable `module`. */
const freeModule: { exports: any; require: Function } =
  isNode() && freeExports && typeof getModule() === 'object' && !getModule().nodeType
    ? getModule()
    : null;

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
const freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
export const nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    const types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
})();
