"use strict"
module.exports=function(e){return fetch("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=dc6zaTOxFJmzC&limit=50").then(function(e){return e.json()}).then(function(e){var i=e.data
return i.map(function(e){var i=e.images,l=i.fixed_height_small,t=i.fixed_height_small_still,r=i.fixed_height_downsampled,a=i.fixed_height_still,d=i.downsized_large,n=i.downsized_still
return{small:l.url,small_fixed:t.url,medium:r.url,medium_fixed:a.url,large:d.url,large_fixed:n.url}})})}
