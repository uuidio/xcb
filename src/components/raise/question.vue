<template>
  <div class="all">
    <div class="item" v-for="(question,index) in questions" :key="index">
      <div class="discrib">{{question.xqu}}</div>
      <div class="question">
        <div><img :src="question.ximg" alt=""></div>
        <div class="bg">6秒偷偷瞄</div>
        <div class="miao">偷瞄数{{question.xmiao}}</div>
      </div>
      <div class="iam">
        <div>{{question.xposition}}</div>
        <div>{{question.xscore}}<span> 分</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      questions: [
        {
          ximg: require("img/20170924121925_12.png"),
          xqu: "你太优秀啦！集美貌、才情、胆识于一身，简直就是女神在人间。为什么要一个人独自环球旅行嗯？",
          xposition: "创客街联合创始人、总经理",
          xscore: "4.1",
          xmiao: "123",
        },
        {
          ximg: require("img/20170924121925_06.png"),
          xqu: "能教一教我投资股票的方法吗？你投资经历真的太厉害了，能说说你的故事吗",
          xposition: "九鼎投资副总裁",
          xbackground: "著名投资人，专注于股权投资",
          xscore: "5",
          xmiao: "1200",
        },
        {
          ximg: require("img/20170924121925_02.png"),
          xqu: "我是一名初出社会的妹纸，心目中一直有创业的念头。想问问从你的角度觉得创业过程中应该怎么样的做呢？",
          xposition: "极豆网络科技有限公司CEO",
          xbackground: "极豆基金投资总裁",
          xscore: "3.2",
          xmiao: "80",
        },
        {
          ximg: require("img/20170924121925_08.png"),
          xqu: "你觉得成功定义是什么？你创办公司过程最艰难是什么经历",
          xposition: "PPP知乎运营总监",
          xbackground: "经济学博士、轨道交通投融资研究中心市场总监",
          xscore: "3.9",
          xmiao: "81",
        },
        {
          ximg: require("img/20170924121925_10.png"),
          xqu: "你做评委是什么感想的，会有什么不公正的事情发生吗",
          xposition: "北大企业家投创基金会长、总经理",
          xbackground: "央视《《创业英雄汇》》嘉宾评委",
          xscore: "5",
          xmiao: "66",
        },
        {
          ximg: require("img/20170924121925_03.png"),
          xqu: "你如何理解资本的运作？",
          xposition: "中金安盛资本总经理",
          xbackground: "广东省发改委产业特约研究员",
          xscore: "4.9",
          xmiao: "72",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.all {
  margin-top: 80px;
  margin-bottom:100px;
  .item {
    padding: 30px;
    font-size: 20px;
    line-height: 28px;
    border-bottom: #c5c5c5 solid 1px;
    background: #fff;
    .discrib{
      font-size: 14px;
    }
    .question {
      display: flex;
      flex-direction: row;
      margin-top: 24px;
      align-items: center;
      div:nth-of-type(1) {
        flex: 0 0 74px;
        img {
          width: 74px;
          border-radius: 50%;
        }
      }
      .bg {
        color: #fff;
        width: 174px;
        height: 60px;
        background: url(~img/green_bg.png) no-repeat;
        background-size: 100% auto;
        line-height: 60px;
        padding-left: 100px;
        margin-left: 10px;
        flex: 1;
      }
      .miao {
        text-align: right;
        flex: 0 0 200px;
      }
    }
    .iam {
      display: flex;
      margin-top: 20px;
      font-size: 20px;
      color: #999;
      div:nth-of-type(1) {
        flex: 1;
      }
      div:nth-of-type(2) {
        flex: 0 0 120px;
        text-align: right;
        font-style: italic;
        color: #de2c2d;
        font-size: 30px;
        span{
          font-size: 20px;
        }
      }
    }
  }
}
</style>
