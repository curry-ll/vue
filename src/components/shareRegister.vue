<template>
  <div class="shareRegister">
    <div class="top">
      <i></i>
      <h2>注册</h2>
      <i></i>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="content">
      <div class="unit">
        <img src="/static/img/icon-mobile.png" style="width: 14px;margin: 0 13px;" alt>
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="unit">
        <img
          src="/static/img/icon-comment.png"
          style="width: 20px; height: 19px; margin: 0 10px;"
          alt
        >
        <input type="text" placeholder="请输入验证码" v-model="verifyCode">
        <span v-if="time === 0" @click="sendCode()">获取验证码</span>
        <b v-if="time !== 0" style="color:#ddd;">重发（{{time}}）</b>
      </div>
      <div class="unit">
        <img src="/static/img/icon-recommend.png" alt>
        <!-- <input type="text" placeholder="请输入邀请码（选填）" v-model="inviteCode" > -->
        <p style="margin: 10px;">{{inviteCode}}</p>
      </div>
      <div class="unit">
        <img src="/static/img/icon-lock.png" alt>
        <input type="password" placeholder="请输入密码（6-20位）" v-model="passwd">
      </div>
      <div class="unit">
        <img src="/static/img/icon-lock.png" alt>
        <input type="password" placeholder="请重新输入密码" v-model="npasswd">
      </div>
      <button class="submit" @click="submit()">注册</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'shareRegister',
  data () {
    return {
      phone: '',
      passwd: '',
      npasswd: '',
      inviteCode: this.$route.query.inviteCode,
      verifyCode: '',
      time: 0
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    sendCode () {
      var _this = this
      var timer = null
      var data = {
        phone: this.phone,
        type: 'REGISTER'
      }
      this.$http.put('/user/VerifyCode', data).then(function (data) {
        if (data.data.flag === 100) {
          _this.time = 60
          timer = setInterval(function () {
            _this.time = _this.time - 1
          }, 1000)
          setTimeout(function () {
            clearInterval(timer)
          }, 60000)
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    },
    submit () {
      var _this = this
      let data = {
        phone: this.phone,
        inviteCode: this.inviteCode,
        verifyCode: this.verifyCode,
        passwd: this.passwd
      }
      if (this.passwd === this.npasswd) {
        this.$http({
          method: 'post',
          url: '/user/PhoneRegister',
          data: data
        }).then(function (data) {
          if (data.data.flag === 100) {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
            _this.$router.push('/login')
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
          message: '密码输入不一致',
          position: 'bottom',
          duration: 2000
        })
      }
      //   this.$http.put('/user/Phoneregister', data).then(function (data) {
      //   console.log(data)
      // })
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shareRegister {
  .top {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    i {
      padding: 0 25px;
      font-size: 20px;
    }
    h2 {
      font-size: 16px;
    }
  }
  .content {
    margin: 30px 15px;
    .unit {
      width: 100%;
      height: 50px;
      background: white;
      border-radius: 7px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 16px;
        height: 20px;
        margin: 0 12px;
      }
      input {
        border: none;
        outline: none;
        flex: 1;
        margin: 10px;
        font-size: 14px;
      }
      input::-webkit-input-placeholder {
        color: #999;
      }
      span {
        margin: 0 12px;
        color: #4a90e2;
      }
      b {
        color: #999;
        font-weight: normal;
      }
    }
    .submit {
      background: #F21D40;
      color: white;
      outline: none;
      width: 100%;
      height: 50px;
      border-radius: 5px;
      border: none;
      font-size: 16px;
      margin-top: 30px;
    }
  }
}
</style>
