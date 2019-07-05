<template>
  <div class="findPassWord">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>找回密码</h2>
      <i></i>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="content">
      <div class="unit">
        <h5>手机号</h5>
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="unit">
        <h5>验证码</h5>
        <input type="text" placeholder="请输入验证码" v-model="code">
        <span v-if="time === 0" @click="sendCode()">获取验证码</span>
        <b v-if="time !== 0" style="color:#ddd;">重发（{{time}}）</b>
      </div>
      <div class="unit">
        <h5>密码</h5>
        <input type="password" placeholder="请输入密码（6-20位）" v-model="new_passwd">
      </div>
      <div class="unit">
        <h5>确认密码</h5>
        <input type="password" placeholder="请重新输入密码" v-model="new_passwd_two">
      </div>
      <button class="submit" @click="submit()">确认修改</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'findPassWord',
  data () {
    return {
      phone: '',
      new_passwd: '',
      new_passwd_two: '',
      code: '',
      time: 0
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    sendCode () {
      var _this = this
      var timer = null
      var data = {
        phone: this.phone,
        type: 'PASSWD'
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
        code: this.code,
        new_passwd: this.new_passwd,
        new_passwd_two: this.new_passwd_two
      }
      this.$http({
        method: 'put',
        url: '/user/NewPassword',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.$router.push('/user')
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.findPassWord {
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
      h5 {
        color: #999999;
        font-size: 14px;
        margin-left: 10px;
        width: 60px;
      }
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
      background: #f21d40;
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
