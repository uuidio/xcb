<template lang="html">
    <div class="header">
        <span class="left">
            <router-link :to="{ name: 'my'}"><em>注册</em>&nbsp;|&nbsp;<em>登录</em></router-link>
        </span>
        <router-link :to="{ name: 'download'}"><btn class="btnDownload">APP下载</btn></router-link>
    </div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
  components: {
    btn,
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #666;
}
.header {
  color: #666;
  height: 100px;
  line-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 32px;
  background: #fff
    url(//images2018.cnblogs.com/blog/1312327/201804/1312327-20180402222548131-1800389651.png)
    center center no-repeat;
  background-size: auto 50%;
  z-index: 100;
  .left {
    font-size: 28px;
    height: 30px;
    line-height: 30px;
    margin: 17px 0 0 -300px;
    text-align: left !important;
  }
  .btnDownload {
    float: right;
    font-size: 24px;
    border-width: 0;
    height: 56px;
    line-height: 56px;
    min-width: 120px;
    padding: 0;
    border-radius: 4px;
    margin: 28px 24px 0 0;
  }
}
</style>
