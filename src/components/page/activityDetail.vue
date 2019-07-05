<template>
  <div class="activityDetail">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt="">
      <h2>活动</h2>
      <i></i>
    </div>
    <div style="padding-bottom:50px;"></div>
      <img class="cover" :src="datalist.banner" alt="">
      <div class="content">
        <h2>{{datalist.title}}</h2>
        <div class="content-item">
          <div class="content-box">
            <img src="/static/img/time.png" alt="">
            <p>{{show_start_time}}至{{show_end_time}}</p>
          </div>
          <i></i>
        </div>
        <div class="content-item">
          <div class="content-box">
            <img src="/static/img/address.png" alt="">
            <p>{{datalist.address}}</p>
          </div>
          <img src="/static/img/icon-into.png" alt="">
        </div>
        <div class="content-item">
          <div class="content-box">
            <img src="/static/img/icon-user.png" alt="">
            <p>{{datalist.nick_name}}</p>
          </div>
          <i></i>
        </div>
      </div>
      <div class="gap"></div>
      <div class="detail">
        <div class="selectType">
          <!-- <button :class="{btnactive: type == 1}" @click="selectType(1)">活动通知</button> -->
          <button :class="{btnactive: type == 2}" @click="selectType(2)">活动详情</button>
        </div>
        <div class="concreteContent">{{datalist.content}}</div>
      </div>
      <button class="showSignUp" @click="openSign">参会报名</button>
      <div class="signUp" v-if="showSign">
        <div class="top">
          <img @click="closeSign" src="/static/img/icon-left.png" alt="">
          <h2>报名信息</h2>
          <i></i>
        </div>
        <div style="padding-bottom: 50px;"></div>
        <div class="signActive">
          <img :src="datalist.banner" alt="">
          <p>{{datalist.preface}}</p>
        </div>
        <div class="gap"></div>
        <div class="signInfo">
          <p>填写报名信息</p>
          <div class="infoUnit">
            <span>姓名*</span>
            <input type="text" v-model="name" placeholder="您的名字">
          </div>
          <div class="infoUnit">
            <span>联系电话*</span>
            <input type="text" v-model="phone" placeholder="您的电话">
          </div>
          <button class="submit" @click="submit()">参会报名</button>
        </div>
      </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { jsdatetime } from '../../../static/js/date'
export default {
  name: 'activityDetail',
  data () {
    return {
      name: '',
      phone: '',
      type: 2,
      datalist: [],
      show_start_time: '',
      show_end_time: '',
      showSign: false
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    selectType (num) {
      this.type = num
    },
    closeSign () {
      this.showSign = false
    },
    openSign () {
      this.showSign = true
    },
    getData () {
      var parame = {
        activity_id: this.$route.query.id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/activity/activityInfo',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.datalist = data.data.data
          _this.show_start_time = jsdatetime(_this.datalist.start_time)
          _this.show_end_time = jsdatetime(_this.datalist.end_time)
        }
      })
    },
    submit () {
      var _this = this
      let data = {
        activity_id: this.$route.query.id,
        name: this.name,
        phone: this.phone
      }
      this.$http({
        method: 'post',
        url: '/activity/Enroll',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.$router.push('/activity')
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
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.activityDetail {
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
  .cover {
    width: 100%;
  }
  .content {
    background: white;
    padding: 10px 15px;
    h2 {
      font-weight: bold;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp:2;
    }
    .content-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      .content-box {
        display: flex;
      }
      img {
        width: 12px;
        height: 12px;
      }
      p {
        color: #666666;
        margin: 0 10px;
      }
    }
  }
  .gap {
    width: 100%;
    height: 10px;
    background: #F1F1F1;
  }
  .detail {
    padding: 0 15px;
    background: white;
    .selectType {
      button {
        height:40px;
        width: 60px;
        border: none;
        outline: none;
        background: none;
        font-weight: bold;
        font-size: 14px;
        margin-right: 30px;
      }
      .btnactive {
        border-bottom: 2px solid #FF3052;
      }
    }
    .concreteContent {
      margin-top: 6px;
      color: #666666;
    }
  }
  .showSignUp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    color: white;
    font-size: 16px;
    background: #FF3052;
    outline: none;
    border: none;
  }
  .signUp {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 20;
    background: white;
    .top {
    width: 100%;
    height: 50px;
    position: absolute;
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
  .signActive {
    width: 90%;
    margin: 10px auto;
    display: flex;
    img {
      width: 100px;
      height: 50px;
      margin-right: 5px;
    }
    p {
      font-weight: bold;
      flex: 1;
      font-size: 14px;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp:2;
    }
  }
  .signInfo {
    width: 90%;
    margin: 10px auto;
    p {
      color: #666666;
    }
    .infoUnit {
      display: flex;
      align-items: center;
      margin-top: 10px;
      height: 40px;
      border-bottom: 1px solid #cccccc;
      input {
        flex: 1;
        text-align: right;
        border: none;
        outline: none;
      }
    }
  }
  .submit {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    color: white;
    font-size: 16px;
    background: #FF3052;
    outline: none;
    border: none;
  }
  }
}
</style>
