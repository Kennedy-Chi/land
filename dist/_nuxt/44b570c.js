(window.webpackJsonp=window.webpackJsonp||[]).push([[52,20,21,22],{354:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("bdf5d396",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n.r(e);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#top");n?n.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.setFileURL()}},o=n(57),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},356:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("a0a110c4",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},data:function(){return{company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),c=(n(370),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo dash",attrs:{src:"/dashboard-images/Landmark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},361:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(49),{data:function(){return{route:"",company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav(),this.getCompany()}}),c=(n(368),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit List")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposits.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Referrals")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @"+t._s(t.company.companyName)+" - "+t._s((new Date).getFullYear())+"\n      ")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        Thanks for choosing "+t._s(t.company.companyName)+", we'll be glad you tell\n        others about us.\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n(354)},369:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),r.locals={},t.exports=r},370:function(t,e,n){"use strict";n(356)},371:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".image-14.dash{width:25px}.logo.dash{display:block;min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),r.locals={},t.exports=r},427:function(t,e,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("7efee9f6",content,!0,{sourceMap:!1})},498:function(t,e,n){"use strict";n(427)},499:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".button.custom{background:#7cb50c;border-radius:5px;color:#fff}.each-other-card{margin-bottom:20px}.each-other-card.active{background:#53780a}",""]),r.locals={},t.exports=r},540:function(t,e,n){"use strict";n.r(e);n(58),n(26);var r=n(8),o=(n(49),n(20),n(42),n(11),n(95),n(93),n(41),n(236),n(355)),c=n(360),l={data:function(){return{wallets:[],plans:[],currencies:[],selectedWallet:"",amount:10,percent:"",showInput:!1,pendingWithdrawal:"",maxArray:[],percentArray:[],response:"",isError:!1,showResponse:!1}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,setTimeout((function(){n.showResponse=!1}),6e3)},selectWallet:function(t){0!=t.balance&&(this.wallets.forEach((function(t){t.checked=!1})),t.checked=!0,this.selectedWallet=t,this.showInput=!0)},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},setMaxArray:function(t){var e=this;t.forEach((function(t){e.maxArray.push(t.planMaximum),e.percentArray.push(t.planPercentage)}))},setPercentage:function(){Number(this.amount)<Number(this.maxArray[0])?this.percent=Number(this.percentArray[0]):Number(this.amount)>Number(this.maxArray[0])?this.percent=this.percentArray[1]:Number(this.amount)>Number(this.maxArray[1])&&(this.percent=this.percentArray[2])},setPendingWithdrawal:function(data){if(data.length>0){var t=0;return data.forEach((function(e){t+=e.amount})),t}},proceedToWithdraw:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.selectedWallet.balance<t.amount)){e.next=3;break}return t.callResponse("Sorry, you have insufficient fund for this transaction",!0),e.abrupt("return");case 3:if(""!=t.selectedWallet.walletAddress){e.next=6;break}return t.callResponse("Sorry, please set wallet address for this wallet.",!0),e.abrupt("return");case 6:return form={amount:t.amount,symbol:t.selectedWallet.symbol,transactionType:"withdrawal",username:t.user.username,user:t.user,planName:"Not Available",planDuration:0,walletName:t.selectedWallet.name,walletId:t.selectedWallet._id,time:(new Date).getTime()},e.prev=7,e.next=10,t.$axios.post("/transactions",form);case 10:e.sent,t.callResponse("The withdrawal is pending and will be approved after confirmation",!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})))()},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:n=e.sent,t.wallets=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPendingWithdrawals:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/?username=".concat(t.user.username,"&transactionType=withdrawal&status=false"));case 3:n=e.sent,t.pendingWithdrawal=t.setPendingWithdrawal(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCurrencies:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/currency");case 3:n=e.sent,t.currencies=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getWallets(),this.getCurrencies(),this.getPendingWithdrawals()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:o.default,DashboardHeader:c.default}},d=(n(498),n(57)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"withdrawal-funds"},[e("div",{staticClass:"account-stastiscs"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"account"},[e("div",{staticClass:"account-card"},[e("div",{staticClass:"top-card-one"},[e("div",{staticClass:"circle-bg"},[e("div",{staticClass:"middle-holder"},[e("div",{staticClass:"middle-side-content"},[t._m(1),t._v(" "),e("div",{staticClass:"sub-text-holder"},[e("div",{staticClass:"plan-heading"},[t._v("\n                      $"+t._s(t.user.totalBalance)+" USD\n                    ")])])]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"top-card-one"},[e("div",{staticClass:"circle-bg"},[e("div",{staticClass:"middle-holder"},[e("div",{staticClass:"middle-side-content"},[t._m(3),t._v(" "),e("div",{staticClass:"sub-text-holder"},[e("div",{staticClass:"plan-heading"},[t._v("\n                      $"+t._s(t.formatMoney(t.pendingWithdrawal))+" USD\n                    ")])])]),t._v(" "),t._m(4)])])])]),t._v(" "),e("div",{staticClass:"other-card-holder"},t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"each-other-card",class:{active:n.checked},on:{click:function(e){return t.selectWallet(n)}}},[e("div",{staticClass:"img-other"},[e("img",{staticClass:"account-bitcoin",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}}),t._v("\n              "+t._s(n.name)+"\n            ")]),t._v(" "),e("div",{staticClass:"img-other"},[e("nuxt-link",{attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-36",attrs:{src:"/dashboard-images/pen.svg",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"other-inside-middle pading"},[t._m(5,!0),t._v(" "),e("div",{staticClass:"other-middle-text"},[e("div",{staticClass:"pay-header"},[t._v("\n                  $"+t._s(t.formatMoney(n.balance))+" USD\n                ")])])]),t._v(" "),e("div",{staticClass:"other-white-line"}),t._v(" "),e("div",{staticClass:"other-inside-middle"},[t._m(6,!0),t._v(" "),e("div",{staticClass:"other-middle-text"},[e("div",{staticClass:"pay-header"},[t._v("\n                  $"+t._s(t.formatMoney(n.pendingWithdrawal))+" USD\n                ")])])])])})),0),t._v(" "),e("div",{staticClass:"account-buttom-content"},[t._m(7),t._v(" "),t._m(8),t._v(" "),e("div",{staticClass:"account-payment-input"},[e("div",{staticClass:"payment-input-form"},[e("div",{staticClass:"payment-form w-form"},[e("div",[e("div",{staticClass:"hold-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-field w-input amount",attrs:{type:"text",maxlength:"256"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text error",class:{error:t.isError}},[t._v("\n                      "+t._s(t.response)+"\n                    ")]):t._e()]),t._v(" "),e("button",{staticClass:"button w-button custom",on:{click:t.proceedToWithdraw}},[t._v("\n                    Deposit\n                  ")])])])])])])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"account-top-header"},[t("h1",{staticClass:"main-heading"},[this._v("Withdrawal funds")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-heading-holder"},[t("h1",{staticClass:"plan-heading card-header"},[this._v("Total Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"thick-header-holder"},[t("img",{staticClass:"account-topicon-1",attrs:{src:"/dashboard-images/pending.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"sub-heading-holder"},[t("h1",{staticClass:"plan-heading card-header"},[this._v("\n                      pending withdrawal\n                    ")])])},function(){var t=this._self._c;return t("div",{staticClass:"thick-header-holder"},[t("img",{staticClass:"account-topicon-two",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432acb43030fd0243cf3bcb_dollar-money-bag-icon%201.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"other-middle-header"},[t("h1",{staticClass:"sub-heading"},[this._v("Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"other-middle-header"},[t("h1",{staticClass:"sub-heading"},[this._v("Pending Withdrawal")])])},function(){var t=this._self._c;return t("div",{staticClass:"account-button-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Select Payment")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-buttom-cover"},[e("img",{staticClass:"select-cover-arrow",attrs:{src:"/dashboard-images/arrow.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"sub-heading"},[t._v("Select from the balance")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:n(361).default,DashboardHeader:n(360).default,DashboardFooter:n(355).default})}}]);