(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{238:function(e,t,r){"use strict";r.r(t);r(41);var n=r(10),o={middleware:["auth"],asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,e.params,n=e.store,t.next=3,r.$get("/profile/".concat(n.state.auth.user.id));case 3:return o=t.sent,t.next=6,r.$get("/messages/".concat(n.state.auth.user.id));case 6:return c=t.sent,t.abrupt("return",{profile:o,messages:c});case 8:case"end":return t.stop()}}),t)})))()}},c=r(33),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",[e._v("\n    "+e._s(e.profile)+"\n    "),r("h1",[e._v("Profile of "+e._s(e.profile.username.toUpperCase()))]),e._v(" "),r("b-card",{attrs:{header:"Profile"}},[r("img",{attrs:{src:e.profile.avatar,alt:""}}),e._v(" "),r("h1",[e._v(e._s(e.profile.bio))]),e._v(" "),r("h2",[e._v("You have "+e._s(e.profile.matches.length)+" matches!")])])],1)],1)}),[],!1,null,"2192a57f",null);t.default=component.exports}}]);