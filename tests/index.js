import test from 'tape';

import index from '../src';

test('lets join both gifs:', t => {
  const searchTerm = 'anime';

  const _index = index(searchTerm);

  const expected = new Promise(a => {});

  t.deepEqual(_index, expected, 'Calling Index should return a promise');

  _index.then(a => {
    t.deepEqual(
      a.toString(),
      '[object Object]',
      'Resolved Index Promise should return an object'
    );

    t.deepEqual(
      Array.isArray(a.data),
      true,
      'Resolved Index Promise should contain an array type data key'
    );

    t.deepEqual(
      typeof a.more,
      typeof true,
      'Resolved Index Promise should contain a boolean type more key'
    );
  }).catch(e => {
    t.deepEqual(
      e.code,
      'ENOTFOUND',
      'Index should return an error for rejected promise'
    );
  });

  t.end();
});
