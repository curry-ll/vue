<template>
  <div class="realName">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>实名认证</h2>
      <i></i>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <h3 v-if="status == 0">正在审核中请耐心等待</h3>
    <div v-if="status != 0">
      <h3>请填写审核信息</h3>
      <div class="wapper">
        <div class="unit">
          <span>姓名或单位名称</span>
          <input type="text" v-model="user_name" placeholder="姓名或单位名称">
        </div>
        <div class="unit">
          <span>类型</span>
          <div class="item_right">
            <img src="/static/img/check.png" v-if="type == 2" @click="checkType(1)" alt>
            <img src="/static/img/check-dis.png" v-if="type == 1" @click="checkType(2)" alt>
            <span style="margin-right:20px;">个人</span>
            <img src="/static/img/check.png" v-if="type == 1" @click="checkType(2)" alt>
            <img
              src="/static/img/check-dis.png"
              class="check_radio"
              v-if="type == 2"
              @click="checkType(1)"
              alt
            >
            <span>单位</span>
          </div>
        </div>
        <div class="unit" v-if="type == 1">
          <span>证件类型</span>
          <p>身份证</p>
        </div>
        <div class="unit" v-if="type == 1">
          <span>证件号</span>
          <input type="text" v-model="number" placeholder="请输入证件号">
        </div>
        <div class="upload" v-if="type == 1">
          <input type="file" class="upload_input" @change="uploadChange1" accept="image/*">
          <div class="defalut">
            <img src="/static/img/uploadIcon.png" alt>
            <p>点击上传证件正面</p>
          </div>
          <img :src="z_img" class="show_img" alt>
        </div>
        <div class="upload" v-if="type == 1">
          <input type="file" class="upload_input" @change="uploadChange2" accept="image/*">
          <div class="defalut">
            <img src="/static/img/uploadIcon.png" alt>
            <p>点击上传证件反面</p>
          </div>
          <img :src="f_img" class="show_img" alt>
        </div>
        <div class="upload" v-if="type == 2">
          <input type="file" class="upload_input" @change="uploadChange3" accept="image/*">
          <div class="defalut">
            <img src="/static/img/uploadIcon.png" alt>
            <p>点击营业执照</p>
          </div>
          <img :src="license_img" class="show_img" alt>
        </div>
        <p class="tips">
          请将身份证摆横拍摄；
          <br>请将身份证对焦拍摄，确保字体清晰；
          <br>请确保你的身份证是有效期内。
          <br>
        </p>
        <button class="submit" @click="submit()">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import lrz from 'lrz'
export default {
  data () {
    return {
      status: '',
      number: '',
      user_name: '',
      type: 1,
      z_img: '',
      f_img: '',
      license_img: '',
      datalist: []
    }
  },
  methods: {
    back () {
      this.$router.back('/user')
    },
    checkType (type) {
      this.type = type
    },
    uploadImg1 (img) {
      var _this = this
      var formData = new FormData()
      formData.append('token', localStorage.getItem('token'))
      formData.append('type', '2')
      formData.append('image', img)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.$http.post('/user/Image', formData, config).then(function (data) {
        if (data.data.flag === 100) {
          _this.z_img = data.data.data.url
        }
      })
    },
    // 选择图片、判断大小压缩
    uploadChange1 (event) {
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
        this.uploadImg1(event.target.files[0])
      }
    },
    uploadImg2 (img) {
      var _this = this
      var formData = new FormData()
      formData.append('token', localStorage.getItem('token'))
      formData.append('type', '3')
      formData.append('image', img)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.$http.post('/user/Image', formData, config).then(function (data) {
        if (data.data.flag === 100) {
          _this.f_img = data.data.data.url
        }
      })
    },
    // 选择图片、判断大小压缩
    uploadChange2 (event) {
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
        this.uploadImg2(event.target.files[0])
      }
    },
    uploadImg3 (img) {
      var _this = this
      var formData = new FormData()
      formData.append('token', localStorage.getItem('token'))
      formData.append('type', '4')
      formData.append('image', img)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.$http.post('/user/Image', formData, config).then(function (data) {
        if (data.data.flag === 100) {
          _this.license_img = data.data.data.url
        }
      })
    },
    // 选择图片、判断大小压缩
    uploadChange3 (event) {
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
        this.uploadImg3(event.target.files[0])
      }
    },
    getData () {
      var _this = this
      this.$http({
        method: 'get',
        url: '/user/Certification'
      }).then(function (data) {
        if (data.data.flag === 100) {
          _this.datalist = data.data.data
          _this.status = _this.datalist.status
          if (_this.status === -1) {
            Toast({
              message: '审核失败请重新编辑',
              position: 'bottom',
              duration: 2000
            })
          }
          _this.number = _this.datalist.number
          _this.user_name = _this.datalist.user_name
          _this.type = _this.datalist.type
          _this.z_img = _this.datalist.z_img
          _this.f_img = _this.datalist.f_img
          _this.license_img = _this.datalist.license_img
        } else if (data.data.flag === 200) {
          _this.status = 200
        }
      })
    },
    submit () {
      let url = ''
      if (this.status === 200) {
        url = '/user/Certification'
      } else {
        url = '/user/CertificationEdit'
      }
      var _this = this
      let data = {
        user_name: this.user_name,
        type: this.type,
        number: this.number,
        f_img: this.f_img,
        z_img: this.z_img,
        license_img: this.license_img
      }
      this.$http({
        method: 'post',
        url: url,
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.$router.push('/user')
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

<style scoped lang="scss">
.realName {
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
h3 {
  width: 100%;
  height: 35px;
  font-size: 12px;
  background: black;
  color: white;
  text-align: center;
  line-height: 35px;
}
.wapper {
  margin: 0 10px;
  font-size: 12px;
  .unit {
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aaaaaa;
    p {
      color: #aaaaaa;
    }
    input {
      text-align: right;
      background: none;
      border: none;
      outline: none;
    }
    .item_right {
      color: #cccccc;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70%;
    height: 150px;
    margin: 20px auto;
    .upload_input {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 20;
      border: none;
    }
    .show_img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
    }
    .defalut {
      img {
        width: 50px;
        height: 50px;
        display: block;
        margin: 0 auto;
      }
      p {
        text-align: center;
        margin-top: 10px;
        color: #cccccc;
      }
    }
  }
  .tips {
    margin: 20px;
  }
  .submit {
    border: none;
    outline: none;
    background: goldenrod;
    border-radius: 5px;
    display: block;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    margin-top: 30px;
    box-shadow: 0 5px 3px #cccccc;
  }
  h4 {
    color: #aaaaaa;
    text-align: center;
    margin: 20px 0 10px 0;
  }
}
</style>
