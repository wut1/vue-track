"use strict";function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};for(var r,o={},n=Object.keys(t),i=0;i<n.length;i++)r=n[i],0<=e.indexOf(r)||(o[r]=t[r]);return o}function _objectWithoutProperties(t,e){if(null==t)return{};var r,o=_objectWithoutPropertiesLoose(t,e);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(t),i=0;i<n.length;i++)r=n[i],0<=e.indexOf(r)||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r]);return o}var main={install:function(t){t.mixin({beforeCreate:function(){var t,c,e,a=this,r=this.$options.track;r&&(t=r.$view,c=_objectWithoutProperties(r,["$view"]),(e=this).$on("hook:created",function(){if(t)try{t.call(a)}catch(t){console.error(t)}Object.keys(c).forEach(function(n){var i;e[n]?(i=e[n],e[n]=function(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];try{i.apply(void 0,r)}catch(t){console.error(t)}(t=c[n]).call.apply(t,[a].concat(r))}):e[n]=c[n]})}))}})}};module.exports=main;
