webpackJsonp([32],{A1Ym:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"aboutUs"},[a("div",{staticClass:"top"},[a("img",{attrs:{src:"/static/img/icon-left.png",alt:""},on:{click:t.back}}),t._v(" "),a("h2",[t._v(t._s(t.title))]),t._v(" "),a("i")]),t._v(" "),a("div",{staticStyle:{"padding-bottom":"50px"}}),t._v(" "),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})])};e._withStripped=!0;var o={render:e,staticRenderFns:[]},i=o;var s=!1;var A=a("VU/8")({name:"aboutUs",data:function(){return{content:"",title:""}},methods:{back:function(){this.$router.push("/user")},getData:function(){var t=this;this.$http({method:"get",url:"/common/About",params:{type:1}}).then(function(n){100===n.data.flag&&(t.content=n.data.data.content,t.title=n.data.data.title)})}},mounted:function(){this.getData()}},i,!1,function(t){s||a("PdoY")},"data-v-28be9bca",null);A.options.__file="src/components/page/aboutUs.vue";n.default=A.exports},PdoY:function(t,n,a){var e=a("TKys");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("3f145996",e,!1,{})},TKys:function(t,n,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.aboutUs[data-v-28be9bca] {\n  overflow: hidden;\n}\n.aboutUs .top[data-v-28be9bca] {\n    width: 100%;\n    height: 50px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #FFFFFF;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #cccccc;\n}\n.aboutUs .top img[data-v-28be9bca] {\n      width: 25px;\n      height: 25px;\n      margin-left: 10px;\n}\n.aboutUs .top i[data-v-28be9bca] {\n      padding: 0 25px;\n      font-size: 20px;\n}\n.aboutUs .top h2[data-v-28be9bca] {\n      font-size: 16px;\n}\n.aboutUs .content[data-v-28be9bca] {\n    margin: 15px;\n}\n.aboutUs .content p[data-v-28be9bca] {\n      font-size: 16px;\n}\n.aboutUs .content h2[data-v-28be9bca] {\n      font-size: 18px;\n      font-weight: bold;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/page/aboutUs.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,OAAO;IACP,QAAQ;IACR,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,uBAAuB;YACnB,+BAA+B;IACvC,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,iCAAiC;CACpC;AACD;MACM,YAAY;MACZ,aAAa;MACb,kBAAkB;CACvB;AACD;MACM,gBAAgB;MAChB,gBAAgB;CACrB;AACD;MACM,gBAAgB;CACrB;AACD;IACI,aAAa;CAChB;AACD;MACM,gBAAgB;CACrB;AACD;MACM,gBAAgB;MAChB,kBAAkB;CACvB",file:"aboutUs.vue",sourcesContent:["\n.aboutUs[data-v-28be9bca] {\n  overflow: hidden;\n}\n.aboutUs .top[data-v-28be9bca] {\n    width: 100%;\n    height: 50px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #FFFFFF;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #cccccc;\n}\n.aboutUs .top img[data-v-28be9bca] {\n      width: 25px;\n      height: 25px;\n      margin-left: 10px;\n}\n.aboutUs .top i[data-v-28be9bca] {\n      padding: 0 25px;\n      font-size: 20px;\n}\n.aboutUs .top h2[data-v-28be9bca] {\n      font-size: 16px;\n}\n.aboutUs .content[data-v-28be9bca] {\n    margin: 15px;\n}\n.aboutUs .content p[data-v-28be9bca] {\n      font-size: 16px;\n}\n.aboutUs .content h2[data-v-28be9bca] {\n      font-size: 18px;\n      font-weight: bold;\n}\n"],sourceRoot:""}])}});