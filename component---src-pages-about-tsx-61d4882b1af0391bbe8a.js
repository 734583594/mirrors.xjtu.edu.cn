(self.webpackChunkmirrors_xjtu_edu_cn=self.webpackChunkmirrors_xjtu_edu_cn||[]).push([[49],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,s){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),s=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),s=r(7316),c=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),p=r(4983).mdx,m=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=s(e,c),l=m(t),f=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:p},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(f,i({},a))}},784:function(e,t,r){"use strict";r.d(t,{U:function(){return c}});var n=r(7294),o=r(4983),a=r(2102),s=r(1852),c=function(e){var t=e.body;return n.createElement(o.MDXProvider,{components:{a:function(e){var t=e.href&&!e.href.startsWith("/")&&!e.href.startsWith("?")&&!e.href.startsWith("#");return n.createElement("a",Object.assign({},e,{className:e.className?e.className:"group underline-offset-2 transition-colors duration-300 decoration-sky-300 hover:decoration-sky-700",rel:t&&"noopener noreferrer nofollow",target:t&&"_blank"}),e.children,t&&n.createElement(s.y_S,{className:"inline stroke-1 h-2.5 mb-1 transition-colors duration-300 text-sky-300 group-hover:text-sky-700"}))},h1:function(e){return n.createElement("h1",Object.assign({},e,{className:"whitespace-pre-wrap"}))},h2:function(e){return n.createElement("h2",Object.assign({},e,{className:"whitespace-pre-wrap"}))},h3:function(e){return n.createElement("h3",Object.assign({},e,{className:"whitespace-pre-wrap"}))},h4:function(e){return n.createElement("h4",Object.assign({},e,{className:"whitespace-pre-wrap"}))}}},n.createElement(a.MDXRenderer,null,t))}},8509:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1597),a=r(1852),s=r(784);t.default=function(){var e,t=(0,o.K2)("2469937584");return n.createElement("div",{className:"max-w-8xl mx-auto px-4 sm:px-6 md:px-8"},n.createElement("div",{className:"grid grid-cols-4 gap-4 py-10"},n.createElement("div",{className:"col-span-1"}),n.createElement("div",{className:"col-span-3"},n.createElement("div",{className:"grid grid-cols-4 gap-4"},n.createElement("div",{className:"col-span-3"},n.createElement("div",null,n.createElement("div",null,n.createElement("h1",{className:"inline-block text-4xl font-light text-slate-900 tracking-tight"},t.mdx.frontmatter.title)),n.createElement("p",{className:"mt-2 text-lg text-slate-700"},t.mdx.frontmatter.description)),n.createElement("div",{className:"prose prose-sky mt-8"},n.createElement(s.U,{body:t.mdx.body})),n.createElement("div",{className:"text-sm leading-6 mt-12"},n.createElement("div",{className:"flex justify-between text-slate-500"},n.createElement("div",null,n.createElement("a",{className:"transition-colors duration-300 hover:text-slate-900",href:"#top"},"回到页面顶端"," ",n.createElement(a.a4S,{className:"inline h-4 mb-0.5"}))),n.createElement("div",null,n.createElement("a",{className:"transition-colors duration-300 hover:text-slate-900",href:"https://github.com/openana/mirrors.xjtu.edu.cn/edit/master/content/"+t.mdx.slug+".mdx"},"在 GitHub 上编辑此页"," ",n.createElement(a.HlX,{className:"inline h-4 mb-0.5"})))))),n.createElement("div",{className:"col-span-1"},n.createElement("div",{className:"fixed"},n.createElement("h5",{className:"text-slate-900 font-semibold mb-4 text-sm leading-6"},"目录"),n.createElement("ul",{className:"text-slate-700 text-sm leading-6"},null===(e=t.mdx.tableOfContents.items)||void 0===e?void 0:e.map((function(e,t){var r=e.url,o=e.title;return n.createElement("li",{key:t},n.createElement("a",{href:r,className:"block py-1 font-medium hover:text-slate-900"},o))})))))))))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-61d4882b1af0391bbe8a.js.map