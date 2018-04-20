<template>
  <div>
    <div id="square">
      <img class="close" src="~img/guanbi.png" alt="">
      <h4>买入</h4>
      <div>
        价格<input type="text">
      </div>
      <div>
        数量<input type="text">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
#square {
  width: 350px;
  height: 250px;
  background-color: (0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999999;
  .close {
    width: 50px;
    position: absolute;
  }
  h4 {
    border-bottom: #fff solid 1px;
  }
  > div {
    width: 50%;
    text-align: center;
  }
}
</style>
