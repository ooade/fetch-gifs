const axios = require('axios');
const _shuffle = require('lodash/shuffle');

const giphy = require('./giphy');
const riffsy = require('./riffsy');

module.exports = (searchTerm) => {
  let giphyResult = giphy(searchTerm);
  let riffsyResult = riffsy(searchTerm);

  return giphyResult.then(gip => {
    return riffsyResult.then(rif => {
      return new Promise(function(resolve, reject) {
        return resolve(Object.assign({},
          _shuffle(gip.concat(rif))
        ));
      });
    })
    .catch(error => {
      return new Promise(function(resolve, reject) {
        return reject('request failed');
      });
      return error.code === 'ENOTFOUND' ?
        'Please check your network connection' :
        'Request could not be understood';
    });
  })
  .catch(error => {
    return new Promise(function(resolve, reject) {
      return reject({ reason: 'dont know', code: '405' });
    });

    return error.code === 'ENOTFOUND' ?
      'Please check your network connection' :
      'Request could not be understood';
  });
}
