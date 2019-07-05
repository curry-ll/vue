<template>
  <div class="accountSecurity">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt="">
      <h2>账号与安全</h2>
      <i></i>
    </div>
    <div style="padding-bottom:60px;"></div>
    <div class="uint" @click="editPassWord()">
      <h3 style="border-bottom: 1px solid #cccccc;">修改密码</h3>
    </div>
    <div class="uint" @click="findPassWord()">
      <h3>找回密码</h3>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'accountSecurity',
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.push('/setUp')
    },
    editPassWord () {
      this.$router.push('/editPassWord')
    },
    findPassWord () {
      this.$router.push('/findPassWord')
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accountSecurity {
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
}
</style>
