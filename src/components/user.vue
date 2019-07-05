<template>
  <div class="user">
    <div class="top">
      <div class="head">
        <div class="head-detail" @click="personalData()">
          <img v-if="!userInfo.head_img" src="/static/img/defaultImg.png" alt>
          <img v-if="userInfo.head_img" :src="userInfo.head_img" alt>
          <span>{{userInfo.nick_name}}</span>
        </div>
        <!-- <i>></i> -->
      </div>
      <div class="score">
        <div class="score-item" @click="integral()">
          <h5>{{userInfo.integral}}</h5>
          <p>公益分</p>
        </div>
        <div class="score-item" @click="serviceNum()">
          <h5>{{userInfo.num}}</h5>
          <p>服务次数</p>
        </div>
        <div class="score-item" @click="serviceTime()">
          <h5>{{userInfo.duration}}</h5>
          <p>服务时长（分）</p>
        </div>
      </div>
      <div class="module">
        <div class="module-item" @click="myActivity()">
          <img src="/static/img/user-activity.png" alt>
          <p>我的活动</p>
        </div>
        <div class="module-item" @click="browseHistory()">
          <img src="/static/img/user-history.png" alt>
          <p>浏览历史</p>
        </div>
        <div class="module-item" @click="likeSound()">
          <img src="/static/img/user-like.png" alt>
          <p>赞过的</p>
        </div>
        <div class="module-item" @click="commentList()">
          <img src="/static/img/user-comment.png" alt>
          <p>评论</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="unit" @click="myFollow()">
        <img src="/static/img/usericon-follow.png" alt>
        <p>我的关注</p>
      </div>
      <div class="unit" @click="mySignUp()">
        <img src="/static/img/usericon-follow.png" alt>
        <p>我的报名</p>
      </div>
      <div class="unit" @click="mySound()">
        <img src="/static/img/usericon-heart.png" alt>
        <p>我的心声</p>
      </div>
      <div class="unit" @click="myInformation()">
        <img src="/static/img/usericon-news.png" alt>
        <p>我的消息</p>
      </div>
      <div class="unit" @click="leavingMessageList()">
        <img src="/static/img/usericon-news.png" alt>
        <p>我的留言</p>
      </div>
      <div class="unit" @click="businessCard()">
        <img src="/static/img/usericon-card.png" alt>
        <p>我的名片</p>
      </div>
      <div class="unit" @click="community()">
        <img src="/static/img/usericon-card.png" alt>
        <p>我的社群</p>
      </div>
      <h3 v-show="communityShow" class="chartTitle">社群：</h3>
      <div class="chartText" v-show="communityShow">
        <p>总人数：{{userInfo.upper_one_num + userInfo.upper_other_num}}人</p>
        <div id="chart" style="width: 100%;height:300px;"></div>
      </div>
      <br>
      <div class="unit" @click="aboutUs()">
        <img src="/static/img/usericon-about.png" alt>
        <p>关于我们</p>
      </div>
      <div class="unit" @click="realName()">
        <img src="/static/img/usericon-about.png" alt>
        <p>实名认证</p>
      </div>
      <div class="unit" @click="share()">
        <img src="/static/img/usericon-share.png" alt>
        <p>分享注册</p>
      </div>
      <div class="unit" @click="setUp()">
        <img src="/static/img/usericon-set.png" alt>
        <p>设置</p>
      </div>
      <br>
      <br>
      <br>
      <div style="padding-bottom: 50px;"></div>
    </div>
    <vfooterNav></vfooterNav>
  </div>
</template>

<script>
import vfooterNav from './footerNav'
import * as echarts from 'echarts'
import { Toast } from 'mint-ui'
import { wxShare } from '../../static/js/wxapi'
export default {
  name: 'user',
  data () {
    return {
      userInfo: '',
      communityShow: true
    }
  },
  components: {
    vfooterNav
  },
  methods: {
    myActivity () {
      this.$router.push('/myActivity')
    },
    browseHistory () {
      this.$router.push('/browseHistory')
    },
    setUp () {
      this.$router.push('/setUp')
    },
    aboutUs () {
      this.$router.push('/aboutUs')
    },
    mySound () {
      this.$router.push('/mySound')
    },
    likeSound () {
      this.$router.push('/likeSound')
    },
    commentList () {
      this.$router.push('/commentList')
    },
    businessCard () {
      this.$router.push('/businessCard')
    },
    myFollow () {
      this.$router.push('/myFollow')
    },
    myInformation () {
      this.$router.push('/myInformation')
    },
    mySignUp () {
      this.$router.push('/mySignUp')
    },
    integral () {
      this.$router.push({
        path: '/integral',
        query: { integral: this.userInfo.integral }
      })
    },
    serviceNum () {
      this.$router.push({
        path: '/serviceNum',
        query: { num: this.userInfo.num }
      })
    },
    serviceTime () {
      this.$router.push({
        path: '/serviceTime',
        query: { duration: this.userInfo.duration }
      })
    },
    personalData () {
      this.$router.push('/personalData')
    },
    leavingMessageList () {
      this.$router.push('/leavingMessageList')
    },
    realName () {
      if (this.userInfo.is_auth === 1) {
        Toast({
          message: '恭喜您已实名',
          position: 'bottom',
          duration: 2000
        })
      } else {
        this.$router.push('/realName')
      }
    },
    community () {
      if (this.communityShow) {
        this.communityShow = false
      } else {
        this.communityShow = true
      }
    },
    getUserInfo () {
      let _this = this
      this.$http({
        method: 'get',
        url: '/user/UserInfo'
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.userInfo = data.data.data
          _this.wxreadyShare()
          _this.echart()
        }
      })
    },
    wxreadyShare () {
      let ua = navigator.userAgent.toLowerCase()
      let shareUrl =
        process.env.baseUrl + '/shareRegister?inviteCode=' + this.userInfo.uid
      let param = {
        url: location.href
      }
      let wxParams = {
        title: '分享注册',
        desc: '分享注册',
        links: shareUrl,
        shareImage:
          'https://opsi.oss-cn-hangzhou.aliyuncs.com/static/wap/img/benefit.jpg'
      }
      if (ua.indexOf('micromessenger') > -1) {
        this.$http({
          method: 'get',
          url: '/user/SignPackage',
          params: param
        }).then(data => {
          wxShare(data.data.data, wxParams)
        })
      }
    },
    share () {
      let ua = navigator.userAgent.toLowerCase()
      let shareUrl =
        process.env.baseUrl + '/shareRegister?inviteCode=' + this.userInfo.uid
      let wxParams = {
        share_title: '注册分享',
        share_url: shareUrl,
        share_img:
          'https://opsi.oss-cn-hangzhou.aliyuncs.com/static/wap/img/benefit.jpg'
      }
      try {
        if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
          window.webkit.messageHandlers.DidClickShareGoods.postMessage(
            wxParams
          ) // ios app中操作
        } else if (/(Android)/i.test(ua)) {
          IssueMakerSaid.share(
            wxParams.share_title,
            wxParams.share_url,
            wxParams.share_img
          ) // android app中操作
        }
      } catch (e) {
        alert('去app操作')
        console.log('提示去app操作')
      }
    },
    echart () {
      var _this = this
      var myChart = echarts.init(document.getElementById('chart'))
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['A', 'B']
        },
        color: ['gold', 'red'],
        series: [
          {
            name: '社群',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: _this.userInfo.upper_one_num, name: 'A', type: '1' },
              { value: _this.userInfo.upper_other_num, name: 'B', type: '2' }
            ]
          }
        ]
      }
      myChart.setOption(option)
      function eConsole (param) {
        _this.$router.push({
          path: '/communityList',
          query: { type: param.data.type }
        })
      }
      myChart.on('click', eConsole)
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user {
  .top {
    width: 100%;
    height: 200px;
    background: rgba(255, 48, 82, 1);
    color: white;
    // border: 1px solid transparent;
    // overflow: hidden;
    padding-top: 1px;
    .head {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      margin-top: 25px;
      .head-detail {
        display: flex;
        align-items: center;
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        span {
          margin-left: 15px;
          font-size: 14px;
        }
      }
    }
    .score {
      width: 90%;
      height: 60px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .score-item {
        width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h5 {
          font-size: 16px;
        }
        p {
          opacity: 0.8;
        }
      }
    }
    .module {
      width: 90%;
      height: 100px;
      background: white;
      border-radius: 4px;
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: black;
      box-shadow: 0 5px 10px #cccccc;
      .module-item {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          margin-bottom: 3px;
        }
      }
    }
  }
  .content {
    margin-top: 60px;
    .unit {
      width: 100%;
      height: 48px;
      background: white;
      display: flex;
      align-items: center;
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      img {
        width: 14px;
        height: 14px;
        margin-left: 18px;
        margin-right: 10px;
      }
      p {
        font-size: 14px;
      }
    }
    .chartTitle {
      font-size: 16px;
      margin: 10px;
    }
    .chartText {
      position: relative;
      p {
        font-size: 14px;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 24px;
        line-height: 24px;
        margin-top: -12px;
        margin-left: -50px;
      }
    }
  }
}
</style>
