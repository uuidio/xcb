<template lang="html">
    <div>
        <img class="back" src="~img/back.png" alt="" @click="back">
        <Swith @switch="switchItem" :switches="switches" :currentIndex="currentIndex"></Swith>
        <Zhuye v-if="currentIndex===0"></Zhuye>
        <Time v-if="currentIndex===1"></Time>
        <Chat v-if="currentIndex===2"></Chat>
    </div>
</template>

<script>
import Swith from "../core/swith"
import Zhuye from "./personal/zhuye/index.vue"
import Time from "./personal/time/index.vue"
import Chat from "./personal/chat/index.vue"
export default {
  data () {
    return {
      switches: [
        { name: "微主页" },
        { name: "买时间" },
        { name: "聊天室" },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    switchItem (index) {
      this.currentIndex = index
    },
    back () {
      this.$router.push({ path: "/" })
    }
  },
  components: {
    Swith,
    Zhuye,
    Time,
    Chat
  },
}
</script>

<style lang="scss">
.back {
  position: fixed;
  top: 25px;
  left: 10px;
  width: 30px;
  z-index: 21;
}
.mask {
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 80px;
  z-index: 99999999;
  color: #fff;
  .mask-in {
    margin-top: 100px;
    margin-left: 40px;
    .name {
      font-size: 30px;
      font-weight: bold;
    }
    .zhiye {
      margin-top: 20px;
      font-size: 20px;
    }
    .gujia {
      margin-top: 40px;
      font-size: 20px;
      line-height: 26px;
      > div:nth-of-type(1) {
        display: inline-block;
        border-right: #fff solid 1px;
        width: 130px;
      }
      > div:nth-of-type(2) {
        text-align: center;
        display: inline-block;
        width: 130px;
      }
    }
  }
}
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
