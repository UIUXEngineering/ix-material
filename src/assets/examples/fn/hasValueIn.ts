import { hasValueIn } from '@uiux/fn/object';

const object = {
  foo: {
    bar: {
      baz: 'test',
      bazNot: '',
      bum: ['foo'],
      bumNot: [],
      boo: true,
      booNot: false,
      bee: { foo: 'bar' },
      beeNot: {},
    },
    baz: () => {
      /* noop */
    },
  },
};

console.log(hasValueIn(object, 'foo.baz.bum'));
// false because undefined

console.log(hasValueIn(object, 'foo.bar.baz'));
// true

console.log(hasValueIn(object, 'foo.bar.bazNot'));
// false

console.log(hasValueIn(object, 'foo.bar.bum'));
// true

console.log(hasValueIn(object, 'foo.bar.bumNot'));
// false

console.log(hasValueIn(object, 'foo.bar.boo'));
// true

console.log(hasValueIn(object, 'foo.bar.booNot'));
// true because it's defined

console.log(hasValueIn(object, 'foo.bar.bee'));
// true

console.log(hasValueIn(object, 'foo.bar.beeNot'));
// false

console.log(hasValueIn(object, 'foo.baz'));
// true

const objectWithArray = {
  a: {
    b: {
      c: [
        {
          // <-- array 'a.b.c.[0]'
          d: {
            // <-- array 'a.b.c.[0].d'
            e: 'foo', // <-- array 'a.b.c.[0].d.e'
          },
        },
        {
          // <-- array 'a.b.c.[1]'
          g: {
            // <-- array 'a.b.c.[1].g'
            h: 'bar', // <-- array 'a.b.c.[1].d.h'
          },
        },
        [
          {
            // <-- array 'a.b.c.[2][0]'
            k: {
              l: 'baz',
            },
          },
        ],
      ],
    },
    i: {
      j: 'baz',
    },
  },
};

console.log(hasValueIn(objectWithArray, 'a.b.c[2][0].k.l'));
// true
