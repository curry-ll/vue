<template>
  <div class="soundDetail">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>志愿者声音</h2>
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
      <div class="unit-box">
        <div class="unit">
          <div class="unit-head">
            <img v-if="!detaildata.head_img" src="/static/img/defaultImg.png" alt>
            <img v-if="detaildata.head_img" :src="detaildata.head_img" alt>
            <div class="head-right">
              <h2>{{detaildata.nick_name}}</h2>
              <h3>{{detaildata.create_time}}</h3>
            </div>
          </div>
          <p class="content">{{detaildata.content}}</p>
          <div class="picture">
            <img v-for="(detaildata,index) in detaildata.images" :key="index" :src="detaildata" alt>
          </div>
          <div class="action">
            <div class="action-box">
              <div class="action-item" @click="like()">
                <img v-if="like_status == 0" src="/static/img/soundicon-like.png" alt>
                <img v-if="like_status == 1" src="/static/img/soundicon-like-deep.png" alt>
                <span>{{detaildata.like}}</span>
              </div>
              <div class="action-item">
                <img src="/static/img/soundicon-comment.png" alt>
                <span>{{detaildata.comment}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="comment-wrap">
          <h2 class="comment-title">最新评论</h2>
          <div class="comment-item" v-for="(item,index) in commentlist" :key="index">
            <div class="comment-head">
              <img v-if="!item.head_img" src="/static/img/defaultImg.png" alt>
              <img v-if="item.head_img" :src="item.head_img" alt>
              <div class="head-right">
                <h2>{{item.nick_name}}</h2>
                <h3>{{item.create_time}}</h3>
              </div>
            </div>
            <p class="comment-content">{{item.content}}</p>
          </div>
          <br>
        </div>
      </div>
    </mt-loadmore>
    <div style="padding-bottom: 60px;"></div>
    <div class="bottom">
      <div class="bottom-wrap">
        <h5></h5>
        <input
          class="commentContent"
          type="text"
          v-model="content"
          @keyup="sendkeyComment"
          placeholder="友善发言的人运气都不会太差~"
        >
        <img @click="sendComment()" src="/static/img/soundicon-send.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { timeAgo } from '../../../static/js/timeAgo'
import { Loadmore, Toast } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'soundDetail',
  data () {
    return {
      allLoaded: false,
      page: 1,
      num: 10,
      bottomPullText: '上拉加载更多',
      detaildata: [],
      commentlist: [],
      like_status: '',
      content: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    like () {
      var _this = this
      let data = {
        heartfelt_id: this.$route.query.heartfelt_id
      }
      this.$http({
        method: 'put',
        url: '/heartfelt/Like',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          if (_this.like_status === 0) {
            _this.like_status = 1
          } else {
            _this.like_status = 0
          }
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.getData()
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    },
    sendkeyComment (ev) {
      ev.keyCode === 13 && this.sendComment()
    },
    sendComment () {
      var _this = this
      let data = {
        heartfelt_id: this.$route.query.heartfelt_id,
        content: this.content
      }
      this.$http({
        method: 'put',
        url: '/heartfelt/Comment',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.content = ''
          document.querySelector('.commentContent').blur()
          _this.getData()
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    },
    getData () {
      var parame = {
        page: this.page,
        num: this.num,
        heartfelt_id: this.$route.query.heartfelt_id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/heartfelt/HeartfeltInfo',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.detaildata = data.data.data.heartfelt
          _this.like_status = data.data.data.heartfelt.like_status
          data.data.data.heartfelt.create_time = timeAgo(
            data.data.data.heartfelt.create_time
          )
          _this.commentlist = data.data.data.comment
          data.data.data.comment.map(function (item, index) {
            item.create_time = timeAgo(item.create_time)
          })
        }
      })
    },
    // updateDate () {
    //   var parame = {
    //     heartfelt_id: this.$route.query.heartfelt_id,
    //     page: this.page,
    //     num: this.num
    //   }
    //   var _this = this
    //   this.$http({
    //     method: 'get',
    //     url: '/heartfelt/HeartfeltInfo',
    //     params: parame
    //   }).then(function (data) {
    //     if (data.data.flag === 100) {
    //       _this.commentlist = data.data.data.comment
    //       data.data.data.comment.map(function (item, index) {
    //         item.create_time = timeAgo(item.create_time)
    //       })
    //     }
    //   })
    // },
    loadBottom () {
      this.page = this.page + 1
      var parame = {
        heartfelt_id: this.$route.query.heartfelt_id,
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/heartfelt/HeartfeltInfo',
        params: parame
      }).then(function (data) {
        if (data.data.data.comment.length > 0) {
          _this.commentlist.push(...data.data.data.comment)
          data.data.data.comment.map(function (item, index) {
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
    // this.updateDate()
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.soundDetail {
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
  .unit-box {
    background: white;
    width: 100%;
    padding-top: 10px;
  }
  .unit {
    width: 94%;
    margin: 0 auto;
    border-radius: 5px;
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
  }
  .comment {
    width: 100%;
    background: #ffffff;
    font-size: 14px;
    margin-top: 10px;
    .comment-wrap {
      width: 94%;
      margin: 0 auto;
      .comment-title {
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        border-bottom: 1px solid #cccccc;
      }
      .comment-item {
        border-bottom: 1px solid #cccccc;
      }
      .comment-head {
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
      .comment-content {
        margin-left: 50px;
        padding: 5px 0;
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
