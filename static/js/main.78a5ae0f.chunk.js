(this.webpackJsonpimage_gallery=this.webpackJsonpimage_gallery||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(4),a=s.n(c),r=(s(9),s(2)),l=s(0),i=function(e){var t=e.image,s=e.views,n=e.downloads,c=e.likes,a=e.user,r=e.tags;return Object(l.jsx)("div",{children:void 0===t?null:Object(l.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(l.jsx)("img",{src:t,alt:"",className:"w-full"}),Object(l.jsxs)("div",{className:"px-6 py-4",children:[Object(l.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo By ",a]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Views:"}),s]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Downloads:"}),n]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Likes:"}),c]})]})]}),Object(l.jsx)("div",{className:"px-6 pt-4",children:void 0===r?null:r.split(",").map((function(e,t){return Object(l.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2",children:["#",e]},t)}))})]})})},o=function(e){var t=e.searchText,s=Object(n.useState)(""),c=Object(r.a)(s,2),a=c[0],i=c[1];return Object(l.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(e),t(a)},className:"w-full max-w-sm",children:Object(l.jsxs)("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2",children:[Object(l.jsx)("input",{onChange:function(e){return i(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),Object(l.jsx)("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Search"})]})})})};var d=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!0),d=Object(r.a)(a,2),j=d[0],b=d[1],u=Object(n.useState)(""),x=Object(r.a)(u,2),m=x[0],h=x[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("20350662-53381fad49366daca612ff64c","&q=").concat(m,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){c(e.hits),b(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)(o,{searchText:function(e){return h(e)}}),j?Object(l.jsx)("h1",{className:"text-6xl text-center mx-auto mt-32",children:"Loading..."}):Object(l.jsx)("div",{className:"grid grid-cols-3 gap-4",children:s.map((function(e){return Object(l.jsx)(i,{image:e.webformatURL,user:e.user,likes:e.likes,downloads:e.downloads,views:e.views,tags:e.tags},e.id)}))})]})};a.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.78a5ae0f.chunk.js.map