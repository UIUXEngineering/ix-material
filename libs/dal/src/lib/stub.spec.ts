import { stubDal } from './stubDal';

describe('stub', () => {
  it('should return reflect value', () => {
    expect(stubDal('foo')).toBe('foo');
  });
});
