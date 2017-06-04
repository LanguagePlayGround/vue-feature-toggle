!function e(i,t,r){function n(o,l){if(!t[o]){if(!i[o]){var a="function"==typeof require&&require;if(!l&&a)return a(o,!0);if(u)return u(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var f=t[o]={exports:{}};i[o][0].call(f.exports,function(e){var t=i[o][1][e];return n(t||e)},f,f.exports,e,i,t,r)}return t[o].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(e,i,t){!function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=!1,r=function(e){if(!0===i){var t=-1!=e.indexOf("<b>"),r=-1!=e.indexOf("visible"),n=-1!=e.indexOf("hidden"),u=e.replace("visible","%cvisible");if(u=u.replace("hidden","%chidden"),r)console.log(u,"color:green;font-weight:bold;");else if(n)console.log(u,"color:red;font-weight:bold;");else if(t){u=u.replace("<b>","%c");var o=[u,"font-weight:bold;"];console.log.apply(null,o)}else console.log(e)}},n=function(e,i){return r(i),r(""),e},u=function(e,i,t,r,u){if(null!=e){var o=e(t,r,u);return"boolean"==typeof o?o:n(!1,"The "+i+" returns "+o+". => Please return true or false. This result (and all non-boolean results) will return false.")}},o={},l=function(e,i){var t=e.toLowerCase();return"string"==typeof i&&(t+="#"+i.toLowerCase()),t},a=function(e,i){return null==i?e:i};t.default={props:["name","variant","data"],name:"feature",data:function(){return{isVisible:this.isVisible(this.name,this.variant,this.data)}},logAndReturn:function(e,i){return n(e,i)},log:function(e){r(e)},showLogs:function(e,t,r){i=void 0==e||e},isVisible:function(e,i,t){return this.methods.isVisible(e,i,t)},visibility:function(e,i,t){if(void 0==e)throw new Error("feature.visibility(): 1st parameter name must be defined");if(void 0==i)throw new Error("feature.visibility(): 2nd parameter must either be the variant name or a function");if(void 0!==i&&void 0==t&&"string"==typeof i)throw new Error("feature.visibility(): 3nd parameter must be a function when the 2nd parameter is the variant name");var r=l(e,i),n=a(i,t);o[r]=n},requiredVisibility:function(i){if("function"!=typeof i)throw new Error("feature.requiredVisibility(): 1st parameter must be a function, but is "+(void 0===i?"undefined":e(i)));o._required=i},defaultVisibility:function(i){if("function"!=typeof i)throw new Error("feature.defaultVisibility(): 1st parameter must be a function, but is "+(void 0===i?"undefined":e(i)));o._default=i},methods:{isVisible:function(e,i,t){if(r('Check Visibility of <b>Feature "'+e+'", variant "'+(void 0==i?"":i)+'"'+(t?" with data "+JSON.stringify(t):"")+"."),void 0==e)throw new Error('The attribute "name" is required for tag <feature></feature>. Example: <feature name="aname"></feature>');var a=o._required,s=null!=o._required,f=u(a,"requiredVisibility",t,e,i),d=l(e,i),b=o[d],c=null!=o[d],h=u(b,"visibility function",t,e,i),v=null!=i,y=l(e,null),p=o[y],m=(o[y],u(p,"visibility function (only name)",t,e,i)),w=o._default,_=null!=o._default,V=u(w,"defaultVisibility",t,e,i);if(s){if(s&&!0===f)r("The requiredVisibility rule returns true. This feature will be shown when no other rule rejects it.");else if(s&&!1===f)return n(!1,"The requiredVisibility rule returns false. This feature will be hidden.")}else r("No requiredVisibility rule specified for this feature.");return c?n(h,"The visibility rule returns "+h+". This feature will be "+(h?"visible":"hidden")+"."):(r("No visibility rule found matching name and variant."),v&&"boolean"==typeof m?n(h,"Found a visibility rule for name "+e+" without variants. The rule returns "+m+". => This feature will be "+(m?"visible":"hidden")+"."):(v&&r("No rules found for name "+e+" without variants."),_?n(V,"Found a defaultVisibility rule. The rule returns "+V+". => This feature will be "+(V?"visible":"hidden")+"."):(r("No default rule found."),s?n(!0,"Only the requiredVisibility rule was found. This returned true. => This feature will be visible."):n(!1,"No rules were found. This feature will be hidden."))))}}}}(),i.exports.__esModule&&(i.exports=i.exports.default);var r="function"==typeof i.exports?i.exports.options:i.exports;r.render=function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.isVisible?t("div",{attrs:{"feature-name":e.name,"feature-variant":e.variant}},[e._t("default")],2):e._e()},r.staticRenderFns=[],r._scopeId="data-v-32d0d8b2"},{}],2:[function(e,i,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("./Feature.vue"),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=n.default},{"./Feature.vue":1}]},{},[2]);
