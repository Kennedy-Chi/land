(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{348:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("8971756a",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),n(93),{data:function(){return{time:(new Date).toLocaleTimeString(),user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getClock:function(){var t=this;setInterval((function(){return t.getTime(new Date)}),1e3)},getTime:function(data){var t=new Date(data),e=t.getHours(),n=t.getMinutes(),r=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+r},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},authenticateUser:function(){this.isAuthenticated?"Admin"==this.user.status&&this.$router.push("/admin"):this.$router.push("/")},getAUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.authenticateUser(),this.getAUser(),setInterval((function(){t.time=(new Date).toLocaleTimeString()}),1e3)},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(362),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"div-block-139"}),t._v(" "),e("div",{staticClass:"div-block-26"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image-44",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})],1),t._v(" "),e("div",{staticClass:"div-block-28"},[e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/colored-user-profile.svg",loading:"lazy",alt:""}}),t._v(" "),t.user?e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.user.username))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.user.email))])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/calendar.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.formatDate(new Date)))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.time))])]),t._v(" "),e("img",{staticClass:"image-46",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])])])}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,n){"use strict";n(348)},363:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".image-44{min-width:100px}.image-46{min-width:25px}",""]),r.locals={},t.exports=r}}]);