"use strict"
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _axios=require("axios"),_axios2=_interopRequireDefault(_axios)
module.exports=function(e){return _axios2.default.get("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=dc6zaTOxFJmzC&limit=50").then(function(e,i){var l=e.data.data
return l.map(function(e){var i=e.images,l=i.fixed_height_small,t=i.fixed_height_small_still,a=i.fixed_height_downsampled,r=i.fixed_height_still,u=i.downsized_large,s=i.downsized_still
return{small:l.url,small_fixed:t.url,medium:a.url,medium_fixed:r.url,large:u.url,large_fixed:s.url}})})}
