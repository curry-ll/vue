webpackJsonp([24],{Q8wk:function(n,t,e){(n.exports=e("FZ+f")(!0)).push([n.i,"\n.editAge[data-v-4b4286b6] {\n  background: #f8f8f8;\n}\n.top[data-v-4b4286b6] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.top img[data-v-4b4286b6] {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n}\n.top i[data-v-4b4286b6] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.top h2[data-v-4b4286b6] {\n    font-size: 16px;\n}\n.nickName[data-v-4b4286b6] {\n  height: 40px;\n  width: 100%;\n  background: white;\n  margin-top: 60px;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/page/editAge.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iCAAiC;CAClC;AACD;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;CACrB;AACD;IACI,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,gBAAgB;CACnB;AACD;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,kBAAkB;CACnB",file:"editAge.vue",sourcesContent:["\n.editAge[data-v-4b4286b6] {\n  background: #f8f8f8;\n}\n.top[data-v-4b4286b6] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.top img[data-v-4b4286b6] {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n}\n.top i[data-v-4b4286b6] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.top h2[data-v-4b4286b6] {\n    font-size: 16px;\n}\n.nickName[data-v-4b4286b6] {\n  height: 40px;\n  width: 100%;\n  background: white;\n  margin-top: 60px;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n}\n"],sourceRoot:""}])},iWG0:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Au9i"),a={data:function(){return{data:[],age:this.$route.query.age}},methods:{back:function(){this.$router.back(-1)},submit:function(){var n=this,t={age:this.age};this.$http.put("/user/Users",t).then(function(t){100===t.data.flag&&n.$router.push({path:"/personalData"}),Object(i.Toast)({message:t.data.message,position:"bottom",duration:2e3})})}},mounted:function(){}},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"editAge"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:"/static/img/icon-left.png",alt:""},on:{click:n.back}}),n._v(" "),e("h2",[n._v("修改年龄")]),n._v(" "),e("span",{staticStyle:{"margin-right":"10px"},on:{click:function(t){return n.submit()}}},[n._v("完成")])]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.age,expression:"age"}],staticClass:"nickName",attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:n.age},on:{input:function(t){t.target.composing||(n.age=t.target.value)}}})])};o._withStripped=!0;var A={render:o,staticRenderFns:[]},s=A;var c=!1;var p=e("VU/8")(a,s,!1,function(n){c||e("yl++")},"data-v-4b4286b6",null);p.options.__file="src/components/page/editAge.vue";t.default=p.exports},"yl++":function(n,t,e){var i=e("Q8wk");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("2a09b5c8",i,!1,{})}});