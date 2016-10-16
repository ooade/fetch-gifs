require('isomorphic-fetch');

export const riffsy = searchTerm => {
  return fetch(`https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      let payload = data.results;

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
