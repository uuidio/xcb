<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
    </article>
</template>

<script>
import Slider from "c/core/slider.vue"
export default {
  components: {
    Slider,
  },
  data () {
    return {
      items: [{
        src: "//static.meiguoshenpo.com/image/201706/096363262434260779031519808.jpg",
      }, {
        src: "http://img2.imgtn.bdimg.com/it/u=434548990,979947982&fm=27&gp=0.jpg",
      }],
    }
  },
}
</script>

<style lang="scss" module>
@import "~@/assets/css/element.scss";
.slider {
  margin-top: 80px;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
