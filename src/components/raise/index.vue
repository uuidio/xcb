<template lang="html">
    <div>
        <Swith
        @switch="switchItem"
        :switches="switches"
        :currentIndex="currentIndex"
        >
        </Swith>
        <Wechat v-if="currentIndex===0"></Wechat>
        <Question v-if="currentIndex===1"> </Question>
        <Shop v-if="currentIndex===2"> </Shop>
        <!-- <Daily/>
        <In/>
        <More/>
        <Footor cname="mfooter"/> -->
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./rslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"
import More from "./more.vue"
import Swith from "../core/swith"
import Wechat from "./wechat"
import Question from "./question"
import Shop from "./shop"

export default {
  data () {
    return {
      switches: [
        { name: "牛人圈" },
        { name: "问答区" },
        { name: "商城" }
      ],
      currentIndex: 0,
    }
  },
  methods: {
    switchItem (index) {
      this.currentIndex = index
    },
  },
  components: {
    Heador,
    Slider,
    Daily,
    In,
    More,
    Navbar,
    Swith,
    Wechat,
    Question,
    Shop,
  },
}
</script>

<style lang="scss">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
