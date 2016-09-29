"use strict"
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _axios=require("axios"),_axios2=_interopRequireDefault(_axios)
module.exports=function(e){return _axios2.default.get("https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag="+e).then(function(e){var i=e.data.results
return i.map(function(e){var i=e.media[0],r=i.tinygif,t=i.nanogif,a=i.gif
return{small:t.url,small_fixed:t.preview,medium:r.url,medium_fixed:r.preview,large:a.url,large_fixed:a.preview}})})}
