(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(e,t,r){"use strict";t.__esModule=!0;var a=c(r(1)),o=c(r(146)),n=c(r(147)),l=c(r(124));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(n.default,{config:o.default,theme:l.default})}},146:function(e,t,r){"use strict";t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=l(r(1)),n=l(r(125));function l(e){return e&&e.__esModule?e:{default:e}}t.default=a({},n.default,{title:"Built with Reactive Search",description:o.default.createElement(o.default.Fragment,null,"Check out our demo apps powered by Reactivesearch."),demos:[{src:"../../reactivesearch/images/apps/airbeds.png",title:"Airbeds",href:"https://opensource.appbase.io/reactivesearch/demos/airbeds/",description:"An airbnb inspired app for browsing housing areas in Seattle"},{src:"../../reactivesearch/images/apps/productsearch.png",title:"Product Search",href:"https://opensource.appbase.io/reactivesearch/demos/producthunt/",description:""},{src:"../../reactivesearch/images/apps/gitxplore.png",title:"GitHub Search",href:"https://opensource.appbase.io/reactivesearch/demos/gitxplore/",description:""},{src:"../../reactivesearch/images/apps/carstore.png",title:"Car Store",href:"https://opensource.appbase.io/reactivesearch/demos/ecommerce/",description:""},{src:"../../reactivesearch/images/apps/goodbooks.png",title:"Book Search",href:"https://opensource.appbase.io/reactivesearch/demos/goodbooks/",description:""},{src:"../../reactivesearch/images/apps/technews.png",title:"Tech News Search",href:"https://opensource.appbase.io/reactivesearch/demos/technews/",description:""}]})},147:function(e,t,r){"use strict";t.__esModule=!0;var o=r(3),a=r(1),n=f(a),l=r(28),c=r(22),s=f(r(0)),i=r(10),u=r(21),p=f(r(30)),d=f(r(127));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){window.scrollTo(0,0)},t.prototype.render=function(){var e=this.props,t=e.config,r=e.theme,a=r.primary;return n.default.createElement(l.ThemeProvider,{theme:{primaryColor:"#0033FF"}},n.default.createElement(u.Base,null,n.default.createElement(i.Navbar,{bold:!0},n.default.createElement(i.Navbar.Logo,null,n.default.createElement(i.Logo,{href:t.header.logo.href},n.default.createElement(i.Logo.Icon,{className:(0,o.css)("color:#fff;")},n.default.createElement("img",{src:t.header.logo.src,alt:"Icon"})),n.default.createElement(i.Logo.Light,null,t.header.logo.title.light),n.default.createElement(i.Logo.Dark,null,t.header.logo.title.dark))),n.default.createElement(i.Navbar.List,null,t.header.links.map(function(e,t){return n.default.createElement("li",{className:"/demo"===e.href||"/native/demo"===e.href?"active":void 0,key:t},n.default.createElement(c.Link,{style:{color:"#424242"},to:e.href},e.description.toUpperCase()))}),n.default.createElement("li",{className:u.showMobileFlex},n.default.createElement("a",{href:t.urls.github},"GITHUB")),n.default.createElement("li",{className:"button"},n.default.createElement(i.Button,{style:{backgroundColor:r.secondary},href:t.urls.support,bold:!0,uppercase:!0},n.default.createElement("img",{src:"images/support.svg",style:{marginRight:8},alt:"support"})," SUPPORT")))),n.default.createElement(u.Section,null,n.default.createElement(u.Layout,{style:{marginTop:"50px"}},n.default.createElement(i.H1,null,t.title),n.default.createElement("p",{className:u.titleText},t.description),n.default.createElement(i.Grid,{size:t.demos.length/2,mdSize:2,smSize:1,gutter:"15px",smGutter:"0px",style:{margin:"50px 0px"}},t.demos.map(function(e,t){return n.default.createElement(d.default,{key:t,src:e.src},n.default.createElement("div",null,n.default.createElement(i.Title,null,e.title),n.default.createElement("p",null,e.description)),n.default.createElement("div",null,n.default.createElement(u.SecondaryLink,{primary:!0,href:e.href,style:{color:a}},"Check Demo")))})))),n.default.createElement(p.default,{configName:t.name,footerConfig:t.footer})))},t}(a.Component);m.propTypes={config:s.default.object.isRequired,theme:s.default.object.isRequired},t.default=m}}]);