(this.webpackJsonprockland=this.webpackJsonprockland||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(8),a=n.n(o),i=(n(13),n(3)),u=n.n(i),s=n(4),l=n(2),d=(n(15),n(5)),f=n(6);var h=function(){function e(t){Object(d.a)(this,e),this.data=t}return Object(f.a)(e,[{key:"get",value:function(e){return function(e,t){var n=e.concat();return n.sort((function(e,n){return function(e,t){return e<t?-1:e>t?1:0}(t(e),t(n))})),n}(this.data.photos,e.sortBy)}},{key:"search",value:function(e,t){return this.get(t).filter((function(t){return e.some((function(e){return t.description.includes(e)}))}))}}],[{key:"load",value:function(){var t=Object(s.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("data.json");case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",new e(r));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}(),v=(n(16),n(0));function j(e){var t="images/".concat(e.photo.image);return Object(v.jsx)("div",{className:"PhotoPreview",style:{backgroundImage:"url(".concat(t,")")},onClick:function(){return e.focusPhoto(e.photo)},children:Object(v.jsx)("div",{className:"PhotoPreviewDate",children:e.photo.date})})}n(18),n(19);function b(e){var t="images/".concat(e.photo.image);return Object(v.jsxs)("div",{className:"PhotoFocus",onClick:e.onExit,children:[Object(v.jsx)("div",{className:"PhotoFocusImage",style:{backgroundImage:"url(".concat(t,")")},children:"\xa0"}),Object(v.jsx)("div",{className:"PhotoFocusDate",children:e.photo.date}),Object(v.jsx)("div",{className:"PhotoFocusDescription",children:e.photo.description})]})}var O=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"readUrl",value:function(){var e=window.location.hash.split("#").pop();return console.log("hash",e),e}},{key:"setUrl",value:function(e){var t;window.location.replace("#".concat(null!==(t=null===e||void 0===e?void 0:e.image)&&void 0!==t?t:""))}}]),e}();function p(e){var t=Object(r.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)({sortBy:function(e){return e.date},reverse:!1}),i=Object(l.a)(a,2),u=i[0];i[1];var s=e.searchTerms.length?e.db.search(e.searchTerms,u):e.db.get(u);return Object(r.useEffect)((function(){var e,t=(new O).readUrl();if(t){var n=s.filter((function(e){return e.image===t}))[0];console.log(t,n),o(e=n),(new O).setUrl(e)}}),[]),Object(r.useEffect)((function(){var t=function(t){var n=e.db.get(u);"ArrowLeft"===t.code&&o((function(e){return function(e,t,n){var r=n?t.filter((function(t){return n(t,e)}))[0]:void 0,c=t.indexOf(null!==r&&void 0!==r?r:e);return t[(t.length+c-1)%t.length]}(e,n)})),"ArrowRight"===t.code&&o((function(e){return function(e,t,n){var r=n?t.filter((function(t){return n(t,e)}))[0]:void 0,c=t.indexOf(null!==r&&void 0!==r?r:e);return t[(t.length+c+1)%t.length]}(e,n)})),"Escape"===t.code&&o(void 0)};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),Object(v.jsxs)("div",{className:"GalleryContainer",onKeyDown:function(e){return t=e.code,void(void 0!==c&&console.log(t));var t},children:[s.map((function(e,t){return Object(v.jsx)(j,{photo:e,focusPhoto:function(e){return o(e)}},t)})),c&&Object(v.jsx)(b,{photo:c,onExit:function(){return o(void 0)}})]})}function g(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),a=Object(l.a)(o,2),i=a[0],d=a[1],f=Object(r.useState)([]),j=Object(l.a)(f,2),b=j[0],O=j[1];return Object(r.useEffect)((function(){Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.load();case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("h1",{children:"Rockland Fan Site"}),Object(v.jsx)("input",{placeholder:"Type here to search",value:i,onChange:function(e){return t=e.target.value,d(t),void O(t.split(" ").map((function(e){return e.trim()})));var t}})]}),n?Object(v.jsx)(p,{db:n,searchTerms:b}):Object(v.jsx)("h1",{children:"loading..."})]})}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),m()}],[[20,1,2]]]);
//# sourceMappingURL=main.5875ed84.chunk.js.map