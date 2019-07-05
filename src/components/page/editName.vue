<template>
  <div class="editName">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>修改昵称</h2>
      <span style="margin-right:10px;" @click="submit()">完成</span>
    </div>
    <input type="text" placeholder="请输入昵称" v-model="nick_name" class="nickName">
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
// import { userDate } from '../../../static/app/js/date'
// import { Toast } from 'mint-ui'
// import $ from 'jquery'
// import qs from 'qs'
export default {
  data () {
    return {
      data: [],
      nick_name: this.$route.query.nick_name
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    submit () {
      var _this = this
      var parame = {
        nick_name: this.nick_name
      }
      this.$http.put('/user/Users', parame).then(function (data) {
        if (data.data.flag === 100) {
          _this.$router.push({ path: '/personalData' })
        }
        Toast({
          message: data.data.message,
          position: 'bottom',
          duration: 2000
        })
      })
    }
  },
  mounted () {}
}
</script>

<style scoped lang="scss">
.editName {
  background: #f8f8f8;
}
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
.nickName {
  height: 40px;
  width: 100%;
  background: white;
  margin-top: 60px;
  border: none;
  outline: none;
  text-indent: 10px;
}
</style>
