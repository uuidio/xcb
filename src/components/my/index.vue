<template lang="html">
<div>
<div class="wrap">
    <!-- header -->
    <header class="header">
        <div class="logo">
             <h1><a href="" title="马蜂窝">欢迎来到马蜂窝</a></h1>
        </div>
    </header>
    <!-- main -->
    <div class="anniu">
        <ul>
            <li @click.stop="showOne" :class="{'current':isShow===true}"><a>普通登录</a></li>
            <li @click.stop="showTow" :class="{'current':isShow===false}"><a>短信验证码登录</a></li>
        </ul>
    </div>
    <div style="clear:both;"></div>
    <div class="main">
        <section class="section" v-if="isShow">
          <div class="zad">
              <input type="text" name="zhanghao" value="您的邮箱/手机号"/>
              <input type="text" name="mima" value="您的密码"/>
              <span><a href="">忘记密码</a></span>
              <input type="button" name="denglu" value="登录"/>
              <input type="button" name="zhuce" value="快速注册"/>
          </div>
          <div class="dsf">
             <div class="shuoming">
                 <i></i>
                 <span>第三方账号登录</span>
             </div>
             <div class="dlan">
                 <ul>
                     <li><a href="">新浪微博</a></li>
                     <li><a href="">QQ登录</a></li>
                     <li><a href="">人人登录</a></li>
                 </ul>
             </div>
          </div>
        </section>
        <section class="section" v-else>
          <div class="zad">
              <input type="text" name="zhanghao" value="您的邮箱/手机号"/>
              <input type="text" name="mima" value="您的验证码"/>
              <input type="button" name="zhuce" value="注册"/>
          </div>
          <div class="dsf">
             <div class="shuoming">
                 <i></i>
                 <span>第三方账号登录</span>
             </div>
             <div class="dlan">
                 <ul>
                     <li><a href="">新浪微博</a></li>
                     <li><a href="">QQ登录</a></li>
                     <li><a href="">人人登录</a></li>
                 </ul>
             </div>
          </div>
        </section>
    </div>
</div>
 <Navbar/>
</div>
</template>

<script>
import Navbar from "../public/navbar.vue"
export default {
  components: {
    Navbar
  },
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    showOne () {
      this.isShow = true
    },
    showTow () {
      this.isShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/element.scss";
a {
  text-decoration: none;
}
.wrap {
  min-width: 320px;
  max-width: 540px;
  margin: 0 auto;
}
/*头部*/
.header {
  width: 100%;
  height: 140px;
  position: relative;
  overflow: hidden;
}
.logo {
  width: 200px;
  height: 54px;
  background: url(//images2018.cnblogs.com/blog/1312327/201804/1312327-20180402222548131-1800389651.png)
    no-repeat;
  background-size: 200px auto;
  margin: 40px auto;
}

.logo a {
  font-size: 24px;
  display: block;
  text-indent: -10000em;
}

/*内容*/
.anniu {
  width: 100%;
  padding: 0 18px;
  box-sizing: border-box;
}

.anniu ul {
  width: 100%;
}

.anniu ul li {
  float: left;
  width: 50%;
  height: 80px;
  border-top: 4px solid #dadada;
  background: #fafafa;
  line-height: 80px;
  text-align: center;
}

.anniu ul li a {
  font-size: 24px;
  color: #999999;
  display: block;
}

.anniu ul li.current {
  border-top: 4px solid #de2c2d;
  background: #fff;
}

.anniu ul li.current a {
  color: #de2c2d;
}

.zad {
  width: 100%;
  padding: 0 18px;
  box-sizing: border-box;
  margin-top: 60px;
}

.zad input:nth-of-type(1),
.zad input:nth-of-type(2) {
  outline: none;
  width: 100%;
  height: 90px;
  border-radius: 5px;
  border: 1px solid #dadada;
  padding-left: 22px;
  box-sizing: border-box;
  font-size: 24px;
  color: #767676;
  margin-bottom: -1px;
}

.zad span a {
  font-size: 20px;
  color: #999999;
  line-height: 34px;
  text-align: right;
  display: block;
}

.zad input:nth-of-type(3),
.zad input:nth-of-type(4) {
  outline: none;
  width: 100%;
  height: 76px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #de2c2d;
  font-size: 24px;
  color: #de2c2d;
  line-height: 76px;
  text-align: center;
  margin-top: 20px;
}

.zad input:nth-of-type(3) {
  background: #de2c2d;
  border: 1px solid #d8b165;
  color: #fff;
}

.dsf {
  width: 100%;
  padding: 0 9px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  color: #cccccc;
  margin-top: 60px;
}

.shuoming span {
  width: 236px;
  height: 20px;
  display: block;
  background: #fff;
  margin: 0 auto;
  margin-top: -20px;
}

.shuoming i {
  width: 100%;
  height: 14px;
  border-bottom: 1px solid #d8d8d8;
  display: block;
}

.dlan {
  width: 100%;
}

.dlan ul {
  width: 100%;
  margin-top: 100px;
}

.dlan ul li {
  float: left;
  width: 33.3333333%;
  height: 144px;
  text-align: center;
}

.dlan ul li a:hover {
  color: #666666;
}

.dlan ul li:nth-of-type(2) a:before {
  width: 56px;
  height: 56px;
  background-position: -96px 0;
}

.dlan ul li:nth-of-type(3) a:before {
  width: 58px;
  height: 58px;
  background-position: -202px 0;
}
.section-er .zad {
  width: 100%;
  padding: 0 9px;
  box-sizing: border-box;
  margin-top: 30px;
}

.section-er .zad input:nth-of-type(1),
.section-er .dxyzm input,
.dxyzm input {
  outline: none;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #dadada;
  padding-left: 11px;
  box-sizing: border-box;
  font-size: 12px;
  color: #767676;
  margin-bottom: -1px;
}

.section-er .yzm {
  position: relative;
}

.section-er .yzm span {
  width: 100px;
  height: 33px;
  display: block;
  border-radius: 5px;
  // background:url(../images/shizi.png) no-repeat;
  position: absolute;
  right: 5px;
  top: 5px;
}

.section-er .dxyzm {
  position: relative;
}

.section-er .dxyzm span {
  width: 100px;
  height: 33px;
  display: block;
  border-radius: 5px;
  background: #ff8a00;
  font-size: 10px;
  color: #fff;
  line-height: 33px;
  text-align: center;
  position: absolute;
  right: 5px;
  top: 5px;
}

.section-er .zad span a {
  font-size: 10px;
  color: #999999;
  line-height: 17px;
  text-align: right;
  display: block;
}

.section-er .zad input:nth-of-type(3) {
  margin-top: 18px;
}

.section-er .zad input:nth-of-type(2),
.section-er .zad input:nth-of-type(3) {
  outline: none;
  width: 100%;
  height: 38px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ffba33;
  font-size: 14px;
  color: #ffba33;
  line-height: 38px;
  text-align: center;
  margin-top: 10px;
}

.section-er .zad input:nth-of-type(3) {
  background: #ffba33;
  border: 1px solid #d8b165;
  color: #fff;
}

.section-er .dsf {
  width: 100%;
  padding: 0 9px;
  box-sizing: border-box;
  font-size: 10px;
  text-align: center;
  color: #cccccc;
  margin-top: 30px;
}

.section-er .shuoming span {
  width: 118px;
  height: 10px;
  display: block;
  background: #fff;
  margin: 0 auto;
  margin-top: -10px;
}

.section-er .shuoming i {
  width: 100%;
  height: 7px;
  border-bottom: 1px solid #d8d8d8;
  display: block;
}

.section-er .dlan {
  width: 100%;
}

.section-er .dlan ul {
  width: 100%;
  margin-top: 23px;
}

.section-er .dlan ul li {
  float: left;
  width: 33.3333333%;
  height: 72px;
}

.section-er .dlan ul li a {
  width: 6rem;
  height: 72px;
  border-radius: 5px;
  display: block;
  background: #f3f3f3;
  color: #666666;
  margin: 0 auto;
  overflow: hidden;
}

.section-er .dlan ul li a:hover {
  color: #666666;
}

.section-er .dlan ul li a:before {
  content: "";
  width: 32px;
  height: 26px;
  display: block;
  // background:url(../images/connect.png) no-repeat;
  background-size: 130px auto;
  margin: 0 auto;
  margin-top: 11px;
  margin-bottom: 9px;
}

.section-er .dlan ul li:nth-of-type(2) a:before {
  width: 28px;
  height: 28px;
  background-position: -48px 0;
}

.section-er .dlan ul li:nth-of-type(3) a:before {
  width: 29px;
  height: 29px;
  background-position: -101px 0;
}

.section-er {
  display: none;
}
</style>
