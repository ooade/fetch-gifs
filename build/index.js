'use strict';

var _giphy = require('./giphy');

var _riffsy = require('./riffsy');

module.exports = function (searchTerm) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$offset = _ref.offset;
  var offset = _ref$offset === undefined ? 0 : _ref$offset;
  var _ref$limit = _ref.limit;
  var limit = _ref$limit === undefined ? 30 : _ref$limit;

  // Pass in the searchTerm or query to giphy and riffsy
  var giphyResult = (0, _giphy.giphy)(searchTerm);
  var riffsyResult = (0, _riffsy.riffsy)(searchTerm);

  // Return a promise to the user based on their search query
  return Promise.all([giphyResult, riffsyResult]).then(function (values) {

    var gifs = values[0].concat(values[1]).slice(offset, limit);

    return Object.assign({}, {
      data: gifs,
      more: gifs.length === limit - offset
    });
  });
};