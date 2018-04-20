<template>
  <div class="content all-down">
    <div class="buysell">— 9:00~17:00 —</div>
    <div class="updown">
      <div>
        <div class="big">0.85
          <span class="sm">/秒</span>
        </div>
        <div class="down">当前价</div>
      </div>
      <div>
        <div class="big">7.26
          <span class="sm">%</span>
        </div>
        <div class="down">涨幅</div>
      </div>
    </div>
    <!-- 数据 -->
    <div class="data clearfix">
      <ul>
        <li>
          <div>昨收</div>
          <div style="width:34%;">0.85</div>
          <div style="width:16%;">卖3</div>
          <div style="width:16%;" class="red">0.93</div>
          <div style="width:14%">8</div>
        </li>
        <li>
          <div>今开</div>
          <div style="width:34%;" class="red">0.9</div>
          <div style="width:16%;">卖2</div>
          <div style="width:16%;" class="green">0.80</div>
          <div style="width:14%">120</div>
        </li>
        <li>
          <div>最高</div>
          <div style="width:34%;">0.94</div>
          <div style="width:16%;">卖1</div>
          <div style="width:16%;" class="green">0.75</div>
          <div style="width:14%">12</div>
        </li>
        <li>
          <div>最低</div>
          <div style="width:34%;">0.72</div>
          <div style="width:16%;">买1</div>
          <div style="width:16%;" class="green">0.74</div>
          <div style="width:14%">45</div>
        </li>
        <li>
          <div>成交</div>
          <div style="width:34%;">1563</div>
          <div style="width:16%;">买2</div>
          <div style="width:16%;" class="green">0.72</div>
          <div style="width:14%">360</div>
        </li>
        <li>
          <div>幅度</div>
          <div style="width:34%;">0.74~0.9</div>
          <div style="width:16%;">买3</div>
          <div style="width:16%;" class="green">0.70</div>
          <div style="width:14%">120</div>
        </li>
      </ul>
    </div>
    <!-- 持仓 -->
    <div class="buysell">— 我的持仓 (周杰伦) —</div>
    <div class="myhold clearfix">
      <ul>
        <li class="clearfix">
          <div>14568秒<br>持仓</div>
          <div>2000<br>市值</div>
          <div class="red">356.69<br>浮盈</div>
        </li>
        <li class="clearfix">
          <div>9999<br>钱包余额</div>
          <div>12<br>买入委托</div>
          <div>0<br>卖出委托</div>
        </li>
      </ul>
    </div>
    <div class="buysell">— 市场分析 —</div>
    <img src="~img/shichang.png" alt="" style="width:100%;">
    <Flag :buyOrSell="buyOrSell" v-if="isShow" @close="close"></Flag>
    <BuySell @buy="buy" @sell="sell"></BuySell>
  </div>
</template>
<script>
import BuySell from "c/core/buysell"
import Flag from "./flag"
export default {
  data () {
    return {
      buyOrSell: "买入",
      isShow: false
    }
  },
  methods: {
    buy () {
      this.buyOrSell = "买入"
      this.isShow = true
    },
    sell () {
      this.buyOrSell = "卖出"
      this.isShow = true
    },
    close () {
      this.isShow = false
    }

  },
  components: {
    BuySell,
    Flag
  },

}
</script>

<style lang="scss" scoped>
.red {
  color: #eb88a5;
}
.green {
  color: #30e275;
}
.content {
  margin-top: 80px;
  .buysell {
    height: 50px;
    line-height: 50px;
    background: #f9f5f9;
    text-align: center;
  }
  .updown {
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 140px;
    background: #eb88a5;
    > div {
      .big {
        font-size: 40px;
      }
      .sm {
        font-size: 20px;
      }
      .down {
        margin-top: 10px;
      }
      width: 49%;
      display: inline-block;
      text-align: center;
    }
    > div:nth-of-type(1) {
      border-right: #fff solid 1px;
    }
  }
  .data {
    padding: 36px;
    > ul li div {
      line-height: 44px;
      float: left;
      width: 20%;
    }
  }
  .myhold {
    padding-top: 36px;
    > ul li {
      margin-bottom: 36px;
      > div {
        line-height: 44px;
        float: left;
        width: 33.333%;
        text-align: center;
      }
    }
  }
}
</style>
