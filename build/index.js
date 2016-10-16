"use strict"
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _giphy=require("./giphy"),_giphy2=_interopRequireDefault(_giphy),_riffsy=require("./riffsy"),_riffsy2=_interopRequireDefault(_riffsy)
module.exports=function(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=i.offset,t=void 0===r?0:r,f=i.limit,u=void 0===f?30:f,n=(0,_giphy2.default)(e),o=(0,_riffsy2.default)(e)
return Promise.all([n,o]).then(function(e){var i=e[0].concat(e[1]).slice(t,u)
return Object.assign({},{data:i,more:i.length===u-t})}).catch(function(e){return e.code})}
