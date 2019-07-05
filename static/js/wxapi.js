import wx from 'weixin-js-sdk'

export function wxShare (r, wxParams) {
  let links = wxParams.links /* 分享出去的链接 */
  let title = wxParams.title /* 分享的标题 */
  let desc = wxParams.desc
  let imgUrl = wxParams.shareImage
  let shareSuccess = wxParams.shareSuccess
  let shareFailure = wxParams.shareFailure
  let configFailure = wxParams.configFailure
  let resultObject = {
    code: 0,
    msg: ''
  }
  wx.config({
    debug: false,
    appId: r.appId,
    timestamp: r.timestamp,
    nonceStr: r.nonceStr,
    signature: r.signature,
    jsApiList: [
      'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'
    ]

  })
  wx.ready(function () {
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: links, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        if (shareSuccess) {
          shareSuccess('Timeline')
        }
      },
      cancel: function () {
        if (shareFailure) {
          shareFailure(resultObject)
        }
      }
    })
    /* 微信分享菜单测试 */
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: links, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        if (shareSuccess) {
          shareSuccess('AppMessage')
        }
      },
      cancel: function () {
        if (shareFailure) {
          shareFailure(resultObject)
        }
      }
    })
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: links, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        if (shareSuccess) {
          shareSuccess('QQ')
        }
      },
      cancel: function () {
        if (shareFailure) {
          shareFailure(resultObject)
        }
      }
    })
    wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: links, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        if (shareSuccess) {
          shareSuccess('Weibo')
        }
      },
      cancel: function () {
        if (shareFailure) {
          shareFailure(resultObject)
        }
      }
    })
    wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: links, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        if (shareSuccess) {
          shareSuccess('QZone')
        }
      },
      cancel: function () {
        if (shareFailure) {
          shareFailure(resultObject)
        }
      }
    })
  })
  wx.error(function (res) {
    if (configFailure) {
      configFailure(resultObject)
    }

    //        Vue.$showError()
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  })
}
