webpackJsonp([38],{"0gXm":function(n,t,e){var i=e("z5oD");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("1555e218",i,!1,{})},evdY:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Dd8w"),A=e.n(i),a=e("NYxO"),o={name:"setUp",data:function(){return{}},methods:A()({},Object(a.b)(["loginout"]),{back:function(){this.$router.push("/user")},signOut:function(){this.loginout(),this.$router.push("/login")},accountSecurity:function(){this.$router.push("/accountSecurity")}}),mounted:function(){}},s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"setUp"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:"/static/img/icon-left.png",alt:""},on:{click:n.back}}),n._v(" "),e("h2",[n._v("设置")]),n._v(" "),e("i")]),n._v(" "),e("div",{staticStyle:{"padding-bottom":"60px"}}),n._v(" "),e("div",{staticClass:"uint",on:{click:function(t){return n.accountSecurity()}}},[e("h3",{staticStyle:{"border-bottom":"1px solid #cccccc"}},[n._v("账号与安全")])]),n._v(" "),n._m(0),n._v(" "),e("br"),n._v(" "),e("button",{staticClass:"signOut",on:{click:function(t){return n.signOut()}}},[n._v("退出账户")])])};s._withStripped=!0;var p={render:s,staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"uint"},[t("h3",[this._v("版本")])])}]},c=p;var r=!1;var f=e("VU/8")(o,c,!1,function(n){r||e("0gXm")},"data-v-0ff122a6",null);f.options.__file="src/components/page/setUp.vue";t.default=f.exports},z5oD:function(n,t,e){(n.exports=e("FZ+f")(!0)).push([n.i,"\n.setUp[data-v-0ff122a6] {\n  overflow: hidden;\n}\n.setUp .top[data-v-0ff122a6] {\n    width: 100%;\n    height: 50px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #FFFFFF;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #cccccc;\n}\n.setUp .top img[data-v-0ff122a6] {\n      width: 25px;\n      height: 25px;\n      margin-left: 10px;\n}\n.setUp .top i[data-v-0ff122a6] {\n      padding: 0 25px;\n      font-size: 20px;\n}\n.setUp .top h2[data-v-0ff122a6] {\n      font-size: 16px;\n}\n.setUp .uint[data-v-0ff122a6] {\n    width: 100%;\n    height: 41px;\n    background: #FFFFFF;\n}\n.setUp .uint h3[data-v-0ff122a6] {\n      font-size: 14px;\n      height: 40px;\n      margin: 0 16px;\n      line-height: 40px;\n      font-weight: bold;\n}\n.setUp .signOut[data-v-0ff122a6] {\n    margin: 20px 16px;\n    width: 94%;\n    height: 50px;\n    background: #999999;\n    color: #FFFFFF;\n    font-size: 16px;\n    border-radius: 5px;\n    border: none;\n    outline: none;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/page/setUp.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,OAAO;IACP,QAAQ;IACR,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,uBAAuB;YACnB,+BAA+B;IACvC,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,iCAAiC;CACpC;AACD;MACM,YAAY;MACZ,aAAa;MACb,kBAAkB;CACvB;AACD;MACM,gBAAgB;MAChB,gBAAgB;CACrB;AACD;MACM,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,aAAa;IACb,oBAAoB;CACvB;AACD;MACM,gBAAgB;MAChB,aAAa;MACb,eAAe;MACf,kBAAkB;MAClB,kBAAkB;CACvB;AACD;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,cAAc;CACjB",file:"setUp.vue",sourcesContent:["\n.setUp[data-v-0ff122a6] {\n  overflow: hidden;\n}\n.setUp .top[data-v-0ff122a6] {\n    width: 100%;\n    height: 50px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #FFFFFF;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #cccccc;\n}\n.setUp .top img[data-v-0ff122a6] {\n      width: 25px;\n      height: 25px;\n      margin-left: 10px;\n}\n.setUp .top i[data-v-0ff122a6] {\n      padding: 0 25px;\n      font-size: 20px;\n}\n.setUp .top h2[data-v-0ff122a6] {\n      font-size: 16px;\n}\n.setUp .uint[data-v-0ff122a6] {\n    width: 100%;\n    height: 41px;\n    background: #FFFFFF;\n}\n.setUp .uint h3[data-v-0ff122a6] {\n      font-size: 14px;\n      height: 40px;\n      margin: 0 16px;\n      line-height: 40px;\n      font-weight: bold;\n}\n.setUp .signOut[data-v-0ff122a6] {\n    margin: 20px 16px;\n    width: 94%;\n    height: 50px;\n    background: #999999;\n    color: #FFFFFF;\n    font-size: 16px;\n    border-radius: 5px;\n    border: none;\n    outline: none;\n}\n"],sourceRoot:""}])}});