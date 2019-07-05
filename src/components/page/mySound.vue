<template>
  <div class="mySound">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>我的心声</h2>
      <i></i>
    </div>
    <div style="padding-bottom:70px;"></div>
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
        @click="soundDetail(item.heartfelt_id)"
      >
        <div class="unit-head">
          <img src="/static/img/defaultImg.png" alt>
          <div class="head-right">
            <h2>{{item.nick_name}}</h2>
            <h3>{{item.create_time}}</h3>
          </div>
        </div>
        <p class="content">{{item.content}}</p>
        <div class="picture">
          <img v-for="(item,index) in item.images" :key="index" :src="item" alt>
        </div>
        <div class="action">
          <div class="action-box">
            <div class="action-item">
              <img v-if="item.like_status == 0" src="/static/img/soundicon-like.png" alt>
              <img v-if="item.like_status == 1" src="/static/img/soundicon-like-deep.png" alt>
              <span>{{item.like}}</span>
            </div>
            <div class="action-item">
              <img src="/static/img/soundicon-comment.png" alt>
              <span>{{item.comment}}</span>
            </div>
          </div>
        </div>
        <div class="deleteSound" @click="deleteSound(item.heartfelt_id)">
          <img src="/static/img/soundicon-delete.png" alt>
          <span>删除</span>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import Vue from 'vue'
import { timeAgo } from '../../../static/js/timeAgo'
import { Loadmore, MessageBox, Toast } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'mySound',
  data () {
    return {
      allLoaded: false,
      page: 1,
      num: 6,
      bottomPullText: '上拉加载更多',
      list: []
    }
  },
  methods: {
    back () {
      this.$router.push('/user')
    },
    soundDetail (id) {
      this.$router.push({
        path: '/soundDetail',
        query: { heartfelt_id: id }
      })
    },
    deleteSound (id) {
      MessageBox.confirm('确定删除心声?').then(action => {
        var _this = this
        let data = {
          heartfelt_id: id
        }
        this.$http({
          method: 'put',
          url: '/heartfelt/Delete',
          data: data
        }).then(function (data) {
          if (data.data.flag === 100) {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
            _this.updateDate()
          } else {
            Toast({
              message: data.data.message,
              position: 'bottom',
              duration: 2000
            })
          }
        })
      })
    },
    updateDate () {
      var parame = {
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/heartfelt/MyHeartfelt',
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
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/heartfelt/MyHeartfelt',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mySound {
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
  .unit {
    position: relative;
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
          color: #aaaaaa;
        }
      }
    }
    .content {
      width: 96%;
      font-size: 14px;
      margin: 5px auto;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp: 2;
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
    .deleteSound {
      position: absolute;
      right: 20px;
      bottom: 10px;
      width: 83px;
      height: 44px;
      background: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
    }
  }
}
</style>
