webpackJsonp([41],{GHGh:function(t,n,e){var a=e("z/+d");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("64033dd0",a,!1,{})},IcnI:function(t,n,e){"use strict";var a={};e.d(a,"navActive",function(){return c}),e.d(a,"login",function(){return u}),e.d(a,"loginout",function(){return p});var o={};e.d(o,"navState",function(){return s});var i,r=e("7+uW"),l=e("NYxO"),c=function(t,n){(0,t.commit)("NAVACTIVE",n)},u=function(t,n){(0,t.commit)("LOGIN",n)},p=function(t){(0,t.commit)("LOGINOUT")},s=function(t){return t.navActive},h={token:localStorage.getItem("token")?localStorage.getItem("token"):"",navActive:1},m=e("bOdI"),f=e.n(m),d=(i={},f()(i,"LOGIN",function(t,n){localStorage.setItem("token",n),t.token=n}),f()(i,"LOGINOUT",function(t){localStorage.removeItem("token"),t.token=""}),f()(i,"NAVACTIVE",function(t,n){t.navActive=n}),i);r.default.use(l.a);n.a=new l.a.Store({actions:a,getters:o,state:h,mutations:d,strict:!0})},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]},r=i;var l=!1;var c=e("VU/8")({name:"App"},r,!1,function(t){l||e("GHGh")},null,null);c.options.__file="src/App.vue";var u=c.exports,p=e("Gu7T"),s=e.n(p),h=e("/ocq"),m=[{path:"/myActivity",component:function(t){return Promise.all([e.e(0),e.e(18)]).then(function(){var n=[e("0G3r")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"我的活动"}},{path:"/browseHistory",component:function(t){return Promise.all([e.e(0),e.e(34)]).then(function(){var n=[e("xbyS")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"浏览历史"}},{path:"/activityDetail",component:function(t){return Promise.all([e.e(0),e.e(10)]).then(function(){var n=[e("moo/")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"活动详情"}},{path:"/setUp",component:function(t){return e.e(38).then(function(){var n=[e("evdY")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"设置"}},{path:"/accountSecurity",component:function(t){return e.e(7).then(function(){var n=[e("CENQ")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"账号与安全"}},{path:"/findPassWord",component:function(t){return e.e(5).then(function(){var n=[e("SR5H")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"找回密码"}},{path:"/editPassWord",component:function(t){return e.e(17).then(function(){var n=[e("Oo52")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"修改密码"}},{path:"/aboutUs",component:function(t){return e.e(30).then(function(){var n=[e("A1Ym")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"关于我们"}},{path:"/addSound",component:function(t){return Promise.all([e.e(0),e.e(36)]).then(function(){var n=[e("W0Zx")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"发布声音"}},{path:"/mySound",component:function(t){return Promise.all([e.e(0),e.e(6)]).then(function(){var n=[e("HENj")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"我的声音"}},{path:"/soundDetail",component:function(t){return Promise.all([e.e(0),e.e(16)]).then(function(){var n=[e("5zYp")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"志愿者声音"}},{path:"/likeSound",component:function(t){return Promise.all([e.e(0),e.e(9)]).then(function(){var n=[e("Fx1I")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"赞过的"}},{path:"/commentList",component:function(t){return Promise.all([e.e(0),e.e(28)]).then(function(){var n=[e("P0u2")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"评论"}},{path:"/businessCard",component:function(t){return e.e(3).then(function(){var n=[e("QjIb")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"名片"}},{path:"/integral",component:function(t){return Promise.all([e.e(0),e.e(24)]).then(function(){var n=[e("Hbiw")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"公益分"}},{path:"/myFollow",component:function(t){return e.e(29).then(function(){var n=[e("xWlM")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"我的关注"}},{path:"/myInformation",component:function(t){return e.e(27).then(function(){var n=[e("XRc1")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"我的消息"}},{path:"/personalData",component:function(t){return e.e(31).then(function(){var n=[e("Ccne")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"个人信息"}},{path:"/editName",component:function(t){return e.e(4).then(function(){var n=[e("rJWP")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"修改名称"}},{path:"/editAge",component:function(t){return e.e(22).then(function(){var n=[e("iWG0")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"修改年龄"}},{path:"/getProvince",component:function(t){return e.e(15).then(function(){var n=[e("wMQY")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"选择省份"}},{path:"/getCity",component:function(t){return e.e(19).then(function(){var n=[e("jlvw")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"选择城市"}},{path:"/getArea",component:function(t){return e.e(14).then(function(){var n=[e("edO2")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"选择地区"}},{path:"/serviceNum",component:function(t){return Promise.all([e.e(0),e.e(32)]).then(function(){var n=[e("93de")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"服务次数"}},{path:"/serviceTime",component:function(t){return Promise.all([e.e(0),e.e(26)]).then(function(){var n=[e("MwdZ")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"服务时长详情"}},{path:"/addActivity",component:function(t){return Promise.all([e.e(0),e.e(21)]).then(function(){var n=[e("dB7q")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"发布活动"}},{path:"/editActivity",component:function(t){return Promise.all([e.e(0),e.e(8)]).then(function(){var n=[e("6CkL")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"修改活动"}},{path:"/mySignUp",component:function(t){return Promise.all([e.e(0),e.e(20)]).then(function(){var n=[e("Y/WU")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"我的报名"}},{path:"/activityDetailSign",component:function(t){return Promise.all([e.e(0),e.e(2)]).then(function(){var n=[e("Rhhy")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"活动详情"}},{path:"/communityList",component:function(t){return e.e(35).then(function(){var n=[e("JmMV")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"关系列表"}},{path:"/realName",component:function(t){return Promise.all([e.e(0),e.e(25)]).then(function(){var n=[e("LSDp")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"实名认证"}}],f=e("IcnI"),d=["/login","/register","/shareRegister"];a.default.use(h.a);var v=new h.a({mode:"history",routes:[{path:"/",redirect:"/activity",component:function(t){return e.e(23).then(function(){var n=[e("dAjm")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"首页"},children:[{path:"/login",component:function(t){return e.e(37).then(function(){var n=[e("K31e")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"登录"}},{path:"/register",component:function(t){return e.e(11).then(function(){var n=[e("q3Wa")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"注册"}},{path:"/shareRegister",component:function(t){return e.e(33).then(function(){var n=[e("yKcg")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"分享注册"}},{path:"/activity",component:function(t){return Promise.all([e.e(0),e.e(13)]).then(function(){var n=[e("JKEc")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"活动"}},{path:"/sound",component:function(t){return Promise.all([e.e(0),e.e(39)]).then(function(){var n=[e("qNNx")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"声音"}},{path:"/volunteer",component:function(t){return Promise.all([e.e(0),e.e(12)]).then(function(){var n=[e("VJVX")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"志愿者"}},{path:"/user",component:function(t){return Promise.all([e.e(0),e.e(1)]).then(function(){var n=[e("ia7Y")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"我的"}}]}].concat(s()(m))});v.beforeEach(function(t,n,e){if(t.meta.title&&(document.title=t.meta.title),f.a.state.token||-1!==d.indexOf(t.path))return e();e("/login")});var A=v,y=e("Au9i"),g=e.n(y),b=e("//Fk"),C=e.n(b),P=e("Dd8w"),w=e.n(P),I=e("mtWM"),k=e.n(I),E=e("mw3O"),x=e.n(E),B=["/user/PhoneLogin","/user/PhoneRegister","/user/VerifyCode","/user/NewPassword"];k.a.defaults.baseURL="http://notebook.api.test.91kaiteng.com/v1",k.a.defaults.timeout=5e3,k.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",k.a.interceptors.request.use(function(t){if(f.a.state.token&&-1===B.indexOf(t.url))if("get"===t.method)t.url=encodeURI(t.url),t.params=w()({token:f.a.state.token},t.params);else if("/user/Image"===t.url)t.data=t.data;else{var n=x.a.parse(t.data);t.data=x.a.stringify(w()({token:f.a.state.token},n))}else if("get"===t.method)t.url=encodeURI(t.url);else if("/user/Image"===t.url)t.data=t.data;else{var e=x.a.parse(t.data);t.data=x.a.stringify(w()({},e))}return t},function(t){return C.a.reject(t)}),k.a.interceptors.response.use(function(t){return-1===t.data.flag&&a.default.prototype.router.replace("login"),t},function(t){return t.response&&200!==t.response.status&&alert("数据错误！"),C.a.reject(t)});var S=k.a,N=e("/IwO"),O=e.n(N);e("d8/S");a.default.config.productionTip=!1,a.default.prototype.$http=S,a.default.prototype.router=A,a.default.use(g.a),a.default.use(O.a),O.a.initAMapApiLoader({key:"dcd2be7753efe2891fadbd986128d2d8",plugin:["AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","Geocoder"],v:"1.4.4"}),new a.default({el:"#app",store:f.a,router:A,components:{App:u},template:"<App/>"})},"d8/S":function(t,n){},"z/+d":function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* text-align: center; */\n  color: #2c3e50;\n  /* margin-top: 60px; */\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n}\nh1, h2, h3, h4, h5 {\n  font-weight: normal;\n}\ni {\nfont-style: normal;\n}\nli {\n  list-style: none;\n}\n","",{version:3,sources:["D:/item/benefit/src/App.vue"],names:[],mappings:";AACA;EACE,oDAAoD;EACpD,oCAAoC;EACpC,mCAAmC;EACnC,yBAAyB;EACzB,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,oBAAoB;CACrB;AACD;AACA,mBAAmB;CAClB;AACD;EACE,iBAAiB;CAClB",file:"App.vue",sourcesContent:["\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* text-align: center; */\n  color: #2c3e50;\n  /* margin-top: 60px; */\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n}\nh1, h2, h3, h4, h5 {\n  font-weight: normal;\n}\ni {\nfont-style: normal;\n}\nli {\n  list-style: none;\n}\n"],sourceRoot:""}])}},["NHnr"]);