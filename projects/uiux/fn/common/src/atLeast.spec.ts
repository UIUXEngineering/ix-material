import { atLeast } from './atLeast';

describe('atLeast', () => {

  it('should choose greater value', () => {

    const least = atLeast(10);

    expect(least(20)).toEqual(10);

  });

});

