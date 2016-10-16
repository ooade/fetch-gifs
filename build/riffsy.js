'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('isomorphic-fetch');

var riffsy = exports.riffsy = function riffsy(searchTerm) {
  return fetch('https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + searchTerm).then(function (response) {
    return response.json();
  }).then(function (data) {
    var payload = data.results;

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