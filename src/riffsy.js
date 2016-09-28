const axios = require('axios');

module.exports = searchTerm => {
   return axios.get(`https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=${searchTerm}`)
    .then(result => {
      let payload = result.data.results;

       return payload.map(data => {
        // Grab all the data we need
        const {
          tinygif,
          nanogif,
          gif
        } = data.media[0];

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
}
