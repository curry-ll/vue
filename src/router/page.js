export default[
  {
    path: '/myActivity',
    component: resolve => require(['@/components/page/myActivity'], resolve),
    meta: {
      title: '我的活动'
    }
  },
  {
    path: '/browseHistory',
    component: resolve => require(['@/components/page/browseHistory'], resolve),
    meta: {
      title: '浏览历史'
    }
  },
  {
    path: '/activityDetail',
    component: resolve => require(['@/components/page/activityDetail'], resolve),
    meta: {
      title: '活动详情'
    }
  },
  {
    path: '/setUp',
    component: resolve => require(['@/components/page/setUp'], resolve),
    meta: {
      title: '设置'
    }
  },
  {
    path: '/accountSecurity',
    component: resolve => require(['@/components/page/accountSecurity'], resolve),
    meta: {
      title: '账号与安全'
    }
  },
  {
    path: '/findPassWord',
    component: resolve => require(['@/components/page/findPassWord'], resolve),
    meta: {
      title: '找回密码'
    }
  },
  {
    path: '/editPassWord',
    component: resolve => require(['@/components/page/editPassWord'], resolve),
    meta: {
      title: '修改密码'
    }
  },
  {
    path: '/aboutUs',
    component: resolve => require(['@/components/page/aboutUs'], resolve),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/addSound',
    component: resolve => require(['@/components/page/addSound'], resolve),
    meta: {
      title: '发布声音'
    }
  },
  {
    path: '/mySound',
    component: resolve => require(['@/components/page/mySound'], resolve),
    meta: {
      title: '我的声音'
    }
  },
  {
    path: '/soundDetail',
    component: resolve => require(['@/components/page/soundDetail'], resolve),
    meta: {
      title: '志愿者声音'
    }
  },
  {
    path: '/likeSound',
    component: resolve => require(['@/components/page/likeSound'], resolve),
    meta: {
      title: '赞过的'
    }
  },
  {
    path: '/commentList',
    component: resolve => require(['@/components/page/commentList'], resolve),
    meta: {
      title: '评论'
    }
  },
  {
    path: '/businessCard',
    component: resolve => require(['@/components/page/businessCard'], resolve),
    meta: {
      title: '名片'
    }
  },
  {
    path: '/integral',
    component: resolve => require(['@/components/page/integral'], resolve),
    meta: {
      title: '公益分'
    }
  },
  {
    path: '/myFollow',
    component: resolve => require(['@/components/page/myFollow'], resolve),
    meta: {
      title: '我的关注'
    }
  },
  {
    path: '/myInformation',
    component: resolve => require(['@/components/page/myInformation'], resolve),
    meta: {
      title: '我的消息'
    }
  },
  {
    path: '/personalData',
    component: resolve => require(['@/components/page/personalData'], resolve),
    meta: {
      title: '个人信息'
    }
  },
  {
    path: '/editName',
    component: resolve => require(['@/components/page/editName'], resolve),
    meta: {
      title: '修改名称'
    }
  },
  {
    path: '/editAge',
    component: resolve => require(['@/components/page/editAge'], resolve),
    meta: {
      title: '修改年龄'
    }
  },
  {
    path: '/getProvince',
    component: resolve => require(['@/components/page/getProvince'], resolve),
    meta: {
      title: '选择省份'
    }
  },
  {
    path: '/getCity',
    component: resolve => require(['@/components/page/getCity'], resolve),
    meta: {
      title: '选择城市'
    }
  },
  {
    path: '/getArea',
    component: resolve => require(['@/components/page/getArea'], resolve),
    meta: {
      title: '选择地区'
    }
  },
  {
    path: '/serviceNum',
    component: resolve => require(['@/components/page/serviceNum'], resolve),
    meta: {
      title: '服务次数'
    }
  },
  {
    path: '/serviceTime',
    component: resolve => require(['@/components/page/serviceTime'], resolve),
    meta: {
      title: '服务时长详情'
    }
  },
  {
    path: '/addActivity',
    component: resolve => require(['@/components/page/addActivity'], resolve),
    meta: {
      title: '发布活动'
    }
  },
  {
    path: '/editActivity',
    component: resolve => require(['@/components/page/editActivity'], resolve),
    meta: {
      title: '修改活动'
    }
  },
  {
    path: '/mySignUp',
    component: resolve => require(['@/components/page/mySignUp'], resolve),
    meta: {
      title: '我的报名'
    }
  },
  {
    path: '/activityDetailSign',
    component: resolve => require(['@/components/page/activityDetailSign'], resolve),
    meta: {
      title: '活动详情'
    }
  },
  {
    path: '/communityList',
    component: resolve => require(['@/components/page/communityList'], resolve),
    meta: {
      title: '关系列表'
    }
  },
  {
    path: '/realName',
    component: resolve => require(['@/components/page/realName'], resolve),
    meta: {
      title: '实名认证'
    }
  },
  {
    path: '/leavingMessage',
    component: resolve => require(['@/components/page/leavingMessage'], resolve),
    meta: {
      title: '留言'
    }
  },
  {
    path: '/leavingMessageList',
    component: resolve => require(['@/components/page/leavingMessageList'], resolve),
    meta: {
      title: '我的留言'
    }
  },
  {
    path: '/agreement',
    component: resolve => require(['@/components/page/agreement'], resolve),
    meta: {
      title: '协议'
    }
  }
]
