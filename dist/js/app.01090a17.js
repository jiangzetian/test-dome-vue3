(function(e){function n(n){for(var t,a,f=n[0],o=n[1],d=n[2],j=0,u=[];j<f.length;j++)a=f[j],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);b&&b(n);while(u.length)u.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var e,n=0;n<c.length;n++){for(var s=c[n],t=!0,a=1;a<s.length;a++){var f=s[a];0!==r[f]&&(t=!1)}t&&(c.splice(n--,1),e=o(o.s=s[0]))}return e}var t={},a={app:0},r={app:0},c=[];function f(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cf6f1":"844ced1d","chunk-2d21a3d2":"67fec97f","chunk-6af6fe54":"1eb8f9f1","chunk-7fabe4e6":"777bfaf1"}[e]+".js"}function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var n=[],s={"chunk-6af6fe54":1,"chunk-7fabe4e6":1};a[e]?n.push(a[e]):0!==a[e]&&s[e]&&n.push(a[e]=new Promise((function(n,s){for(var t="css/"+({}[e]||e)+"."+{"chunk-2d0cf6f1":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-6af6fe54":"de8e6881","chunk-7fabe4e6":"6052aca3"}[e]+".css",r=o.p+t,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var d=c[f],j=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(j===t||j===r))return n()}var u=document.getElementsByTagName("style");for(f=0;f<u.length;f++){d=u[f],j=d.getAttribute("data-href");if(j===t||j===r)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var t=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=t,delete a[e],b.parentNode.removeChild(b),s(c)},b.href=r;var i=document.getElementsByTagName("head")[0];i.appendChild(b)})).then((function(){a[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,s){t=r[e]=[n,s]}));n.push(t[2]=c);var d,j=document.createElement("script");j.charset="utf-8",j.timeout=120,o.nc&&j.setAttribute("nonce",o.nc),j.src=f(e);var u=new Error;d=function(n){j.onerror=j.onload=null,clearTimeout(b);var s=r[e];if(0!==s){if(s){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",u.name="ChunkLoadError",u.type=t,u.request=a,s[1](u)}r[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:j})}),12e4);j.onerror=j.onload=d,document.head.appendChild(j)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,s){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(s,t,function(n){return e[n]}.bind(null,t));return s},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],j=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var b=j;c.push([0,"chunk-vendors"]),s()})({0:function(e,n,s){e.exports=s("cd49")},4678:function(e,n,s){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=r(e);return s(n)}function r(e){if(!s.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=r,e.exports=a,a.id="4678"},cd49:function(e,n,s){"use strict";s.r(n);s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("7a23");function a(e,n){var s=Object(t["K"])("router-view");return Object(t["D"])(),Object(t["j"])(s)}const r={};r.render=a;var c=r,f=(s("d3b7"),s("6c02")),o=[{path:"/",name:"Home",component:function(){return s.e("chunk-2d21a3d2").then(s.bind(null,"bb51"))}},{path:"/dynamic-tags-page",name:"DynamicTagsPage",component:function(){return s.e("chunk-6af6fe54").then(s.bind(null,"62d0"))}},{path:"/dynamic-input-page",name:"DynamicInputsPage",component:function(){return s.e("chunk-7fabe4e6").then(s.bind(null,"3af0"))}},{path:"/i18n",name:"i18n",component:function(){return s.e("chunk-2d0cf6f1").then(s.bind(null,"6463"))}}],d=Object(f["a"])({history:Object(f["b"])(),routes:o}),j=d,u=s("f23d"),b=(s("202f"),s("47e2")),i={message:{hello:"good good study, day day up!"}},l=i,h={message:{hello:"好好学习，天天向上！"}},m=h,p={zh:m,en:l},g=Object(b["a"])({locale:localStorage.lang||"zh",messages:p}),y=g,v=Object(t["i"])(c);v.use(j),v.use(u["a"]),v.use(y),v.mount("#app")}});
//# sourceMappingURL=app.01090a17.js.map