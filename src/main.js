// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import http from './service/http'
import VueAMap from 'vue-amap'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.router = router
Vue.use(Mint)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'dcd2be7753efe2891fadbd986128d2d8',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'Geocoder'],
  v: '1.4.4'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
