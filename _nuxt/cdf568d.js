(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{239:function(e,r,t){"use strict";t.r(r);var n={data:function(){return{user:{}}},methods:{register:function(){var e=this;this.$axios.post("/register",this.user).then((function(){return e.$auth.loginWith("local",{data:e.user})})).then((function(){return e.$toast.success("Registered and Logged In. Welcome!")})).catch((function(r){return e.$toast.error("Sorry, something's wrong.")})),console.log(this.user)}},computed:{}},o=t(33),component=Object(o.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("b-container",[t("h1",[e._v("Register")]),e._v(" "),t("p",[e._v("You'll be there in one minute!")]),e._v(" "),t("b-form",{on:{submit:function(r){return r.preventDefault(),e.register(r)}}},[t("b-form-group",{attrs:{label:"username"}},[t("b-input",{model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"email"}},[t("b-input",{model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"password"}},[t("b-input",{model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"avatar"}},[t("b-input",{model:{value:e.user.avatar,callback:function(r){e.$set(e.user,"avatar",r)},expression:"user.avatar"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"bio"}},[t("b-input",{model:{value:e.user.bio,callback:function(r){e.$set(e.user,"bio",r)},expression:"user.bio"}})],1),e._v(" "),t("b-checkbox",{staticClass:"mb-3",model:{value:e.user.teaching,callback:function(r){e.$set(e.user,"teaching",r)},expression:"user.teaching"}},[e._v("are you a teacher")]),e._v(" "),t("b-button",{attrs:{type:"submit"}},[e._v("Submit")])],1),e._v(" "),t("hr")],1)],1)}),[],!1,null,"36495912",null);r.default=component.exports}}]);