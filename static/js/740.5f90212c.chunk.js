"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[740],{126:function(t,e,n){n.d(e,{HI:function(){return o},IR:function(){return f},M1:function(){return a},Rw:function(){return u},tx:function(){return s}});var c=n(912),r="4bfe41b6169c7be93b3bc557879c6ed6",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),u=function(){return i.get("/trending/movie/day?api_key=".concat(r))},o=function(t){return i.get("/movie/".concat(t,"?api_key=").concat(r))},a=function(t){return i.get("movie/".concat(t,"/credits?api_key=").concat(r))},s=function(t){return i.get("movie/".concat(t,"/reviews?api_key=").concat(r))},f=function(t){return i.get("search/movie?api_key=".concat(r,"&query=").concat(t))}},740:function(t,e,n){n.r(e);var c=n(439),r=n(791),i=n(126),u=n(87),o=n(689),a=n(184);e.default=function(){var t=(0,r.useState)([]),e=(0,c.Z)(t,2),n=e[0],s=e[1],f=(0,r.useState)(""),h=(0,c.Z)(f,2),l=h[0],v=h[1],d=(0,u.lr)(),m=(0,c.Z)(d,2),p=(m[0],m[1]),_=(0,r.useState)(""),b=(0,c.Z)(_,2),g=b[0],k=b[1],y=(0,o.TH)();(0,r.useEffect)((function(){""!==l&&(0,i.IR)(l).then((function(t){s(t.data.results)}))}),[l]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),v(g),function(t,e){p(""!==t?{query:t}:{})}(g),k("")},children:[(0,a.jsx)("input",{onChange:function(t){k(t.target.value)},value:g}),(0,a.jsx)("button",{type:"submit",children:"Search"})]}),(0,a.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:y},children:n})},e)}))})]})}}}]);
//# sourceMappingURL=740.5f90212c.chunk.js.map