(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(160),s=n.n(c),u=n(149),l=(n(201),n(168)),d=n(153),p=n(170),m=n(206),f=n(151),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.siteUrl,n=this.props.data.site.siteMetadata.title,a=this.props.data.site.siteMetadata.disqusShortname,r={url:t+e.fields.slug.slice(1),identifier:e.id,title:e.frontmatter.title},i=e.excerpt,c=this.props.pageContext,h=c.previous,g=c.next;return o.a.createElement(d.a,{location:this.props.location},o.a.createElement(s.a,{htmlAttributes:{lang:"es"},meta:[{name:"description",content:i}],title:e.frontmatter.title+" | "+n}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date,o.a.createElement(p.a,{tags:e.frontmatter.tags})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,h&&o.a.createElement(u.Link,{to:h.fields.slug,rel:"prev"},"← ",h.frontmatter.title)),o.a.createElement("li",null,g&&o.a.createElement(u.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →"))),o.a.createElement(m.DiscussionEmbed,{shortname:a,config:r}))},t}(o.a.Component);t.default=h;var g="3977308644"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(148),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(27);n.d(t,"waitForRouteChange",function(){return u.c});var l=n(150),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var p=n(39);n.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n(161),r=new(n.n(a).a)({baseFontSize:"18px"});var i=r.rhythm,o=r.scale},152:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),s=n(1),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,n){"use strict";n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(149),s=n(151),u=(n(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")):o.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(s.a)(.5)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,a)},t}(o.a.Component));t.a=u},168:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=(n(187),n(188),n(169)),s=n.n(c),u=n(151),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(1)}},o.a.createElement("img",{src:s.a,alt:"Joaquín Bravo Contreras",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),o.a.createElement("p",null,o.a.createElement("strong",null,"Joaquín Bravo Contreras")," es un desarrollador mexicano. Juega futbol cada que puede. Le gusta andar en bici y leer (cuando sus hijos lo dejan). Todavía cree en la buena voluntad de las personas."))},t}(o.a.Component);t.a=l},169:function(e,t,n){e.exports=n.p+"static/gaceta_1-8317597491b9f25a784953e16a2a29cc.png"},170:function(e,t,n){"use strict";n(52);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(149),s=n(163),u=n.n(s),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return this.props.tags.map(function(e){return o.a.createElement("span",null," ",o.a.createElement(c.Link,{to:"/tags/"+u()(e)+"/"},e))})},t}(o.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-26dcdff13ca7fd90db09.js.map