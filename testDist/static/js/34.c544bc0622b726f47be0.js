webpackJsonp([34],{"93de":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Gu7T"),a=n.n(i),A=n("7+uW"),o=n("KheU"),s=n("Au9i");A.default.component(s.Loadmore.name,s.Loadmore);var l={name:"serviceNum",data:function(){return{allLoaded:!1,page:1,num:15,bottomPullText:"上拉加载更多",nums:this.$route.query.num,numList:[]}},methods:{back:function(){this.$router.push("/user")},getData:function(){var t={page:this.page,num:this.num},e=this;this.$http({method:"get",url:"/user/Num",params:t}).then(function(t){100===t.data.flag&&(e.numList=t.data.data,t.data.data.map(function(t,e){t.create_time=Object(o.f)(t.create_time)}))})},loadBottom:function(){this.page=this.page+1;var t={page:this.page,num:this.num},e=this;this.$http({method:"get",url:"/user/Num",params:t}).then(function(t){var n;t.data.data.length>0?((n=e.numList).push.apply(n,a()(t.data.data)),t.data.data.map(function(t,e){t.create_time=Object(o.f)(t.create_time)})):(e.bottomPullText="没有更多了",e.$refs.loadmore.onBottomLoaded(),e.allLoaded=!0)})}},mounted:function(){this.getData()}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"serviceNum"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:"/static/img/icon-left.png",alt:""},on:{click:t.back}}),t._v(" "),n("h2",[t._v("服务次数")]),t._v(" "),n("i")]),t._v(" "),n("div",{staticStyle:{"padding-bottom":"50px"}}),t._v(" "),n("div",{staticClass:"total"},[n("div",{staticClass:"total-wrap"},[n("h3",[t._v("服务次数")]),t._v(" "),n("h2",[t._v(t._s(t.nums))])])]),t._v(" "),t._m(0),t._v(" "),n("mt-loadmore",{ref:"loadmore",staticStyle:{overflow:"scroll"},attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,bottomPullText:t.bottomPullText}},t._l(t.numList,function(e,i){return n("div",{key:i,staticClass:"detail"},[n("div",{staticClass:"detail-wrapper"},[n("p",[t._v(t._s(e.create_time)+t._s(e.content))]),t._v(" "),n("span",[t._v(t._s(e.status+e.num)+"次")])])])}),0)],1)};r._withStripped=!0;var c={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"num-detail-title"},[e("div",{staticClass:"warpper"},[e("h3",[this._v("服务详情")])])])}]},d=c;var p=!1;var B=n("VU/8")(l,d,!1,function(t){p||n("Lgpm")},"data-v-234195b1",null);B.options.__file="src/components/page/serviceNum.vue";e.default=B.exports},Lgpm:function(t,e,n){var i=n("stN8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("fd144f8e",i,!1,{})},stN8:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n.serviceNum .top[data-v-234195b1] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.serviceNum .top img[data-v-234195b1] {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n}\n.serviceNum .top i[data-v-234195b1] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.serviceNum .top h2[data-v-234195b1] {\n    font-size: 16px;\n}\n.serviceNum .total[data-v-234195b1] {\n  width: 100%;\n  height: 100px;\n  background: white;\n  margin: 10px 0;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.serviceNum .total .total-wrap[data-v-234195b1] {\n    height: 80px;\n    margin: 0 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.serviceNum .total .total-wrap h3[data-v-234195b1] {\n      color: #666666;\n      font-size: 16px;\n}\n.serviceNum .total .total-wrap h2[data-v-234195b1] {\n      font-size: 40px;\n}\n.serviceNum .num-detail-title[data-v-234195b1] {\n  background: white;\n}\n.serviceNum .num-detail-title .warpper[data-v-234195b1] {\n    width: 94%;\n    margin: 0 auto;\n}\n.serviceNum .num-detail-title .warpper h3[data-v-234195b1] {\n      color: #666666;\n      font-size: 16px;\n      line-height: 40px;\n}\n.serviceNum .detail[data-v-234195b1] {\n  width: 100%;\n  height: 40px;\n  background: white;\n}\n.serviceNum .detail .detail-wrapper[data-v-234195b1] {\n    width: 94%;\n    height: 40px;\n    margin: 0 auto;\n    border-bottom: 1px solid #cccccc;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.serviceNum .detail .detail-wrapper p[data-v-234195b1] {\n      height: 20px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-size: 14px;\n      color: #333333;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n}\n.serviceNum .detail .detail-wrapper span[data-v-234195b1] {\n      text-align: right;\n      width: 100px;\n      font-size: 14px;\n      color: #333333;\n}\n","",{version:3,sources:["D:/item/benefit/src/components/page/serviceNum.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iCAAiC;CAClC;AACD;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;CACrB;AACD;IACI,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,gBAAgB;CACnB;AACD;EACE,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;IACI,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;IAC/B,0BAA0B;QACtB,uBAAuB;YACnB,+BAA+B;CAC1C;AACD;MACM,eAAe;MACf,gBAAgB;CACrB;AACD;MACM,gBAAgB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;IACI,WAAW;IACX,eAAe;CAClB;AACD;MACM,eAAe;MACf,gBAAgB;MAChB,kBAAkB;CACvB;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,iCAAiC;IACjC,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,uBAAuB;YACnB,+BAA+B;IACvC,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;CAC/B;AACD;MACM,aAAa;MACb,oBAAoB;UAChB,YAAY;cACR,QAAQ;MAChB,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,wBAAwB;MACxB,qBAAqB;MACrB,6BAA6B;MAC7B,sBAAsB;CAC3B;AACD;MACM,kBAAkB;MAClB,aAAa;MACb,gBAAgB;MAChB,eAAe;CACpB",file:"serviceNum.vue",sourcesContent:["\n.serviceNum .top[data-v-234195b1] {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #cccccc;\n}\n.serviceNum .top img[data-v-234195b1] {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n}\n.serviceNum .top i[data-v-234195b1] {\n    padding: 0 25px;\n    font-size: 20px;\n}\n.serviceNum .top h2[data-v-234195b1] {\n    font-size: 16px;\n}\n.serviceNum .total[data-v-234195b1] {\n  width: 100%;\n  height: 100px;\n  background: white;\n  margin: 10px 0;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.serviceNum .total .total-wrap[data-v-234195b1] {\n    height: 80px;\n    margin: 0 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.serviceNum .total .total-wrap h3[data-v-234195b1] {\n      color: #666666;\n      font-size: 16px;\n}\n.serviceNum .total .total-wrap h2[data-v-234195b1] {\n      font-size: 40px;\n}\n.serviceNum .num-detail-title[data-v-234195b1] {\n  background: white;\n}\n.serviceNum .num-detail-title .warpper[data-v-234195b1] {\n    width: 94%;\n    margin: 0 auto;\n}\n.serviceNum .num-detail-title .warpper h3[data-v-234195b1] {\n      color: #666666;\n      font-size: 16px;\n      line-height: 40px;\n}\n.serviceNum .detail[data-v-234195b1] {\n  width: 100%;\n  height: 40px;\n  background: white;\n}\n.serviceNum .detail .detail-wrapper[data-v-234195b1] {\n    width: 94%;\n    height: 40px;\n    margin: 0 auto;\n    border-bottom: 1px solid #cccccc;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.serviceNum .detail .detail-wrapper p[data-v-234195b1] {\n      height: 20px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-size: 14px;\n      color: #333333;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n}\n.serviceNum .detail .detail-wrapper span[data-v-234195b1] {\n      text-align: right;\n      width: 100px;\n      font-size: 14px;\n      color: #333333;\n}\n"],sourceRoot:""}])}});