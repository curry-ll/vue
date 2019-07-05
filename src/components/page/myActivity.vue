<template>
  <div class="myActivity">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt="">
      <h2>我的活动</h2>
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
    <div class="uint" v-for="(item,index) in list" :key="index" @click="activityDetail(item.activity_id)">
      <div class="unit-wrap">
        <div class="unit-left">
        <h5>{{item.title}}</h5>
        <p><span>{{item.start_time}}</span>{{item.address}}</p>
      </div>
      <img class="cover" :src="item.banner" alt="">
      </div>
      <div class="edit">
        <button v-if="item.status == -1" @click.stop="editActivity(item.activity_id)">修改</button>
        <button v-if="item.status != 1" @click.stop="deleteActive(item.activity_id)">删除</button>
      </div>
    </div>
    </mt-loadmore>
  </div>
</template>

<script>
import Vue from 'vue'
import { userDate } from '../../../static/js/date'
import { Loadmore, MessageBox, Toast } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'myActivity',
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
    activityDetail (id) {
      this.$router.push({ path: '/activityDetail', query: {id: id} })
    },
    editActivity (id) {
      this.$router.push({ path: '/editActivity', query: {id: id} })
    },
    deleteActive (id) {
      MessageBox.confirm('确定删除活动?').then(action => {
        var _this = this
        let data = {
          activity_id: id
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
        url: '/activity/MyActivity',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.list = data.data.data
          data.data.data.map(function (item, index) {
            item.start_time = userDate(item.start_time)
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
        url: '/activity/MyActivity',
        params: parame
      }).then(function (data) {
        if (data.data.data.length > 0) {
          _this.list.push(...data.data.data)
          data.data.data.map(function (item, index) {
            item.start_time = userDate(item.start_time)
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
.myActivity {
  height: 100vh;
  width: 100%;
  background: white;
  .top {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFFFFF;
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
  .uint {
    width: 94%;
    padding: 15px 0;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
    .unit-wrap{
      display: flex;
      align-items: center;
    }
    .unit-left {
      flex: 1;
      h5 {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp:3;
      }
      p {
        margin-top: 5px;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp:1;
        span {
          margin-right: 15px;
        }
      }
    }
    .cover {
      width: 155px;
      height: 80px;
    }
    .edit {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 10px;
      button {
        width: 50px;
        height: 20px;
        color: #FD4D7D;
        border: 1px solid #FD4D7D;
        outline: none;
        border-radius: 4px;
        background: none;
        margin-left: 10px;
      }
    }
  }
}
</style>
