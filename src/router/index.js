import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import page from './page'
import store from '../store/index'
const whiteList = ['/login', '/register', '/shareRegister', '/agreement', '/findPassWord']
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/activity',
      component: resolve => require(['@/components/index'], resolve),
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/login',
          component: resolve => require(['@/components/login'], resolve),
          meta: {
            title: '登录'
          }
        },
        {
          path: '/register',
          component: resolve => require(['@/components/register'], resolve),
          meta: {
            title: '注册'
          }
        },
        {
          path: '/shareRegister',
          component: resolve => require(['@/components/shareRegister'], resolve),
          meta: {
            title: '分享注册'
          }
        },
        {
          path: '/activity',
          component: resolve => require(['@/components/activity'], resolve),
          meta: {
            title: '活动'
          }
        },
        {
          path: '/sound',
          component: resolve => require(['@/components/sound'], resolve),
          meta: {
            title: '声音'
          }
        },
        {
          path: '/volunteer',
          component: resolve => require(['@/components/volunteer'], resolve),
          meta: {
            title: '志愿者'
          }
        },
        {
          path: '/user',
          component: resolve => require(['@/components/user'], resolve),
          meta: {
            title: '我的'
          }
        }
      ]
    },
    ...page
  ]
})
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let token = store.state.token
  if (!token && whiteList.indexOf(to.path) === -1) {
    next('/login')
  } else {
    return next()
  }
})
// router.afterEach(route => {
//   iView.LoadingBar.finish()
// })

export default router
