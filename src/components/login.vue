<template>
  <div class="login">
    <div class="top">
      <div class="top-wrapper">
        <div class="logo">
          <img src="/static/img/logo.png" alt>
          <h3>公益记录本</h3>
        </div>
      </div>
      <div class="select">
        <div class="item">
          <h5>登录</h5>
          <div class="triangle"></div>
        </div>
        <div class="item" @click="register()">
          <h5>注册</h5>
          <div></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="unit">
        <img src="/static/img/icon-mobile.png" style="width: 14px;margin: 0 13px;" alt>
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="unit" v-if="type == 'PASSWORD'">
        <img src="/static/img/icon-lock.png" alt>
        <input type="password" placeholder="请输入密码" v-model="passwd">
      </div>
      <div class="unit" v-if="type == 'VERIFYCODE'">
        <img
          src="/static/img/icon-comment.png"
          style="width: 20px; height: 19px; margin: 0 10px;"
          alt
        >
        <input type="text" placeholder="请输入验证码" v-model="verifyCode">
        <span v-if="time === 0" @click="sendCode()">获取验证码</span>
        <b v-if="time !== 0" style="color:#ddd;">重发（{{time}}）</b>
      </div>
      <div class="login-type">
        <span v-if="type == 'PASSWORD'" @click="loginType('VERIFYCODE')">验证码登录</span>
        <span v-if="type == 'VERIFYCODE'" @click="loginType('PASSWORD')">密码登录</span>
        <span @click="findPassWord()">忘记密码</span>
      </div>
      <button class="submit" @click="submit()">登录</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      type: 'PASSWORD',
      phone: '',
      passwd: '',
      verifyCode: '',
      time: 0
    }
  },
  methods: {
    ...mapActions(['login']),
    loginType (type) {
      this.type = type
    },
    register () {
      this.$router.push('/register')
    },
    findPassWord () {
      this.$router.push('/findPassWord')
    },
    sendCode () {
      var _this = this
      var timer = null
      var data = {
        phone: this.phone,
        type: 'LOGIN'
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
      if (this.type === 'PASSWORD') {
        let data = {
          phone: this.phone,
          type: this.type,
          passwd: this.passwd
        }
        this.$http({
          method: 'put',
          url: '/user/PhoneLogin',
          data: data
        }).then(function (data) {
          if (data.data.flag === 100) {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
            _this.login(data.data.data.token)
            _this.$router.push('/')
          } else {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
          }
        })
        //   this.$http.put('/user/PhoneLogin', data).then(function (data) {
        //   console.log(data)
        // })
      } else {
        let data = {
          phone: this.phone,
          type: this.type,
          verifyCode: this.verifyCode
        }
        this.$http({
          method: 'put',
          url: '/user/PhoneLogin',
          data: data
        }).then(function (data) {
          if (data.data.flag === 100) {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
            _this.login(data.data.data.token)
            _this.$router.push('/')
          } else {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
          }
        })
      }
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  .top {
    background: url('/static/img/bg-login.png');
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
    .login-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
      color: #999999;
      span {
        &:nth-of-type(1) {
          color: #4a90e2;
        }
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
