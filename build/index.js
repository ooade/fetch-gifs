'use strict';

var axios = require('axios');
var _shuffle = require('lodash/shuffle');

module.exports = function (searchTerm, config) {
  // Pass in the searchTerm or query to giphy and riffsy
  var giphyResult = require('./giphy')(searchTerm);
  var riffsyResult = require('./riffsy')(searchTerm);

  // Grab the user's config if exists or just return a default
  var offset = config ? config.offset : 0;
  var limit = config ? config.limit : 30;

  // Return a promise to the user based on their search query
  return giphyResult.then(function (gip) {
    return riffsyResult.then(function (rif) {
      return new Promise(function (resolve, reject) {

        var gifs = _shuffle(gip.concat(rif)).slice(offset, limit);

        return resolve(Object.assign({}, {
          data: gifs,
          more: gifs.length === limit - offset
        }));
      });
    }).catch(function (error) {
      return new Promise(function (resolve, reject) {
        return reject({
          reason: error.message,
          code: '422'
        });
      });
    });
  }).catch(function (error) {
    return new Promise(function (resolve, reject) {
      return reject({
        reason: error.message,
        code: '422'
      });
    });
  });
};