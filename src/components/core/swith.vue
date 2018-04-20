<template>
  <ul class="switches">
    <li
      class="switch-item"
      v-for="(item,index) in switches"
      :key="item.index"
      :class="{'active':currentIndex === index}"
      @click="switchItem(index)"
    >
      <span>{{item.name}} </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    switches: {
      type: Array,
      default () {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem (index) {
      this.$emit("switch", index)
    }
  }
}
</script>

<style lang="scss" scoped>
.switches {
  z-index: 20;
  position:fixed;
  top:-1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  background: #fff;
  border-bottom: #eaeaea solid 1px ;
  .switch-item {
    line-height: 64px;
    flex: 0 0 100px;
    padding: 8px;
    text-align: center;
    font-size: 30px;
    color: #333;
    border-bottom: #ccc 1px solid;
    &.active {
      border-bottom: #de2c2d 2px solid;
      color: #de2c2d;
    }
  }
}
</style>
