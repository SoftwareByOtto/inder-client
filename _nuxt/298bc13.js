(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(e,t,r){var content=r(230);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("f8bada24",content,!0,{sourceMap:!1})},229:function(e,t,r){"use strict";r(228)},230:function(e,t,r){(t=r(53)(!1)).push([e.i,".grid[data-v-7ff7796b]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:10px;gap:10px}",""]),e.exports=t},231:function(e,t,r){"use strict";r(88),r(70),r(71);var n=r(232),o=r.n(n),l={name:"Profiles",props:["likable","users","label"],methods:{random:function(){return o.a.random(1e4,2e4)}},data:function(){return{search:""}},computed:{filteredUsers:function(){var e=this;return this.users.filter((function(t){return t.username.toLowerCase().includes(e.search.toLowerCase())}))},_:function(){return o.a}}},c=(r(229),r(33)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form-group",{attrs:{label:"search"}},[r("b-input",{attrs:{placeholder:"e.g. John"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("div",{staticClass:"grid"},e._l(e.filteredUsers,(function(t){return r("div",{key:t.id},[r("b-card",{attrs:{header:e.label,"img-src":t.avatar,"img-top":"",title:t.username.split(" ")[0],footer:e._.get(t,"__meta__.inverse_likes_count")+" points"}},[r("p",[r("b-badge",[e._v(e._s(t.teaching?"teacher":"student"))])],1),e._v(" "),r("i",[e._v("Hey, I'm "+e._s(t.username))]),e._v(" "),r("p",[e._v(e._s(t.bio||"No description..."))]),e._v(" "),e.likable?r("b-button",{attrs:{variant:"success"},on:{click:function(r){return e.$emit("emitLike",t.id)}}},[e._v("like")]):e._e(),e._v(" "),e.likable?r("b-button",{attrs:{variant:"danger"},on:{click:function(r){return e.$emit("emitDislike",t.id)}}},[e._v("dislike")]):e._e(),e._v(" "),r("nuxt-link",{staticClass:"ml-3",attrs:{to:"/profile/"+t.id}},[e._v("My Profile")])],1)],1)})),0)],1)}),[],!1,null,"7ff7796b",null);t.a=component.exports},235:function(e,t,r){"use strict";r.r(t);r(41);var n=r(10),o={middleware:["auth"],components:{Profiles:r(231).a},methods:{},computed:{},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.$get("likes");case 3:return n=t.sent,t.abrupt("return",{likes:n});case 5:case"end":return t.stop()}}),t)})))()}},l=r(33),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-container",[t("h1",[this._v("likes")]),this._v(" "),t("h2",[this._v("You have "+this._s(this.likes.length)+" likes!")]),this._v(" "),t("Profiles",{attrs:{users:this.likes,label:"Liked 👍"}})],1)],1)}),[],!1,null,"61c0ce5f",null);t.default=component.exports}}]);