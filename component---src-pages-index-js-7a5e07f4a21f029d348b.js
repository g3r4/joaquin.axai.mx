(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return m});n(52);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=n(149),c=n(210),s=n.n(c),p=n(160),l=n.n(p),f=n(168),h=n(153),d=n(170),v=n(151),y=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=s()(this,"props.data.site.siteMetadata.title"),e=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(h.a,{location:this.props.location},i.a.createElement(l.a,{htmlAttributes:{lang:"es"},meta:[{name:"description",content:e}],title:t}),i.a.createElement(f.a,null),n.map(function(t){var e=t.node,n=s()(e,"frontmatter.title")||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(v.a)(.25)}},i.a.createElement(u.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),i.a.createElement("small",null,e.frontmatter.date,i.a.createElement(d.a,{tags:e.frontmatter.tags})),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(i.a.Component);e.default=y;var m="2015445643"},149:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return v}),n.d(e,"StaticQueryContext",function(){return h}),n.d(e,"StaticQuery",function(){return d});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(148),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(27);n.d(e,"waitForRouteChange",function(){return s.c});var p=n(150),l=n.n(p);n.d(e,"PageRenderer",function(){return l.a});var f=n(39);n.d(e,"parsePath",function(){return f.a});var h=a.a.createContext({}),d=function(t){return a.a.createElement(h.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(t,e,n){var r;t.exports=(r=n(152))&&r.default||r},151:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var r=n(161),a=new(n.n(r).a)({baseFontSize:"18px"});var o=a.rhythm,i=a.scale},152:function(t,e,n){"use strict";n.r(e);n(38);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(53),c=n(1),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(u.a,Object.assign({key:e.pathname,location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},153:function(t,e,n){"use strict";n(38);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=n(149),c=n(151),s=(n(162),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,r=e.children;return t="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")):i.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(c.a)(.5)}},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,r)},e}(i.a.Component));e.a=s},165:function(t,e,n){var r=n(190)(Object,"create");t.exports=r},166:function(t,e,n){var r=n(234);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},167:function(t,e,n){var r=n(240);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},168:function(t,e,n){"use strict";var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=(n(187),n(188),n(169)),c=n.n(u),s=n(151),p=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(1)}},i.a.createElement("img",{src:c.a,alt:"Joaquín Bravo Contreras",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),i.a.createElement("p",null,i.a.createElement("strong",null,"Joaquín Bravo Contreras")," es un desarrollador mexicano. Juega futbol cada que puede. Le gusta andar en bici y leer (cuando sus hijos lo dejan). Todavía cree en la buena voluntad de las personas."))},e}(i.a.Component);e.a=p},169:function(t,e,n){t.exports=n.p+"static/gaceta_1-8317597491b9f25a784953e16a2a29cc.png"},170:function(t,e,n){"use strict";n(52);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=n(149),c=n(163),s=n.n(c),p=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return this.props.tags.map(function(t){return i.a.createElement("span",null," ",i.a.createElement(u.Link,{to:"/tags/"+s()(t)+"/"},t))})},e}(i.a.Component);e.a=p},190:function(t,e,n){var r=n(221),a=n(226);t.exports=function(t,e){var n=a(t,e);return r(n)?n:void 0}},191:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},210:function(t,e,n){var r=n(211);t.exports=function(t,e,n){var a=null==t?void 0:r(t,e);return void 0===a?n:a}},211:function(t,e,n){var r=n(212),a=n(244);t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[a(e[n++])];return n&&n==o?t:void 0}},212:function(t,e,n){var r=n(158),a=n(213),o=n(214),i=n(155);t.exports=function(t,e){return r(t)?t:a(t,e)?[t]:o(i(t))}},213:function(t,e,n){var r=n(158),a=n(159),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||i.test(t)||!o.test(t)||null!=e&&t in Object(e)}},214:function(t,e,n){var r=n(215),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,function(t,n,r,a){e.push(r?a.replace(o,"$1"):n||t)}),e});t.exports=i},215:function(t,e,n){var r=n(216),a=500;t.exports=function(t){var e=r(t,function(t){return n.size===a&&n.clear(),t}),n=e.cache;return e}},216:function(t,e,n){var r=n(217),a="Expected a function";function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(a);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},217:function(t,e,n){var r=n(218),a=n(239),o=n(241),i=n(242),u=n(243);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=u,t.exports=c},218:function(t,e,n){var r=n(219),a=n(231),o=n(238);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},219:function(t,e,n){var r=n(220),a=n(227),o=n(228),i=n(229),u=n(230);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=u,t.exports=c},220:function(t,e,n){var r=n(165);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},221:function(t,e,n){var r=n(222),a=n(223),o=n(191),i=n(225),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,p=c.toString,l=s.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||a(t))&&(r(t)?f:u).test(i(t))}},222:function(t,e,n){var r=n(164),a=n(191),o="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!a(t))return!1;var e=r(t);return e==i||e==u||e==o||e==c}},223:function(t,e,n){var r,a=n(224),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},224:function(t,e,n){var r=n(157)["__core-js_shared__"];t.exports=r},225:function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},226:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},227:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},228:function(t,e,n){var r=n(165),a="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===a?void 0:n}return o.call(e,t)?e[t]:void 0}},229:function(t,e,n){var r=n(165),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}},230:function(t,e,n){var r=n(165),a="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?a:e,this}},231:function(t,e,n){var r=n(232),a=n(233),o=n(235),i=n(236),u=n(237);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=u,t.exports=c},232:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},233:function(t,e,n){var r=n(166),a=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():a.call(e,n,1),--this.size,0))}},234:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},235:function(t,e,n){var r=n(166);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},236:function(t,e,n){var r=n(166);t.exports=function(t){return r(this.__data__,t)>-1}},237:function(t,e,n){var r=n(166);t.exports=function(t,e){var n=this.__data__,a=r(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}},238:function(t,e,n){var r=n(190)(n(157),"Map");t.exports=r},239:function(t,e,n){var r=n(167);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},240:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},241:function(t,e,n){var r=n(167);t.exports=function(t){return r(this,t).get(t)}},242:function(t,e,n){var r=n(167);t.exports=function(t){return r(this,t).has(t)}},243:function(t,e,n){var r=n(167);t.exports=function(t,e){var n=r(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}},244:function(t,e,n){var r=n(159),a=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}}}]);
//# sourceMappingURL=component---src-pages-index-js-7a5e07f4a21f029d348b.js.map