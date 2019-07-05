<template>
  <div class="getCity">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>选择市</h2>
      <i></i>
    </div>
    <ul class="cityList">
      <li v-for="(item,index) in data" :key="index" @click="getArea(item.city_id, item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
// import { getCookie } from '../../service/cookie'
// import { userDate } from '../../../static/app/js/date'
// import { Toast } from 'mint-ui'
// import $ from 'jquery'
// import qs from 'qs'
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    back () {
      this.$router.push('/getProvince')
    },
    getArea (city, name) {
      this.$router.push({
        path: '/getArea',
        query: { city_id: city, city_name: name, province_id: this.$route.query.province_id, province_name: this.$route.query.province_name }
      })
    }
  },
  mounted () {
    var parame = {
      province_id: this.$route.query.province_id
    }
    var _this = this
    this.$http({
      method: 'get',
      url: '/user/City',
      params: parame
    }).then(function (data) {
      _this.data = data.data.data
    })
  }
}
</script>

<style scoped lang="scss">
.getCity {
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
.cityList {
  margin-top: 50px;
  margin-left: 10px;
  li {
    height: 30px;
    line-height: 30px;
  }
}
</style>
