<template>
  <div class="editPassWord">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>修改密码</h2>
      <i></i>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="content">
      <div class="unit">
        <h5>原密码</h5>
        <input type="text" placeholder="请输入原密码" v-model="passwd">
      </div>
      <div class="unit">
        <h5>新密码</h5>
        <input type="password" placeholder="请输入新密码（6-20位）" v-model="new_passwd">
      </div>
      <div class="unit">
        <h5>确认新密码</h5>
        <input type="password" placeholder="请重新输入新密码" v-model="new_passwd_two">
      </div>
      <button class="submit" @click="submit()">确认修改</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'editPassWord',
  data () {
    return {
      passwd: '',
      new_passwd: '',
      new_passwd_two: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/accountSecurity')
    },
    submit () {
      var _this = this
      let data = {
        passwd: this.passwd,
        new_passwd: this.new_passwd,
        new_passwd_two: this.new_passwd_two
      }
      this.$http({
        method: 'put',
        url: '/user/Password',
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
.editPassWord {
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
        width: 70px;
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
