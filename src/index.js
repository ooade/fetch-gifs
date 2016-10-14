import giphy from './giphy';
import riffsy from './riffsy';

module.exports = (searchTerm, { offset = 0, limit = 30} = {}) => {

  // Pass in the searchTerm or query to giphy and riffsy
  let giphyResult = giphy(searchTerm);
  let riffsyResult = riffsy(searchTerm);

  const gifPromise = (error) => {
    return new Promise((resolve, reject) => {
      return reject(error.code);
    });
  };

  // Return a promise to the user based on their search query
  return giphyResult.then(gip => {
    return riffsyResult.then(rif => {
      return new Promise((resolve, reject) => {

        const gifs = gip.concat(rif).slice(offset, limit);

        return resolve(Object.assign({},
          {
            data: gifs,
            more: gifs.length === limit - offset
          }
        ));
      });
    })
    .catch(error => gifPromise(error));
  })
  .catch(error => gifPromise(error));
}
