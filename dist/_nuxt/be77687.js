(window.webpackJsonp=window.webpackJsonp||[]).push([[49,20,21,22],{330:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("8bff8cba",content,!0,{sourceMap:!1})},331:function(t,e,r){"use strict";r.r(e);var o={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},n=r(61),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},333:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("55890a68",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(53),{head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),l=(r(344),r(61)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo"},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("nuxt-link",[e("img",{staticClass:"logo dash",attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"welcome-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/settings"}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header-holder"},[t("h1",{staticClass:"top-header"},[this._v("Welcome To Bitpal")])])},function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(30),r(53),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),l=(r(341),r(61)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("@ Bitpal - 2023")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        This is some text inside of a div block.\n      ")])])}],!1,null,null,null);e.default=component.exports},341:function(t,e,r){"use strict";r(330)},342:function(t,e,r){var o=r(149)((function(i){return i[1]}));o.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),o.locals={},t.exports=o},344:function(t,e,r){"use strict";r(333)},345:function(t,e,r){var o=r(149)((function(i){return i[1]}));o.push([t.i,".image-14.dash{width:25px}.logo.dash{display:block;min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),o.locals={},t.exports=o},398:function(t,e,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("365cae93",content,!0,{sourceMap:!1})},466:function(t,e,r){"use strict";r(398)},467:function(t,e,r){var o=r(149)((function(i){return i[1]}));o.push([t.i,".button.custom{background:#7cb50c;border-radius:5px;color:#fff}",""]),o.locals={},t.exports=o},507:function(t,e,r){"use strict";r.r(e);r(30);var o=r(8),n=(r(53),r(97),r(13),r(45),r(331)),l=r(336),d={data:function(){return{wallets:[],oldPassword:"",password:"",cPassword:"",showResponse:!1,showReviewResponse:!1,isError:!1,response:"",onRequest:!1}},methods:{callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("oldPassword"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".oldPassword").classList.add("active"),!1;this.$el.querySelector(".oldPassword").classList.remove("active"),this.isError=!0}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("active"),!1;this.$el.querySelector(".password").classList.remove("active"),this.isError=!0}else if("cPassword"==input){if(""==data||data!=this.password)return this.$el.querySelector(".cPassword").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".cPassword").classList.remove("active"),this.isError=!0}},setArray:function(){this.checkArray=[{name:"oldPassword",data:this.oldPassword},{name:"password",data:this.password},{name:"cPassword",data:this.cPassword}]},updatePassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setArray(),t.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),t.isError){e.next=4;break}return e.abrupt("return");case 4:return form={oldPassword:t.oldPassword,password:t.password,cPassword:t.cPassword},e.prev=5,e.next=8,t.$axios.patch("/users/update-password",form);case 8:t.callResponse("Your password has been updated, logout and login to continue",!1),t.clearInputs(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t.callResponse(e.t0,!0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},updateWallet:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={wallets:t.wallets,user:t.user},e.prev=1,e.next=4,t.$axios.patch("/wallet",form);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},getWallets:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:r=e.sent,t.wallets=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getWallets()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}},components:{DashboardNavigation:r(338).default,DashboardHeader:l.default,DashboardFooter:n.default}},c=(r(466),r(61)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"change-password-holder"},[e("div",{staticClass:"change-password"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"profile-content-1"},[e("div",{staticClass:"input-holder"},[e("div",{staticClass:"profile-form w-form"},[e("div",[e("div",{staticClass:"profile-form-content"},[e("div",{staticClass:"profile-form-holder"},[t._m(1),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.fullName,expression:"user.fullName"}],staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256"},domProps:{value:t.user.fullName},on:{input:function(e){e.target.composing||t.$set(t.user,"fullName",e.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"profile-form-holder"},[t._m(5),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[t._m(6),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],staticClass:"profile-text-input w-input",attrs:{type:"passsword",maxlength:"256"},domProps:{value:t.oldPassword},on:{input:function(e){e.target.composing||(t.oldPassword=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[t._m(7),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"profile-text-input w-input",attrs:{type:"password",maxlength:"256"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[t._m(8),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"profile-text-input w-input",attrs:{type:"password",maxlength:"256"},domProps:{value:t.cPassword},on:{input:function(e){e.target.composing||(t.cPassword=e.target.value)}}})])])]),t._v(" "),t._m(9)]),t._v(" "),e("div",{staticClass:"profile-form-holder"},[t._m(10),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},t._l(t.wallets,(function(r){return e("div",{key:r._id,staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v(t._s(r.name))])]),t._v(" "),r.address?e("input",{directives:[{name:"model",rawName:"v-model",value:r.address,expression:"wallet.address"}],staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256"},domProps:{value:r.address},on:{input:function(e){e.target.composing||t.$set(r,"address",e.target.value)}}}):e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter your wallet address"}})])])})),0),t._v(" "),t._m(11)])])])])])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"profile-top-holder"},[t("h1",{staticClass:"main-heading"},[this._v("profile")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-top-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Personal Information")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-header-holder"},[t("div",{staticClass:"input-text"},[this._v("Username")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-header-holder"},[t("div",{staticClass:"input-text"},[this._v("E-mail")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-header-holder"},[t("div",{staticClass:"input-text"},[this._v("Full Name")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-top-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Chang Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-header-holder"},[t("div",{staticClass:"input-text"},[this._v("Old Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-header-holder"},[t("div",{staticClass:"input-text"},[this._v("Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"input-header-holder"},[t("div",{staticClass:"input-text"},[this._v("Confirm Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"profile-button-holder"},[t("button",{staticClass:"green-button w-button custom"},[this._v("\n                      Update Password\n                    ")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-top-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Payment Details")])])},function(){var t=this._self._c;return t("div",{staticClass:"profile-button-holder"},[t("button",{staticClass:"green-button w-button custom"},[this._v("\n                      Update Wallet\n                    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(338).default,DashboardHeader:r(336).default,DashboardFooter:r(331).default})}}]);