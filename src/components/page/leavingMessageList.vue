<template>
  <div class="leavingMessageList">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>留言</h2>
      <i></i>
    </div>
    <div style="padding-bottom:50px;"></div>
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
      ref="loadmore"
      style="overflow: scroll;"
    >
      <div class="comment">
        <div class="comment-wrap">
          <div class="comment-item" v-for="(item,index) in commentlist" :key="index" @click="leavingMessage(item)">
            <div class="comment-head">
              <img v-if="!item.head_img" src="/static/img/defaultImg.png" alt>
              <img v-if="item.head_img" :src="item.head_img" alt>
              <div class="head-right">
                <h2>
                  {{item.nick_name}}
                  <span>给你留言了</span>
                </h2>
                <p class="comment-content">{{item.content}}</p>
                <h3>{{item.create_time}}</h3>
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import Vue from 'vue'
import { timeAgo } from '../../../static/js/timeAgo'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'leavingMessageList',
  data () {
    return {
      allLoaded: false,
      page: 1,
      num: 10,
      bottomPullText: '上拉加载更多',
      commentlist: []
    }
  },
  methods: {
    back () {
      this.$router.push('/user')
    },
    leavingMessage (item) {
      this.$router.push({path: '/leavingMessage', query: {uid: item.uid}})
    },
    getData () {
      var parame = {
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/Talk',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.commentlist = data.data.data
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
        url: '/user/Talk',
        params: parame
      }).then(function (data) {
        if (data.data.data.length > 0) {
          _this.commentlist.push(...data.data.data)
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
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.leavingMessageList {
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
  .comment {
    width: 100%;
    background: #ffffff;
    font-size: 14px;
    margin-top: 10px;
    .comment-wrap {
      width: 94%;
      margin: 0 auto;
      .comment-item {
        border-bottom: 1px solid #cccccc;
      }
      .comment-head {
        width: 96%;
        height: 75px;
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
          padding: 5px 0;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          h2 {
            span {
              color: #999999;
              margin-left: 5px;
            }
          }
          h3 {
            color: #aaaaaa;
          }
          .comment-content {
            margin: 3px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box; //作为弹性伸缩盒子模型显示。
            -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
            -webkit-line-clamp: 1;
          }
        }
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: white;
    .bottom-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 94%;
      margin: 5px auto;
      h5 {
        width: 20px;
        height: 20px;
      }
      img {
        width: 20px;
        height: 20px;
      }
      input {
        flex: 1;
        margin: 0 10px;
        height: 38px;
        background: #f8f8f8;
        border: none;
        outline: none;
        border-radius: 4px;
        text-indent: 10px;
      }
    }
  }
}
</style>
