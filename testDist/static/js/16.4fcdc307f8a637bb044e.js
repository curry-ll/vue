webpackJsonp([16],{JRfr:function(n,t,e){var i=e("rJJ7");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("c0042ec4",i,!1,{})},rJJ7:function(n,t,e){(n.exports=e("FZ+f")(!0)).push([n.i,"\n.getProvince[data-v-78becb94] {\n  background: #f8f8f8;\n}\n.top[data-v-78becb94] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.top img[data-v-78becb94] {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n}\n.top i[data-v-78becb94] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.top h2[data-v-78becb94] {\n    font-size: 16px;\n}\n.provinceList[data-v-78becb94] {\n  margin-top: 50px;\n  margin-left: 10px;\n}\n.provinceList li[data-v-78becb94] {\n    height: 30px;\n    line-height: 30px;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/page/getProvince.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iCAAiC;CAClC;AACD;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;CACrB;AACD;IACI,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,gBAAgB;CACnB;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;IACI,aAAa;IACb,kBAAkB;CACrB",file:"getProvince.vue",sourcesContent:["\n.getProvince[data-v-78becb94] {\n  background: #f8f8f8;\n}\n.top[data-v-78becb94] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.top img[data-v-78becb94] {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n}\n.top i[data-v-78becb94] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.top h2[data-v-78becb94] {\n    font-size: 16px;\n}\n.provinceList[data-v-78becb94] {\n  margin-top: 50px;\n  margin-left: 10px;\n}\n.provinceList li[data-v-78becb94] {\n    height: 30px;\n    line-height: 30px;\n}\n"],sourceRoot:""}])},wMQY:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"getProvince"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:"/static/img/icon-left.png",alt:""},on:{click:n.back}}),n._v(" "),e("h2",[n._v("选择省份")]),n._v(" "),e("i")]),n._v(" "),e("ul",{staticClass:"provinceList"},n._l(n.data,function(t,i){return e("li",{key:i,on:{click:function(e){return n.getCity(t.province_id,t.name)}}},[n._v(n._s(t.name))])}),0)])};i._withStripped=!0;var a={render:i,staticRenderFns:[]},o=a;var c=!1;var A=e("VU/8")({data:function(){return{data:[]}},methods:{back:function(){this.$router.push("/personalData")},getCity:function(n,t){this.$router.push({path:"/getCity",query:{province_id:n,province_name:t}})}},mounted:function(){var n=this;this.$http({method:"get",url:"/user/Province"}).then(function(t){n.data=t.data.data})}},o,!1,function(n){c||e("JRfr")},"data-v-78becb94",null);A.options.__file="src/components/page/getProvince.vue";t.default=A.exports}});