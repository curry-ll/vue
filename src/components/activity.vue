<template>
  <div class="activity">
    <div class="top">
      <div class="top-box">
        <div @click="showDressMask()">
          <img src="/static/img/activeicon-hangzhou.png" alt>
          <h5>地区</h5>
        </div>
        <input type="text" v-model="key" @keyup="search" placeholder="搜索">
        <div @click="addActivity()">
          <img src="/static/img/icon-add.png" alt>
          <h4>发布</h4>
        </div>
      </div>
    </div>
    <div style="padding-bottom:70px;"></div>
    <div class="banner">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in banner" :key="index">
          <img :src="item.url" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- <div class="menu">
      <div class="menu-unit">
          <img src="/static/img/activeicon-hangzhou.png" alt="">
          <h3>杭州</h3>
      </div>
      <div class="menu-unit">
          <img src="/static/img/activeicon-popular.png" alt="">
          <h3>热门</h3>
      </div>
      <div class="menu-unit">
          <img src="/static/img/activeicon-public.png" alt="">
          <h3>公益</h3>
      </div>
      <div class="menu-unit">
          <img src="/static/img/activeicon-volunteer.png" alt="">
          <h3>志愿</h3>
      </div>
      <div class="menu-unit">
          <img src="/static/img/activeicon-all.png" alt="">
          <h3>全部</h3>
      </div>
    </div>-->
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
      ref="loadmore"
      style="overflow: scroll;"
    >
      <div
        class="unit"
        v-for="(item,index) in list"
        :key="index"
        @click="activityDetail(item.activity_id)"
      >
        <div class="unit-detail">
          <h2>{{item.title}}</h2>
          <p>{{item.preface}}</p>
          <p>
            {{item.num}}人
            <i>|</i>
            {{item.address}}
          </p>
          <div class="unit-user">
            <img v-if="!item.head_img" src="/static/img/defaultImg.png" alt>
            <img v-if="item.head_img" :src="item.head_img" alt>
            <p>{{item.nick_name}}</p>
          </div>
        </div>
        <img class="cover" :src="item.banner" alt>
      </div>
    </mt-loadmore>
    <div class="mask" v-if="showMask"></div>
    <div class="address" v-if="showMask">
      <img class="address-close" @click="CloseDressMask()" src="/static/img/icon-close.png" alt>
      <div class="address-head">
        <div class="address-wrap">
          <p>省份</p>
          <p>城市</p>
          <p>地区</p>
        </div>
      </div>
      <div class="address-detail">
        <div class="address-content">
          <p
            v-for="(item,index) in provinceList"
            :class="{selectActive: index == provinceCurrent}"
            :key="index"
            @click="getCity(item.province_id,index)"
          >{{item.name}}</p>
        </div>
        <div class="address-content">
          <p
            v-for="(item,index) in cityList"
            :class="{selectActive: index == cityCurrent}"
            :key="index"
            @click="getArea(item.city_id,index,index)"
          >{{item.name}}</p>
        </div>
        <div class="address-content">
          <p
            v-for="(item,index) in areaList"
            :key="index"
            @click="getaddress(item.area_id)"
          >{{item.name}}</p>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <vfooterNav></vfooterNav>
  </div>
</template>

<script>
import vfooterNav from './footerNav'
import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'activity',
  data () {
    return {
      allLoaded: false,
      banner: [],
      province_id: '',
      city_id: '',
      area_id: '',
      key: '',
      page: 1,
      num: 15,
      bottomPullText: '上拉加载更多',
      list: [],
      provinceList: [],
      cityList: [],
      areaList: [],
      provinceCurrent: -1,
      cityCurrent: -1,
      showMask: false
    }
  },
  components: {
    vfooterNav: vfooterNav
  },
  methods: {
    activityDetail (id) {
      this.$router.push({ path: '/activityDetail', query: { id: id } })
    },
    addActivity () {
      this.$router.push('/addActivity')
    },
    getBanner () {
      var parame = {
        type: 1
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/common/Banner',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.banner = data.data.data
        }
      })
    },
    search (ev) {
      ev.keyCode === 13 && this.updateDate()
    },
    updateDate () {
      var parame = {
        key: this.key,
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/activity/activity',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.list = data.data.data
        }
      })
    },
    loadBottom () {
      this.page = this.page + 1
      var parame = {
        key: this.key,
        page: this.page,
        num: this.num,
        province_id: this.province_id,
        city_id: this.city_id,
        area_id: this.area_id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/activity/activity',
        params: parame
      }).then(function (data) {
        if (data.data.data.length > 0) {
          _this.list.push(...data.data.data)
        } else {
          _this.bottomPullText = '没有更多了'
          _this.$refs.loadmore.onBottomLoaded()
          _this.allLoaded = true
        }
      })
    },
    showDressMask () {
      this.showMask = true
    },
    CloseDressMask () {
      this.showMask = false
    },
    getProvince () {
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/Province'
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.provinceList = data.data.data
        }
      })
    },
    getCity (id, index) {
      this.areaList = []
      this.cityCurrent = -1
      this.provinceCurrent = index
      this.province_id = id
      var parame = {
        province_id: id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/City',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.cityList = data.data.data
        }
      })
    },
    getArea (id, index) {
      this.city_id = id
      this.cityCurrent = index
      var parame = {
        city_id: id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/Area',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.areaList = data.data.data
        }
      })
    },
    getaddress (id) {
      this.area_id = id
      var parame = {
        key: this.key,
        page: this.page,
        num: this.num,
        province_id: this.province_id,
        city_id: this.city_id,
        area_id: this.area_id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/activity/activity',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.list = data.data.data
          _this.showMask = false
        }
      })
    }
  },
  mounted () {
    this.getBanner()
    this.updateDate()
    this.getProvince()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.activity {
  .top {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background: #f1f1f1;
    z-index: 10;
    .top-box {
      width: 94%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      h2 {
        font-weight: bold;
        font-size: 18px;
      }
      input {
        height: 30px;
        flex: 1;
        border: none;
        outline: none;
        border-radius: 30px;
        text-align: center;
        margin: 0 10px;
      }
      img {
        width: 20px;
        height: 20px;
      }
      h4 {
        color: goldenrod;
      }
    }
  }
  .banner {
    width: 94%;
    height: 128px;
    border-radius: 8px;
    margin: 0 auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 128px;
      // border-radius: 8px;
    }
  }
  .menu {
    width: 94%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .menu-unit {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        height: 30px;
        width: 30px;
      }
      h3 {
        font-size: 12px;
        margin-top: 3px;
      }
    }
  }
  .unit {
    width: 94%;
    height: 100px;
    background: white;
    border-radius: 8px;
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cover {
      width: 110px;
      height: 82px;
      border-radius: 8px;
      margin-right: 10px;
    }
    .unit-detail {
      margin: 0 10px;
      flex: 1;
      h2 {
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 1;
      }
      p {
        color: #999999;
        margin: 3px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 1;
        i {
          margin: 0 3px;
        }
      }
      .unit-user {
        display: flex;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-right: 3px;
        }
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: black;
    opacity: 0.6;
    z-index: 20;
  }
  .address {
    position: fixed;
    height: 70%;
    width: 100%;
    left: 0;
    top: 15%;
    background: white;
    z-index: 30;
    .address-close {
      position: absolute;
      top: -40px;
      right: 20px;
      width: 25px;
      height: 25px;
    }
    .address-head {
      height: 40px;
      border-bottom: 1px solid #cccccc;
      .address-wrap {
        width: 90%;
        height: 40px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          width: 33%;
          font-size: 14px;
        }
      }
    }
    .address-detail {
      width: 90%;
      height: 85%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .address-content {
        height: 100%;
        width: 33%;
        overflow: scroll;
        p {
          font-size: 14px;
          margin: 10px 0;
        }
        .selectActive {
          color: #f21d40;
        }
      }
    }
  }
}
</style>
