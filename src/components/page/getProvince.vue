<template>
  <div class="getProvince">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>选择省份</h2>
      <i></i>
    </div>
    <ul class="provinceList">
      <li v-for="(item,index) in data" :key="index" @click="getCity(item.province_id, item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    back () {
      this.$router.push('/personalData')
    },
    getCity (province, name) {
      this.$router.push({
        path: '/getCity',
        query: { province_id: province, province_name: name }
      })
    }
  },
  mounted () {
    var _this = this
    this.$http({
      method: 'get',
      url: '/user/Province'
    }).then(function (data) {
      _this.data = data.data.data
    })
  }
}
</script>

<style scoped lang="scss">
.getProvince {
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
.provinceList {
  margin-top: 50px;
  margin-left: 10px;
  li {
    height: 30px;
    line-height: 30px;
  }
}
</style>
