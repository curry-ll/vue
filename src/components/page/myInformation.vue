<template>
  <div class="myInformation">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>我的消息</h2>
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
      <div class="information">
        <div class="information-wrap">
          <div class="information-item" v-for="(item,index) in informationlist" :key="index">
            <div class="information-head">
              <img src="/static/img/icon-information.png" alt>
              <div class="head-right">
                <h2>系统消息</h2>
                <p class="information-content">{{item.content}}</p>
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
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'myInformation',
  data () {
    return {
      allLoaded: false,
      page: 1,
      num: 10,
      bottomPullText: '上拉加载更多',
      informationlist: []
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
        url: '/user/SystemMessage',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          console.log(data)
          _this.informationlist = data.data.data
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
        url: '/user/SystemMessage',
        params: parame
      }).then(function (data) {
        if (data.data.data.length > 0) {
          _this.informationlist.push(...data.data.data)
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
.myInformation {
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
  .information {
    width: 100%;
    background: #ffffff;
    font-size: 14px;
    margin-top: 10px;
    .information-wrap {
      width: 94%;
      margin: 0 auto;
      .information-item {
        border-bottom: 1px solid #cccccc;
      }
      .information-head {
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
            font-weight: bold;
          }
          h3 {
            color: #aaaaaa;
          }
          .information-content {
            margin: 3px 0;
            color: #999999;
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
