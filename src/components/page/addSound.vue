<template>
  <div class="addSound">
    <div class="top">
      <img @click="back" src="/static/img/icon-left.png" alt>
      <h2>发布声音</h2>
      <span @click="submit()">发布</span>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="content">
      <textarea
        class="inputcontent"
        v-model="content"
        @focus="showupload()"
        placeholder="分享你的声音..."
      ></textarea>
    </div>
    <div class="imgbox">
      <img v-for="(item,index) in images" :key="index" :src="item" alt>
    </div>
    <div style="padding-bottom: 50px;"></div>
    <div class="bottom" v-show="show" @click="selectImg($event)">
      <div class="bottom-wrap">
        <input
          type="file"
          @change="uploadChange($event)"
          accept="image/*"
          captrue="camera"
          class="input-upload"
        >
        <img src="/static/img/icon-upload.png" alt>
        <p>添加图片</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import lrz from 'lrz'
export default {
  name: 'addSound',
  data () {
    return {
      content: '',
      images: [],
      show: false
    }
  },
  methods: {
    back () {
      this.$router.push('/sound')
    },
    hide () {
      this.show = false
    },
    showupload () {
      this.show = true
    },
    selectImg (event) {
      if (this.images.length >= 6) {
        event.preventDefault()
        Toast({
          message: '上传图片不能超过6张',
          position: 'bottom',
          duration: 2000
        })
      }
    },
    uploadImg (img) {
      var _this = this
      var formData = new FormData()
      formData.append('token', localStorage.getItem('token'))
      formData.append('type', '6')
      formData.append('image', img)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.$http.post('/user/Image', formData, config).then(function (data) {
        if (data.data.flag === 100) {
          _this.images.push(data.data.data.url)
        }
      })
    },
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
    submit () {
      var _this = this
      let data = {
        content: this.content,
        images: JSON.stringify(this.images)
      }
      this.$http({
        method: 'post',
        url: '/heartfelt/Heartfelt',
        data: data
      }).then(function (data) {
        if (data.data.flag === 100) {
          Toast({
            message: data.data.message,
            position: 'bottom',
            duration: 2000
          })
          _this.$router.push('/sound')
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
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.addSound {
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
    width: 94%;
    margin: 15px auto;
    .inputcontent {
      width: 100%;
      height: 200px;
      border: none;
      outline: none;
      background: none;
    }
  }
  .imgbox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    img {
      height: 110px;
      width: 32%;
      margin: 2px;
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background: white;
    .bottom-wrap {
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 22px;
        height: 20px;
      }
      p {
        font-size: 14px;
        color: #f21d40;
        margin-left: 5px;
      }
      .input-upload {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        opacity: 0;
      }
    }
  }
}
</style>
