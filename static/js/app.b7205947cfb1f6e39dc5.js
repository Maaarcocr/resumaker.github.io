webpackJsonp([1],{"6jqo":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},Fs8J:function(t,e,a){"use strict";var n=a("w32Z"),s=a("NYxO");e.a={name:"home",computed:a.i(s.b)(["isUrl"]),components:{FileUpload:n.a}}},Jdau:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"file",id:"fileInput"},on:{change:t.sendResume}}),t._v(" "),a("label",{staticClass:"button",attrs:{for:"fileInput"}},[t._v("Upload your resume")])])},s=[],r={render:n,staticRenderFns:s};e.a=r},LsAd:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("LsAd")}var s=a("xJD8"),r=a("6jqo"),o=a("VU/8"),u=n,i=o(s.a,r.a,u,null,null);e.a=i.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("M93x"),r=a("YaEn"),o=a("wtEF");n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:s.a}})},UUDh:function(t,e){},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),r=a("lO7g");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:r.a}]})},h2zS:function(t,e){},j0As:function(t,e,a){"use strict";var n=a("NYxO");e.a={name:"file-upload",methods:a.i(n.c)(["sendResume"])}},lO7g:function(t,e,a){"use strict";function n(t){a("UUDh")}var s=a("Fs8J"),r=a("pFnb"),o=a("VU/8"),u=n,i=o(s.a,r.a,u,"data-v-55ef0d5d",null);e.a=i.exports},pFnb:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"row"},[a("FileUpload"),t._v(" "),t.isUrl?a("a",{staticClass:"button success",attrs:{target:"_blank",href:"https://www.overleaf.com/docs?snip_uri="+t.$store.state.url+"&splash=none"}},[t._v("Go to Overleaf")]):t._e()],1),t._v(" "),a("div",{staticClass:"row"},[t.isUrl?a("a",{staticClass:"button",attrs:{target:"_blank",href:t.$store.state.url}},[t._v("Download your .tex resume")]):t._e()])])},s=[],r={render:n,staticRenderFns:s};e.a=r},w32Z:function(t,e,a){"use strict";function n(t){a("h2zS")}var s=a("j0As"),r=a("Jdau"),o=a("VU/8"),u=n,i=o(s.a,r.a,u,"data-v-3f9cc79b",null);e.a=i.exports},wtEF:function(t,e,a){"use strict";var n=a("7+uW"),s=a("NYxO"),r=a("mtWM"),o=a.n(r);n.a.use(s.a);var u={url:void 0},i={setUrl:function(t,e){var a=e.url;t.url=a}},c=function(t,e){return o.a.post("https://p41iil0hub.execute-api.us-east-1.amazonaws.com/dev/",{resume:t}).then(function(t){console.log(t),e("setUrl",{url:t.data.id})})},l={sendResume:function(t,e){var a=t.commit;console.log(e);var n=new FileReader;n.onload=function(t){var e=JSON.parse(t.target.result);c(e,a)},n.readAsText(e.target.files[0])}},f={isUrl:function(t){return void 0!==t.url}};e.a=new s.a.Store({state:u,actions:l,getters:f,mutations:i})},xJD8:function(t,e,a){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.b7205947cfb1f6e39dc5.js.map