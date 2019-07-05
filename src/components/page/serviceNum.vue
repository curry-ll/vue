<template>
  <div class="serviceNum">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>服务次数</h2>
      <i></i>
    </div>
    <div style="padding-bottom:50px;"></div>
    <div class="total">
      <div class="total-wrap">
        <h3>服务次数</h3>
        <h2>{{nums}}</h2>
      </div>
    </div>
    <div class="num-detail-title">
      <div class="warpper">
        <h3>服务详情</h3>
      </div>
    </div>
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
      ref="loadmore"
      style="overflow: scroll;"
    >
      <div class="detail" v-for="(item,index) in numList" :key="index">
        <div class="detail-wrapper">
          <p>{{item.create_time}}{{item.content}}</p>
          <span>{{item.status + item.num}}次</span>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import Vue from 'vue'
import { userDate } from '../../../static/js/date'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'serviceNum',
  data () {
    return {
      allLoaded: false,
      page: 1,
      num: 15,
      bottomPullText: '上拉加载更多',
      nums: this.$route.query.num,
      numList: []
    }
  },
  methods: {
    back () {
      this.$router.push('/user')
    },
    getData () {
      var parame = {
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/Num',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.numList = data.data.data
          data.data.data.map(function (item, index) {
            item.create_time = userDate(item.create_time)
          })
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
        url: '/user/Num',
        params: parame
      }).then(function (data) {
        if (data.data.data.length > 0) {
          _this.numList.push(...data.data.data)
          data.data.data.map(function (item, index) {
            item.create_time = userDate(item.create_time)
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
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.serviceNum {
  // height: 100vh;
  // width: 100%;
  // overflow: hidden;
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
  .total {
    width: 100%;
    height: 100px;
    background: white;
    margin: 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    .total-wrap {
      height: 80px;
      margin: 0 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        color: #666666;
        font-size: 16px;
      }
      h2 {
        font-size: 40px;
      }
    }
  }
  .num-detail-title {
    background: white;
    .warpper {
      width: 94%;
      margin: 0 auto;
      h3 {
        color: #666666;
        font-size: 16px;
        line-height: 40px;
      }
    }
  }
  .detail {
    width: 100%;
    height: 40px;
    background: white;
    .detail-wrapper {
      width: 94%;
      height: 40px;
      margin: 0 auto;
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        height: 20px;
        flex: 1;
        font-size: 14px;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 1;
      }
      span {
        text-align: right;
        width: 100px;
        font-size: 14px;
        color: #333333;
      }
    }
  }
}
</style>
