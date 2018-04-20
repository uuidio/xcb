<template>
  <div>
    <div class="buysell">
      <div style="background:#e72c29" @click="buy">买入</div>
      <div style="background:#5aba5a" @click="sell">卖出</div>
      <div style="background:#00a6ef">委托</div>
      <div style="background:#feaf70">私聊</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buy () {
      console.log(1)
      this.$emit("buy")
    },
    sell () {
      console.log(2)
      this.$emit("sell")
    },
  },
}
</script>

<style lang="scss" scoped>
.buysell {
  height: 70px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  border-top: #ccc solid 1px;
  > div {
    width: 150px;
    height: 70px;
    line-height: 70px;
    padding: 4px 6px;
    background: firebrick;
    color: #fff;
    text-align: center;
  }
}
</style>
