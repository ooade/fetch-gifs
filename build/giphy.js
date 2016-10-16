'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('isomorphic-fetch');

var giphy = exports.giphy = function giphy(searchTerm) {
  // we don't need to supply a method since the default is GET
  return fetch('https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC&limit=50').then(function (response) {
    return response.json();
  }).then(function (data) {
    var payload = data.data;

    return payload.map(function (data) {
      // Grab all the data we need from giphy
      var _data$images = data.images;
      var fixed_height_small = _data$images.fixed_height_small;
      var fixed_height_small_still = _data$images.fixed_height_small_still;
      var fixed_height_downsampled = _data$images.fixed_height_downsampled;
      var fixed_height_still = _data$images.fixed_height_still;
      var downsized_large = _data$images.downsized_large;
      var downsized_still = _data$images.downsized_still;

      return {
        small: fixed_height_small.url, // We're using fixed_height because width could easily be made responsive
        small_fixed: fixed_height_small_still.url,
        medium: fixed_height_downsampled.url,
        medium_fixed: fixed_height_still.url,
        large: downsized_large.url,
        large_fixed: downsized_still.url
      };
    });
  });
};