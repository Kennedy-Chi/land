(window.webpackJsonp=window.webpackJsonp||[]).push([[48,20,21,22],{315:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(144).default)("bdf5d396",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r.r(e);var n={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var r=document.querySelector("#top");r?r.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.setFileURL()}},o=r(56),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},317:function(t,e,r){var content=r(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(144).default)("1306d97e",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(48),{head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},data:function(){return{company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),l=(r(330),r(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo dash",attrs:{src:"/dashboard-images/Landmark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])],1)])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(26),r(48),{data:function(){return{route:"",company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav(),this.getCompany()}}),l=(r(328),r(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit List")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposits.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Referrals")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @"+t._s(t.company.companyName)+" - "+t._s((new Date).getFullYear())+"\n      ")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        Thanks for choosing "+t._s(t.company.companyName)+", we'll be glad you tell\n        others about us.\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,r){"use strict";r(315)},329:function(t,e,r){var n=r(143)((function(i){return i[1]}));n.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),n.locals={},t.exports=n},330:function(t,e,r){"use strict";r(317)},331:function(t,e,r){var n=r(143)((function(i){return i[1]}));n.push([t.i,".image-14.dash{width:25px}.logo.dash{display:block;min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),n.locals={},t.exports=n},335:function(t,e,r){"use strict";var n=r(2),o=r(3),l=r(59),c=r(218),d=r(216),h=r(4),v=RangeError,m=String,f=Math.floor,_=o(d),C=o("".slice),x=o(1..toFixed),y=function(t,e,r){return 0===e?r:e%2==1?y(t,e-1,r*t):y(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=f(n/1e7)},k=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=f(r/t),r=r%t*1e7},D=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:h((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!h((function(){x({})}))},{toFixed:function(t){var e,r,n,o,d=c(this),h=l(t),data=[0,0,0,0,0,0],f="",x="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(f="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*y(2,69,1))-69)<0?d*y(2,-e,1):d/y(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),n=h;n>=7;)w(data,1e7,0),n-=7;for(w(data,y(10,n,1),0),n=e-1;n>=23;)k(data,1<<23),n-=23;k(data,1<<n),w(data,1,1),k(data,2),x=D(data)}else w(data,0,r),w(data,1<<-e,0),x=D(data)+_("0",h);return x=h>0?f+((o=x.length)<=h?"0."+_("0",h-o)+x:C(x,0,o-h)+"."+C(x,o-h)):f+x}})},373:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(144).default)("5340041c",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r(373)},402:function(t,e,r){var n=r(143)((function(i){return i[1]}));n.push([t.i,".image-17.dot{width:3px}.image-18.link{width:8px}.transact-button{background-color:#7cb50c;border-radius:5px;margin-right:20px}.green-card-button{background-color:#fff;border-radius:5px;color:#000}.depositing-button{background-color:#dcdcdc;border-radius:5px;color:#000}",""]),n.locals={},t.exports=n},476:function(t,e,r){"use strict";r.r(e);r(335),r(215),r(57);var n=r(8),o=(r(48),r(20),r(40),r(11),r(92),r(41),r(39),r(316)),l=r(322),c=r(326),d={data:function(){return{totalDeposit:"",totalWithdrawal:"",activeDeposit:"",pendingWithdrawal:"",transactions:[],user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},capitalizeWord:function(data){return data.charAt(0).toUpperCase()+data.slice(1)},getVolumes:function(data){var t=this;data.forEach((function(e){"withdrawal"==e._id?t.withdrawal=e.volume:t.deposit=e.volume}))},getActive:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){t+=e.amount})),t},getApprovedTransactions:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){1==e.status&&(t+=e.amount)})),t},getPendingWithdrawal:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){0==e.status&&"withdrawal"==e.transactionType&&(t+=e.amount)})),t},getTotalWithdrawal:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){"withdrawal"==e.transactionType&&1==e.status&&(t+=e.amount)})),t},getTotalDeposit:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){"deposit"==e.transactionType&&(t+=e.amount)})),t},getWallets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:r=e.sent,t.wallets=t.checkItems(r.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getActiveDeposit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/active-deposits/?username=".concat(t.user.username));case 3:r=e.sent,t.activeDeposit=t.getActive(r.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTransactions:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="?username=".concat(t.user.username,"&limit=5&sort=-time"),e.prev=1,e.next=4,t.$axios.get("/transactions/".concat(r));case 4:n=e.sent,t.pendingWithdrawal=t.getPendingWithdrawal(n.data.data),t.totalWithdrawal=t.getTotalWithdrawal(n.data.data),t.totalDeposit=t.getTotalDeposit(n.data.data),t.transactions=n.data.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},getAUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,t.getTransactions(),t.getActiveDeposit(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getAUser()},computed:{authUser:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:o.default,DashboardNavigation:c.default,DashboardHeader:l.default}},h=(r(401),r(56)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-holder"},[e("div",{staticClass:"dashboard"},[e("DashboardNavigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"card-holder"},[e("div",{staticClass:"top-card-one"},[e("div",{staticClass:"circle-bg"},[t._m(0),t._v(" "),e("div",{staticClass:"middle-holder"},[e("div",{staticClass:"middle-side-content"},[t._m(1),t._v(" "),e("div",{staticClass:"sub-text-holder"},[e("div",{staticClass:"sub-text"},[t._v(t._s(t.user.fullName))])])]),t._v(" "),e("div",{staticClass:"thick-header-holder"},[e("h1",{staticClass:"thick-header"},[e("span",{staticClass:"text-span"},[t._v("$"+t._s(t.formatMoney(Number(t.user.totalBalance).toFixed(2)))+"\n                    USD")])])])]),t._v(" "),e("div",{staticClass:"card-button-holder"},[e("nuxt-link",{staticClass:"transact-button w-button",attrs:{to:"/dashboard/deposit"}},[t._v("Deposit")]),e("nuxt-link",{staticClass:"depositing-button w-button",attrs:{to:"/dashboard/withdrawal-funds"}},[t._v("Withdraw")])],1)])]),t._v(" "),e("div",{staticClass:"top-card-two"},[e("div",{staticClass:"top-card-cover"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("nuxt-link",{staticClass:"green-card-button w-button",attrs:{to:"/dashboard/deposit"}},[t._v("Get Started")])],1)])]),t._v(" "),e("div",{staticClass:"short-card-hold"},[e("div",{staticClass:"short-card-holder"},[e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(4),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("\n                      $"+t._s(t.formatMoney(t.totalDeposit))+" USD\n                    ")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-1",attrs:{src:"/dashboard-images/bank-finance-loan-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                $"+t._s(t.formatMoney(t.totalDeposit))+" USD\n              ")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(5),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("\n                      $"+t._s(t.formatMoney(t.activeDeposit))+" USD\n                    ")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-2",attrs:{src:"/dashboard-images/active.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                $"+t._s(t.formatMoney(t.activeDeposit))+" USD\n              ")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(6),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("\n                      $"+t._s(t.formatMoney(t.pendingWithdrawal))+" USD\n                    ")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-3",attrs:{src:"/dashboard-images/pending.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                $"+t._s(t.formatMoney(t.pendingWithdrawal))+" USD\n              ")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(7),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("\n                      $"+t._s(t.formatMoney(t.totalWithdrawal))+" USD\n                    ")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-4",attrs:{src:"/dashboard-images/total.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                $"+t._s(t.formatMoney(t.totalWithdrawal))+" USD\n              ")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"details-holder"},[e("div",{staticClass:"first-table-container"},[e("div",{staticClass:"table"},[t._m(8),t._v(" "),e("div",{staticClass:"main-table"},[t._m(9),t._v(" "),t._l(t.transactions,(function(r){return e("div",{key:r._id,staticClass:"light-table-holder"},[t._m(10,!0),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),r.transactionType?e("h1",{staticClass:"table-header"},[t._v("\n                    "+t._s(t.capitalizeWord(r.transactionType))+"\n                  ")]):t._e()]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),e("img",{staticClass:"deposit-bitcoin slash",attrs:{src:"".concat(t.FILE_URL,"/").concat(r.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),r.amount?e("h1",{staticClass:"table-header"},[t._v("\n                    $"+t._s(t.formatMoney(r.amount))+" USD\n                  ")]):t._e()]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                    "+t._s(t.formatDate(r.time))+"\n                  ")])])])}))],2)])]),t._v(" "),e("div",{staticClass:"details-two"},[t._m(11),t._v(" "),e("div",{staticClass:"day-holder"},[e("div",{staticClass:"each-day active"},[e("div",{staticClass:"day-top-holder"},[t._m(12),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"main-header"},[t._v("$"+t._s(t.totalDeposit)+" USD")])])])]),t._v(" "),e("div",{staticClass:"each-day"},[e("div",{staticClass:"day-top-holder"},[t._m(13),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"main-header"},[t._v("$"+t._s(t.totalWithdrawal)+" USD")])])])])])])])],1)],1),t._v(" "),e("DashboardFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-top-holder"},[e("div",{staticClass:"black-text"},[t._v("Total")]),t._v(" "),e("div",{staticClass:"black-text"},[t._v("Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-heading-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Total Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header-holder"},[t("h1",{staticClass:"card-header"},[this._v("Define Your Goals")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-texts-holder"},[e("div",{staticClass:"card-text"},[t._v("\n                Start by daily acquisition of fund to achieve your big\n                project,"),e("br"),t._v("\n                no matter how small you are getting, at the end you will get\n                there.\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Total Deposit")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Active Deposit")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Pending Withdrawal")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Total Withdrawal")])])},function(){var t=this._self._c;return t("div",{staticClass:"details-top-holder"},[t("div",{staticClass:"details-texts-holder"},[t("div",{staticClass:"main-header"},[this._v("Latest Transaction")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder table-green"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header"},[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header"},[t._v("Symbols")])]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header"},[t._v("Amounts")])]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header"},[t._v("Dates")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("1.")])])},function(){var t=this._self._c;return t("div",{staticClass:"details-top-holder"},[t("div",{staticClass:"details-texts-holder"},[t("div",{staticClass:"main-header"},[this._v("Total Volume")])])])},function(){var t=this._self._c;return t("div",{staticClass:"day-text-holder"},[t("div",{staticClass:"main-text"},[this._v("Deposit")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-text-holder"},[t("div",{staticClass:"main-text"},[this._v("Withdrawal")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(326).default,DashboardHeader:r(322).default,DashboardFooter:r(316).default})}}]);