<template>
  <div class="all">
    <div id="convo" class="clearfix" data-from="Sonu Joshi">
      <ul class="chat-thread">
        <li>刚买呢，怎么又跌了?</li>
        <li>没事成交量高，有看头</li>
        <li>那我先观望一下</li>
        <li>等下午你就知道了，这势头</li>
        <li>我要买够时间！约周杰伦！！</li>
        <li>他可不会轻易被约的哦哈哈</li>
        <li>人家就是想约嘛..</li>
        <li>听说还可以问发行人问题呢</li>
        <li>是啊，有什么私密问题都可以问一下</li>
        <li>等价格低我再买</li>
        <li>我已经买了，这架势估计要上涨</li>
        <li>这个可以有哈哈</li>
      </ul>
    </div>
    <div class="message">
      <img src="~img/Screenshot_2018-04-15-12-46-21_03.png" alt="">
      <input class="shuru" type="text" ref="shuru">
      <img src="~img/Screenshot_2018-04-15-12-46-21_05.png" alt="">
      <img src="~img/Screenshot_2018-04-15-12-46-21_07.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$refs["shuru"].focus()
    this.$refs["input"].value = ""
  }
}
</script>

<style lang="scss" scoped>
body {
  padding: 0;
  margin: 0;
  background: -moz-linear-gradient(
    -45deg,
    #183850 0,
    #183850 25%,
    #192c46 50%,
    #22254c 75%,
    #22254c 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #183850 0,
    #183850 25%,
    #192c46 50%,
    #22254c 75%,
    #22254c 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(25, 147, 147, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(25, 147, 147, 0.2);
}
.chat-thread {
  margin: 100px auto 0 auto;
  padding: 0 20px 0 20px;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat-thread li {
  position: relative;
  clear: both;
  display: inline-block;
  padding: 26px 40px 26px 20px;
  margin: 10px 0 40px 0;
  font: 16px/20px "Noto Sans", sans-serif;
  border-radius: 10px;
  background-color: rgba(160, 231, 90, 1);
  font-size: 30px;
  color: #2d2d2d;
}
/* Chat - Avatar */
.chat-thread li:before {
  position: absolute;
  top: 0;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  content: "";
}
/* Chat - Speech Bubble Arrow */
.chat-thread li:after {
  position: absolute;
  top: 15px;
  content: "";
  width: 0;
  height: 0;
  border-top: 15px solid rgba(25, 147, 147, 0.2);
}
.chat-thread li:nth-child(odd) {
  animation: show-chat-odd 0.15s 1 ease-in;
  -moz-animation: show-chat-odd 0.15s 1 ease-in;
  -webkit-animation: show-chat-odd 0.15s 1 ease-in;
  float: right;
  margin-right: 100px;
  color: #2d2d2d;
  background-color: rgba(255, 255, 255, 1);
}
.chat-thread li:nth-child(odd):before {
  right: -100px;
  background: url(~img/65465489.jpg);
}
.chat-thread li:nth-child(odd):after {
  border-right: 15px solid transparent;
  right: -15px;
}
.chat-thread li:nth-child(even) {
  animation: show-chat-even 0.15s 1 ease-in;
  -moz-animation: show-chat-even 0.15s 1 ease-in;
  -webkit-animation: show-chat-even 0.15s 1 ease-in;
  float: left;
  margin-left: 100px;
  color: #2d2d2d;
}
.chat-thread li:nth-child(even):before {
  left: -100px;
  background: url(~img/123654.jpg);
  background-size: 100% auto;
}
.chat-thread li:nth-child(even):after {
  border-left: 15px solid transparent;
  left: -15px;
}
.chat-window {
  position: fixed;
  bottom: 18px;
}
.chat-window-message {
  width: 100%;
  height: 48px;
  font: 32px/48px "Noto Sans", sans-serif;
  background: none;
  color: #2d2d2d;
  border: 0;
  border-bottom: 1px solid rgba(25, 147, 147, 0.2);
  outline: none;
}
/* Small screens */
@keyframes show-chat-even {
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
}
@-moz-keyframes show-chat-even {
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
}
@-webkit-keyframes show-chat-even {
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
}
@keyframes show-chat-odd {
  0% {
    margin-right: -480px;
  }
  100% {
    margin-right: 0;
  }
}
@-moz-keyframes show-chat-odd {
  0% {
    margin-right: -480px;
  }
  100% {
    margin-right: 0;
  }
}
@-webkit-keyframes show-chat-odd {
  0% {
    margin-right: -480px;
  }
  100% {
    margin-right: 0;
  }
}
.credits {
  text-align: center;
  margin-top: 35px;
  color: rgba(255, 255, 255, 0.35);
  font-family: "微软雅黑";
}
.credits a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.35);
}
.all {
  display: flex;
  flex-direction: column;
}
#convo {
  flex: 1;
  overflow: hidden;
  background: #ebebeb;
  padding-bottom: 80px;
}
.message {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 80px;
  background: #f4f4f4;
  width: 100%;
  z-index: 999;
  border-top: #d7d7d7 solid 1px;
  padding: 12px 20px;
  box-sizing: border-box;
  .shuru {
    flex: 1;
    height: 52px;
    border: none;
    border-bottom: #dadada solid 1px;
    background-color: #f4f4f4;
    font-size: 26px;
  }
  input.text {
    background-color: #f4f4f4;
  }
  img {
    width: 52px;
    height: 52px;
  }
  img:nth-of-type(1) {
    padding-right: 10px;
  }
  img:nth-of-type(2) {
    padding: 0px 10px;
  }
  img:nth-of-type(3) {
    padding-left: 10px;
  }
}
</style>
