const axios = require('axios');
const _shuffle = require('lodash/shuffle');

module.exports = (searchTerm, config) => {
  // Pass in the searchTerm or query to giphy and riffsy
  let giphyResult = require('./giphy')(searchTerm);
  let riffsyResult = require('./riffsy')(searchTerm);

  // Grab the user's config if exists or just return a default
  let offset = config ? config.offset :  0;
  let limit = config ? config.limit : 30;

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
