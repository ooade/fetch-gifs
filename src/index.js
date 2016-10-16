import { giphy } from './giphy';
import { riffsy } from './riffsy';

module.exports = (searchTerm, { offset = 0, limit = 30} = {}) => {

  // Pass in the searchTerm or query to giphy and riffsy
  let giphyResult = giphy(searchTerm);
  let riffsyResult = riffsy(searchTerm);

  // Return a promise to the user based on their search query
  return Promise.all([giphyResult, riffsyResult])
    .then( values => {

      const gifs = values[0].concat(values[1]).slice(offset, limit);

      return Object.assign({},
        {
          data: gifs,
          more: gifs.length === limit - offset
        }
      );
    });
}
