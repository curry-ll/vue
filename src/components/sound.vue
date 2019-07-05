<template>
  <div class="sound">
    <div class="top">
      <div class="top-box">
        <h2>声音</h2>
        <input type="text" v-model="key" @keyup="search" placeholder="搜索">
        <div @click="addSound()">
          <img src="/static/img/icon-add.png" alt="">
          <h4>发布</h4>
        </div>
      </div>
    </div>
     <div style="padding-bottom:70px;"></div>
     <div class="banner">
       <mt-swipe :auto="4000" :show-indicators="false">
       <mt-swipe-item v-for="(item,index) in banner" :key="index">
          <img :src="item.url" alt="">
       </mt-swipe-item>
     </mt-swipe>
     </div>
    <!-- <div class="type">
      <span :class="{typeActive: typeactive == 1}" @click="selectType(1)">声音</span>
      <span :class="{typeActive: typeactive == 2}" @click="selectType(2)">资讯</span>
    </div> -->
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
      ref="loadmore"
      style="overflow: scroll;"
    >
      <div class="unit" v-for="(item,index) in list" :key="index" @click="soundDetail(item.heartfelt_id)">
      <div class="unit-head">
        <img v-if="!item.head_img" src="/static/img/defaultImg.png" alt>
        <img v-if="item.head_img" :src="item.head_img" alt>
        <div class="head-right">
          <h2>{{item.nick_name}}</h2>
          <h3>{{item.create_time}}</h3>
        </div>
      </div>
      <p class="content">{{item.content}}</p>
      <div class="picture">
        <img v-for="(item,index) in item.images" :key="index" :src="item" alt="">
      </div>
      <div class="action">
        <div class="action-box">
          <div class="action-item">
          <img v-if="item.like_status == 0" src="/static/img/soundicon-like.png" alt>
          <img v-if="item.like_status == 1" src="/static/img/soundicon-like-deep.png" alt>
          <span>{{item.like}}</span>
          </div>
          <div class="action-item">
            <img src="/static/img/soundicon-comment.png" alt="">
            <span>{{item.comment}}</span>
          </div>
        </div>
      </div>
    </div>
    </mt-loadmore>
    <div style="padding-bottom: 50px;"></div>
    <vfooterNav></vfooterNav>
  </div>
</template>

<script>
import vfooterNav from './footerNav'
import Vue from 'vue'
import { timeAgo } from '../../static/js/timeAgo'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'sound',
  data () {
    return {
      typeactive: 1,
      allLoaded: false,
      key: '',
      page: 1,
      num: 6,
      bottomPullText: '上拉加载更多',
      list: [],
      banner: []
    }
  },
  components: {
    vfooterNav: vfooterNav
  },
  methods: {
    addSound () {
      this.$router.push('/addSound')
    },
    selectType (num) {
      this.typeactive = num
    },
    soundDetail (id) {
      this.$router.push({
        path: '/soundDetail',
        query: { heartfelt_id: id }
      })
    },
    getBanner () {
      var parame = {
        type: 2
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
        url: '/heartfelt/Heartfelt',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.list = data.data.data
          data.data.data.map(function (item, index) {
            item.create_time = timeAgo(item.create_time)
          })
        }
      })
    },
    loadBottom () {
      this.page = this.page + 1
      var parame = {
        key: this.key,
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/heartfelt/Heartfelt',
        params: parame
      }).then(function (data) {
        if (data.data.data.length > 0) {
          _this.list.push(...data.data.data)
          data.data.data.map(function (item, index) {
            item.create_time = timeAgo(item.create_time)
          })
        } else {
          _this.bottomPullText = '没有更多了'
          _this.$refs.loadmore.onBottomLoaded()
          _this.allLoaded = true
        }
      })
    }
  },
  mounted () {
    this.updateDate()
    this.getBanner()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sound {
  .top {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background: #F1F1F1;
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
  .type {
    width: 94%;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    span {
      color: #999999;
      display: block;
      width: 30px;
      height: 20px;
      margin-right: 20px;
    }
    .typeActive {
      font-size: 14px;
      color: #F21D40;
      font-weight: bold;
      border-bottom: 3px solid #F21D40;
    }
  }
  .unit {
    width: 94%;
    margin: 10px auto;
    border-radius: 5px;
    background: white;
    box-shadow: 0 5px 5px #cccccc;
    .unit-head {
      width: 96%;
      height: 56px;
      display: flex;
      align-items: center;
      margin: 0 auto;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .head-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          font-size: 14px;
          font-weight: bold;
        }
        h3 {
          color: #AAAAAA;
        }
      }
    }
    .content {
      width: 96%;
      font-size: 14px;
      margin: 5px auto;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp:2;
    }
    .picture {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 96%;
      margin: 0 auto;
      padding-bottom: 5px;
      img {
        width: 32%;
        margin: 1px;
      }
    }
    .action {
      width: 100%;
      border-top: 1px solid #cccccc;
      .action-box {
        width: 96%;
        height: 40px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        .action-item {
          margin-right: 30px;
          display: flex;
          align-items: center;
          color: #999999;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
