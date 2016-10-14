"use strict"
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _giphy=require("./giphy"),_giphy2=_interopRequireDefault(_giphy),_riffsy=require("./riffsy"),_riffsy2=_interopRequireDefault(_riffsy)
module.exports=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=r.offset,n=void 0===t?0:t,i=r.limit,u=void 0===i?30:i,f=(0,_giphy2.default)(e),o=(0,_riffsy2.default)(e),c=function(e){return new Promise(function(r,t){return t(e.code)})}
return f.then(function(e){return o.then(function(r){return new Promise(function(t,i){var f=e.concat(r).slice(n,u)
return t(Object.assign({},{data:f,more:f.length===u-n}))})}).catch(function(e){return c(e)})}).catch(function(e){return c(e)})}
