<template>
  <div class="aboutUs">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt="">
      <h2>{{title}}</h2>
      <i></i>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      content: '',
      title: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/user')
    },
    getData () {
      var parame = {
        type: 1
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/common/About',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.content = data.data.data.content
          _this.title = data.data.data.title
        }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutUs {
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
  .content {
    margin: 15px;
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
