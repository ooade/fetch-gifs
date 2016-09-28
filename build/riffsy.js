'use strict';

var axios = require('axios');

module.exports = function (searchTerm) {
  return axios.get('https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + searchTerm).then(function (result) {
    var payload = result.data.results;

    return payload.map(function (data) {
      // Grab all the data we need
      var _data$media$ = data.media[0];
      var tinygif = _data$media$.tinygif;
      var nanogif = _data$media$.nanogif;
      var gif = _data$media$.gif;


      return {
        small: nanogif.url,
        small_fixed: nanogif.preview,
        medium: tinygif.url,
        medium_fixed: tinygif.preview,
        large: gif.url,
        large_fixed: gif.preview
      };
    });
  });
};