import test from 'tape';

import { giphy } from '../src/giphy';
import { riffsy } from '../src/riffsy';

const [g, r] = ['giphy', 'riffsy'];

test(`fetching ${g} and ${r} gifs:`, t => {
  const searchTerm = 'anime';

  const g_actual = giphy(searchTerm);
  const r_actual = riffsy(searchTerm);

  const expected = new Promise(a => {});

  t.deepEqual(g_actual, expected, `Calling ${g} should return a promise`);
  t.deepEqual(r_actual, expected, `Calling ${r} should return a promise`);

  const resArray = (w, a) => {
    t.deepEqual(
      Array.isArray(a),
      true,
      `${w} should return a an array for resolved promise`
    )
  };

  const unResErr = (w, e) => {
    t.deepEqual(
      e.code,
      'ENOTFOUND',
      `${w} should return error for rejected promise`
    )
  };

  g_actual.then(a => {
    resArray(g, a);
  }).catch(e => {
    unResErr(g, e);
  });

  r_actual.then(a => {
    resArray(r, a);
  }).catch(e => {
    unResErr(r, e);
  });

  t.end();
});
