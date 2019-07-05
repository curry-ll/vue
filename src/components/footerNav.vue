<template>
  <div class="footerNav">
    <ul>
      <li v-for="(item,index) in nav" :class="{active: navState == item.key}" :key="index" @click="selectNav(item)">
        <img :src="item.src" v-if="navState != item.key" alt="">
        <img :src="item.dissrc" v-if="navState == item.key" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store/index'
import { mapActions } from 'vuex'
export default {
  name: 'footerNav',
  data () {
    return {
      navState: store.state.navActive,
      nav: [
        {title: '活动', path: '/activity', src: '/static/img/icon-activity-deep.png', dissrc: '/static/img/icon-activity.png', key: 1},
        {title: '声音', path: '/sound', src: '/static/img/icon-sound-deep.png', dissrc: '/static/img/icon-sound.png', key: 2},
        {title: '志愿者', path: '/volunteer', src: '/static/img/icon-volunteer-deep.png', dissrc: '/static/img/icon-volunteer.png', key: 3},
        {title: '我的', path: '/user', src: '/static/img/icon-usernav-deep.png', dissrc: '/static/img/icon-usernav.png', key: 4}
      ]
    }
  },
  methods: {
    ...mapActions(['navActive']),
    selectNav (item) {
      this.$router.push(item.path)
      this.navActive(item.key)
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footerNav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 20px;
        width: 20px;
      }
    }
    .active {
      color: #F21D40;
    }
  }
}
</style>
