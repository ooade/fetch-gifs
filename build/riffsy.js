"use strict"
require("isomorphic-fetch"),module.exports=function(e){return fetch("https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag="+e).then(function(e){return e.json()}).then(function(e){var r=e.results
return r.map(function(e){var r=e.media[0],i=r.tinygif,t=r.nanogif,n=r.gif
return{small:t.url,small_fixed:t.preview,medium:i.url,medium_fixed:i.preview,large:n.url,large_fixed:n.preview}})})}
