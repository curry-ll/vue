webpackJsonp([35],{D5Hy:function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n.shareRegister .top[data-v-189e927c] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #FFFFFF;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.shareRegister .top i[data-v-189e927c] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.shareRegister .top h2[data-v-189e927c] {\n    font-size: 16px;\n}\n.shareRegister .content[data-v-189e927c] {\n  margin: 30px 15px;\n}\n.shareRegister .content .unit[data-v-189e927c] {\n    width: 100%;\n    height: 50px;\n    background: white;\n    border-radius: 7px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 10px;\n}\n.shareRegister .content .unit img[data-v-189e927c] {\n      width: 16px;\n      height: 20px;\n      margin: 0 12px;\n}\n.shareRegister .content .unit input[data-v-189e927c] {\n      border: none;\n      outline: none;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      margin: 10px;\n      font-size: 14px;\n}\n.shareRegister .content .unit input[data-v-189e927c]::-webkit-input-placeholder {\n      color: #999;\n}\n.shareRegister .content .unit span[data-v-189e927c] {\n      margin: 0 12px;\n      color: #4a90e2;\n}\n.shareRegister .content .unit b[data-v-189e927c] {\n      color: #999;\n      font-weight: normal;\n}\n.shareRegister .content .submit[data-v-189e927c] {\n    background: #F21D40;\n    color: white;\n    outline: none;\n    width: 100%;\n    height: 50px;\n    border-radius: 5px;\n    border: none;\n    font-size: 16px;\n    margin-top: 30px;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/shareRegister.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iCAAiC;CAClC;AACD;IACI,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,gBAAgB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,oBAAoB;CACvB;AACD;MACM,YAAY;MACZ,aAAa;MACb,eAAe;CACpB;AACD;MACM,aAAa;MACb,cAAc;MACd,oBAAoB;UAChB,YAAY;cACR,QAAQ;MAChB,aAAa;MACb,gBAAgB;CACrB;AACD;MACM,YAAY;CACjB;AACD;MACM,eAAe;MACf,eAAe;CACpB;AACD;MACM,YAAY;MACZ,oBAAoB;CACzB;AACD;IACI,oBAAoB;IACpB,aAAa;IACb,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;CACpB",file:"shareRegister.vue",sourcesContent:["\n.shareRegister .top[data-v-189e927c] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #FFFFFF;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.shareRegister .top i[data-v-189e927c] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.shareRegister .top h2[data-v-189e927c] {\n    font-size: 16px;\n}\n.shareRegister .content[data-v-189e927c] {\n  margin: 30px 15px;\n}\n.shareRegister .content .unit[data-v-189e927c] {\n    width: 100%;\n    height: 50px;\n    background: white;\n    border-radius: 7px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 10px;\n}\n.shareRegister .content .unit img[data-v-189e927c] {\n      width: 16px;\n      height: 20px;\n      margin: 0 12px;\n}\n.shareRegister .content .unit input[data-v-189e927c] {\n      border: none;\n      outline: none;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      margin: 10px;\n      font-size: 14px;\n}\n.shareRegister .content .unit input[data-v-189e927c]::-webkit-input-placeholder {\n      color: #999;\n}\n.shareRegister .content .unit span[data-v-189e927c] {\n      margin: 0 12px;\n      color: #4a90e2;\n}\n.shareRegister .content .unit b[data-v-189e927c] {\n      color: #999;\n      font-weight: normal;\n}\n.shareRegister .content .submit[data-v-189e927c] {\n    background: #F21D40;\n    color: white;\n    outline: none;\n    width: 100%;\n    height: 50px;\n    border-radius: 5px;\n    border: none;\n    font-size: 16px;\n    margin-top: 30px;\n}\n"],sourceRoot:""}])},YVo1:function(e,t,n){var i=n("D5Hy");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("17be905b",i,!1,{})},yKcg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Au9i"),a={name:"shareRegister",data:function(){return{phone:"",passwd:"",npasswd:"",inviteCode:this.$route.query.inviteCode,verifyCode:"",time:0}},methods:{login:function(){this.$router.push("/login")},sendCode:function(){var e=this,t=null,n={phone:this.phone,type:"REGISTER"};this.$http.put("/user/VerifyCode",n).then(function(n){100===n.data.flag?(e.time=60,t=setInterval(function(){e.time=e.time-1},1e3),setTimeout(function(){clearInterval(t)},6e4)):Object(i.Toast)({message:n.data.message,position:"bottom",duration:2e3})})},submit:function(){var e=this,t={phone:this.phone,inviteCode:this.inviteCode,verifyCode:this.verifyCode,passwd:this.passwd};this.passwd===this.npasswd?this.$http({method:"post",url:"/user/PhoneRegister",data:t}).then(function(t){100===t.data.flag?(Object(i.Toast)({message:t.data.message,position:"bottom",duration:2e3}),e.$router.push("/login")):Object(i.Toast)({message:t.data.message,position:"bottom",duration:2e3})}):Object(i.Toast)({message:"密码输入不一致",position:"bottom",duration:2e3})}},mounted:function(){}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shareRegister"},[e._m(0),e._v(" "),n("div",{staticStyle:{"padding-bottom":"50px"}}),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"unit"},[n("img",{staticStyle:{width:"14px",margin:"0 13px"},attrs:{src:"/static/img/icon-mobile.png",alt:""}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"unit"},[n("img",{staticStyle:{width:"20px",height:"19px",margin:"0 10px"},attrs:{src:"/static/img/icon-comment.png",alt:""}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyCode,expression:"verifyCode"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.verifyCode},on:{input:function(t){t.target.composing||(e.verifyCode=t.target.value)}}}),e._v(" "),0===e.time?n("span",{on:{click:function(t){return e.sendCode()}}},[e._v("获取验证码")]):e._e(),e._v(" "),0!==e.time?n("b",{staticStyle:{color:"#ddd"}},[e._v("重发（"+e._s(e.time)+"）")]):e._e()]),e._v(" "),n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/static/img/icon-recommend.png",alt:""}}),e._v(" "),n("p",{staticStyle:{margin:"10px"}},[e._v(e._s(e.inviteCode))])]),e._v(" "),n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/static/img/icon-lock.png",alt:""}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"请输入密码（6-20位）"},domProps:{value:e.passwd},on:{input:function(t){t.target.composing||(e.passwd=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/static/img/icon-lock.png",alt:""}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.npasswd,expression:"npasswd"}],attrs:{type:"password",placeholder:"请重新输入密码"},domProps:{value:e.npasswd},on:{input:function(t){t.target.composing||(e.npasswd=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"submit",on:{click:function(t){return e.submit()}}},[e._v("注册")])])])};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("i"),this._v(" "),t("h2",[this._v("注册")]),this._v(" "),t("i")])}]},r=o;var A=!1;var c=n("VU/8")(a,r,!1,function(e){A||n("YVo1")},"data-v-189e927c",null);c.options.__file="src/components/shareRegister.vue";t.default=c.exports}});