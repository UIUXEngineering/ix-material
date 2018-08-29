import { getNative } from './_getNative';

export const defineProperty: (...args) => any = (function() {
  try {
    const func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
})();
