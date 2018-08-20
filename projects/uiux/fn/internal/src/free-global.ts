/** Detect free variable `global` from Node.js. */
export let freeGlobal: any =
  typeof global === 'object' && global && global.Object === Object && global;
