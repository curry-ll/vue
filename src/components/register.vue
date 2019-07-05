<template>
  <div class="register">
    <div class="top">
      <div class="top-wrapper">
        <div class="logo">
          <img src="/static/img/logo.png" alt>
          <h3>公益记录本</h3>
        </div>
      </div>
      <div class="select">
        <div class="item" @click="login()">
          <h5>登录</h5>
          <div></div>
        </div>
        <div class="item">
          <h5>注册</h5>
          <div class="triangle"></div>
        </div>
      </div>
    </div>
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
        <input type="text" placeholder="请输入邀请码（选填）" v-model="inviteCode">
      </div>
      <div class="unit">
        <img src="/static/img/icon-lock.png" alt>
        <input type="password" placeholder="请输入密码（6-20位）" v-model="passwd">
      </div>
      <div class="unit">
        <img src="/static/img/icon-lock.png" alt>
        <input type="password" placeholder="请重新输入密码" v-model="npasswd">
      </div>
      <div class="agreement">
        <img v-if="!agree" @click="checkagree()" src="/static/img/check.png" alt>
        <img v-if="agree" @click="checkagree()" src="/static/img/check-dis.png" alt>
        <span @click="agreement()">我已阅读并同意相关注册协议</span>
      </div>
      <br>
      <br>
      <button class="submit" @click="submit()">注册</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'register',
  data () {
    return {
      phone: '',
      passwd: '',
      npasswd: '',
      inviteCode: '',
      verifyCode: '',
      time: 0,
      agree: true
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    checkagree () {
      this.agree = !this.agree
    },
    agreement () {
      this.$router.push({ path: '/agreement', query: { type: 2 } })
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
      if (this.agree) {
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
      } else {
        Toast({
          message: '请同意服务条款',
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
.register {
  .top {
    background: url("/static/img/bg-login.png");
    background-size: 100% 100%;
    width: 100%;
    height: 250px;
    color: white;
    position: relative;
    .top-wrapper {
      margin: 0 25px;
      padding-top: 20px;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 30px;
        }
        h3 {
          font-size: 16px;
          margin-left: 5px;
        }
      }
    }
    .select {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      // height: 50px;
      display: flex;
      .item {
        width: 50%;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .triangle {
          border: 12px solid transparent;
          border-bottom: 12px solid white;
        }
      }
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
    .agreement {
      margin: 10px auto;
      display: flex;
      align-items: center;
      img {
        width: 15px;
        height: 15px;
      }
      span {
        margin-left: 10px;
        color: #4394ff;
      }
    }
    .submit {
      background: none;
      outline: none;
      width: 100%;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #404040;
      font-size: 16px;
    }
  }
}
</style>
