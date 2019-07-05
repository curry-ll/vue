<template>
  <div class="personalData">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>个人信息</h2>
      <i></i>
    </div>
    <div class="pesonal_content">
      <div class="item" style="height:80px;">
        <h3>头像</h3>
        <div class="item_right">
          <div class="upload">
            <img src="/static/img/defaultImg.png" v-if="!data.head_img" alt>
            <img :src="data.head_img" v-if="data.head_img" alt>
            <input type="file" @change="uploadChange" class="upload__input" accept="image/*">
          </div>
        </div>
      </div>
      <div class="item">
        <h3>昵称</h3>
        <div class="item_right" @click="editName()">
          <span>{{data.nick_name}}</span>
        </div>
      </div>
      <div class="item">
        <h3>用户ID</h3>
        <div class="item_right">
          <span>{{data.uid}}</span>
        </div>
      </div>
      <div class="item">
        <h3>性别</h3>
        <div class="item_right">
          <img
            src="/static/img/check.png"
            class="check_radio"
            v-if="data.sex == '女'"
            @click="checkSex('男')"
            alt
          >
          <img
            src="/static/img/check-dis.png"
            class="check_radio"
            v-if="data.sex == '男'"
            @click="checkSex('男')"
            alt
          >
          <span style="margin-right:20px;">男</span>
          <img
            src="/static/img/check.png"
            class="check_radio"
            v-if="data.sex == '男'"
            @click="checkSex('女')"
            alt
          >
          <img
            src="/static/img/check-dis.png"
            class="check_radio"
            v-if="data.sex == '女'"
            @click="checkSex('女')"
            alt
          >
          <span>女</span>
        </div>
      </div>
      <div class="item" @click="editAge()">
        <h3>年龄</h3>
        <div class="item_right">
          <span>{{data.age}}</span>
        </div>
      </div>
      <div class="item" @click="editArea()">
        <h3>地区</h3>
        <div class="item_right">
          <span>{{data.address}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      data: [],
      head_img: null,
      sex: '',
      age: ''
    }
  },
  methods: {
    back () {
      // this.$router.back(-1)
      this.$router.push('/user')
    },
    editArea () {
      this.$router.push('/getProvince')
    },
    editName () {
      this.$router.push({
        path: '/editName',
        query: { nick_name: this.data.nick_name }
      })
    },
    editAge () {
      this.$router.push({ path: '/editAge', query: { age: this.data.age } })
    },
    checkSex (sex) {
      var switchSex = false
      if (this.sex === sex) {
        switchSex = false
      } else {
        switchSex = true
      }
      var _this = this
      this.sex = sex
      var parame = {
        sex: this.sex
      }
      if (switchSex) {
        this.$http.put('/user/Users', parame).then(function (data) {
          if (data.data.flag === 100) {
            _this.update()
          }
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
        })
      }
    },
    editImg (img) {
      var _this = this
      var parame = {
        head_img: img
      }
      this.$http.put('/user/Users', parame).then(function (data) {
        if (data.data.flag === 100) {
          _this.update()
        }
        Toast({
          message: data.data.message,
          position: 'bottom',
          duration: 2000
        })
      })
    },
    uploadChange (event) {
      var _this = this
      // var max_size = 2000
      var size = event.target.files[0].size
      if (size > 2000 * 1024) {
        Toast({
          message: '图片大小不能超过2M',
          position: 'bottom',
          duration: 2000
        })
      } else {
        this.head_img = event.target.files[0]
        var formData = new FormData()
        formData.append('token', localStorage.getItem('token'))
        formData.append('type', '1')
        formData.append('image', this.head_img)
        let config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        this.$http.post('/user/Image', formData, config).then(function (data) {
          if (data.data.flag === 100) {
            _this.editImg(data.data.data.url)
          }
        })
        // this.createImage(event.target.files[0])
      }
    },
    createImage (file) {
      // var image = new Image()
      var reader = new FileReader()
      reader.onload = e => {
        this.head_img = e.target.result
      }
      reader.readAsDataURL(file)
    },
    update () {
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/userInfo'
      }).then(function (data) {
        _this.data = data.data.data
        _this.sex = data.data.data.sex
      })
    }
  },
  mounted () {
    this.update()
  }
}
</script>

<style scoped lang="scss">
.personalData {
  background: #f8f8f8;
}
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
.pesonal_content {
  width: 96%;
  margin: 0 auto;
  margin-top: 50px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-bottom: 1px solid #bbb;
    .item_right {
      color: #cccccc;
      height: 100%;
      display: flex;
      align-items: center;
      .check_radio {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      .upload {
        width: 50px;
        height: 50px;
        position: relative;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .upload__input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
      .go-icon {
        font-size: 20px;
        margin-left: 10px;
      }
    }
  }
}
</style>
