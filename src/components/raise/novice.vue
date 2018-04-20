<template lang="html">
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>新手用户<span :class="$style.red">送10元礼包</span></h4>
                <p :class="$style.gray">新手领券</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="~img/58e60952N7fdb2b85.png" alt="">
                        <h4 :class="$style.red">首次申购10元礼包</h4>
                        <p :class="$style.gray">立即领取</p>
                    </li>
                    <li>
                        <img src="~img/58e6095fNd3dc3f39.png" alt="">
                        <h4>商城券<span :class="$style.red">2元</span></h4>
                        <p :class="$style.gray">立即领取</p>
                    </li>
                </ul>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components: {
    Panel,
  },
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include list(row);
    .item {
      width: 50%;
      box-sizing: border-box;
      &:first-child {
        padding: 32px 20px;
        text-align: center;
        border-right: 1px solid #ddd;
        img {
          width: 132px;
          height: 132px;
          margin: 20px auto 0;
        }
      }
      h4 {
        font-size: 26px;
        line-height: 40px;
      }
      .red {
        color: #f00;
      }
      .gray {
        color: #999;
        font-size: 24px;
      }
      p {
        margin-top: 6px;
        font-size: 24px;
      }
      ul {
        width: 100%;
        li {
          height: 144px;
          width: 100%;
          padding: 32px 28px;
          box-sizing: border-box;
          &:first-child {
            border-bottom: 1px solid #ddd;
          }
          h4 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: left;
          }
          img {
            width: 80px;
            height: 80px;
            float: right;
          }
        }
      }
    }
  }
}
</style>
