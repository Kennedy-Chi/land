(window.webpackJsonp=window.webpackJsonp||[]).push([[17,7],{303:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(37),l=n(27),d=n(38),m=n(214),f=n(14),v=n(4),h=n(213),_=n(145),C=n(304),k=n(305),x=n(90),y=n(306),w=[],T=o(w.sort),P=o(w.push),S=v((function(){w.sort(void 0)})),L=v((function(){w.sort(null)})),I=_("sort"),R=!v((function(){if(x)return x<70;if(!(C&&C>3)){if(k)return!0;if(y)return y<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)w.push({k:t+n,v:e})}for(w.sort((function(a,b){return b.v-a.v})),n=0;n<w.length;n++)t=w[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:S||!L||!I||!R},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(R)return void 0===t?T(e):T(e,t);var n,r,o=[],v=d(e);for(r=0;r<v;r++)r in e&&P(o,e[r]);for(h(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:f(e)>f(n)?1:-1}}(t)),n=d(o),r=0;r<n;)e[r]=o[r++];for(;r<v;)m(e,r++);return e}})},304:function(t,e,n){var r=n(71).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},305:function(t,e,n){var r=n(71);t.exports=/MSIE|Trident/.test(r)},306:function(t,e,n){var r=n(71).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},307:function(t,e,n){"use strict";n.r(e);var r={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},o=n(56),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,n){"use strict";n.r(e);n(41);var r,o=n(28),c=n(8),l=(n(48),n(303),n(57),n(11),n(29),n(30),r={components:{AdminConfirmation:n(307).default},data:function(){return{heading:"",body:"",terms:[],editingId:"",editingState:!1,confirmMsg:"",confirmStatus:!0,sort:"-time",limit:3,resultLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.resultLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},methods:{clearInput:function(){this.heading="",this.body="",this.editingState=!1,this.editingId=""},showConfirmation:function(t,e){this.deleteId=e,this.confirmMsg=t,this.confirmStatus=!1},returnConfirmation:function(data){"yes"==data&&this.deleteTerms(),this.confirmStatus=!0},toggleTermsStatus:function(t,e){this.editingId=t,this.editingState=!0;var form={status:!e};this.updateTerms(form)},prepareTermEdit:function(t){this.heading=t.heading,this.body=t.body,this.editingId=t._id,this.editingState=!0},sortResult:function(){this.sort="-time"==this.sort?"time":"-time",this.getTerms()},paginate:function(t){this.currentPage=t,this.getTerms()},processTerms:function(){var form={heading:this.heading,body:this.body,time:(new Date).getTime()};this.editingState?this.updateTerms(form):this.createTerms(form)},updateTerms:function(form){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort),e.prev=1,e.next=4,t.$axios.patch("/terms/".concat(t.editingId,"/").concat(n),form);case 4:r=e.sent,t.terms=r.data.data,t.resultLength=r.data.resultLength,t.clearInput(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},createTerms:function(form){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort),e.prev=1,e.next=4,t.$axios.post("/terms/".concat(n),form);case 4:r=e.sent,t.terms=r.data.data,t.resultLength=r.data.resultLength,t.clearInput(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getTerms:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort),e.prev=1,e.next=4,t.$axios.get("/terms/".concat(n));case 4:r=e.sent,t.terms=r.data.data,t.resultLength=r.data.resultLength,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},deleteTerms:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort),e.prev=1,e.next=4,t.$axios.delete("/terms/".concat(t.deleteId,"/").concat(n));case 4:r=e.sent,t.terms=r.data.data,t.resultLength=r.data.resultLength,t.deleteId="",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL},editorConfig:function(){return this.$store.state.editor.editorConfig}}},Object(o.a)(r,"components",{"ckeditor-nuxt":function(){return n.e(0).then(n.t.bind(null,471,7))}}),Object(o.a)(r,"mounted",(function(){this.getTerms()})),r),d=n(56),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("admin-confirmation",{attrs:{msg:t.confirmMsg,state:t.confirmStatus},on:{confirm:t.returnConfirmation}}),t._v(" "),e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option point",on:{click:t.sortResult}},[e("h4",{staticClass:"filter-label"},[t._v("Time")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/sort.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",t._l(t.terms,(function(n,r){return e("tr",{key:n._id},[e("td",[t._v(t._s(r+1))]),t._v(" "),e("td",[t._v(t._s(n.heading))]),t._v(" "),e("td",[e("div",{domProps:{innerHTML:t._s(n.body.slice(0,200))}})]),t._v(" "),e("td",[n.status?e("div",{staticClass:"status",class:{success:n.status},on:{click:function(e){return t.toggleTermsStatus(n._id,n.status)}}},[t._v("\n              Active\n            ")]):e("div",{staticClass:"status",class:{success:n.status},on:{click:function(e){return t.toggleTermsStatus(n._id,n.status)}}},[t._v("\n              Draft\n            ")])]),t._v(" "),e("td",[e("div",{staticClass:"filter-box",on:{click:function(e){return t.prepareTermEdit(n)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/edit-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.showConfirmation("Are you sure you want to delete this Term",n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/delete-gray.svg",loading:"lazy",alt:""}})])])])})),0)])]),t._v(" "),e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.resultLength)+"\n      "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" "+t._s(t.currentPage)+" of\n      "+t._s(t.pages().length)+"\n    ")]),t._v(" "),t.pages().length>1?e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages().length,(function(n,r){return e("li",{key:r,staticClass:"pagination-item",class:{active:r==t.currentPage-1,hide:r>=3+t.currentPage||r<t.currentPage-3,show:r+1==t.pages().length},on:{click:function(e){return t.paginate(r+1)}}},[e("div",[t._v(t._s(r+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper w-form"},[e("div",{staticClass:"input-form"},[e("div",{staticClass:"each-input full"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.heading,expression:"heading"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Terms Heading"},domProps:{value:t.heading},on:{input:function(e){e.target.composing||(t.heading=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"editor-holder each-input full"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Terms Description")]),t._v(" "),e("client-only",{attrs:{placeholder:"loading..."}},[e("ckeditor-nuxt",{staticClass:"editor",attrs:{config:t.editorConfig},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1)],1),t._v(" "),e("div",{staticClass:"button-holder"},[e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Add Terms"},on:{click:t.processTerms}}),e("input",{staticClass:"button w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."}})])])])],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Heading")]),t._v(" "),e("td",[t._v("Body")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Actions")])])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Terms Heading"),e("span",{staticClass:"important"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(307).default})}}]);