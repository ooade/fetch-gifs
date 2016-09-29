"use strict"
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _axios=require("axios"),_axios2=_interopRequireDefault(_axios),_lodash=require("lodash"),_giphy=require("./giphy"),_giphy2=_interopRequireDefault(_giphy),_riffsy=require("./riffsy"),_riffsy2=_interopRequireDefault(_riffsy)
module.exports=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=r.offset,t=void 0===i?0:i,n=r.limit,u=void 0===n?30:n,o=(0,_giphy2.default)(e),f=(0,_riffsy2.default)(e),s=function(e){return new Promise(function(r,i){return i({reason:e.message,code:422})})}
return o.then(function(e){return f.then(function(r){return new Promise(function(i,n){var o=(0,_lodash.shuffle)(e.concat(r)).slice(t,u)
return i(Object.assign({},{data:o,more:o.length===u-t}))})}).catch(function(e){return s(e)})}).catch(function(e){return s(e)})}
