(window.webpackJsonp=window.webpackJsonp||[]).push([[27,24,25],{308:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(144).default)("395f4023",content,!0,{sourceMap:!1})},313:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(144).default)("39358507",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n.r(e);var c=n(8),o=(n(48),{data:function(){return{company:"",address:"",aboutContent:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getAboutCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:return n=e.sent,e.next=6,n.data.data[0].content;case 6:t.aboutContent=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return o=e.sent,e.next=6,null===(n=o.data.data)||void 0===n||null===(c=n.media[0])||void 0===c?void 0:c.text;case 6:t.address=e.sent,t.company=o.data.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getAboutCompany(),this.getCompany()}}),l=(n(318),n(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"last-section",attrs:{id:"footer"}},[e("div",{staticClass:"container-new1"},[e("div",[e("div",{staticClass:"div-block-255"},[e("div",{staticClass:"div-block-256"},[t._m(0),t._v(" "),e("div",{staticClass:"text-block-63",domProps:{innerHTML:t._s("".concat(t.aboutContent.substring(0,200),"..."))}})]),t._v(" "),e("div",{staticClass:"div-block-258"},[e("h1",{staticClass:"heading-63"},[t._v("Quick Links")]),t._v(" "),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/about"}},[e("div",{staticClass:"text-block-64"},[t._v("About")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/plan"}},[e("div",{staticClass:"text-block-64"},[t._v("Plans")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/gallery"}},[e("div",{staticClass:"text-block-64"},[t._v("Gallery")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/contact"}},[e("div",{staticClass:"text-block-64"},[t._v("Contact Us")])])],1),t._v(" "),e("div",{staticClass:"div-block-259"},[e("h1",{staticClass:"heading-63"},[t._v("Contact Us")]),t._v(" "),e("div",{staticClass:"text-block-65"},[t._v("\n            You can contact us with your email for mailing conversations at\n            our contact page us chat us directly in our website through our\n            live support.\n          ")]),t._v(" "),e("div",{staticClass:"text-block-66",domProps:{innerHTML:t._s(t.address)}})]),t._v(" "),t._m(1)])]),t._v(" "),t.company.social?e("div",{staticClass:"div-block-274"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)]):t._e(),t._v(" "),e("div",{staticClass:"div-block-275"}),t._v(" "),e("div",{staticClass:"div-block-276"},[e("div",{staticClass:"div-block-277"},[e("div",{staticClass:"text-block-70"},[t._v("\n          © "+t._s((new Date).getFullYear())+"\n          "),t.company?e("a",{staticClass:"link-5",attrs:{href:"#",target:"_blank"}},[t._v(t._s(t.company.companyName))]):t._e(),t._v(", All Rights Reserved\n        ")])]),t._v(" "),e("nuxt-link",{staticClass:"link-block-22 w-inline-block",attrs:{to:"/terms-conditions"}},[e("div",{staticClass:"text-block-70 b"},[t._v("\n          Privacy Policy Terms & Conditions\n        ")])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-257"},[t("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"83",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-259"},[e("h1",{staticClass:"heading-63"},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"text-block-65 b"},[t._v("\n            Don’t forget to subscribe to our newsletter.\n          ")]),t._v(" "),e("div",{staticClass:"form-block-8 w-form"},[e("form",{staticClass:"form-9"},[e("div",{staticClass:"div-block-260"},[e("input",{staticClass:"text-field-9 w-input",attrs:{type:"text",maxlength:"256",name:"field-10","data-name":"Field 10",placeholder:"E-mail",id:"field-10",required:""}}),e("img",{staticClass:"image-78",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg",loading:"lazy",width:"15",alt:""}})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/facebook-round.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/twitter-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/linkedin-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/vimeo-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/instagram-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/github-icon.svg",loading:"lazy",width:"Auto",height:"Auto",alt:""}})])}],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n(308)},319:function(t,e,n){var c=n(143)((function(i){return i[1]}));c.push([t.i,".div-block-257{width:200px}.div-block-257 img{width:100%}",""]),c.locals={},t.exports=c},323:function(t,e,n){"use strict";n.r(e);var c=n(8),o=(n(48),{methods:{logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(324),n(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-about-us w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container-new about-us"},[e("div",[e("nuxt-link",{staticClass:"brand-4 w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"150",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu-3 w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("ABOUT")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/gallery",query:{username:t.$route.query.username}}}},[t._v("GALLERY")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("PLAN")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("CONTACT")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("SIGN UP")]),t._v(" "),e("nuxt-link",{staticClass:"button-13 w-button",class:{hide:t.isAuthenticated},attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"navlink-new w-nav-link",class:{hide:!t.isAuthenticated},attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("a",{staticClass:"button-13 w-button",class:{hide:!t.isAuthenticated},attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:"#"},on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"div-block-278"})])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button-4 w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n(313)},325:function(t,e,n){var c=n(143)((function(i){return i[1]}));c.push([t.i,".button-13.hide,.navlink-new.hide{display:none}",""]),c.locals={},t.exports=c},472:function(t,e,n){"use strict";n.r(e);n(57),n(26);var c=n(8),o=(n(48),{data:function(){return{banner:"",about:"",events:[],staffs:[],cert:""}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getStaffs:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/staffs");case 3:n=e.sent,t.staffs=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getEvents:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/events");case 3:n=e.sent,t.events=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getBanner:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=About");case 3:n=e.sent,t.banner=n.data.data[0],t.loadScript(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAbout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:n=e.sent,t.about=n.data.data[0],t.cert=n.data.data[0].certificate,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getStaffs(),this.getEvents(),this.getAbout(),this.getBanner()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeFooter:n(314).default}}),l=n(56),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us-page"},[e("home-light-navigation"),t._v(" "),e("div",{staticClass:"container-new1 _2",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.banner.bannerImage,")")}},[t._m(0)]),t._v(" "),e("div",{staticClass:"about1"},[e("div",{staticClass:"container-new1"},[e("div",[e("h1",{staticClass:"heading-68"},[t._v("Who is Landmark Integrated Services?")]),t._v(" "),e("div",{staticClass:"text-block-71"},[e("em",{staticClass:"italic-text-7"},[t._v(t._s(t.banner.bannerTitle))])])])])]),t._v(" "),e("div",{staticClass:"about5"},[e("div",{staticClass:"container-new1"},[e("div",{staticClass:"div-block-283"},[e("div",{staticClass:"div-block-284"},[e("h1",{staticClass:"heading-72"},[t._v("About Us")]),t._v(" "),e("div",{staticClass:"text-block-79",domProps:{innerHTML:t._s(t.about.content)}})]),t._v(" "),e("div",{staticClass:"div-block-218"},[e("img",{staticClass:"image-71",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.cert),loading:"lazy",sizes:"(max-width: 479px) 95vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1279px) 50vw, 44vw",srcset:"".concat(t.FILE_URL,"/").concat(t.cert," 500w, ").concat(t.FILE_URL,"/").concat(t.cert," 530w"),alt:""}})])])])]),t._v(" "),e("div",{staticClass:"about3"},[e("div",{staticClass:"container-new1"},[e("div",[e("div",{staticClass:"div-block-231 _2"},[t.events[0]?e("div",{staticClass:"div-block-232 _2"},[e("h1",{staticClass:"heading-54 _2"},[e("strong",{staticClass:"bold-text-5"},[t._v(t._s(t.events[0].title))])]),t._v(" "),e("div",{staticClass:"text-block-55 _2",domProps:{innerHTML:t._s(t.events[0].content)}}),t._v(" "),e("div",{staticClass:"div-block-272"},[e("div",{staticClass:"div-block-270 _2"}),t._v(" "),e("div",{staticClass:"div-block-271"}),t._v(" "),t.events[0]?e("h1",{staticClass:"heading-66 _2"},[t._v("\n                Q1 "+t._s(new Date(t.events[0].time).getFullYear())+"\n              ")]):t._e()])]):t._e(),t._v(" "),t.events[2]?e("div",{staticClass:"div-block-233 _2"},[e("h1",{staticClass:"heading-54 _2"},[e("strong",{staticClass:"bold-text-6"},[t._v(t._s(t.events[2].title))])]),t._v(" "),e("div",{staticClass:"text-block-73",domProps:{innerHTML:t._s(t.events[2].content)}}),t._v(" "),e("div",{staticClass:"div-block-272"},[e("div",{staticClass:"div-block-270 _2"}),t._v(" "),e("div",{staticClass:"div-block-271"}),t._v(" "),e("h1",{staticClass:"heading-66 _2"},[t._v("\n                Q3 "+t._s(new Date(t.events[2].time).getFullYear())+"\n              ")])])]):t._e(),t._v(" "),t.events[4]?e("div",{staticClass:"div-block-232 d _2"},[e("h1",{staticClass:"heading-54 _2"},[e("strong",{staticClass:"bold-text-7"},[t._v(t._s(t.events[4].title))])]),t._v(" "),e("div",{staticClass:"text-block-74",domProps:{innerHTML:t._s(t.events[4].content)}}),t._v(" "),e("div",{staticClass:"div-block-272"},[e("div",{staticClass:"div-block-270 _2"}),t._v(" "),e("div",{staticClass:"div-block-271"}),t._v(" "),e("h1",{staticClass:"heading-66 _2"},[t._v("\n                Q5 "+t._s(new Date(t.events[4].time).getFullYear())+"\n              ")])])]):t._e()]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"div-block-231 b _2"},[t.events[1]?e("div",{staticClass:"div-block-232 b _2"},[e("h1",{staticClass:"heading-54 _2"},[e("strong",{staticClass:"bold-text-8"},[t._v(t._s(t.events[1].title))])]),t._v(" "),e("div",{staticClass:"text-block-75",domProps:{innerHTML:t._s(t.events[1].content)}}),t._v(" "),e("div",{staticClass:"div-block-272 b"},[e("h1",{staticClass:"heading-66 _2"},[t._v("\n                Q2 "+t._s(new Date(t.events[1].time).getFullYear())+"\n              ")]),t._v(" "),e("div",{staticClass:"div-block-271"}),t._v(" "),e("div",{staticClass:"div-block-270 _2"})])]):t._e(),t._v(" "),t.events[3]?e("div",{staticClass:"div-block-232 c _2"},[e("h1",{staticClass:"heading-54 _2"},[e("strong",{staticClass:"bold-text-9"},[t._v(t._s(t.events[3].title))])]),t._v(" "),e("div",{staticClass:"text-block-76",domProps:{innerHTML:t._s(t.events[3].content)}}),t._v(" "),e("div",{staticClass:"div-block-272 b"},[e("h1",{staticClass:"heading-66 _2"},[t._v("\n                Q4 "+t._s(new Date(t.events[4].time).getFullYear())+"\n              ")]),t._v(" "),e("div",{staticClass:"div-block-271"}),t._v(" "),e("div",{staticClass:"div-block-270 _2"})])]):t._e()])])])]),t._v(" "),e("div",{staticClass:"about4"},[t._m(2),t._v(" "),e("div",{staticClass:"div-block-236 _2"},t._l(t.staffs,(function(n){return e("div",{key:n._id,staticClass:"div-block-237"},[e("div",{staticClass:"div-block-238"},[e("img",{staticClass:"image-75",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-57 _2"},[t._v(t._s(n.name))]),t._v(" "),e("h1",{staticClass:"heading-58 _2"},[t._v(t._s(n.position))]),t._v(" "),e("div",{staticClass:"text-block-57 _2"},[t._v("\n          "+t._s(n.quote)+"\n        ")])])})),0)]),t._v(" "),t._m(3),t._v(" "),e("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-408"},[t("div",{staticClass:"div-block-279"},[t("h1",{staticClass:"heading-67"},[this._v("About Us")])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-267 _2"},[t("img",{staticClass:"image-80 b _2",attrs:{src:"/images/arrow-thinchevron-left.svg",loading:"lazy",width:"21",alt:""}}),t("img",{staticClass:"image-80 _2",attrs:{src:"/images/arrow-thinchevron-right.svg",loading:"lazy",width:"21",alt:""}}),this._v(" "),t("div",{staticClass:"div-block-269 _2"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-new1"},[e("div",[e("h1",{staticClass:"heading-71"},[t._v("Our team")]),t._v(" "),e("div",{staticClass:"text-block-77"},[e("em",{staticClass:"italic-text-5"},[t._v("\n            We present you our executive staffs in charge of the execution of\n            our daily, weekly, monthly and yearly decisions.\n          ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about2"},[e("div",{staticClass:"container-new1"},[e("div",{staticClass:"div-block-282"},[e("div",{staticClass:"div-block-280"},[e("div",{staticClass:"div-block-281"},[e("img",{staticClass:"image-82",attrs:{src:"/images/custom-icon-1.png",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-70"},[t._v("Our Solution")]),t._v(" "),e("div",{staticClass:"text-block-72"},[t._v("\n            Revolutionize Your Portfolio with Landmark Integrated Services'\n            Innovative Investment Solutions.\n          ")])]),t._v(" "),e("div",{staticClass:"div-block-280"},[e("div",{staticClass:"div-block-281"},[e("img",{staticClass:"image-82",attrs:{src:"/images/custom-icon-2.png",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-70"},[t._v("Daily Profits")]),t._v(" "),e("div",{staticClass:"text-block-72"},[t._v("\n            Maximize Your Returns with Landmark Integrated Services' Proven\n            Track Record of Profitable Investments.\n          ")])]),t._v(" "),e("div",{staticClass:"div-block-280"},[e("div",{staticClass:"div-block-281"},[e("img",{staticClass:"image-82",attrs:{src:"/images/custom-icon-3.png",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-70"},[t._v("Global Network")]),t._v(" "),e("div",{staticClass:"text-block-72"},[t._v("\n            Join Landmark Integrated Services' Extensive Network of Successful\n            Investors and connect to our success.\n          ")])]),t._v(" "),e("div",{staticClass:"div-block-280"},[e("div",{staticClass:"div-block-281"},[e("img",{staticClass:"image-82",attrs:{src:"/images/custom-icon-4.png",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-70"},[t._v("Our Security")]),t._v(" "),e("div",{staticClass:"text-block-72"},[t._v("\n            Trust and Security are Landmark Integrated Services' Top Priority\n            for Your Investment Protection\n          ")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeLightNavigation:n(323).default,HomeFooter:n(314).default})}}]);