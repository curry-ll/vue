<template>
  <div class="businessCard">
    <div class="card">
      <img class="cardimg" v-if="!userInfo.head_img" src="/static/img/defaultCardimg.png" alt>
      <img class="cardimg" v-if="userInfo.head_img" :src="userInfo.head_img" alt>
      <div class="card-wrap">
        <h2>{{userInfo.nick_name}}</h2>
        <div class="card-detail">
          <div class="deatil-unit">
            <h3>{{userInfo.integral}}</h3>
            <h4>公益分</h4>
          </div>
          <div class="deatil-unit">
            <h3>{{userInfo.num}}</h3>
            <h4>服务次数</h4>
          </div>
          <div class="deatil-unit">
            <h3>{{userInfo.duration}}</h3>
            <h4>服务时长（分）</h4>
          </div>
        </div>
      </div>
      <div class="slogan">
        倡导公益&nbsp;&nbsp;&nbsp;&nbsp;记录价值
      </div>
      <div class="bottom">
        <div class="bottom-wrap">
          <p>长按图片识别二维码查看公益本详情</p>
          <div id="qrCode" ref="qrCodeDiv" style="width:80px;height:80px;"></div>
        </div>
      </div>
      <span class="close" @click="close()">X</span>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'businessCard',
  data () {
    return {
      userInfo: [],
      qrcode: null
    }
  },
  methods: {
    close () {
      this.$router.push('/user')
    },
    getUserInfo () {
      let _this = this
      this.$http({
        method: 'get',
        url: '/user/UserInfo'
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.userInfo = data.data.data
          _this.getQrcode()
        }
      })
    },
    getQrcode () {
      let url =
        process.env.baseUrl + '/shareRegister?inviteCode=' + this.userInfo.uid
      this.qrcode = new QRCode('qrCode', {
        text: url,
        width: 80,
        height: 80,
        colorDark: '#333333',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.L
      })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.businessCard {
  height: 100vh;
  width: 100%;
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    .cardimg {
      width: 100%;
      height: 200px;
    }
    .card-wrap {
      width: 90%;
      margin: 0 auto;
      h2 {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
      }
      .card-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .deatil-unit {
          text-align: center;
          h3 {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
    .slogan {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom {
      width: 100%;
      // position: absolute;
      // bottom: 0;
      // left: 0;
      .bottom-wrap {
        width: 90%;
        height: 100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #cccccc;
        img {
          width: 80px;
          height: 80px;
        }
        p {
          width: 110px;
          color: #999999;
        }
      }
    }
    .close {
      position: absolute;
      font-size: 24px;
      top: -40px;
      right: -20px;
    }
  }
}
</style>
