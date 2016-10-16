require('isomorphic-fetch');

export const giphy = searchTerm => {
  // we don't need to supply a method since the default is GET
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=50`)
    .then(response => response.json())
    .then(data => {
      let payload = data.data;

      return payload.map(data => {
        // Grab all the data we need from giphy
        const {
          fixed_height_small,
          fixed_height_small_still,
          fixed_height_downsampled ,
          fixed_height_still,
          downsized_large,
          downsized_still
        } = data.images;

        return {
          small: fixed_height_small.url, // We're using fixed_height because width could easily be made responsive
          small_fixed: fixed_height_small_still.url,
          medium: fixed_height_downsampled.url,
          medium_fixed: fixed_height_still.url,
          large: downsized_large.url,
          large_fixed: downsized_still.url
        }
      });
  });
}
