<template lang="html">
    <div class="list">
        <section class="content">
            <div class="item" v-for="(list,index) in lists" :key="index">
                <img :src="list.ximg" alt="">
                <div>
                    <div>
                      <em>{{list.xname}}</em>
                      <em>{{list.xposition}}</em>
                    </div>
                    <div>
                      <div style="width:33%;float:left;"><em>{{list.xprice}}/小时<br><span>价格</span></em></div>
                      <div style="width:33%;float:left;"><em>{{list.xhot}}元<br><span>申购额</span></em></div>
                      <div style="width:33%;float:left;"><em> {{list.xhot}}天<br><span>预售期剩</span></em></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components: {
    Panel,
  },
  data () {
    return {
      lists: [
        {
          ximg: require("@/assets/img/20170924121925_03.png"),
          xname: "张小荣",
          xposition: "中金安盛资本总经理",
          xbackground: "广东省发改委产业特约研究员",
          xprice: "8.7",
          xhot: "121",
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/element.scss";
.list {
  @include panel;
  margin-top: 0;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include flex;
    .item {
      @include flex(row);
      align-items: center;
      height: 164px;
      &:after {
        content: " ";
        box-sizing: border-box;
        height: 0;
        width: 100%;
        border-bottom: 1px solid #ddd;
        margin-left: 150px;
      }
      &:last-child:after {
        border-color: #fff;
      }
      > img {
        width: 140px;
        height: 140px;
        display: inline-block;
        margin: 0 12px;
        border-radius: 50%;
      }
      > div {
        flex: 1;
        text-align: left;
        font-size: 24px;
        color: #333;
        line-height: 50px;
        width: 344px;
        > div em{
          line-height: 22px;
        }
        > div span{
          line-height: 22px;
          font-size: 22px;
          color: #999
        }
        > div:nth-of-type(1) {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          > em:nth-of-type(1) {
            font-weight: bold;
          }
        }
        > div:nth-of-type(2) {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          > em:nth-of-type(1) {
            font-weight: bold;
          }
        }
        > div:nth-of-type(3) {
          > em:nth-of-type(1) {
            color: #fc5e5e;
            span {
              color: #999;
            }
          }
          > em:nth-of-type(2) {
            color: #fc5e5e;
            span {
              color: #999;
            }
          }
        }
        p {
          color: #ff3232;
          font-size: 24px;
          line-height: 1.1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      > em {
        color: #ff801a;
        font-size: 28px;
      }
    }
  }
}
</style>
