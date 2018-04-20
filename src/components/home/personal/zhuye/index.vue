<template lang="html">
    <div>
        <Slider></Slider>
        <div class="mask">
          <div class="mask-in">
            <div class="name">周杰伦</div>
            <div class="zhiye">歌手、音乐人、制作人、导演、商人</div>
            <div class="gujia">
              <div>
                <div>36.00/分钟</div>
                <div>当前价</div>
              </div>
              <div>
                <div>1555</div>
                <div>关注</div>
              </div>
            </div>
          </div>
        </div>
        <Lnav></Lnav>
        <div style="clear:both"></div>
        <Money></Money>
    </div>
</template>

<script>

import Slider from "./pslider"
import Lnav from "./lnav"
import Money from "./money"
export default {
  components: {
    Slider,
    Lnav,
    Money
  },
}
</script>
<style lang="scss">
.mask {
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 80px;
  z-index: 19;
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
</style>
