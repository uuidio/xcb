<template lang="html">
    <div class="list all">
        <section class="content">
            <div class="item" v-for="(list,index) in lists" :key="index" @click="goperson(list)">
                <img :src="list.ximg" alt="">
                <div>
                    <div>
                      <em>{{list.xname}}</em>
                      <em>{{list.xposition}}</em>
                    </div>
                    <div>
                    <em>{{list.xbackground}}</em>
                    </div>
                    <div>
                      <em><span>¥</span> {{list.xprice}}</em>&nbsp;&nbsp;&nbsp;<em><span>热度</span> {{list.xhot}}</em>
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
          ximg: require("img/20170924121925_03.png"),
          xid: "123",
          xname: "张小荣",
          xposition: "中金安盛资本总经理",
          xbackground: "广东省发改委产业特约研究员",
          xprice: "8.7",
          xhot: "121",
        },
        {
          ximg: require("img/20170924121925_06.png"),
          xid: "134",
          xname: "贺沅舟",
          xposition: "九鼎投资副总裁",
          xbackground: "著名投资人，专注于股权投资",
          xprice: "8.7",
          xhot: "121",
        },
        {
          ximg: require("img/20170924121925_02.png"),
          xid: "135",
          xname: "张议云",
          xposition: "极豆网络科技有限公司CEO",
          xbackground: "极豆基金投资总裁",
          xprice: "8.7",
          xhot: "121",
        },
        {
          ximg: require("img/20170924121925_08.png"),
          xid: "135",
          xname: "不二",
          xposition: "PPP知乎运营总监",
          xbackground: "经济学博士、轨道交通投融资研究中心市场总监",
          xprice: "8.7",
          xhot: "121",
        },
        {
          ximg: require("img/20170924121925_10.png"),
          xid: "169",
          xname: "边超",
          xposition: "北大企业家投创基金会长、总经理",
          xbackground: "央视《《创业英雄汇》》嘉宾评委",
          xprice: "8.7",
          xhot: "121",
        },
        {
          ximg: require("img/20170924121925_12.png"),
          xid: "170",
          xname: "余美慧",
          xposition: "创客街联合创始人、总经理",
          xbackground: "米粒天使基金合伙人",
          xprice: "8.7",
          xhot: "121",
        },
        {
          ximg: require("img/20170924121925_14.png"),
          xid: "172",
          xname: "张林利",
          xposition: "赛马资本投资副总裁",
          xbackground: "关注健康理疗、B2B、泛娱乐、消费品等行业",
          xprice: "8.7",
          xhot: "121",
        }
      ]
    }
  },
  methods: {
    goperson (list) {
      console.log(list.xid)
      // this.$router.push({ name: "personal", params: { id: list.xid } })
      this.$router.replace({ path: "personal", query: { id: list.xid } })
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/element.scss";
.list {
  @include panel;
  margin-top: 100px;
  margin-bottom: 100px;
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
        border-radius: 6px;
      }
      > div {
        flex: 1;
        text-align: left;
        font-size: 24px;
        color: #333;
        line-height: 50px;
        width: 344px;
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
          font-size: 20px;
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
