(window.webpackJsonp=window.webpackJsonp||[]).push([[49,16,17],{360:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("2d341fb6",content,!0,{sourceMap:!1})},361:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("4212b4ce",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(49),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=this;this.setFileURL(),this.getCompany(),this.loadScript(),this.$socket.on("fetchedUsers",(function(data,e){t.users=data}))}}),o=(n(368),n(57)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer wf-section",attrs:{id:"footer"}},[t.company?e("div",{staticClass:"div-block-117"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-85"},[e("div",{staticClass:"div-block-87"},[e("nuxt-link",{staticClass:"link-block-4 w-inline-block",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-13 logo",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("\n              © "+t._s((new Date).getFullYear())+", "+t._s(t.company.companyName)+".\n            ")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-156"},[e("div",{staticClass:"div-block-86"},[e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("About")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Road Map")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Token")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Team")])])]),t._v(" "),e("div",{staticClass:"div-block-88"},[e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Services")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Statistic")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("White Paper")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("FAQ")])])]),t._v(" "),e("div",{staticClass:"div-block-89"},[e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("White Paper")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Technical Paper")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Business Summary")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Brand Resources")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-90"},[e("div",{staticClass:"form-block w-form"},[e("div",{staticClass:"form"},[e("label",{staticClass:"heading-19 s",attrs:{for:"email-4"}},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"div-block-91"},[e("input",{staticClass:"text-field-3 w-input",attrs:{type:"email",maxlength:"256",placeholder:"Email",id:"email-2"}}),e("input",{staticClass:"submit-button-2 w-button",attrs:{type:"submit",value:"Send","data-wait":"Please wait..."}})])])])])}],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n.r(e);n(26);var r=n(8),l=(n(49),{data:function(){return{}},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/client.css"}]}},methods:{scrollDown:function(data){document.querySelector("#".concat(data)).scrollIntoView({behavior:"smooth"})},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),o=(n(370),n(57)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-section top wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"nav-container"},[e("div",{staticClass:"div-block-165"},[e("div",{staticClass:"brand-holder"},[e("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},["index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("about")}}},[t._v("About")]):t._e(),t._v(" "),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("map")}}},[t._v("Map")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("faq")}}},[t._v("Faq")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("plan")}}},[t._v("Investment Plan")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("team")}}},[t._v("\n            Team")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("blog")}}},[t._v("News/Blog")]):t._e(),t._v(" "),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("contact")}}},[t._v("Contact")]):t._e(),t._v(" "),"index"!=t.$route.name?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]):t._e(),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign Up")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",class:{hide:!t.isAuthenticated},attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("span",{staticClass:"nav-link w-nav-link",class:{hide:!t.isAuthenticated},on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon-7 w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n(360)},369:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,"img.image-13.logo{min-width:150px}",""]),r.locals={},t.exports=r},370:function(t,e,n){"use strict";n(361)},371:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".image-brand{width:100}.nav-link.w-nav-link{cursor:pointer}.nav-link.hide{display:none}",""]),r.locals={},t.exports=r},398:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("1d133766",content,!0,{sourceMap:!1})},441:function(t,e,n){"use strict";n(398)},442:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".field-label-3{color:#cf0606;font-size:14px;margin-bottom:0;opacity:0}.field-label-3.active{opacity:1}.response-text{color:#0dcf06;font-size:15px}.response-text.error{color:#cf0606}.click-box,.terms-check{align-items:center;display:flex}.click-box{border:3px solid #8761a8;cursor:pointer;height:20px;justify-content:center;margin-right:10px;width:20px}.click-box.sm.checked .check{background:#8761a8;height:10px;width:10px}",""]),r.locals={},t.exports=r},484:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(49),n(20),n(93),n(13),n(42),n(26),n(366)),o=n(367),c={data:function(){return{response:"",isError:!1,showResponse:!1,onRequest:!1,route:"",fullName:"",username:"",email:"",phoneNumber:"",password:"",cPassword:"",isChecked:!1,referral:""}},methods:{checkErrorInputs:function(input,data){if("username"==input){if(""==data||!data||data.length<2||!/^[a-zA-Z0-9]+$/.test(data))return this.$el.querySelector(".username").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".username").classList.remove("active"),this.isError=!0}else if("fullName"==input){if(!(data&&""!=data&&data.split(" ").length>=2))return this.$el.querySelector(".fullName").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".fullName").classList.remove("active"),this.isError=!0}else if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".email").classList.remove("active"),this.isError=!0}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("active"),!1;this.$el.querySelector(".password").classList.remove("active"),this.isError=!0}else if("cPassword"==input){if(""==data||data!=this.password)return this.$el.querySelector(".cPassword").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".cPassword").classList.remove("active"),this.isError=!0}},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/client.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},clearInputs:function(){this.fullName="",this.username="",this.phoneNumber="",this.email="",this.password="",this.cPassword=""},setArray:function(){this.checkArray=[{name:"fullName",data:this.fullName},{name:"username",data:this.username},{name:"email",data:this.email},{name:"phoneNumber",data:this.phoneNumber},{name:"password",data:this.password},{name:"cPassword",data:this.cPassword}]},processUserData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setArray(),t.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),t.isError&&t.isChecked){e.next=5;break}return t.callResponse("Please read and check the terms and agreement box to continue",!0),e.abrupt("return");case 5:return form={fullName:t.fullName,username:t.username,email:t.email,regDate:(new Date).getTime(),referredBy:t.referral,totalAmount:0,password:t.password,cPassword:t.cPassword},e.prev=6,e.next=9,t.$axios.post("/users/signup",form);case 9:t.callResponse("Activate your account by verifying the email sent to you",!1),t.clearInputs(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),t.callResponse(e.t0.response.data.message,!0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})))()}},mounted:function(){this.loadScript(),this.$route.query.username&&(this.referral=this.$route.query.username),this.isAuthenticated&&this.$router.push("/dashboard")},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},components:{ClientFooter:l.default,ClientHeader:o.default}},d=(n(441),n(57)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"signup"},[e("client-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"signup wf-section"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-142"},[e("div",{staticClass:"div-block-140"},[t._m(1),t._v(" "),e("div",{staticClass:"w-form"},[e("div",[e("div",[e("label",{staticClass:"field-label-3 username",attrs:{for:"email-4"}},[t._v("Username must be at least a 6 character word.")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"text-field-4 w-input",attrs:{type:"text",placeholder:"Enter Username"},domProps:{value:t.username},on:{blur:function(e){return t.checkErrorInputs("username",t.username)},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),e("label",{staticClass:"field-label-3 fullName",attrs:{for:"email-4"}},[t._v("Fullname must have at least two words")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"text-field-5 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Fullname"},domProps:{value:t.fullName},on:{blur:function(e){return t.checkErrorInputs("fullName",t.fullName)},input:function(e){e.target.composing||(t.fullName=e.target.value)}}}),t._v(" "),e("div",[e("label",{staticClass:"field-label-3 email",attrs:{for:"name-4"}},[t._v("Please enter a valid email.")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field-4 w-input",attrs:{type:"email",maxlength:"256",placeholder:"Enter Email"},domProps:{value:t.email},on:{blur:function(e){return t.checkErrorInputs("email",t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",[e("label",{staticClass:"field-label-3 password",attrs:{for:"name-4"}},[t._v("Password must be at least 6 characters long.")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"text-field-4 w-input",attrs:{type:"password",maxlength:"256",placeholder:"Enter Password"},domProps:{value:t.password},on:{blur:function(e){return t.checkErrorInputs("password",t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),e("div",[e("label",{staticClass:"field-label-3 cPassword",attrs:{for:"name-4"}},[t._v("Passwords do not match!")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"text-field-4 w-input",attrs:{type:"password",maxlength:"256",placeholder:"Confirm Password"},domProps:{value:t.cPassword},on:{blur:function(e){return t.checkErrorInputs("cPassword",t.cPassword)},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processUserData.apply(null,arguments)},input:function(e){e.target.composing||(t.cPassword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"terms-text"},[t._v("\n                Already have an account?\n                "),e("nuxt-link",{staticClass:"link-2",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("\n                  click here")])],1),t._v(" "),e("div",{staticClass:"terms-check"},[e("div",{staticClass:"click-box sm",class:{checked:t.isChecked},on:{click:function(e){t.isChecked=!t.isChecked}}},[e("div",{staticClass:"check"})]),t._v(" "),e("div",{staticClass:"terms-text"},[t._v("\n                  By clicking the box you have agreed to our company's\n                  "),e("nuxt-link",{staticClass:"link-2",attrs:{to:"/terms-conditions"}},[t._v("terms & conditions")])],1)]),t._v(" "),e("div",{staticClass:"terms-check"},[t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n                  "+t._s(t.response)+"\n                ")]):t._e()]),t._v(" "),e("input",{staticClass:"link-block-2 w-button",attrs:{type:"button",value:"Signup"},on:{click:t.processUserData}})])])])])])]),t._v(" "),e("client-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"signuphero-section wf-section"},[e("div",{staticClass:"div-block-164"},[e("img",{staticClass:"image-46",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/6356149fa7b90c075dd07b8e_scroll-down%20(1).png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-95 log-hero"},[e("h1",{staticClass:"heading-2"},[t._v("Global Stock Investment")]),t._v(" "),e("h1",{staticClass:"heading-2-second"},[t._v("for stock investment business.")]),t._v(" "),e("div",{staticClass:"text-block-16"},[t._v("\n          Make sound investment decisions with the help of our research &\n          analytical assets. The minimum deposit is $5, and maximum is\n          $100,000. We pay 7 days per week. You may make additional deposits\n          at any time. All our payments are instant payments.\n        ")]),t._v(" "),e("div",{staticClass:"div-block-96"},[e("a",{staticClass:"link-block-8 w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/634f78e65675d95b9dc4502b_smart%20contract.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[t._v("Smart Contact")])]),e("a",{staticClass:"link-block-8 w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/6357dc2cfd34f9fb0426bd59_1220316_youtube_video_icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[t._v("How to buy Token")])])]),t._v(" "),e("div",{staticClass:"div-block-98"},[e("a",{staticClass:"button-2 w-button",attrs:{href:"#"}},[t._v("White Papper")]),e("a",{staticClass:"button-2 _2nd w-button",attrs:{href:"#"}},[t._v("One Pager")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-145"},[t("h1",{staticClass:"heading-2-big"},[this._v("SIGNUP")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ClientHeader:n(367).default,ClientFooter:n(366).default})}}]);