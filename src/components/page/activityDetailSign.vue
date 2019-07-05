<template>
  <div class="activityDetailSign">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>活动</h2>
      <i></i>
    </div>
    <div style="padding-bottom:50px;"></div>
    <img class="cover" :src="datalist.banner" alt>
    <div class="content">
      <h2>{{datalist.title}}</h2>
      <div class="content-item">
        <div class="content-box">
          <img src="/static/img/time.png" alt>
          <p>{{show_start_time}}至{{show_end_time}}</p>
        </div>
        <i></i>
      </div>
      <div class="content-item">
        <div class="content-box">
          <img src="/static/img/address.png" alt>
          <p>{{datalist.address}}</p>
        </div>
        <img src="/static/img/icon-into.png" alt>
      </div>
      <div class="content-item">
        <div class="content-box">
          <img src="/static/img/icon-user.png" alt>
          <p>{{datalist.nick_name}}</p>
        </div>
        <i></i>
      </div>
    </div>
    <div class="gap"></div>
    <div class="detail">
      <div class="selectType">
        <!-- <button :class="{btnactive: type == 1}" @click="selectType(1)">活动通知</button> -->
        <button :class="{btnactive: type == 2}" @click="selectType(2)">活动详情</button>
      </div>
      <div class="concreteContent">{{datalist.content}}</div>
    </div>
    <button class="showSignUp" @click="openSign">签到</button>
    <div class="activeSignUp" v-if="showSign">
      <div class="top">
        <img @click="closeSign" src="/static/img/icon-left.png" alt>
        <h2>活动签到</h2>
        <i></i>
      </div>
      <div style="padding-bottom: 50px;"></div>
      <div class="detail">
        <div class="time">
          <div class="circle" :class="{circleactive: datalist.start_time > signnow}"></div>
          <h3>活动开始时间</h3>
        </div>
        <div class="signcontent">
          <p>{{sign_start_time}}</p>
          <div class="signBtn" @click="submit()">
            <h2>活动签到</h2>
            <h3>{{now}}</h3>
          </div>
        </div>
        <div class="time">
          <div class="circle" :class="{circleactive: datalist.end_time > signnow}"></div>
          <h3>活动结束时间</h3>
        </div>
        <p class="endtime">{{sign_end_time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import wx from 'weixin-js-sdk'
import { distance } from '../../../static/js/distance'
import { jsdatetime, nowTimes, formatTime } from '../../../static/js/date'
import { setInterval } from 'timers'
// import { stringify } from 'querystring'
export default {
  name: 'activityDetailSign',
  data () {
    return {
      type: 2,
      datalist: [],
      show_start_time: '',
      show_end_time: '',
      sign_start_time: '',
      sign_end_time: '',
      showSign: false,
      now: '',
      signnow: '',
      lng: '',
      lat: ''
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    selectType (num) {
      this.type = num
    },
    closeSign () {
      this.showSign = false
    },
    openSign () {
      this.showSign = true
    },
    getData () {
      var parame = {
        activity_id: this.$route.query.id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/activity/activityInfo',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.datalist = data.data.data
          _this.show_start_time = jsdatetime(_this.datalist.start_time)
          _this.show_end_time = jsdatetime(_this.datalist.end_time)
          _this.sign_start_time = formatTime(_this.datalist.start_time)
          _this.sign_end_time = formatTime(_this.datalist.end_time)
        }
      })
    },
    nowTime () {
      this.now = new Date()
      this.now = nowTimes(this.now)
    },
    geolocation () {
      // h5定位，不准确
      let _this = this
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            _this.lat = position.coords.latitude
            _this.lng = position.coords.longitude
          },
          function (error) {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                alert('您拒绝对获取地理位置的请求')
                break
              case error.POSITION_UNAVAILABLE:
                alert('位置信息是不可用的')
                break
              case error.TIMEOUT:
                alert('请求您的地理位置超时')
                break
              case error.UNKNOWN_ERROR:
                alert('未知错误')
                break
            }
          }
        )
      } else {
        alert('您的浏览器不支持使用地理位置服务')
      }
    },
    mapgeolocation () {
      let _this = this
      var map, geolocation
      map = new AMap.Map('container', {
        resizeEnable: true
      })
      map.plugin('AMap.Geolocation', function () {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 20000, // 超过10秒后停止定位，默认：无穷大
          buttonPosition: 'RB'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', function onComplete (
          data
        ) {
          _this.lng = data.position.getLng()
          _this.lat = data.position.getLat()
        }) // 返回定位信息
      })
    },
    submit () {
      if (
        distance(this.lat, this.lng, this.datalist.lat, this.datalist.lng) < 0.2
      ) {
        var _this = this
        let data = {
          activity_id: this.$route.query.id,
          lng: this.lng,
          lat: this.lat
        }
        this.$http({
          method: 'put',
          url: '/activity/SignIn',
          data: data
        }).then(function (data) {
          if (data.data.flag === 100) {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
            _this.getData()
          } else {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
          }
        })
      } else {
        Toast({
          message: '请前往活动地点签到',
          position: 'bottom',
          duration: 2000
        })
      }
    }
  },
  mounted () {
    let _this = this
    let ua = navigator.userAgent.toLowerCase()
    let param = {
      url: location.href
    }
    if (ua.indexOf('micromessenger') > -1) {
      this.$http({
        method: 'get',
        url: '/user/SignPackage',
        params: param
      }).then(data => {
        let r = data.data.data
        wx.config({
          debug: false,
          appId: r.appId,
          timestamp: r.timestamp,
          nonceStr: r.nonceStr,
          signature: r.signature,
          jsApiList: [
            'checkJsApi',
            'openLocation',
            'getLocation',
            'hideOptionMenu'
          ]
        })
        wx.ready(function () {
          wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
              _this.lat = res.latitude // 纬度，浮点数，范围为90 ~ -90
              _this.lng = res.longitude // 经度，浮点数，范围为180 ~ -180。
            }
          })
          wx.error(function (res) {
            alert('获取定位失败')
          })
        })
      })
    } else {
      this.geolocation()
      this.mapgeolocation()
    }
    this.signnow = new Date()
    this.signnow = this.signnow.getTime() / 1000
    this.getData()
    setInterval(() => {
      this.nowTime()
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.activityDetailSign {
  height: 100vh;
  width: 100%;
  background: white;
  .top {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    img {
      width: 25px;
      height: 25px;
      margin-left: 10px;
    }
    i {
      padding: 0 25px;
      font-size: 20px;
    }
    h2 {
      font-size: 16px;
    }
  }
  .cover {
    width: 100%;
  }
  .content {
    background: white;
    padding: 10px 15px;
    h2 {
      font-weight: bold;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp: 2;
    }
    .content-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      .content-box {
        display: flex;
      }
      img {
        width: 12px;
        height: 12px;
      }
      p {
        color: #666666;
        margin: 0 10px;
      }
    }
  }
  .gap {
    width: 100%;
    height: 10px;
    background: #f1f1f1;
  }
  .detail {
    padding: 0 15px;
    background: white;
    .selectType {
      button {
        height: 40px;
        width: 60px;
        border: none;
        outline: none;
        background: none;
        font-weight: bold;
        font-size: 14px;
        margin-right: 30px;
      }
      .btnactive {
        border-bottom: 2px solid #ff3052;
      }
    }
    .concreteContent {
      margin-top: 6px;
      color: #666666;
    }
  }
  .showSignUp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    color: white;
    font-size: 16px;
    background: #ff3052;
    outline: none;
    border: none;
  }
  .signUp {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 20;
    background: white;
    .top {
      width: 100%;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cccccc;
      img {
        width: 25px;
        height: 25px;
        margin-left: 10px;
      }
      i {
        padding: 0 25px;
        font-size: 20px;
      }
      h2 {
        font-size: 16px;
      }
    }
    .signActive {
      width: 90%;
      margin: 10px auto;
      display: flex;
      img {
        width: 100px;
        height: 50px;
        margin-right: 5px;
      }
      p {
        font-weight: bold;
        flex: 1;
        font-size: 14px;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 2;
      }
    }
    .signInfo {
      width: 90%;
      margin: 10px auto;
      p {
        color: #666666;
      }
      .infoUnit {
        display: flex;
        align-items: center;
        margin-top: 10px;
        height: 40px;
        border-bottom: 1px solid #cccccc;
        input {
          flex: 1;
          text-align: right;
          border: none;
          outline: none;
        }
      }
    }
    .submit {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      color: white;
      font-size: 16px;
      background: #ff3052;
      outline: none;
      border: none;
    }
  }
  .activeSignUp {
    width: 100%;
    height: 100vh;
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 20;
    .top {
      width: 100%;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cccccc;
      z-index: 30;
      img {
        width: 25px;
        height: 25px;
        margin-left: 10px;
      }
      i {
        padding: 0 25px;
        font-size: 20px;
      }
      h2 {
        font-size: 16px;
      }
    }
    .detail {
      margin-top: 40px;
      .time {
        margin-left: 27px;
        display: flex;
        align-items: center;
        .circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #999999;
          margin-right: 15px;
        }
        .circleactive {
          background: #0a87ff;
        }
        h3 {
          font-size: 16px;
          color: #333333;
        }
      }
      .signcontent {
        margin: 10px 34px;
        border-left: 1px solid #cccccc;
        height: 310px;
        p {
          font-size: 14px;
          color: #666666;
          margin-left: 22px;
        }
        .signBtn {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 23px auto;
          background: url("/static/img/bg-sign.png");
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
          h2 {
            font-size: 24px;
            margin-bottom: 14px;
          }
          h3 {
            font-size: 20px;
          }
        }
      }
      .endtime {
        font-size: 14px;
        color: #666666;
        margin-left: 56px;
        margin-top: 10px;
      }
    }
  }
}
</style>
