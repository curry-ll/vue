<template>
  <div class="leavingMessage">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>{{name}}</h2>
      <i></i>
    </div>
    <div style="padding-bottom:50px;"></div>
    <mt-loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
      ref="loadmore"
      style="overflow: scroll;"
    >
      <div class="unit" v-for="(item,index) in list" :key="index">
        <h3>{{item.create_time}}</h3>
        <div class="unit-box" :class="{right: item.identity == 1}">
          <img v-if="!item.head_img" src="/static/img/defaultImg.png" alt="">
          <img v-if="item.head_img" :src="item.head_img" alt="">
          <p @click="deleteRecord(item.id)">{{item.content}}</p>
          <h6></h6>
        </div>
      </div>
    </mt-loadmore>
    <div class="bottom">
      <div class="bottom-wrap">
        <h5></h5>
        <input
          class="commentContent"
          type="text"
          v-model="content"
          @keyup="sendkeyComment"
          placeholder="留言"
        >
        <img @click="sendComment()" src="/static/img/soundicon-send.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loadmore, MessageBox, Toast } from 'mint-ui'
import { messageTime } from '../../../static/js/date'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'leavingMessage',
  data () {
    return {
      allLoaded: false,
      uid: this.$route.query.uid,
      page: 1,
      num: 5,
      content: '',
      bottomPullText: '上拉加载更多',
      list: [],
      name: '',
      time: 3
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    deleteRecord (id) {
      MessageBox.confirm('确定删除记录?').then(action => {
        var _this = this
        let data = {
          id: id
        }
        this.$http({
          method: 'DELETE',
          url: '/user/Talk',
          data: data
        }).then(function (data) {
          if (data.data.flag === 100) {
            // Toast({
            //   message: data.data.message,
            //   position: 'bottom',
            //   duration: 2000
            // })
            _this.getData()
          } else {
            // Toast({
            //   message: data.data.message,
            //   position: 'bottom',
            //   duration: 2000
            // })
          }
        })
      })
    },
    sendkeyComment (ev) {
      ev.keyCode === 13 && this.sendComment()
    },
    sendComment () {
      var _this = this
      let data = {
        uid: this.$route.query.uid,
        content: this.content
      }
      this.$http({
        method: 'post',
        url: '/user/Talk',
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
        uid: this.uid,
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/TalkInfo',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.list = data.data.data.talk_obj.reverse()
          _this.name = data.data.data.nick_name
          _this.list.map((item) => {
            item.create_time = messageTime(item.create_time)
          })
        }
      })
    },
    loadTop () {
      this.page = this.page + 1
      var parame = {
        uid: this.uid,
        page: this.page,
        num: this.num
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/TalkInfo',
        params: parame
      }).then(function (data) {
        if (data.data.data.talk_obj.length > 0) {
          data.data.data.talk_obj.map((item) => {
            item.create_time = messageTime(item.create_time)
          })
          _this.list.reverse()
          _this.list.push(...data.data.data.talk_obj)
          _this.list.reverse()
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
.leavingMessage {
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
    width: 96%;
    margin: 10px auto;
    h3 {
      color: #aaaaaa;
      text-align: center;
      margin-bottom: 10px;
    }
    .unit-box {
      display: flex;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      h6 {
        width: 40px;
        height: 40px;
      }
      p {
        background: white;
        border-radius: 4px;
        padding: 5px 10px;
        margin: 0 10px;
      }
    }
    .right {
      flex-direction: row-reverse;
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
