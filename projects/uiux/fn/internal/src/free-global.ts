/** Detect free variable `global` from Node.js. */
/**
 * https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
 */


const isNode: Function = new Function('try {return this===global;}catch(e){return false;}');


// tests if global scope is binded to "global"
// if(isNode()) console.log("running under node.js");

const getGlobal: Function = new Function(
  `try {
          if (this === global) {
            return global;
          } else {
            return null;
          }
        } catch (e) {
          return null;
        }`
);

export let freeGlobal: any = isNode() ? getGlobal() : null;
// export let freeGlobal: any = global &&
//   typeof global === 'object' && global.Object === Object && global;
