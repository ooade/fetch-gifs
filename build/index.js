"use strict"
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _axios=require("axios"),_axios2=_interopRequireDefault(_axios),_lodash=require("lodash")
module.exports=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.offset,t=void 0===n?0:n,i=r.limit,o=void 0===i?30:i,u=require("./giphy")(e),s=require("./riffsy")(e),a=function(e){return new Promise(function(r,n){return n({reason:e.message,code:"422"})})}
return u.then(function(e){return s.then(function(r){return new Promise(function(n,i){var u=(0,_lodash.shuffle)(e.concat(r)).slice(t,o)
return n(Object.assign({},{data:u,more:u.length===o-t}))})}).catch(function(e){return a(e)})}).catch(function(e){return a(e)})}
