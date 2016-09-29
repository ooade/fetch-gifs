const axios = require('axios');
const _shuffle = require('lodash/shuffle');

module.exports = (searchTerm, { offset = 0, limit = 30} = {}) => {
  // Pass in the searchTerm or query to giphy and riffsy
  let giphyResult = require('./giphy')(searchTerm);
  let riffsyResult = require('./riffsy')(searchTerm);

  // Return a promise to the user based on their search query
  return giphyResult.then(gip => {
    return riffsyResult.then(rif => {
      return new Promise((resolve, reject) => {

        const gifs = _shuffle(gip.concat(rif)).slice(offset, limit);

        return resolve(Object.assign({},
          {
            data: gifs,
            more: gifs.length === limit - offset
          }
        ));
      });
    })
    .catch(error => {
      return new Promise((resolve, reject) => {
        return reject({
          reason: error.message,
          code: '422'
        });
      });
    });
  })
  .catch(error => {
    return new Promise((resolve, reject) => {
      return reject({
        reason: error.message,
        code: '422'
      });
    });
  });
}
