<template>
  <div>
    <div id="square">
      <img class="close" src="~img/guanbi.png" alt="" @click="close">
      <h4>{{buyOrSell}}</h4>
      <div class="clearfix">
        <div>
          价格<br><input type="text" placeholder="0.75" onkeyup="value=value.replace(/[^\d]/g,'')">
        </div>
        <div>
          数量<br><input type="text" placeholder="100">
        </div>
      </div>
      <div class="comfirm" @click="comfirm">确定</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    buyOrSell: {
      type: String,
      default: ""
    },
  },
  methods: {
    close () {
      this.$emit("close")
    },
    comfirm () {
      this.close()
      alert("购买成功")
    }
  },
}
</script>

<style lang="scss" scoped>
#square {
  color: #fff;
  width: 500px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  margin-left: -250px;
  left: 50%;
  border-radius: 10px;
  z-index: 99;
  top: 500px;
  text-align: center;
  .close {
    width: 30px;
    position: absolute;
    right: 14px;
    top: 10px;
  }
  h4 {
    height: 50px;
    font-size: 26px;
    line-height: 50px;
    border-bottom: #fff solid 1px;
  }
  > div {
    > div {
      font-size: 20px;
      width: 50%;
      text-align: center;
      float: left;
      line-height: 38px;
      input {
        width: 70%;
        border-radius: 3px;
        height: 50px;
        font-size: 30px;
        padding-left: 10px;
        color: #000;
      }
    }
  }

  .comfirm {
    width: 30%;
    margin: 0 auto;
    padding: 8px 8px;
    border-radius: 4px;
    border: #fff solid 2px;
    margin-top: 50px;
  }
}
</style>
