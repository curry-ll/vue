<template>
  <div class="setUp">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt="">
      <h2>设置</h2>
      <i></i>
    </div>
    <div style="padding-bottom:60px;"></div>
    <div class="uint" @click="accountSecurity()">
      <h3 style="border-bottom: 1px solid #cccccc;">账号与安全</h3>
    </div>
    <div class="uint">
      <h3>版本</h3>
    </div>
    <br>
    <button class="signOut" @click="signOut()">退出账户</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'setUp',
  data () {
    return {}
  },
  methods: {
    ...mapActions(['loginout']),
    back () {
      this.$router.push('/user')
    },
    signOut () {
      this.loginout()
      this.$router.push('/login')
    },
    accountSecurity () {
      this.$router.push('/accountSecurity')
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.setUp {
  // height: 100vh;
  // width: 100%;
  // background: white;
  overflow: hidden;
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
  .uint {
    width: 100%;
    height: 41px;
    background: #FFFFFF;
    h3 {
      font-size: 14px;
      height: 40px;
      margin: 0 16px;
      line-height: 40px;
      font-weight: bold;
    }
  }
  .signOut {
    margin: 20px 16px;
    width: 94%;
    height: 50px;
    background: #999999;
    color: #FFFFFF;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
}
</style>
