<template>
  <div class="myFollow">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>我的心声</h2>
      <i></i>
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
        <div class="unit" v-for="(item,index) in list" :key="index">
          <img v-if="!item.head_img" src="/static/img/defaultImg.png" class="headimg" alt>
          <img v-if="item.head_img" :src="item.head_img" class="headimg" alt>
          <div class="unit-detail">
            <div class="unit-user">
              <h2>{{item.nick_name}}（{{item.city}}{{item.area}}）</h2>
              <p>id:{{item.uid}}</p>
            </div>
            <p>公益分：{{item.duration}}</p>
            <p>公益服务次数：{{item.num}}</p>
            <p>公益服务时长：{{item.integral}}小时</p>
          </div>
          <div class="follow" v-if="item.attent_status == 0" @click="follow(item.uid, index)">
            <i>+</i>
            <span>关注</span>
          </div>
          <div
            class="follow"
            v-if="item.attent_status == 1"
            @click="follow(item.uid, index)"
            style="background: #aaa;"
          >
            <span>已关注</span>
          </div>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loadmore, Toast } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'myFollow',
  data () {
    return {
      allLoaded: false,
      page: 1,
      num: 15,
      bottomPullText: '上拉加载更多',
      list: []
    }
  },
  methods: {
    back () {
      this.$router.push('/user')
    },
    updateDate () {
      var parame = {
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/MyAttent',
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
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/MyAttent',
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
          if (_this.list[index].attent_status === 0) {
            _this.list[index].attent_status = 1
          } else {
            _this.list[index].attent_status = 0
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
    }
  },
  mounted () {
    this.updateDate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.myFollow {
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
  .content {
    width: 100%;
    .unit {
      background: white;
      height: 86px;
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
}
</style>
