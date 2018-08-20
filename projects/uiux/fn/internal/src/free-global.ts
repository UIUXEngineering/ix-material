/** Detect free variable `global` from Node.js. */
declare const global;
export let freeGlobal: any = global &&
  typeof global === 'object' && global.Object === Object && global;
