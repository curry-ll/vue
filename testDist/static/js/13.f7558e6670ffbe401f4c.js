webpackJsonp([13],{JKEc:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),A=i("HLD8"),s=i("7+uW"),d=i("Au9i");s.default.component(d.Loadmore.name,d.Loadmore);var o={name:"activity",data:function(){return{allLoaded:!1,banner:[],province_id:"",city_id:"",area_id:"",key:"",page:1,num:15,bottomPullText:"上拉加载更多",list:[],provinceList:[],cityList:[],areaList:[],provinceCurrent:-1,cityCurrent:-1,showMask:!1}},components:{vfooterNav:A.a},methods:{activityDetail:function(t){this.$router.push({path:"/activityDetail",query:{id:t}})},addActivity:function(){this.$router.push("/addActivity")},getBanner:function(){var t=this;this.$http({method:"get",url:"/common/Banner",params:{type:1}}).then(function(n){100===n.data.flag&&(t.banner=n.data.data)})},search:function(t){13===t.keyCode&&this.updateDate()},updateDate:function(){var t={key:this.key,page:this.page,num:this.num},n=this;this.$http({method:"get",url:"/activity/activity",params:t}).then(function(t){100===t.data.flag&&(n.list=t.data.data)})},loadBottom:function(){this.page=this.page+1;var t={key:this.key,page:this.page,num:this.num,province_id:this.province_id,city_id:this.city_id,area_id:this.area_id},n=this;this.$http({method:"get",url:"/activity/activity",params:t}).then(function(t){var i;t.data.data.length>0?(i=n.list).push.apply(i,e()(t.data.data)):(n.bottomPullText="没有更多了",n.$refs.loadmore.onBottomLoaded(),n.allLoaded=!0)})},showDressMask:function(){this.showMask=!0},CloseDressMask:function(){this.showMask=!1},getProvince:function(){var t=this;this.$http({method:"get",url:"/user/Province"}).then(function(n){100===n.data.flag&&(t.provinceList=n.data.data)})},getCity:function(t,n){this.areaList=[],this.cityCurrent=-1,this.provinceCurrent=n,this.province_id=t;var i={province_id:t},a=this;this.$http({method:"get",url:"/user/City",params:i}).then(function(t){100===t.data.flag&&(a.cityList=t.data.data)})},getArea:function(t,n){this.city_id=t,this.cityCurrent=n;var i={city_id:t},a=this;this.$http({method:"get",url:"/user/Area",params:i}).then(function(t){100===t.data.flag&&(a.areaList=t.data.data)})},getaddress:function(t){this.area_id=t;var n={key:this.key,page:this.page,num:this.num,province_id:this.province_id,city_id:this.city_id,area_id:this.area_id},i=this;this.$http({method:"get",url:"/activity/activity",params:n}).then(function(t){100===t.data.flag&&(i.list=t.data.data,i.showMask=!1)})}},mounted:function(){this.getBanner(),this.updateDate(),this.getProvince()}},r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"activity"},[i("div",{staticClass:"top"},[i("div",{staticClass:"top-box"},[i("div",{on:{click:function(n){return t.showDressMask()}}},[i("img",{attrs:{src:"/static/img/activeicon-hangzhou.png",alt:""}}),t._v(" "),i("h5",[t._v("地区")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.key},on:{keyup:t.search,input:function(n){n.target.composing||(t.key=n.target.value)}}}),t._v(" "),i("div",{on:{click:function(n){return t.addActivity()}}},[i("img",{attrs:{src:"/static/img/icon-add.png",alt:""}}),t._v(" "),i("h4",[t._v("发布")])])])]),t._v(" "),i("div",{staticStyle:{"padding-bottom":"70px"}}),t._v(" "),i("div",{staticClass:"banner"},[i("mt-swipe",{attrs:{auto:4e3,"show-indicators":!1}},t._l(t.banner,function(t,n){return i("mt-swipe-item",{key:n},[i("img",{attrs:{src:t.url,alt:""}})])}),1)],1),t._v(" "),i("mt-loadmore",{ref:"loadmore",staticStyle:{overflow:"scroll"},attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,bottomPullText:t.bottomPullText}},t._l(t.list,function(n,a){return i("div",{key:a,staticClass:"unit",on:{click:function(i){return t.activityDetail(n.activity_id)}}},[i("div",{staticClass:"unit-detail"},[i("h2",[t._v(t._s(n.title))]),t._v(" "),i("p",[t._v(t._s(n.preface))]),t._v(" "),i("p",[t._v("\n          "+t._s(n.num)+"人\n          "),i("i",[t._v("|")]),t._v("\n          "+t._s(n.address)+"\n        ")]),t._v(" "),i("div",{staticClass:"unit-user"},[n.head_img?t._e():i("img",{attrs:{src:"/static/img/defaultImg.png",alt:""}}),t._v(" "),n.head_img?i("img",{attrs:{src:n.head_img,alt:""}}):t._e(),t._v(" "),i("p",[t._v(t._s(n.nick_name))])])]),t._v(" "),i("img",{staticClass:"cover",attrs:{src:n.banner,alt:""}})])}),0),t._v(" "),t.showMask?i("div",{staticClass:"mask"}):t._e(),t._v(" "),t.showMask?i("div",{staticClass:"address"},[i("img",{staticClass:"address-close",attrs:{src:"/static/img/icon-close.png",alt:""},on:{click:function(n){return t.CloseDressMask()}}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"address-detail"},[i("div",{staticClass:"address-content"},t._l(t.provinceList,function(n,a){return i("p",{key:a,class:{selectActive:a==t.provinceCurrent},on:{click:function(i){return t.getCity(n.province_id,a)}}},[t._v(t._s(n.name))])}),0),t._v(" "),i("div",{staticClass:"address-content"},t._l(t.cityList,function(n,a){return i("p",{key:a,class:{selectActive:a==t.cityCurrent},on:{click:function(i){return t.getArea(n.city_id,a,a)}}},[t._v(t._s(n.name))])}),0),t._v(" "),i("div",{staticClass:"address-content"},t._l(t.areaList,function(n,a){return i("p",{key:a,on:{click:function(i){return t.getaddress(n.area_id)}}},[t._v(t._s(n.name))])}),0)])]):t._e(),t._v(" "),i("div",{staticStyle:{"padding-bottom":"50px"}}),t._v(" "),i("vfooterNav")],1)};r._withStripped=!0;var c={render:r,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"address-head"},[n("div",{staticClass:"address-wrap"},[n("p",[this._v("省份")]),this._v(" "),n("p",[this._v("城市")]),this._v(" "),n("p",[this._v("地区")])])])}]},f=c;var l=!1;var p=i("VU/8")(o,f,!1,function(t){l||i("a1fW")},"data-v-7f1a9f9f",null);p.options.__file="src/components/activity.vue";n.default=p.exports},a1fW:function(t,n,i){var a=i("q830");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("0b2639e2",a,!1,{})},q830:function(t,n,i){(t.exports=i("FZ+f")(!0)).push([t.i,"\n.activity .top[data-v-7f1a9f9f] {\n  width: 100%;\n  height: 70px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #f1f1f1;\n  z-index: 10;\n}\n.activity .top .top-box[data-v-7f1a9f9f] {\n    width: 94%;\n    height: 70px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n}\n.activity .top .top-box h2[data-v-7f1a9f9f] {\n      font-weight: bold;\n      font-size: 18px;\n}\n.activity .top .top-box input[data-v-7f1a9f9f] {\n      height: 30px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      border: none;\n      outline: none;\n      border-radius: 30px;\n      text-align: center;\n      margin: 0 10px;\n}\n.activity .top .top-box img[data-v-7f1a9f9f] {\n      width: 20px;\n      height: 20px;\n}\n.activity .top .top-box h4[data-v-7f1a9f9f] {\n      color: goldenrod;\n}\n.activity .banner[data-v-7f1a9f9f] {\n  width: 94%;\n  height: 128px;\n  border-radius: 8px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.activity .banner img[data-v-7f1a9f9f] {\n    width: 100%;\n    height: 128px;\n}\n.activity .menu[data-v-7f1a9f9f] {\n  width: 94%;\n  height: 90px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 auto;\n}\n.activity .menu .menu-unit[data-v-7f1a9f9f] {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.activity .menu .menu-unit img[data-v-7f1a9f9f] {\n      height: 30px;\n      width: 30px;\n}\n.activity .menu .menu-unit h3[data-v-7f1a9f9f] {\n      font-size: 12px;\n      margin-top: 3px;\n}\n.activity .unit[data-v-7f1a9f9f] {\n  width: 94%;\n  height: 100px;\n  background: white;\n  border-radius: 8px;\n  margin: 5px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.activity .unit .cover[data-v-7f1a9f9f] {\n    width: 110px;\n    height: 82px;\n    border-radius: 8px;\n    margin-right: 10px;\n}\n.activity .unit .unit-detail[data-v-7f1a9f9f] {\n    margin: 0 10px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.activity .unit .unit-detail h2[data-v-7f1a9f9f] {\n      font-size: 14px;\n      font-weight: bold;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n}\n.activity .unit .unit-detail p[data-v-7f1a9f9f] {\n      color: #999999;\n      margin: 3px 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n}\n.activity .unit .unit-detail p i[data-v-7f1a9f9f] {\n        margin: 0 3px;\n}\n.activity .unit .unit-detail .unit-user[data-v-7f1a9f9f] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.activity .unit .unit-detail .unit-user img[data-v-7f1a9f9f] {\n        width: 16px;\n        height: 16px;\n        border-radius: 50%;\n        margin-right: 3px;\n}\n.activity .mask[data-v-7f1a9f9f] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  background: black;\n  opacity: 0.6;\n  z-index: 20;\n}\n.activity .address[data-v-7f1a9f9f] {\n  position: fixed;\n  height: 70%;\n  width: 100%;\n  left: 0;\n  top: 15%;\n  background: white;\n  z-index: 30;\n}\n.activity .address .address-close[data-v-7f1a9f9f] {\n    position: absolute;\n    top: -40px;\n    right: 20px;\n    width: 25px;\n    height: 25px;\n}\n.activity .address .address-head[data-v-7f1a9f9f] {\n    height: 40px;\n    border-bottom: 1px solid #cccccc;\n}\n.activity .address .address-head .address-wrap[data-v-7f1a9f9f] {\n      width: 90%;\n      height: 40px;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.activity .address .address-head .address-wrap p[data-v-7f1a9f9f] {\n        width: 33%;\n        font-size: 14px;\n}\n.activity .address .address-detail[data-v-7f1a9f9f] {\n    width: 90%;\n    height: 85%;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.activity .address .address-detail .address-content[data-v-7f1a9f9f] {\n      height: 100%;\n      width: 33%;\n      overflow: scroll;\n}\n.activity .address .address-detail .address-content p[data-v-7f1a9f9f] {\n        font-size: 14px;\n        margin: 10px 0;\n}\n.activity .address .address-detail .address-content .selectActive[data-v-7f1a9f9f] {\n        color: #f21d40;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/activity.vue"],names:[],mappings:"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",file:"activity.vue",sourcesContent:["\n.activity .top[data-v-7f1a9f9f] {\n  width: 100%;\n  height: 70px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #f1f1f1;\n  z-index: 10;\n}\n.activity .top .top-box[data-v-7f1a9f9f] {\n    width: 94%;\n    height: 70px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n}\n.activity .top .top-box h2[data-v-7f1a9f9f] {\n      font-weight: bold;\n      font-size: 18px;\n}\n.activity .top .top-box input[data-v-7f1a9f9f] {\n      height: 30px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      border: none;\n      outline: none;\n      border-radius: 30px;\n      text-align: center;\n      margin: 0 10px;\n}\n.activity .top .top-box img[data-v-7f1a9f9f] {\n      width: 20px;\n      height: 20px;\n}\n.activity .top .top-box h4[data-v-7f1a9f9f] {\n      color: goldenrod;\n}\n.activity .banner[data-v-7f1a9f9f] {\n  width: 94%;\n  height: 128px;\n  border-radius: 8px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.activity .banner img[data-v-7f1a9f9f] {\n    width: 100%;\n    height: 128px;\n}\n.activity .menu[data-v-7f1a9f9f] {\n  width: 94%;\n  height: 90px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 auto;\n}\n.activity .menu .menu-unit[data-v-7f1a9f9f] {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.activity .menu .menu-unit img[data-v-7f1a9f9f] {\n      height: 30px;\n      width: 30px;\n}\n.activity .menu .menu-unit h3[data-v-7f1a9f9f] {\n      font-size: 12px;\n      margin-top: 3px;\n}\n.activity .unit[data-v-7f1a9f9f] {\n  width: 94%;\n  height: 100px;\n  background: white;\n  border-radius: 8px;\n  margin: 5px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.activity .unit .cover[data-v-7f1a9f9f] {\n    width: 110px;\n    height: 82px;\n    border-radius: 8px;\n    margin-right: 10px;\n}\n.activity .unit .unit-detail[data-v-7f1a9f9f] {\n    margin: 0 10px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.activity .unit .unit-detail h2[data-v-7f1a9f9f] {\n      font-size: 14px;\n      font-weight: bold;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n}\n.activity .unit .unit-detail p[data-v-7f1a9f9f] {\n      color: #999999;\n      margin: 3px 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n}\n.activity .unit .unit-detail p i[data-v-7f1a9f9f] {\n        margin: 0 3px;\n}\n.activity .unit .unit-detail .unit-user[data-v-7f1a9f9f] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.activity .unit .unit-detail .unit-user img[data-v-7f1a9f9f] {\n        width: 16px;\n        height: 16px;\n        border-radius: 50%;\n        margin-right: 3px;\n}\n.activity .mask[data-v-7f1a9f9f] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  background: black;\n  opacity: 0.6;\n  z-index: 20;\n}\n.activity .address[data-v-7f1a9f9f] {\n  position: fixed;\n  height: 70%;\n  width: 100%;\n  left: 0;\n  top: 15%;\n  background: white;\n  z-index: 30;\n}\n.activity .address .address-close[data-v-7f1a9f9f] {\n    position: absolute;\n    top: -40px;\n    right: 20px;\n    width: 25px;\n    height: 25px;\n}\n.activity .address .address-head[data-v-7f1a9f9f] {\n    height: 40px;\n    border-bottom: 1px solid #cccccc;\n}\n.activity .address .address-head .address-wrap[data-v-7f1a9f9f] {\n      width: 90%;\n      height: 40px;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.activity .address .address-head .address-wrap p[data-v-7f1a9f9f] {\n        width: 33%;\n        font-size: 14px;\n}\n.activity .address .address-detail[data-v-7f1a9f9f] {\n    width: 90%;\n    height: 85%;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.activity .address .address-detail .address-content[data-v-7f1a9f9f] {\n      height: 100%;\n      width: 33%;\n      overflow: scroll;\n}\n.activity .address .address-detail .address-content p[data-v-7f1a9f9f] {\n        font-size: 14px;\n        margin: 10px 0;\n}\n.activity .address .address-detail .address-content .selectActive[data-v-7f1a9f9f] {\n        color: #f21d40;\n}\n"],sourceRoot:""}])}});