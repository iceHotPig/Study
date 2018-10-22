"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(){function t(n,e){return(/string|function/.test(void 0===e?"undefined":_typeof(e))?function(e,r){if("string"==typeof r){var n=r;r=function(){return new u(n)}}var t=o[e]=function(n){try{return new r(n,e)+""}catch(n){return p(n)()}};return t.prototype=r.prototype=f,t.toString=function(){return r+""},t}:s)(n,e)}var o=t.cache={},u=this.String;function r(n,e){return"string"!=typeof n&&("number"===(e=void 0===n?"undefined":_typeof(n))?n+="":n="function"===e?r(n.call(n)):""),n}var e={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};function i(n){return e[n]}var c=Array.isArray||function(n){return"[object Array]"==={}.toString.call(n)};var f=t.utils={$helpers:{},$include:function(n,e,r){return s(n=function(n,e){var r=/(\/)[^/]+\1\.\.\1/,t=("./"+n).replace(/[^/]+$/,"")+e;for(t=t.replace(/\/\.\//g,"/");t.match(r);)t=t.replace(r,"/");return t}(r,n),e)},$string:r,$escape:function(n){return r(n).replace(/&(?![\w#]+;)|[<>"']/g,i)},$each:function(n,e){if(c(n))for(var r=0,t=n.length;r<t;r++)e.call(n,n[r],r,n);else for(r in n)e.call(n,n[r],r)}},a=t.helpers=f.$helpers;function s(n,e){var r=t.get(n)||p({filename:n,name:"Render Error",message:"Template not found"});return e?r(e):r}function p(n){var e="{Template Error}",r=n.stack||"";if(r)r=r.split("\n").slice(0,2).join("\n");else for(var t in n)r+="<"+t+">\n"+n[t]+"\n\n";return function(){return"object"===("undefined"==typeof console?"undefined":_typeof(console))&&console.error(e+"\n\n"+r),e}}t.get=function(n){return o[n.replace(/^\.\//,"")]},t.helper=function(n,e){a[n]=e},"function"==typeof define?define(function(){return t}):"undefined"!=typeof exports?module.exports=t:this.template=t,t("userlist",function(n,e){this.$helpers;var r=this.$each,t=n.users,o=(n.val,n.index,this.$escape),i="";return r(t,function(n,e){i+="\r\n<p>\r\n    ",i+=o(n.id),i+="-",i+=o(n.name),i+="\r\n</p>\r\n<span>\r\n    ",i+=o(n.id),i+=o(n.name),i+="\r\n</span>\r\n"}),new u(i)}),t("user/add",function(n,e){this.$helpers;var r=this.$each,t=n.users,o=(n.val,n.index,this.$escape),i="";return r(t,function(n,e){i+="\r\n<p>\r\n    ",i+=o(n.college),i+="-",i+=o(n.name),i+="\r\n    ",i+=o(n.password),i+="\r\n</p>\r\n"}),new u(i)})}();