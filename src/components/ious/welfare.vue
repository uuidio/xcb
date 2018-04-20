<template lang="html">
    <div class="panel " title="白条福利">
        <section class="content">
            <div class="item" v-for="(list,index) in lists" :key="index">
                <img :src="list.ximg" alt="">
                <div>
                    <h4>{{list.xname}}</h4>
                    <p>{{list.xposition}}</p>
                </div>
                <div>
                    <em>{{list.time}}</em><br>
                    <em>{{list.new}}</em>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          ximg: require("img/20170924121925_03.png"),
          xname: "张小荣",
          xposition: "中金安盛资本总经理",
          xbackground: "广东省发改委产业特约研究员",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_06.png"),
          xname: "贺沅舟",
          xposition: "九鼎投资副总裁",
          xbackground: "著名投资人，专注于股权投资",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_02.png"),
          xname: "张议云",
          xposition: "极豆网络科技有限公司CEO",
          xbackground: "极豆基金投资总裁",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_08.png"),
          xname: "不二",
          xposition: "PPP知乎运营总监",
          xbackground: "经济学博士、轨道交通投融资研究中心市场总监",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_10.png"),
          xname: "边超",
          xposition: "北大企业家投创基金会长、总经理",
          xbackground: "央视《《创业英雄汇》》嘉宾评委",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_12.png"),
          xname: "余美慧",
          xposition: "创客街联合创始人、总经理",
          xbackground: "米粒天使基金合伙人",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_14.png"),
          xname: "张林利",
          xposition: "赛马资本投资副总裁",
          xbackground: "关注健康理疗、B2B、泛娱乐、消费品等行业",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_12.png"),
          xname: "余美慧",
          xposition: "创客街联合创始人、总经理",
          xbackground: "米粒天使基金合伙人",
          time: "15:00",
          new: "2"
        },
        {
          ximg: require("img/20170924121925_08.png"),
          xname: "不二",
          xposition: "PPP知乎运营总监",
          xbackground: "经济学博士、轨道交通投融资研究中心市场总监",
          time: "15:00",
          new: "2"
        },

      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  margin-bottom:100px;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include flex;
    .item {
      @include flex(row);
      align-items: center;
      height: 120px;
      border-bottom: 1px solid #ddd;
      &:last-child:after {
        border-color: #fff;
      }
      > img {
        width: 88px;
        height: 88px;
        display: inline-block;
        margin: 0 20px;
        border-radius: 50%;
      }
      > div:nth-of-type(1) {
        font-size: 32px;
        color: #333;
        line-height: 2;
        width: 420px;
        text-align: left;
        h4 {
          font-size: 25px;
          font-weight: bold;
        }
        p {
          color: #999;
          font-size: 20px;
          line-height: 2;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      > div:nth-of-type(2) {
        font-size: 20px;
        color: #333;
        line-height: 1.5;
        width: 84px;
        em:nth-of-type(2) {
          font-size: 12px;
          background: #f74c30;
          color: #fff;
          padding: 1px 10px;
          border-radius: 10px;
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
