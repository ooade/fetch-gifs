# FetchGifs
[![Build Status](https://travis-ci.org/ooade/fetch-gifs.svg?branch=master)](https://travis-ci.org/ooade/fetch-gifs)

We help you fetch your GIFs, just pass in the search term and you are good to go!
Fetch-gif requires a search term and optional arguments(offset and limit) and returns a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)!

### Getting Started?
Simple! Just run:
`npm install -save fetch-gifs`

### A Simple Request
```js
let name = 'star wars';

fetchGifs(name).then(res => {
  console.log(res);
})
.catch(error => {
  console.log(error);
});
```

### A Simple Response
```js
{
  data: [
    0: {
      "large": "https://media1.giphy.com/media/SG5W75KgppVq8/giphy.gif",
      "large_fixed": "https://media1.giphy.com/media/SG5W75KgppVq8/giphy_s.gif",
      "medium": "...",
      "medium_fixed": "https://...",
      "small: "https://...",
      "small_fixed": "https://..."
    },
    1: { ... }
    2: { ... }
  ],
  more: true
}
```

### More on FetchGifs
We limited the number of gifs served to each user to 30, do you need more or less? Let's try writing something else
```js
const name = 'star wars';
const limit = 20;

fetchGifs(name, { limit }).then(res => {
  console.log(res); // res.data length equals 20
})
.catch(error => {
  console.log(error);
});
```

##### Making use of offset?
The default offset is set to 0. Let's try searching from the the 20th position to the 40th
```js
const name = 'star wars';
const limit = 20;
const offset = 40;

fetchGifs(name, { offset, limit }).then(res => {
  console.log(res); // res.data length equals 20, starts from position 20, stops at 40
})
.catch(error => {
  console.log(error);
});
```

### Not using NodeJS?
You can also make use of fetch-gifs, just grab our latest release [here](https://raw.githubusercontent.com/ooade/fetch-gifs/master/build/bundle.js)

### Example
- With React Redux
  - Heroku: https://fetch-gifs.herokuapp.com/
  - GitHub: https://github.com/ooade/react-gif-finder

## Contributing
Contributing to this repo is simple. We prefer single quotes, descriptive commit messages, commiting to a new branch indicating what changed e.g fix/fixed-async-flow, feature/added-test, feat/added-test. Push the new branch!
