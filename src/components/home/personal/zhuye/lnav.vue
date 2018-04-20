<template>
  <div>
    <nav class="nav">
      <ul class="nav-shang">
        <li>
          <a href="">动态</a>
        </li>
        <li>
          <a href="">私聊</a>
        </li>
        <li>
          <a href="">问答</a>
        </li>
        <li>
          <a href="ziy">通话</a>
        </li>
      </ul>
      <ul class="nav-xia">
        <li>
          <a href="">约见</a>
        </li>
        <li>
          <a href="">商品</a>
        </li>
        <li>
          <a href="">直播</a>
        </li>
        <li>
          <a href="">更多</a>
        </li>
      </ul>
    </nav>
    <div style="clear:both;height:20px;"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom:20px;
}

.nav ul {
  width: 100%;
}

.nav-shang li,
.nav-xia li {
  float: left;
  width: 25%;
}

.nav-shang li a,
.nav-xia li a {
  width: 100%;
  height: 100%;
  display: block;
  padding-top: 0.56rem;
  box-sizing: border-box;
  color: #333333;
  font-size: 20px;
  color: #333333;
  text-align: center;
}

.nav-shang li a:hover,
.nav-xia li a:hover {
  color: #333333;
}

.nav-shang li a:before,
.nav-xia li a:before {
  content: "";
  width: 1.68rem;
  height: 1.84rem;
  display: block;
  background: url(~img/i_nav3.png) no-repeat;
  background-size: 10.4rem 3.68rem;
  margin: 0 auto;
  margin-bottom: 0.28rem;
}

.nav-shang li:nth-of-type(2) a:before {
  background-position: -1.68rem 0;
}

.nav-shang li:nth-of-type(3) a:before {
  background-position: -3.36rem 0;
}

.nav-shang li:nth-of-type(4) a:before {
  background-position: -5.04rem 0;
}

.nav-shang li:nth-of-type(5) > span:before {
  background-position: -6.72rem 0;
}

.nav-shang li:nth-of-type(5) > span,
.nav-xia li:nth-of-type(5) > span {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  padding-top: 0.56rem;
  box-sizing: border-box;
  color: #333333;
  font-size: 12px;
  color: #333333;
  text-align: center;
}

.nav-shang li:nth-of-type(5) span span,
.nav-xia li:nth-of-type(5) a span {
  width: 0.64rem;
  height: 0.68rem;
  display: block;
  background: url(~img/i_nav3.png) -7.2rem -2rem no-repeat;
  background-size: 10.4rem 3.68rem;
  position: absolute;
  left: 50%;
  margin-left: -0.32rem;
  top: 1.12rem;
  transform: rotate(180deg);
}

.zhankai > span:before {
  content: "";
  width: 1.68rem;
  height: 1.84rem;
  display: block;
  background: url(~img/i_nav3.png) no-repeat;
  background-size: 10.4rem 3.68rem;
  margin: 0 auto;
  margin-bottom: 0.28rem;
}

.nav-xia li:nth-of-type(1) a:before {
  background-position: -8.4rem 0;
}

.nav-xia li:nth-of-type(2) a:before {
  background-position: 0 -1.84rem;
}

.nav-xia li:nth-of-type(3) a:before {
  background-position: -1.68rem -1.84rem;
}

.nav-xia li:nth-of-type(4) a:before {
  background-position: -3.36rem -1.84rem;
}

.nav-xia li:nth-of-type(5) a:before {
  background-position: -5.04rem -1.84rem;
}
</style>
