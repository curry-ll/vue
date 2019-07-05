<template>
  <div class="volunteer">
    <div class="top">
      <div class="top-box">
        <h2>志愿者</h2>
        <input type="text" v-model="key" @keyup="search" placeholder="搜索">
        <img src="/static/img/icon-screen.png" @click="showDressMask()" alt>
      </div>
    </div>
    <div style="padding-bottom:70px;"></div>
    <div class="content">
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :bottomPullText="bottomPullText"
        ref="loadmore"
        style="overflow: scroll;"
      >
        <div class="unit" v-for="(item,index) in list" :key="index" @click="leavingMessage(item)">
          <img v-if="!item.head_img" src="/static/img/defaultImg.png" class="headimg" alt>
          <img v-if="item.head_img" :src="item.head_img" class="headimg" alt>
          <div class="unit-detail">
            <div class="unit-user">
              <h2>{{item.nick_name}}（{{item.city}}{{item.area}}）</h2>
              <p>id:{{item.uid}}</p>
            </div>
            <p>公益分：{{item.integral}}</p>
            <p>公益服务次数：{{item.num}}</p>
            <p>公益服务时长：{{item.duration}}分钟</p>
          </div>
          <div class="follow" v-if="item.like_status == 0" @click="follow(item.uid, index)">
            <i>+</i>
            <span>关注</span>
          </div>
          <div
            class="follow"
            v-if="item.like_status == 1"
            @click="follow(item.uid, index)"
            style="background: #aaa;"
          >
            <span>已关注</span>
          </div>
        </div>
      </mt-loadmore>
    </div>
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
import { Loadmore, Toast } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'volunteer',
  data () {
    return {
      allLoaded: false,
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
    showDressMask () {
      this.showMask = true
    },
    CloseDressMask () {
      this.showMask = false
    },
    leavingMessage (item) {
      if (item.like_status === 1) {
        this.$router.push({path: '/leavingMessage', query: {uid: item.uid}})
      } else {
        Toast({
          message: '关注对方才能留言',
          position: 'bottom',
          duration: 2000
        })
      }
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
        url: '/user/Volunteer',
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
        url: '/user/Volunteer',
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
    follow (uid, index) {
      var _this = this
      let data = {
        uid: uid
      }
      this.$http({
        method: 'put',
        url: '/user/Attent',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          if (_this.list[index].like_status === 0) {
            _this.list[index].like_status = 1
          } else {
            _this.list[index].like_status = 0
          }
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        }
      })
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
        url: '/user/Volunteer',
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
    this.updateDate()
    this.getProvince()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.volunteer {
  .top {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background: #f1f1f1;
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
        width: 25px;
        height: 25px;
      }
    }
  }
  .content {
    width: 100%;
    .unit {
      background: white;
      height: 100px;
      width: 94%;
      border-radius: 5px;
      margin: 5px auto;
      display: flex;
      align-items: center;
      .headimg {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
      }
      .follow {
        width: 57px;
        height: 24px;
        background: #fd4d7d;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        color: white;
        margin-right: 10px;
        i {
          font-size: 20px;
          margin-right: 3px;
        }
      }
      .unit-detail {
        flex: 1;
        .unit-user {
          display: flex;
          align-items: baseline;
          h2 {
            font-weight: bold;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box; //作为弹性伸缩盒子模型显示。
            -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
            -webkit-line-clamp: 1;
          }
        }
        p {
          color: #aaaaaa;
          font-size: 12px;
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
