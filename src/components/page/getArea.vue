<template>
  <div class="getArea">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>选择地区</h2>
      <i></i>
    </div>
    <ul class="areaList">
      <li v-for="(item,index) in data" :key="index" @click="getArea(item.area_id, item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      data: [],
      address: ''
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    getArea (area, name) {
      var _this = this
      this.address = this.$route.query.province_name + ' ' + this.$route.query.city_name + ' ' + name
      var parame = {
        province_id: this.$route.query.province_id,
        city_id: this.$route.query.city_id,
        area_id: area,
        address: this.address
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
  mounted () {
    var parame = {
      city_id: this.$route.query.city_id
    }
    var _this = this
    this.$http({
      method: 'get',
      url: '/user/Area',
      params: parame
    }).then(function (data) {
      _this.data = data.data.data
    })
  }
}
</script>

<style scoped lang="scss">
.getArea {
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
.areaList {
  margin-top: 50px;
  margin-left: 10px;
  li {
    height: 30px;
    line-height: 30px;
  }
}
</style>
