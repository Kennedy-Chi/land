(window.webpackJsonp=window.webpackJsonp||[]).push([[48,18,19,20,21],{348:function(t,e,l){var content=l(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(150).default)("8971756a",content,!0,{sourceMap:!1})},349:function(t,e,l){var content=l(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(150).default)("1d01f3cd",content,!0,{sourceMap:!1})},353:function(t,e,l){"use strict";l.r(e);l(58),l(26);var c=l(8),n=(l(49),l(20),l(39),l(13),l(94),{data:function(){return{topPlan:"",wallets:[]}},methods:{getTopPlan:function(data){if(data.length>0){for(var t=data[0],i=1;i<data.length;i++)data[i].planMinimum>t.planMinimum&&(t=data[i]);return t}},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getPlans:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:l=e.sent,t.topPlan=t.getTopPlan(l.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getWallets:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:l=e.sent,t.wallets=l.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getPlans(),this.getWallets()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.topPlan?e("div",{staticClass:"child-d-3"},[e("div",{staticClass:"div-block-67"},[e("h1",{staticClass:"heading-16"},[t._v("Top plan")]),t._v(" "),e("div",{},[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planName))])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Rate")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planPercentage)+"%")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Minimum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMinimum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Maximum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMaximum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])]),t._v(" "),e("div",{staticClass:"div-block-95"},[t.wallets?e("div",{staticClass:"div-block-96"},[e("h1",{staticClass:"heading-30"},[t._v("My Portfolio")]),t._v(" "),t._l(t.wallets,(function(l){return e("div",{key:l._id,staticClass:"div-block-132"},[e("div",{staticClass:"div-block-133"},[e("img",{staticClass:"image-43",attrs:{src:"".concat(t.FILE_URL,"/").concat(l.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-131"},[e("h1",{staticClass:"heading-31"},[t._v(t._s(l.name))])]),t._v(" "),e("div",{staticClass:"div-block-99"},[e("div",{staticClass:"text-block-52"},[t._v(t._s(l.name))]),t._v(" "),e("div",{staticClass:"text-block-52"},[t._v("$"+t._s(t.formatMoney(l.balance)))])])])}))],2):t._e()])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Currency")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("USD")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])}],!1,null,null,null);e.default=component.exports},354:function(t,e,l){"use strict";l.r(e);var c=l(8),n=(l(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:l=e.sent,t.company=l.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var l=document.querySelector("#footer");l?l.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.setFileURL(),this.getCompany()}}),o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.company?e("div",{staticClass:"div-block-134"},[e("div",{staticClass:"text-block-53"},[t._v("\n    "+t._s((new Date).getFullYear())+" "+t._s(t.company.companyName)+", All Right\n    Reserved\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,l){"use strict";l.r(e);var c=l(8),n=(l(49),l(93),{data:function(){return{time:(new Date).toLocaleTimeString(),user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getClock:function(){var t=this;setInterval((function(){return t.getTime(new Date)}),1e3)},getTime:function(data){var t=new Date(data),e=t.getHours(),l=t.getMinutes(),c=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(l=l<10?"0"+l:l)+" "+c},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},authenticateUser:function(){this.isAuthenticated?"Admin"==this.user.status&&this.$router.push("/admin"):this.$router.push("/")},getAUser:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:l=e.sent,t.user=l.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.authenticateUser(),this.getAUser(),setInterval((function(){t.time=(new Date).toLocaleTimeString()}),1e3)},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),o=(l(362),l(57)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"div-block-139"}),t._v(" "),e("div",{staticClass:"div-block-26"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image-44",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})],1),t._v(" "),e("div",{staticClass:"div-block-28"},[e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/colored-user-profile.svg",loading:"lazy",alt:""}}),t._v(" "),t.user?e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.user.username))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.user.email))])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/calendar.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.formatDate(new Date)))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.time))])]),t._v(" "),e("img",{staticClass:"image-46",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])])])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,l){"use strict";l.r(e);var c=l(8),n=(l(26),l(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/dashboard.css"}]}}}),o=(l(364),l(57)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child-d-1",class:{hide:!t.navState}},[e("div",{staticClass:"div-block-18"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}}),t._v(" "),e("div",{staticClass:"div-block-21"},[e("img",{staticClass:"image-2",attrs:{src:"/dashboard-images/close-nav.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])],1),t._v(" "),e("div",{staticClass:"div-block-25"},[e("nuxt-link",{staticClass:"div-block-19",class:{blue:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e191c9a0935e1a449bd_dash-icon%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link"},[t._v("Account Balance")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e38650a2eef0383e3ce_deposit%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Make deposit")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit-list"==t.route},attrs:{to:"/deposit-list"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642eabd6ddf0a4ed0edf33_deposit_list.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Deposit List")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"withdrawal"==t.route},attrs:{to:"/withdrawal"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642ecc8b338263ec539dfd_withdraw.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Withdrawal")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"history"==t.route},attrs:{to:"/history"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("History")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"earnings"==t.route},attrs:{to:"/earnings"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Earnings")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"referral"==t.route},attrs:{to:"/referral"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f225578cd28b192fc2d_referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Referrals")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fbdc818cd423ff2d48b_setting.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Profile")])])]),t._v(" "),e("div",{staticClass:"div-block-19",on:{click:t.logout}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fe0a1bc891dfc0c29c0_logout.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0)])],1),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("h3",{staticClass:"heading-8"},[t("span",{staticClass:"link-9",attrs:{href:"https://realestatefinancecountry.com/?a=logout"}},[t("strong",{staticClass:"bold-text-17"},[this._v("Logout")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-24"},[e("h3",{staticClass:"heading-9"},[t._v("Support")]),t._v(" "),e("div",{staticClass:"text-block-6"},[e("strong",[t._v("For any enquiries about us")]),t._v("‍"),e("strong",[t._v("Kindly chat us on our live support")])]),t._v(" "),e("div",{staticClass:"div-block-23"},[e("div",{staticClass:"text-block-7"},[t._v("Online Enquiry")])])])}],!1,null,null,null);e.default=component.exports},362:function(t,e,l){"use strict";l(348)},363:function(t,e,l){var c=l(149)((function(i){return i[1]}));c.push([t.i,".image-44{min-width:100px}.image-46{min-width:25px}",""]),c.locals={},t.exports=c},364:function(t,e,l){"use strict";l(349)},365:function(t,e,l){var c=l(149)((function(i){return i[1]}));c.push([t.i,".div-block-19{cursor:pointer}.image.brand{height:auto;min-width:100px}",""]),c.locals={},t.exports=c},483:function(t,e,l){"use strict";l.r(e);var c=l(353),n=l(354),o=l(355),r=l(356),d={components:{DashboardFooter:n.default,DashboardNavigation:r.default,DashboardHeader:o.default,DashboardAside:c.default}},v=l(57),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"security-settings"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"mother-d"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"child-d-2"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"div-block-30"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("a",{staticClass:"button-8 w-button",attrs:{href:"#"}},[t._v("Save")]),t._v(" "),t._m(3),t._v(" "),t._m(4)],1),t._v(" "),e("dashboard-aside")],1)]),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-31"},[t("h1",{staticClass:"heading-10"},[this._v("Security Settings")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-119"},[e("h1",{staticClass:"heading-28"},[t._v("Detect IP address change sensitivity")]),t._v(" "),e("div",{staticClass:"div-block-121 wrap"},[e("a",{staticClass:"link-block-4 _1 w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-block-45"},[t._v("Disabled")]),t._v(" "),e("img",{staticClass:"image-42",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/636df61861df2924f09165dd_approved-accept-icon%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"link-block-4 w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-block-46"},[t._v("Medium")])]),e("a",{staticClass:"link-block-4 w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-block-47"},[t._v("High")])]),e("a",{staticClass:"link-block-4 w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-block-48"},[e("strong",{staticClass:"bold-text-15"},[t._v("Paranoiac")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-119 div-block-122"},[e("h1",{staticClass:"heading-28"},[t._v("Detect browser change")]),t._v(" "),e("div",{staticClass:"div-block-121 enable"},[e("a",{staticClass:"link-block-4 _1 good w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-block-45"},[t._v("Disabled")]),t._v(" "),e("img",{staticClass:"image-42",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/636df61861df2924f09165dd_approved-accept-icon%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"link-block-4 normal w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-block-46"},[e("strong",{staticClass:"bold-text-16"},[t._v("Enabled")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-block-2 w-form"},[e("form",{staticClass:"form-2",attrs:{id:"email-form-2",name:"email-form-2","data-name":"Email Form 2",method:"get"}},[e("input",{staticClass:"text-field-2 w-input",attrs:{type:"email",maxlength:"256",name:"email-3","data-name":"Email 3",placeholder:"http://realestatefinancecountry.com/?ref=ben",id:"email-3",required:""}}),t._v(" "),e("div",{staticClass:"div-block-93"},[e("img",{staticClass:"image-35",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/636b3fd6d0fed9ff09216395_copy-link-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("Oops! Something went wrong while submitting the form.")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-84"},[e("div",{staticClass:"div-block-85"},[e("div",{staticClass:"div-block-86"},[e("div",{staticClass:"text-block-32"},[e("strong",[t._v("Total Amount")])]),t._v(" "),e("div",{staticClass:"text-block-32"},[e("strong",[t._v("80%")])])]),t._v(" "),e("div",{staticClass:"text-block-32"},[e("strong",[t._v("$ 0")])]),t._v(" "),e("div",{staticClass:"div-block-87"},[e("div",{staticClass:"div-block-88"})])]),t._v(" "),e("div",{staticClass:"div-block-85 card--b"},[e("div",{staticClass:"div-block-86"},[e("div",{staticClass:"text-block-32"},[e("strong",[t._v("Income")])])]),t._v(" "),e("div",{staticClass:"div-block-91"},[e("div",{staticClass:"text-block-32"},[e("strong",[t._v("$ 0.00")])]),t._v(" "),e("div",{staticClass:"div-block-89 _8"},[e("div",{staticClass:"text-block-33"},[t._v("80")])])]),t._v(" "),e("div",{staticClass:"text-block-32"},[e("strong",[t._v("- 5%")])])]),t._v(" "),e("div",{staticClass:"div-block-85 card--b"},[e("div",{staticClass:"div-block-86"},[e("div",{staticClass:"text-block-32"},[e("strong",[t._v("Withdrawal")])])]),t._v(" "),e("div",{staticClass:"div-block-91"},[e("div",{staticClass:"text-block-32"},[e("strong",[t._v("$ 0.00")])]),t._v(" "),e("div",{staticClass:"div-block-89"},[e("div",{staticClass:"text-block-33"},[t._v("80")])])]),t._v(" "),e("div",{staticClass:"text-block-32"},[e("strong",[t._v("- 5%")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:l(356).default,DashboardHeader:l(355).default,DashboardAside:l(353).default,DashboardFooter:l(354).default})}}]);