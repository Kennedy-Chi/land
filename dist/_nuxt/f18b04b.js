(window.webpackJsonp=window.webpackJsonp||[]).push([[38,5,6,7,8,16],{302:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("4ced276d",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";n.r(e);var o={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},c=n(56),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var o={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},c=n(56),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);n(49),n(58);var o=n(8),c=(n(26),n(48),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),l=(n(310),n(56)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/images/Logo.png 500w, /images/Logo.png 800w, /images/Logo.png 1080w, /images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},[e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("profile")},attrs:{to:"/admin/admin-profile/".concat(t.user._id)}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route.includes("profile")?"colored-profile.svg":"profile.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Profile")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-accounts"==t.route},attrs:{to:"/admin/accounts"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Accounts")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),e("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var o=n(8),c=(n(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.staffType&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.authenticateUser()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),l=n(56),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n(302)},311:function(t,e,n){var o=n(142)((function(i){return i[1]}));o.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),o.locals={},t.exports=o},316:function(t,e,n){"use strict";n.r(e);var o={},c=n(56),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},359:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("5e9a039a",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";var o=n(2),c=n(93).find,l=n(145),r="find",d=!0;r in[]&&Array(1)[r]((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),l(r)},398:function(t,e,n){"use strict";n(359)},399:function(t,e,n){var o=n(142)((function(i){return i[1]}));o.push([t.i,".social-list{position:relative}.social-list img{max-width:25px}.social-list .action-icon{cursor:pointer;position:absolute;top:5px}.social-list .delete{right:10px}.social-list .edit{right:30px}.contact-icons{width:15px}",""]),o.locals={},t.exports=o},435:function(t,e,n){"use strict";n.r(e);n(57);var o=n(8),c=(n(48),n(91),n(213),n(397),n(13),n(38),n(303)),l=n(316),r={data:function(){return{company:"",companyName:"",companyAccountName:"",companyAccountNumber:"",systemEmail:"",companyBankName:"",companyRoutingNumber:"",socialText:"",socialIcon:"",socialTempIcon:"",socials:[],coloredSocialTempIcon:"",coloredSocialIcon:"",coloredSocials:[],coloredSocialText:"",mediaText:"",mediaIcon:"",mediaTempIcon:"",media:[],coloredMediaText:"",coloredMediaIcon:"",coloredMediaTempIcon:"",coloredMedia:[],editTempState:!1,editingId:"",editingTempState:!1,editingTempIndex:"",response:"",responseState:!1,showResponse:!1,editingState:!1}},methods:{showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},clearInputs:function(){this.editingTempIndex="",this.editingTempState=!1,this.socials=[],this.coloredSocials=[],this.media=[],this.coloredMedia=[],this.companyBank="",this.routingNumber="",this.accountName="",this.accountNumber="",this.companyName=""},setIcon:function(t,e){var n=this,input=t.target;if(input.files&&input.files[0]){var o=new FileReader;"socials"==e?o.onload=function(t){n.socialIcon=input.files[0],n.socialTempIcon=t.target.result}:"coloredSocials"==e?o.onload=function(t){n.coloredSocialIcon=input.files[0],n.coloredSocialTempIcon=t.target.result}:"media"==e?o.onload=function(t){n.mediaIcon=input.files[0],n.mediaTempIcon=t.target.result}:"coloredMedia"==e&&(o.onload=function(t){n.coloredMediaIcon=input.files[0],n.coloredMediaTempIcon=t.target.result}),o.readAsDataURL(input.files[0])}},clearType:function(t){this.editingTempState=!1,"socials"==t?(this.socialIcon="",this.socialText="",this.socialTempIcon=""):"coloredSocial"==t?(this.coloredSocialIcon="",this.coloredSocialText="",this.coloredSocialTempIcon=""):"media"==t?(this.mediaIcon="",this.mediaText="",this.mediaTempIcon=""):"coloredMedia"==t&&(this.coloredMediaIcon="",this.coloredMediaText="",this.coloredMediaTempIcon="")},enterTempState:function(t,e,n,o,c){if(""!=n){var data={text:e,tempIcon:n,icon:o};if(this.editingTempState)t.splice(this.editingTempIndex,1,data);else t.find((function(t){return t.text===data.text}))?this.showResponseMsg("Named item already exist",!0):t.push(data);this.clearType(c)}else this.showResponseMsg("Please select icon first",!0)},removeTempState:function(t,e){"socials"==e?this.socials.splice(t,1):"coloredSocials"==e?this.coloredSocials.splice(t,1):"media"==e?this.media.splice(t,1):"coloredMedia"==e&&this.coloredMedia.splice(t,1)},startEditTempState:function(t,e,n){this.editingTempState=!0,this.editingTempIndex=t;var o=e[t];"socials"==n?(this.socialIcon=o.icon,this.socialText=o.text,this.socialTempIcon=o.tempIcon):"coloredSocials"==n?(this.coloredMediaIcon=o.icon,this.coloredSocialText=o.text,this.coloredSocialTempIcon=o.tempIcon):"media"==n?(this.mediaText=o.text,this.mediaTempIcon=o.tempIcon,this.mediaIcon=o.icon):"coloredMedia"==n&&(this.coloredMediaText=o.text,this.coloredMediaTempIcon=o.tempIcon,this.coloredMediaIcon=o.icon)},populateData:function(t){this.editingId=t._id,this.companyAccountName=t.companyAccountName,this.companyAccountNumber=t.companyAccountNumber,this.companyBankName=t.companyBankName,this.companyName=t.companyName,this.systemEmail=t.systemEmail,this.socials=t.socials,this.coloredSocials=t.coloredSocials,this.media=t.media,this.coloredMedia=t.coloredMedia},processData:function(){this.onRequest=!0;var form=new FormData;form.append("companyName",this.companyName),form.append("systemEmail",this.systemEmail),form.append("companyAccountName",this.companyAccountName),form.append("companyAccountNumber",this.companyAccountNumber),form.append("companyBankName",this.companyBankName),this.socials.forEach((function(t){form.append("socialIcon",t.icon),form.append("socialText",t.text)})),this.coloredSocials.forEach((function(t){form.append("coloredSocialIcon",t.icon),form.append("coloredSocialText",t.text)})),this.media.forEach((function(t){form.append("mediaIcon",t.icon),form.append("mediaText",t.text)})),this.coloredMedia.forEach((function(t){form.append("coloredMediaIcon",t.icon),form.append("coloredMediaText",t.text)})),""!=this.editingId?this.updateCompany(form):this.createCompany(form)},updateCompany:function(form){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.patch("/company/".concat(t.editingId),form);case 3:t.showResponseMsg("Data updated successfully.",!0),t.clearInputs(),t.getCompany(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.showResponseMsg(e.t0,!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},createCompany:function(form){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/company",form);case 3:t.showResponseMsg("The data was created successfully",!0),t.getCompany(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.showResponseMsg(e.t0.response.data.message,!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:0!=(n=e.sent).data.data.length&&t.populateData(n.data.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.showResponseMsg(e.t0.response.data.message,!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getCompany()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{AdminConfirmation:c.default,Instruction:l.default}},d=(n(398),n(56)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper settings"},[e("admin-navigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("admin-top-header"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",t._l(t.company,(function(n,o){return e("tr",{key:n._id},[e("td",[t._v(t._s(o+1))]),t._v(" "),e("td",[t._v(t._s(n.companyName))]),t._v(" "),e("td",[t._v(t._s(n.systemEmail))]),t._v(" "),e("td",t._l(n.socials,(function(n,o){return e("div",{key:o},[e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"contact-icons",attrs:{src:n.tempIcon,alt:""}})])})),0),t._v(" "),e("td",t._l(n.coloredSocials,(function(n,o){return e("div",{key:o},[e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"contact-icons",attrs:{src:n.tempIcon,alt:""}})])})),0),t._v(" "),e("td",t._l(n.media,(function(n,o){return e("div",{key:o},[e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"contact-icons",attrs:{src:n.tempIcon,alt:""}})])})),0),t._v(" "),e("td",t._l(n.coloredMedia,(function(n,o){return e("div",{key:o},[e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"contact-icons",attrs:{src:n.tempIcon,alt:""}})])})),0),t._v(" "),e("td",[e("div",{staticClass:"filter-box",on:{click:function(e){return t.prepareCompanyEdit(n)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""}})])])])})),0)])]),t._v(" "),e("div",{staticClass:"input-wrapper w-form"},[e("form",{staticClass:"input-form",attrs:{action:"#"},on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"each-input half down"},[t._l(t.media,(function(n,o){return e("div",{key:o,staticClass:"social-list"},[n.tempIcon?e("img",{staticClass:"social-img",attrs:{src:n.tempIcon,loading:"lazy",alt:""}}):e("img",{attrs:{src:"".concat(t.FILE_URL,"/").concat(n.icon),alt:""}}),t._v(" "),e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"filter-icon check action-icon edit",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.startEditTempState(o,t.media,"media")}}}),t._v(" "),e("img",{staticClass:"filter-icon check action-icon delete",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.removeTempState(o,"media")}}})])})),t._v(" "),e("div",{staticClass:"social-holder"},[e("label",{staticClass:"upload-btn sm",attrs:{for:"media"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{id:"media",type:"file"},on:{change:function(e){return t.setIcon(e,"media")}}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mediaText,expression:"mediaText"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Media Contact"},domProps:{value:t.mediaText},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterTempState(t.media,t.mediaText,t.mediaTempIcon,t.mediaIcon,"media")},input:function(e){e.target.composing||(t.mediaText=e.target.value)}}})])],2),t._v(" "),e("div",{staticClass:"each-input half down"},[t._l(t.coloredMedia,(function(n,o){return e("div",{key:o,staticClass:"social-list"},[n.tempIcon?e("img",{staticClass:"social-img",attrs:{src:n.tempIcon,loading:"lazy",alt:""}}):e("img",{staticClass:"social-img",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.icon),loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"filter-icon check action-icon edit",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.startEditTempState(o,t.coloredMedia,"coloredMedia")}}}),t._v(" "),e("img",{staticClass:"filter-icon check action-icon delete",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.removeTempState(o,"coloredMedia")}}})])})),t._v(" "),e("div",{staticClass:"social-holder"},[e("label",{staticClass:"upload-btn sm",attrs:{for:"coloredMedia"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{id:"coloredMedia",type:"file"},on:{change:function(e){return t.setIcon(e,"coloredMedia")}}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coloredMediaText,expression:"coloredMediaText"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Colored Media Contact"},domProps:{value:t.coloredMediaText},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterTempState(t.coloredMedia,t.coloredMediaText,t.coloredMediaTempIcon,t.coloredMediaIcon,"coloredMedia")},input:function(e){e.target.composing||(t.coloredMediaText=e.target.value)}}})])],2),t._v(" "),e("div",{staticClass:"each-input half down"},[t._l(t.socials,(function(n,o){return e("div",{key:o,staticClass:"social-list"},[n.tempIcon?e("img",{staticClass:"social-img",attrs:{src:n.tempIcon,loading:"lazy",alt:""}}):e("img",{staticClass:"social-img",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.icon),loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"filter-icon check action-icon edit",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.editTempState(t.index,t.media,"media")}}}),t._v(" "),e("img",{staticClass:"filter-icon check action-icon delete",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.removeTempState(t.index,t.media,"media")}}})])})),t._v(" "),e("div",{staticClass:"social-holder"},[e("label",{staticClass:"upload-btn sm",attrs:{for:"socials"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{id:"socials",type:"file"},on:{change:function(e){return t.setIcon(e,"socials")}}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.socialText,expression:"socialText"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Social Contact"},domProps:{value:t.socialText},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterTempState(t.socials,t.socialText,t.socialTempIcon,t.socialIcon,"socials")},input:function(e){e.target.composing||(t.socialText=e.target.value)}}})])],2),t._v(" "),e("div",{staticClass:"each-input half down"},[t._l(t.coloredSocials,(function(n,o){return e("div",{key:o,staticClass:"social-list"},[n.tempIcon?e("img",{staticClass:"social-img",attrs:{src:n.tempIcon,loading:"lazy",alt:""}}):e("img",{staticClass:"social-img",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.icon),loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v(t._s(n.text))]),t._v(" "),e("img",{staticClass:"filter-icon check action-icon edit",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.startEditTempState(o,t.socials,"coloredSocials")}}}),t._v(" "),e("img",{staticClass:"filter-icon check action-icon delete",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""},on:{click:function(e){return t.removeTempState(o,"coloredSocials")}}})])})),t._v(" "),e("div",{staticClass:"social-holder"},[e("label",{staticClass:"upload-btn sm",attrs:{for:"coloredSocial"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{id:"coloredSocial",type:"file"},on:{change:function(e){return t.setIcon(e,"coloredSocials")}}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coloredSocialText,expression:"coloredSocialText"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Colored Social Contact"},domProps:{value:t.coloredSocialText},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterTempState(t.coloredSocials,t.coloredSocialText,t.coloredSocialTempIcon,t.coloredSocialIcon,"coloredSocials")},input:function(e){e.target.composing||(t.coloredSocialText=e.target.value)}}})])],2),t._v(" "),e("div",{staticClass:"each-input half down"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Company Name"},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input half down"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.systemEmail,expression:"systemEmail"}],staticClass:"plan-input w-input",attrs:{type:"email",placeholder:"Enter system Email"},domProps:{value:t.systemEmail},on:{input:function(e){e.target.composing||(t.systemEmail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input half down"},[t._m(3),e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyBankName,expression:"companyBankName"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Enter company bank"},domProps:{value:t.companyBankName},on:{input:function(e){e.target.composing||(t.companyBankName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input half down"},[t._m(4),e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyAccountName,expression:"companyAccountName"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Enter Account Name"},domProps:{value:t.companyAccountName},on:{input:function(e){e.target.composing||(t.companyAccountName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input half down"},[t._m(5),e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyAccountNumber,expression:"companyAccountNumber"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Enter Account Number"},domProps:{value:t.companyAccountNumber},on:{input:function(e){e.target.composing||(t.companyAccountNumber=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input half down"},[t._m(6),e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyRoutingNumber,expression:"companyRoutingNumber"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Enter Routing Number"},domProps:{value:t.companyRoutingNumber},on:{input:function(e){e.target.composing||(t.companyRoutingNumber=e.target.value)}}})]),t._v(" "),t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n              "+t._s(t.response)+"\n            ")]):t._e(),t._v(" "),e("div",{staticClass:"button-holder"},[e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Save"},on:{click:t.processData}}),e("input",{staticClass:"button w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."}})])])])]),t._v(" "),e("instruction")],1),t._v(" "),e("div",{staticClass:"content-wrapper"}),t._v(" "),e("admin-footer")],1)],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Company")]),t._v(" "),e("td",[t._v("Email")]),t._v(" "),e("td",[t._v("Socials")]),t._v(" "),e("td",[t._v("Colored Socials")]),t._v(" "),e("td",[t._v("Media")]),t._v(" "),e("td",[t._v("Colored Media")]),t._v(" "),e("td",[t._v("Actions")])])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Company Name"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("System Email"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Company's Bank"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Company's Bank Account Name"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Company's Bank Account"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Company's Routing Number"),e("span",{staticClass:"important"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminNavigation:n(307).default,AdminTopHeader:n(308).default,AdminFooter:n(306).default})}}]);