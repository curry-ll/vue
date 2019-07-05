<template>
  <div class="editActivity">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>修改活动</h2>
      <i style="padding-right: 40px;"></i>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="content">
      <div class="unit">
        <h2>活动名称</h2>
        <div class="unit-detail">
          <input type="text" v-model="title" placeholder="例：敬老院公益活动">
        </div>
      </div>
      <div class="unit">
        <h2>活动简介</h2>
        <div class="unit-detail">
          <input type="text" v-model="preface" placeholder="活动简介">
        </div>
      </div>
      <div class="unit">
        <h2>活动地址</h2>
        <div class="unit-detail" @click="openMap">
          <p v-if="!address">选择活动地址</p>
          <p v-if="address">{{address}}</p>
          <img src="/static/img/icon-into.png" alt="">
        </div>
      </div>
      <div class="unit">
        <h2>活动内容图片</h2>
        <div class="unit-detail">
          <p>添加活动图片</p>
          <i>+</i>
          <input type="file" @change="uploadChange" class="upload">
        </div>
      </div>
      <img v-if="!!banner" :src="banner" style="width: 94%;display: block; margin: 10px auto;" alt>
      <div class="unit">
        <h2>参加人性别类型</h2>
        <div class="unit-detail">
          <div style=" display: flex; justify-content: space-around; flex: 1; align-items: center;">
            <div v-if="type == 2" @click="selectType(1)">
              <img src="/static/img/check.png" alt style="margin-right: 5px;">分男女
            </div>
            <div v-if="type == 1" @click="selectType(2)">
              <img src="/static/img/check-dis.png" alt style="margin-right: 5px;">分男女
            </div>
            <div v-if="type == 1" @click="selectType(2)">
              <img src="/static/img/check.png" alt style="margin-right: 5px;">不限男女
            </div>
            <div v-if="type == 2" @click="selectType(1)">
              <img src="/static/img/check-dis.png" alt style="margin-right: 5px;">不限男女
            </div>
          </div>
        </div>
      </div>
      <div class="unit">
        <h2>参加人数</h2>
        <div class="unit-detail">
          <i></i>
          <div style=" display: flex; justify-content: space-around; align-items: center;">
            <div class="selectNum" v-if="type == 1">
              男
              <span @click="jian(1)">-</span>
              <i>{{man}}</i>
              <span @click="jia(1)">+</span>
            </div>
            <div class="selectNum" v-if="type == 1">
              女
              <span @click="jian(2)">-</span>
              <i>{{wman}}</i>
              <span @click="jia(2)">+</span>
            </div>
            <div class="selectNum" v-if="type == 2">
              总人数
              <span @click="jian(3)">-</span>
              <i>{{num}}</i>
              <span @click="jia(3)">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="unit">
        <h2>活动开始时间</h2>
        <div class="unit-detail" @click="selectStart()">
          <p v-if="!show_start_time">请选择开始时间</p>
          <p v-if="show_start_time">{{show_start_time}}</p>
          <i></i>
        </div>
      </div>
      <div class="unit">
        <h2>活动结束时间</h2>
        <div class="unit-detail" @click="selectEnd()">
          <p v-if="!show_end_time">请选择结束时间</p>
          <p v-if="show_end_time">{{show_end_time}}</p>
          <i></i>
        </div>
      </div>
      <div class="unit" style="height: 100px;">
        <h2>活动内容</h2>
        <div class="unit-detail">
          <textarea class="activetyContent" v-model="content" placeholder="活动内容..."></textarea>
        </div>
      </div>
    </div>
    <button @click="submit()" class="submit">确定</button>
    <mt-datetime-picker ref="start" type="datetime" v-model="start_time" @confirm="confirmStart"></mt-datetime-picker>
    <mt-datetime-picker ref="end" type="datetime" v-model="end_time" @confirm="confirmEnd"></mt-datetime-picker>
    <div class="map" v-if="showMap">
      <div class="top">
        <img @click="closeMap" src="/static/img/icon-left.png" alt>
        <h2>选择地址</h2>
        <i @click="closeMap" style="padding-right: 20px;">确定</i>
      </div>
      <div style="padding-bottom: 50px;"></div>
      <div class="amap-page-container">
        <el-amap-search-box
          class="search-box"
          :search-option="searchOption"
          :on-search-result="onSearchResult"
        ></el-amap-search-box>
        <el-amap
          vid="amapDemo"
          :center="center"
          :zoom="12"
          :plugin="plugin"
          :amap-manager="amapManager"
          :events="events"
          class="amap-demo"
        >
          <el-amap-marker vid="marker" :position="marker"></el-amap-marker>
        </el-amap>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'
import lrz from 'lrz'
// import { AMapManager } from 'vue-amap'
import { getLocalTime } from '../../../static/js/date'
import { DatetimePicker, Toast } from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.use(VueAMap)
let amapManager = new VueAMap.AMapManager()
export default {
  name: 'editActivity',
  data () {
    let self = this
    return {
      title: '',
      preface: '',
      content: '',
      banner: '',
      start_time: '',
      show_start_time: '',
      end_time: '',
      show_end_time: '',
      type: 1,
      num: 0,
      man: 0,
      wman: 0,
      amapManager,
      info: [
        { sex: 1, num: 0, enroll_num: 0 },
        { sex: 2, num: 0, enroll_num: 0 }
      ],
      showMap: false,
      plugin: [
        {
          pName: 'ToolBar'
        }
      ],
      center: [120.15, 30.28],
      marker: [120.15, 30.28],
      searchOption: {
        city: '杭州',
        citylimit: true
      },
      events: {
        click (e) {
          let { lng, lat } = e.lnglat
          self.lng = lng
          self.lat = lat
          self.marker = [lng, lat]
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress([lng, lat], function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress
                self.$nextTick()
              }
            }
          })
        }
      },
      lng: 0,
      lat: 0,
      address: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/activity')
    },
    // 选择开始日期
    selectStart () {
      this.start_time = new Date()
      this.$refs.start.open()
    },
    // 确认选择时间
    confirmStart () {
      this.show_start_time = getLocalTime(this.start_time.valueOf() / 1000)
    },
    selectEnd () {
      this.end_time = new Date()
      this.$refs.end.open()
    },
    confirmEnd () {
      this.show_end_time = getLocalTime(this.end_time.valueOf() / 1000)
    },
    // 选择限制男女类型
    selectType (type) {
      this.type = type
    },
    jian (type) {
      if (type === 1) {
        if (this.man > 0) {
          this.man--
        }
      } else if (type === 2) {
        if (this.wman > 0) {
          this.wman--
        }
      } else if (type === 3) {
        if (this.num > 0) {
          this.num--
        }
      }
    },
    jia (type) {
      if (type === 1) {
        this.man++
      } else if (type === 2) {
        this.wman++
      } else if (type === 3) {
        this.num++
      }
    },
    closeMap () {
      this.showMap = false
    },
    openMap () {
      this.showMap = true
    },
    // 地图搜索
    onSearchResult (pois) {
      let latSum = 0
      let lngSum = 0
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi
          lngSum += lng
          latSum += lat
        })
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        }
        this.center = [center.lng, center.lat]
      }
    },
    // 上传图片
    uploadImg (img) {
      var _this = this
      var formData = new FormData()
      formData.append('token', localStorage.getItem('token'))
      formData.append('type', '5')
      formData.append('image', img)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.$http.post('/user/Image', formData, config).then(function (data) {
        if (data.data.flag === 100) {
          _this.banner = data.data.data.url
        }
      })
    },
    // 选择图片、判断大小压缩
    uploadChange (event) {
      var _this = this
      // var max_size = 2000
      var size = event.target.files[0].size
      if (size > 2000 * 1024) {
        // this.$message.error('图片大小不能超过2M')
        lrz(event.target.files[0], {
          width: 300
          // quality: 0.8    //自定义使用压缩方式
        })
          .then(function (rst) {
            // 成功时执行
            _this.uploadImg(rst.file)
          })
          .catch(function (error) {
            console.log(error)
            // 失败时执行
          })
          .always(function () {
            // 不管成功或失败，都会执行
          })
      } else {
        this.uploadImg(event.target.files[0])
      }
    },
    // 提交
    submit () {
      this.info[0].num = this.man
      this.info[1].num = this.wman
      var _this = this
      let data = {
        activity_id: this.$route.query.id,
        title: this.title,
        preface: this.preface,
        content: this.content,
        banner: this.banner,
        num: this.num,
        address: this.address,
        lat: this.lat,
        lng: this.lng,
        start_time: this.start_time.getTime() / 1000,
        end_time: this.end_time.getTime() / 1000,
        type: this.type,
        info: JSON.stringify(this.info)
      }
      this.$http({
        method: 'put',
        url: '/activity/Activity',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.$router.push('/myActivity')
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
        activity_id: this.$route.query.id
      }
      var _this = this
      this.$http({
        method: 'get',
        url: '/activity/activityInfo',
        params: parame
      }).then(function (data) {
        if (data.data.flag === 100) {
          let datalist = data.data.data
          _this.title = datalist.title
          _this.preface = datalist.preface
          _this.content = datalist.content
          _this.banner = datalist.banner
          _this.start_time = new Date(datalist.start_time * 1000)
          _this.end_time = new Date(datalist.end_time * 1000)
          _this.type = datalist.type
          _this.num = datalist.num
          _this.man = datalist.info[0].num
          _this.wman = datalist.info[1].num
          _this.lng = datalist.lng
          _this.lat = datalist.lat
          _this.address = datalist.address
          _this.show_start_time = getLocalTime(datalist.start_time)
          _this.show_end_time = getLocalTime(datalist.end_time)
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
.editActivity {
  // height: 100vh;
  // width: 100%;
  // background: white;
  overflow: hidden;
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
    z-index: 19;
    img {
      width: 25px;
      height: 25px;
      margin-left: 10px;
    }
    span {
      padding: 0 25px;
      font-size: 14px;
      color: #f21d40;
    }
    h2 {
      font-size: 16px;
    }
  }
  .content {
    margin-top: 5px;
    background: white;
    .unit {
      width: 94%;
      height: 45px;
      margin: 0 auto;
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .unit-detail {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #999999;
        input {
          border: none;
          outline: none;
        }
        img {
          width: 15px;
          height: 15px;
        }
        .selectNum {
          margin-left: 20px;
          span {
            margin: 0 10px;
          }
        }
        .activetyContent {
          height: 80px;
          width: 100%;
          outline: none;
          border: none;
          resize: none;
        }
        .upload {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
      h2 {
        width: 120px;
        color: #333333;
        font-size: 14px;
      }
    }
  }
  .submit {
    display: block;
    width: 80%;
    height: 40px;
    border: none;
    outline: none;
    background: #f21d40;
    border-radius: 5px;
    margin: 15px auto;
    font-size: 16px;
    color: white;
  }
  .map {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 20;
    display: flex;
    flex-direction: column;
    .top {
      width: 100%;
      height: 50px;
      position: absolute;
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
      h2 {
        font-size: 16px;
      }
    }
    .amap-page-container {
      position: relative;
      flex: 1;
    }
    .amap-demo {
      width: 100%;
      // height: 400px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .search-box {
      width: 90%;
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
}
</style>
