<template lang="html">
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.catory">
                <img :src="item.catory" alt="">
                <section :class="$style.list">
                    <div :class="$style.product" v-for="product in item.list" :key="product.img">
                        <img :src="product.img" alt="">
                        <p :class="$style.title">{{ product.title }}</p>
                        <p :class="$style.price"><em>{{ product.price }}</em>/小时</p>
                        <article>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width:product.progress+'%'}"/>
                            </div>
                            <p>{{ product.progress }}%</p>
                        </article>
                        <label v-show="product.hot">精选</label>
                    </div>
                </section>
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
  data () {
    return {
      items: [{
        catory: require("img/5846d8e7N20446dbd.png"),
        list: [{
          img: require("img/20170924121925_12.png"),
          title: "余美慧",
          price: "29.00",
          progress: 172,
          hot: true
        }, {
          img: require("img/20170924121925_03.png"),
          title: "张小荣",
          price: "998.00",
          progress: 259,
        }],
      }, {
        catory: require("img/5846a953N66b67d05.png"),
        list: [{
          img: require("img/20170924121925_10.png"),
          title: "边超",
          price: "19.00",
          progress: 481,
        }, {
          img: require("img/20170924121925_14.png"),
          title: "张林利",
          price: "258.00",
          progress: 105,
          hot: true
        }],
      }, {
        catory: require("img/5846d310Ne93f00c9.png"),
        list: [{
          img: require("img/20170924121925_02.png"),
          title: "张议云",
          price: "99.00",
          progress: 199,
        }, {
          img: require("img/20170924121925_08.png"),
          title: "不二",
          price: "58.00",
          progress: 222,
        }],
      }],
    }
  },
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  .content {
    @include flex;
    .item {
      > img {
        display: block;
        width: 100%;
        height: 170px;
      }
      margin-bottom: 40px;
      .list {
        @include flex(row);
        .product {
          width: 50%;
          height: 396px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.02);
          text-align: center;
          position: relative;
          img {
            width: 180px;
            height: 180px;
            margin: 44px auto 20px;
          }
          .title {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #444;
          }
          .price {
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            color: #999;
            height: 48px;
            line-height: 48px;
            em {
              font-size: 36px;
              color: #ff3232;
              margin-right: 4px;
              &:before {
                content: "￥";
                font-size: 28px;
              }
            }
          }
          article {
            @include flex(row);
            align-items: center;
            justify-content: space-around;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            margin-top: 16px;
            .wrapper {
              width: 144px;
              height: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              .inner {
                width: 40%;
                max-width: 100%;
                height: 10px;
                background-image: linear-gradient(
                  270deg,
                  #f55 1%,
                  #ff9c31 100%
                );
                border-radius: 22px;
              }
            }
            p {
              font-size: 24px;
              color: #999;
            }
          }
          label {
            position: absolute;
            left: 0;
            top: 0;
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #ff0000;
            text-align: center;
            padding: 4px 8px;
            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
          }
        }
      }
    }
  }
}
</style>
