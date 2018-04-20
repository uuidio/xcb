<template lang="html">
  <Panel title="详情页" class="panel">
    <div id="fix_banner_main" style=" position: fixed; left: 0; top: 0; width: 100%;z-index:99;display: none;">
        <img src="../../assets/img/jrtitle.jpg" id="fix_banner_bgimg" width="100%" alt="" />
        <img id="fix_banner_openapp" style=" position: absolute; top: 0; right: 1rem;" src="../../assets/img/58c0bbe5n9103fcb3.png" height="100%"
            alt="" />
        <div id="fix_banner_close" style=" position: absolute; top:0; right: 0; width: 1rem; height: 1.8rem;">
    </div>
    </div>
    <div class="loading"></div>
    <div class="down-wapper" id="outsidead" style="display: none;"></div>
    <!-- 返回上一页 -->
    <div class="go_back" clstag="pageclick|keycount|zcM_201612063|1">
        <a href="javascript:history.go(-1);">
            <img src="../../assets/img/back.png">
        </a>
    </div>
    <!-- /返回上一页 -->

    <!-- 返回首页 -->
    <div class="go2index" clstag="pageclick|keycount|zcM_201612063|2">
        <a href="//z.m.jd.com/">
            <img src="../../assets/img/empty.gif" class="icon">
        </a>
    </div>
    <!-- /返回首页 -->
    <div class="banner">
        <a href="javascript:void(0);" class="sp_title">
            <img src="../../assets/img/5a9f3b81n70b3733a.jpg">
        </a>
        <!-- 视频区域 -->
        <div id="videoFrame" clstag="pageclick|keycount|zcM_201612063|3" data-video="https://1251412368.vod2.myqcloud.com/vodtransgzp1251412368/7447398154976733724/v.f220.m3u8&pic=//img30.360buyimg.com/cf/jfs/t14569/161/2461233039/46744/efa22373/5a9f3b81N70b3733a.jpg">

        </div>
        <!-- /视频区域 -->
    </div>
    <div class="single">
        <div class="single-t">
            <span class="status">
                众筹中
            </span>
            <h4>一款会变形的模块化智能插座</h4>
        </div>

        <div class="single-txt clearfix">
            <div class="clearfix">
                <span>科技</span>
                <div class="raised">
                    已筹：
                    <i class="sign">￥</i>
                    <i class="gotham">273697</i>
                </div>
            </div>

            <p>
                积木式模块化设计、可自由选购及组装普通插座、智能插座、usb充电模块；根据使用空间和电器体积的需求可以自由变换各种形状。
            </p>
        </div>
        <div class="percent" data-percent="274">
            <div class="line-wapper">
                <div class="line">
                    <div class="circle">
                        <p class="gotham">
                            <span>%</span>
                        </p>
                    </div>
                </div>
                <div class="line-bg"></div>
            </div>
        </div>
        <ul class="single-b clearfix" id="coupon_jt">
            <li>
                <p class="p1">
                    <span>￥</span>
                    <i class="gotham">100000</i>
                </p>
                <p class="p2">
                    <span>目标金额</span>
                </p>
                <p class="border"></p>
            </li>
            <li>
                <p class="p1">
                    <i class="gotham">13</i>天
                </p>
                <p class="p2">
                    <span>剩余时间</span>
                </p>
                <p class="border"></p>

            </li>
            <li>
                <p class="p1">
                    <i class="gotham">1053</i>人</p>
                <p class="p2">
                    <span>支持人数</span>
                </p>
            </li>
        </ul>
    </div>
    <!-- 优惠券 -->
    <!-- 一张卡片 -->
    <div class="card" id="coupons_div" style="display:none;">
        <h1 id="coupon_jt" data-event-agent="touchend|coupon" clstag="pageclick|keycount|DPY_201704061|8">领优惠券：</h1>
        <ul id="couponlist">

        </ul>

    </div>
    <!-- /一张卡片 -->
    <!-- 优惠券 end -->
    <div class="stalls">
        <h4>热门档位：</h4>
        <ul>
            <a href="/findProjectRedoundList.action?pid=97602&unredoundCount=2&from=m&orderfrom=&redoundId=403887#403887" clstag="pageclick|keycount|DPY_201704061|2">
                <li class="no_tag b_t">
                    <div>
                        <span class="discount">￥
                            <em>18</em>
                        </span>
                        <span class="supporter"> 66 人支持
                        </span>
                    </div>
                    <div>
                    </div>
                </li>
            </a>
        </ul>
    </div>
    <!-- 推荐档位 end -->

    <div class="card-nav-wrapper pro-menu-fixed pro-menu-hidden">
        <ul class="card-nav clearfix">
            <li class="card-nav-item curr" clstag="pageclick|keycount|zcM_201612063|6">
                <span>项目详情</span>
            </li>
            <li class="card-nav-item" clstag="pageclick|keycount|zcM_201612063|7">
                <span>项目进展</span>
                <em> （6） </em>
            </li>
            <li class="card-nav-item" clstag="pageclick|keycount|zcM_201612063|8">
                <span>实时话题</span>
                <em class="topicCount"> （72） </em>
            </li>
        </ul>
    </div>
    <div id="card" class="pro">
        <div class="card-nav-wrapper pro-menu-nav" id="anchor">
            <ul class="card-nav clearfix">
                <li class="card-nav-item curr" clstag="pageclick|keycount|zcM_201612063|6">
                    <span>项目详情</span>
                </li>
                <li class="card-nav-item" clstag="pageclick|keycount|zcM_201612063|7">
                    <span>项目进展</span>
                    <em> （6） </em>
                </li>
                <li class="card-nav-item" clstag="pageclick|keycount|zcM_201612063|8">
                    <span>实时话题</span>
                    <em class="topicCount"> （72） </em>
                </li>
            </ul>
        </div>

        <div class="card-wapper">
            <!--data-fix-height="true"-->
            <!--项目简介 start-->
            <div class="card-page show">
                <div class="card-con-wapper card-con-wapper1">
                    <div class="introduce clearfix">
                        <img src="../../assets/img/45617379436f756e743136383931353230383435323734323233_sma.jpg" alt="" class="img" />

                        <div class="intro-detail">
                            <h4> EasyCount1689
                                <span clstag="pageclick|keycount|DPY_201704061|100" data-event-agent="touchend|tips">
                                    <i class="warning"></i>
                                    <em>风险说明</em>
                                </span>
                            </h4>
                            <ul class="clearfix">
                                <li>
                                    <i class="iconfont icon-faqi"></i>
                                    <span>发起:1</span>
                                </li>
                                <li>
                                    <i class="iconfont icon-zhichi"></i>
                                    <span>支持:0</span>
                                </li>
                            </ul>
                            <p>
                                一家从事高端智能金融设备、物联网、智能家居整体解决方案的设计、研发、生产、销售和服务的高科技企业。
                            </p>

                            <span data-event-agent="touchend|select" class="icon-phone" clstag="pageclick|keycount|zcM_201612063|9"></span>
                        </div>
                    </div>
                    <div class="pro-detail img-wrap-box">
                        <div class="pro-detail-content img-contnet-box">
                            <div class="img-content">
                                <p>
                                    <img src='../../assets/img/5a9f3bb0n092a8f5a.jpg'>
                                    <img src='../../assets/img/5a9f3bc0n9fac5fb2.jpg'>
                                    <img src='../../assets/img/5a9f3bdan257197c3.gif'>
                                    <img src='../../assets/img/5a9f3be3n18a7a79d.gif'>
                                    <img src='../../assets/img/5a9f3bednd8ffa2d0.gif'>
                                    <img src='../../assets/img/5a9f3bfdn6079f1a0.jpg'>
                                    <img src='../../assets/img/5aaf6aean1e867d7b.jpg'>
                                    <img src='../../assets/img/5a9f3c0bn8e31d420.jpg'>
                                    <img src='../../assets/img/5a9f3c12nc3da7255.jpg'>
                                    <img src='../../assets/img/5a9f3c18n5b9afba6.jpg'>
                                    <img src='../../assets/img/5a9f3c1fnec7d01e1.jpg'>
                                    <img src='../../assets/img/5a9f3c25n703f0ff7.jpg'>
                                    <img src='../../assets/img/5a9f3c2cnb0f2e922.jpg'>
                                    <img src='../../assets/img/5a9f3c32na361d44b.jpg'>
                                    <img src='../../assets/img/5a9f3c39n5d62aeae.jpg'>
                                    <img src='../../assets/img/5a9f3c40nb6643c02.jpg'>
                                    <img src='../../assets/img/5a9f3c49n8170b0bd.jpg'>
                                    <img src='../../assets/img/5a9f3c51n179465c3.jpg'>
                                    <img src='../../assets/img/5aa783b3nf88ffb86.jpg'>
                                    <img src='../../assets/img/5aa783c2ne25718f4.jpg'>
                                    <img src='../../assets/img/5a9f3c67n3cdff3ae.jpg'>
                                    <img src='../../assets/img/5a9f3c71nb16dfc2a.jpg'>
                                </p>
                            </div>
                            <!--内容 end-->
                            <!--联系我们start-->
                            <div class="pro-msg">
                                <p>
                                    <strong>联系我们：</strong>
                                </p>
                                <p>
                                    客服电话：0755-29085205
                                </p>
                                <p>
                                    工作时间：工作日 09:00-17:00
                                </p>
                                <p>
                                    公司名称：深圳市易仕康科技有限公司
                                </p>
                                <p>
                                    公司地址：广东深圳市龙华新区&nbsp;&nbsp;观澜街道高尔夫大道观澜湖比佩亚大宅2号楼612
                                </p>
                            </div>

                            <!--联系我们start-->

                        </div>
                    </div>
                    <a href="javascript:void(0);" class="bt-open" clstag="pageclick|keycount|zcM_201612063|12">
                        <span>展开全部详情</span>
                        <!-- <i class="iconfont icon-jiantou"></i> -->
                    </a>
                </div>
            </div>
            <div class="card-page ">
                <div class="card-con-wapper card-con-wapper2">

                    <div class="progress">
                        <p class="progress-t">
                            <img src="../../assets/img/45617379436f756e743136383931353230383435323734323233_sma.jpg" class="img"> 一款会变形的模块化智能插座
                        </p>
                        <ul class="list-progress">
                            <li>
                                <h4 class="time">
                                    04月 02日
                                </h4>
                                <p>现在有满88减5的活动哦，喜欢的小伙伴要尽快下手呢</p>
                            </li>
                            <li>
                                <h4 class="time">
                                    03月 28日
                                </h4>
                                <p>喜欢一个东西，是因为它的设计感，更是因为品质过关。</p>
                            </li>
                            <li>
                                <h4 class="time">
                                    03月 22日
                                </h4>
                                <p>喜欢一个人，大概是始于颜值，忠于才华，陷于人品；喜欢一个排插，也可以是始于颜值（各种模块让你随心变），忠于才华（多重插口不同使用范围），陷于人品（售后有保障）</p>
                            </li>
                            <li>
                                <h4 class="time">
                                    03月 17日
                                </h4>
                                <p>一体成型，插座无螺丝设计，造型优美，质感细腻，简约而不失档次，精致而不失大气</p>
                                <div class="single-thumbs clearfix">
                                    <img src="../../assets/img/5aac8a23n9c8ea6da.jpg" data-src="//img30.360buyimg.com/cf/jfs/t14914/251/2583902878/13522/24590e6c/5aac8a23N9c8ea6da.jpg"
                                        clstag="pageclick|keycount|zcM_201612063|23" data-event-agent="touchend|sn_thumbs">
                                </div>
                            </li>
                            <li>
                                <h4 class="time">
                                    03月 13日
                                </h4>
                                <p>京东众筹5小时，筹到2.8万元京东众筹10小时，筹到5.3万元京东众筹20小时，筹集金额突破10万元一款会变形的模块化智能插座，颠覆人们对传统插座的认知，京东众筹上线，受到众多消费者的青睐。</p>
                            </li>
                            <li>
                                <h4 class="time">
                                    03月 09日
                                </h4>
                                <p>"一款会变形的模块化智能插座"开始预热啦，欢迎大家的支持和关注，3.12日早上9.00正式上线售卖！！</p>
                                <div class="single-thumbs clearfix">
                                    <img src="../../assets/img/5aa1ea9dn9bb39e9d.jpg" data-src="//img30.360buyimg.com/cf/jfs/t17884/329/694160392/26743/dd3418e8/5aa1ea9dN9bb39e9d.jpg"
                                        clstag="pageclick|keycount|zcM_201612063|23" data-event-agent="touchend|sn_thumbs">
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <!--项目进展 end-->

            <!--实时话题 start-->
            <div class="card-page ">
                <div class="card-con-wapper card-con-wapper3">
                    <!-- 官方公告start -->
                    <ul class="list-btn clearfix">
                        <li id="totalTopicLi" class="hover" clstag="pageclick|keycount|zcM_201612063|39" onclick="totalTopicNew(97602,2018,1,2)">全部</li>
                        <li id="myTotalTopicLi" clstag="pageclick|keycount|zcM_201612063|40" onclick="myTopic(97602,2018,1,2)">我的话题</li>
                    </ul>
                    <div class="myTopicLists">
                        <ul class="list-topic" id="topic"></ul>
                    </div>
                    <div class="topicLists">
                        <ul class="list-topic" id="topic"></ul>
                    </div>
                </div>
            </div>
            <!--实时话题 end-->
        </div>
    </div>
    <!--猜你喜欢 start-->
    <div class="favorite favorite1">
        <h4>
            <span class="txt">
                <i class="iconfont icon-shuziyuleshiyebu"></i>猜你喜欢</span>
            <!-- <span class="bt-new" clstag="pageclick|keycount|zcM_201612063|17">换一换</span> -->
        </h4>
        <div class="favorite-content swiper-container swiper-container-horizontal" id="favorite-swiper1">
            <div class="card-loadmore show" id="likeCardOne">
                <img src="../../assets/img/loadmore_dog.gif">
            </div>
            <div class="swiper-wrapper" id="likeOne">
            </div>
            <div class="swiper-pagination swiper-pagination2"></div>
        </div>
    </div>
    <!-- 流量交换接口 -->
    <div class="swiper-container swiper show" id="swiper">
        <img src="../../assets/img/750-120_null.png" class="placeholder">
        <div class="swiper-wrapper">
        </div>
        <div class="swiper-pagination swiper-pagination1"></div>
    </div>
    <!-- 流量交换接口 end -->

    <!--猜你喜欢 start-->
    <div class="favorite favorite2">
        <!--  <h4> <span class="bt-new" clstag="pageclick|keycount|zcM_201612063|17">换一换</span></h4> -->
        <div class="favorite-content swiper-container swiper-container-horizontal" id="favorite-swiper2">
            <div class="card-loadmore show" id="likeCardTwo">
                <img src="../../assets/img/loadmore_dog.gif">
            </div>
            <div class="swiper-wrapper" id="likeTwo">
            </div>
            <div class="swiper-pagination swiper-pagination2"></div>
        </div>
    </div>
    <!--猜你喜欢 end-->
    <!-- 大图展示 -->
    <div class="sn-thumbs-big"></div>
    <!-- 大图展示 end -->
    <a href="/index.html?orderfrom=" clstag="pageclick|keycount|DPY_201704061|3">
        <img class="go-index" src="../../assets/img/go-index.png">
    </a>

    <!-- 支持吸底 -->
    <div class="support-placeholder"></div>
    <div class="support">
        <div class="tooltips hide">
            关注成功！点击进入
            <a href="">我的心愿单</a>
            <span class="arrow-down"></span>
        </div>
        <a href="javascript:void(0);" class="iconfont share share-spec" clstag="pageclick|keycount|zcM_201612063|19"></a>
        <a href="javascript:void(0);" class="iconfont share share-sh" clstag="pageclick|keycount|zcM_201612063|20"></a>
        <a href="javascript:void(0);" class="iconfont share share-pl" clstag="pageclick|keycount|zcM_201612063|21"></a>
        <a clstag="pageclick|keycount|zcM_201612063|22" href="javascript:void(0);" class="but">去支持（¥ 18起）</a>
    </div>

    <!-- 支持吸底 end -->

    <!-- 电话弹出 -->
    <div class="wapper-phone">
        <div class="phone">
            <div class="con">
                <a href="tel:0755-29085205" class="tel" clstag="pageclick|keycount|zcM_201612063|10">
                    0755-29085205
                    <span>（办公时间：工作日 09:00-17:00）</span>
                </a>
                <a href="javascript:void(0);" class="cancle" data-event-agent="touchend|cancle" clstag="pageclick|keycount|zcM_201612063|11">
                    取消
                </a>
            </div>
        </div>
    </div>

    <!--风险提示-->
    <div id="overlay" class="overlay hide">
        <div class="wrap">
            <div class="risktip">
                <h1>风险说明</h1>
                <p>1. 众筹不是商品交易。支持者根据自己的判断选择、支持众筹项目，与发起人共同实现梦想并获得发起人承诺的回报，众筹存在一定风险。</p>
                <p>2. 京东众筹平台只提供平台网络空间、技术服务和支持等中介服务。京东作为居间方，并不是发起人或支持者中的任何一方，众筹仅存在于发起人和支持者之间，使用京东众筹平台产生的法律后果由发起人与支持者自行承担。</p>
                <p>3. 众筹项目的回报发放、发票开具及其他后续服务事项均由发起人负责。如果发生发起人无法发放回报、延迟发放回报、不提供回报后续服务等情形，您需要直接和发起人协商解决，京东对此不承担任何责任。</p>
                <p>4. 由于发起人能力和经验不足、市场风险、法律风险等各种因素，众筹可能失败。众筹期限届满前失败或募集失败的，您支持的款项会全部原路退还给您；其他情况下，您需要直接和发起人协商解决，京东对此不承担任何责任。</p>
                <p>5. 支持纯抽奖档位、无私支持档位及公益众筹项目档位，一旦支付成功将不予退款，众筹失败的除外。</p>
            </div>
            <div class="close"></div>
        </div>
    </div>
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

<style lang="scss" scoped>
.card-wapper, body.pgwModalOpen {
    overflow: hidden
}

.gotham, .gotham-t, .iconfont {
    font-style: normal
}

.clearfix {
    zoom: 1
}

.clearfix:after, .clearfix:before {
    content: "";
    display: table
}

.clearfix:after {
    clear: both
}

span.item-label {
    display: inline-block;
    width: auto;
    height: .45333333rem;
    line-height: .45333333rem;
    font-size: 12px;
    position: absolute;
    left: 0;
    top: .29333333rem;
    padding-left: .13333333rem;
    padding-right: .26666667rem;
    border-top-right-radius: .26666667rem;
    border-bottom-right-radius: .26666667rem;
    color: #fff;
    background-color: #edaf31
}

#pgwModalBackdrop, .pgwModal {
    position: fixed;
    top: 0;
    left: 0
}

[data-dpr="2"] span.item-label {
    font-size: 24px
}

[data-dpr="2.5"] span.item-label {
    font-size: 30px
}

[data-dpr="2.75"] span.item-label {
    font-size: 33px
}

[data-dpr="3"] span.item-label {
    font-size: 36px
}

[data-dpr="4"] span.item-label {
    font-size: 48px
}

#pgwModalBackdrop {
    width: 100%;
    height: 100%;
    z-index: 9000
}

.pgwModal {
    right: 0;
    bottom: 0;
    z-index: 9010;
    overflow-x: auto;
    overflow-y: scroll;
    text-align: center
}

.pgwModal .pm-container {
    margin-left: .17333333rem;
    margin-right: .17333333rem
}

.pgwModal .pm-body {
    background: #fff;
    padding-bottom: .4rem;
    display: inline-block;
    position: relative;
    width: 100%;
    z-index: 9020;
    border-radius: .13333333rem
}

.pgwModal .pm-body .pm-title {
    min-height: .8rem
}

.pgwModal .pm-body .pm-content {
    text-align: center
}

.pgwModal .pm-body .pm-content .modal-content {
    padding-left: .4rem;
    padding-right: .4rem
}

.pgwModal .pm-body .pm-content .modal-content .message-wrap {
    margin-bottom: .8rem
}

.pgwModal .pm-body .pm-content .modal-content .message-wrap .modal-warning {
    position: absolute;
    top: -.93333333rem;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    display: inline-block;
    width: 1.84rem;
    height: 1.86666667rem;
    background-size: 100% 100%
}

.pgwModal .pm-body .pm-content .modal-content .message-wrap h4 {
    margin-top: .8rem;
    margin-bottom: .18666667rem;
    font-size: 18px;
    color: #333;
    line-height: 18px
}

[data-dpr="2"] .pgwModal .pm-body .pm-content .modal-content .message-wrap h4 {
    font-size: 36px;
    line-height: 36px
}

[data-dpr="2.5"] .pgwModal .pm-body .pm-content .modal-content .message-wrap h4 {
    font-size: 45px;
    line-height: 45px
}

[data-dpr="2.75"] .pgwModal .pm-body .pm-content .modal-content .message-wrap h4 {
    font-size: 50px;
    line-height: 50px
}

[data-dpr="3"] .pgwModal .pm-body .pm-content .modal-content .message-wrap h4 {
    font-size: 54px;
    line-height: 54px
}

[data-dpr="4"] .pgwModal .pm-body .pm-content .modal-content .message-wrap h4 {
    font-size: 72px;
    line-height: 72px
}

.pgwModal .pm-body .pm-content .modal-content .message-wrap p {
    color: #818181;
    font-size: 14px;
    line-height: 25px
}

[data-dpr="2"] .pgwModal .pm-body .pm-content .modal-content .message-wrap p {
    font-size: 28px;
    line-height: 50px
}

[data-dpr="2.5"] .pgwModal .pm-body .pm-content .modal-content .message-wrap p {
    font-size: 35px;
    line-height: 63px
}

[data-dpr="2.75"] .pgwModal .pm-body .pm-content .modal-content .message-wrap p {
    font-size: 39px;
    line-height: 69px
}

[data-dpr="3"] .pgwModal .pm-body .pm-content .modal-content .message-wrap p {
    font-size: 42px;
    line-height: 75px
}

[data-dpr="4"] .pgwModal .pm-body .pm-content .modal-content .message-wrap p {
    font-size: 56px;
    line-height: 100px
}

.pgwModal .pm-body .pm-content .modal-content.custom-modal h4 {
    margin-top: 1.73333333rem
}

.pgwModal .pm-body .pm-content .modal-tool {
    width: 100%;
    margin: 0 auto
}

.pgwModal .pm-body .pm-content .modal-tool-item {
    background: #fff;
    text-align: center
}

.pgwModal .pm-body .pm-content .modal-tool-item.two-cols .button-item {
    width: 47%;
    display: inline-block
}

.pgwModal .pm-body .pm-content .modal-tool-item .modal-btn {
    box-sizing: border-box;
    width: 90%;
    text-align: center;
    color: #fff;
    background-color: #e13045;
    display: inline-block;
    text-decoration: none;
    border-radius: .13333333rem;
    font-size: 16px;
    padding-top: .32rem;
    padding-bottom: .32rem;
    line-height: 1;
    vertical-align: middle
}

[data-dpr="2"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn {
    font-size: 32px
}

[data-dpr="2.5"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn {
    font-size: 40px
}

[data-dpr="2.75"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn {
    font-size: 44px
}

[data-dpr="3"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn {
    font-size: 48px
}

[data-dpr="4"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn {
    font-size: 64px
}

.pgwModal .pm-body .pm-content .modal-tool-item .modal-btn.t-uc {
    padding-top: .29333333rem;
    padding-bottom: .29333333rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e13045;
    color: #e13045;
    background: 0 0
}

[data-dpr="2"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn.t-uc {
    border-width: 2px
}

[data-dpr="2.5"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn.t-uc, [data-dpr="2.75"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn.t-uc, [data-dpr="3"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn.t-uc {
    border-width: 3px
}

[data-dpr="4"] .pgwModal .pm-body .pm-content .modal-tool-item .modal-btn.t-uc {
    border-width: 4px
}

.pgwModalBackdrop {
    background: #000;
    opacity: .6;
    filter: alpha(opacity=60)
}

@font-face {
    font-family: iconfont;
    src: url(src/assets/fonts/iconfont.eot);
    src: url(src/assets/fonts/iconfont.eot) format('embedded-opentype'), url(src/assets/fonts/iconfont.woff) format('woff'), url(src/assets/fonts/iconfont.ttf) format('truetype'), url(src/assets/fonts/iconfont.svg) format('svg')
}

.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale
}

.icon-diannao:before {
    content: "\e60b"
}

.icon-ren:before {
    content: "\e605"
}

.icon-remen:before {
    content: "\e600"
}

.icon-qiehuan:before {
    content: "\e607"
}

.icon-qishi01:before {
    content: "\e601"
}

.icon-xunhuanbofang:before {
    content: "\e606"
}

.icon-dengpao:before {
    content: "\e602"
}

.icon-shuziyuleshiyebu:before {
    content: "\e603"
}

.icon-quan:before {
    content: "\e644"
}

.icon-error:before {
    content: "\e614"
}

.icon-taoyang01:before {
    content: "\e604"
}

.icon-zan:before {
    content: "\e624"
}

.icon-dianpu:before {
    content: "\e625"
}

.icon-yiguoqi:before {
    content: "\e666"
}

.icon-praise:before {
    content: "\e626"
}

.icon-youhuiquan:before {
    content: "\e609"
}

.icon-youhuiquan1:before {
    content: "\e60a"
}

.icon-zhichirenshu:before {
    content: "\e612"
}

.icon-mubiaojine:before {
    content: "\e620"
}

.icon-yichoujine:before {
    content: "\e621"
}

.icon-zhichi:before {
    content: "\e622"
}

.icon-faqi:before {
    content: "\e623"
}

.icon-weigouxuan:before {
    content: "\e62b"
}

.icon-gouxuan:before {
    content: "\e62c"
}

.icon-guanzhu:before {
    content: "\e62d"
}

.icon-faqihuati:before {
    content: "\e62e"
}

.icon-fenxiang:before {
    content: "\e62f"
}

.icon-pinglun:before {
    content: "\e630"
}

.icon-kuaidi:before {
    content: "\e631"
}

.icon-kongjian:before {
    content: "\e632"
}

.icon-weibo:before {
    content: "\e633"
}

.icon-weixin:before {
    content: "\e634"
}

.icon-shijianzhou:before {
    content: "\e635"
}

.icon-jiantou:before {
    content: "\e636"
}

.icon-yiguanzhu:before {
    content: "\e637"
}

.icon-infinite:before {
    content: "\e74a"
}

.icon-yishiyong1:before {
    content: "\e640"
}

.icon-yiqiangguang:before {
    content: "\e66b"
}

.icon-yilingqu:before {
    content: "\e66a"
}

.icon-laba1:before {
    content: "\e608"
}

.icon-search:before {
    content: "\e671"
}

.icon-tuichu:before {
    content: "\e672"
}

.icon-sousuo:before {
    content: "\e673"
}

.icon-wuliu:before {
    content: "\e676"
}

.icon-dingwei:before {
    content: "\e677"
}

.icon-xiangyoujinruremendangwei:before {
    content: "\e678"
}

.icon-bigeshenghuo:before {
    content: "\e67d"
}

.icon-zhongchouzhuanxiang:before {
    content: "\e67e"
}

.icon-shouye-svg:before {
    content: "\e60c"
}

.icon-shouye-:before {
    content: "\e627"
}

.icon-fenlei:before {
    content: "\e628"
}

.icon-fenlei-:before {
    content: "\e629"
}

.icon-xinyuandan-:before {
    content: "\e62a"
}

.icon-xinyuandan-1:before {
    content: "\e638"
}

.icon-wode-:before {
    content: "\e639"
}

.icon-wode-1:before {
    content: "\e63a"
}

.icon-jiaruxinyuandan-:before {
    content: "\e63b"
}

.icon-jiaruxinyuandan-1:before {
    content: "\e63c"
}

.icon-xinyuandan-2:before {
    content: "\e60d"
}

@font-face {
    font-family: gotham;
    src: url(src/assets/fonts/gotham-medium.ttf);
    src: url(src/assets/fonts/gotham-medium.ttf) format('truetype');
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: gotham-t;
    src: url(src/assets/fonts/gotham-thin.ttf);
    src: url(src/assets/fonts/gotham-thin.ttf) format('truetype');
    font-weight: 400;
    font-style: normal
}

.gotham {
    font-family: gotham
}

.gotham-t {
    font-family: gotham-t
}

.share-box {
    display: none;
    z-index: 20;
    justify-content: space-around;
    background-color: #fff1e6;
    position: fixed;
    bottom: 1.86666667rem;
    left: 0;
    width: 100%;
    padding-top: .53333333rem;
    padding-bottom: .53333333rem
}

.share-box .share-item {
    float: left;
    width: 33.3333%;
    height: 1.73333333rem;
    text-align: center
}

.share-box .share-item a {
    width: 1.73333333rem;
    height: 1.73333333rem;
    display: inline-block
}

.share-box .share-close {
    position: absolute;
    right: .26666667rem;
    top: .26666667rem;
    display: inline-block
}

.share-box .share-close .icon-close {
    width: .32rem;
    height: .32rem
}

.share-box .share-qq, .share-box .share-qq svg, .share-box .share-weibo, .share-box .share-weibo svg, .share-box .share-weixin, .share-box .share-weixin svg {
    width: 1.73333333rem;
    height: 1.73333333rem
}

.share-box.show {
    display: block
}

.share-mask {
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: none;
    position: fixed;
    z-index: 19
}

.share-mask.show {
    display: block
}

.fadeOutTags i, .fadeOutTags span {
    display: inline-block
}

.share-mask .wh300 {
    padding: .53333333rem;
    width: 4rem;
    height: 4rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2.53333333rem;
    margin-top: -2.53333333rem;
    border-radius: 10px;
    background-color: #fff
}

.fadeOutTags, .sn-ui-tips {
    position: fixed;
    top: 38%;
    text-align: center
}

.fadeOutTags, .sn-ui-tips span {
    background-color: rgba(0, 0, 0, .8);
    color: #fff
}

.share-mask .wh300 img {
    width: 4rem
}

.sn-ui-tips {
    z-index: 603;
    left: 0;
    min-height: 1.33333333rem;
    width: 100%;
    -webkit-animation: fadeOut 1s 1s ease-in;
    -moz-animation: fadeOut 1s 1s ease-in;
    -ms-animation: fadeOut 1s 1s ease-in;
    animation: fadeOut 1s 1s ease-in
}

.sn-ui-tips span {
    border-radius: .08rem;
    padding: .13333333rem .26666667rem
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

.fadeOutTags {
    z-index: 9999;
    left: 50%;
    transform: translateX(-50%);
    max-width: 3.36rem;
    border-radius: .10666667rem;
    -webkit-transform: translateX(-50%);
    -webkit-animation: fadeOutTags 1s 1s ease-in;
    -moz-animation: fadeOutTags 1s 1s ease-in;
    -ms-animation: fadeOutTags 1s 1s ease-in;
    animation: fadeOutTags 1s 1s ease-in;
    padding: .29333333rem .53333333rem
}

.go2index, .go_back {
    position: absolute;
    z-index: 98
}

.fadeOutTags i {
    width: 1.06666667rem;
    height: 1.06666667rem;
    margin-bottom: .08rem;
    background-size: 100%;
    width: 1.33333333rem;
    height: 1.33333333rem;
    right: .13333333rem;
    top: .33333333rem
}

@-webkit-keyframes shake-rock {
    0% {
        -webkit-transform: translate3d(0, 0, 0)
    }
    1%, 100%, 70% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    10%, 30%, 50% {
        -webkit-transform: translate3d(-2px, 0, 0);
        transform: translate3d(-2px, 0, 0)
    }
    20%, 40%, 60% {
        -webkit-transform: translate3d(2px, 0, 0);
        transform: translate3d(2px, 0, 0)
    }
}

.go2top .rock.rocking {
    background-size: 100%;
    -webkit-animation: shake-rock .5s ease-out 0s 1
}

.pro-menu-fixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%
}

.pro-menu-hidden {
    visibility: hidden
}

html * {
    max-height: 999999px
}

@-webkit-keyframes pageAnimateMoveInCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, -100%, 0)
    }
}

@-webkit-keyframes pageAnimateMoveInTarget {
    from {
        -webkit-transform: translate3d(0, 100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateMoveOutCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 100%, 0)
    }
}

@-webkit-keyframes pageAnimateMoveOutTarget {
    from {
        -webkit-transform: translate3d(0, -100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateVGOMoveInCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        opacity: 1
    }
    to {
        -webkit-transform: translate3d(-30%, 0, 0) scale3d(.8, .8, 1);
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateVGOMoveInTarget {
    from {
        -webkit-transform: translate3d(30%, 0, 0) scale3d(.8, .8, 1);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        opacity: 1
    }
}

@-webkit-keyframes pageAnimateVGOMoveOutCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        opacity: 1
    }
    to {
        -webkit-transform: translate3d(30%, 0, 0) scale3d(.8, .8, 1);
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateVGOMoveOutTarget {
    from {
        -webkit-transform: translate3d(-30%, 0, 0) scale3d(.8, .8, 1);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        opacity: 1
    }
}

@-webkit-keyframes pageAnimateSlideInCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, -100%, 0)
    }
}

@-webkit-keyframes pageAnimateSlideInTarget {
    from {
        -webkit-transform: translate3d(0, 100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateSlideOutCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 100%, 0)
    }
}

@-webkit-keyframes pageAnimateSlideOutTarget {
    from {
        -webkit-transform: translate3d(0, -100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateFbInCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        opacity: 1
    }
    to {
        -webkit-transform: translate3d(-100%, 0, 0);
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateFbInTarget {
    0% {
        -webkit-transform: translate3d(100%, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateFbOutCurrent {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        opacity: 1
    }
    to {
        -webkit-transform: translate3d(100%, 0, 0);
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateFbOutTarget {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateCoverInCurrent {
    from, to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateCoverInTarget {
    from {
        -webkit-transform: translate3d(100%, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateCoverOutCurrent {
    from, to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateCoverOutTarget {
    from {
        -webkit-transform: translate3d(-100%, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateFadeCurrent {
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateFadeTarget {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}

@-webkit-keyframes pageAnimateVGOFadeCurrent {
    from {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0)
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -20px, 0)
    }
}

@-webkit-keyframes pageAnimateVGOFadeTarget {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 20px, 0)
    }
    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@-webkit-keyframes pageAnimateScaleInCurrent {
    from {
        -webkit-transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        opacity: 1
    }
    to {
        -webkit-transform: scale3d(.98, .98, 1) translate3d(-20px, 0, 0);
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateScaleInTarget {
    from {
        -webkit-transform: scale3d(.98, .98, 1) translate3d(20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        opacity: 1
    }
}

@-webkit-keyframes pageAnimateScaleOutCurrent {
    from {
        -webkit-transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        opacity: 1
    }
    to {
        -webkit-transform: scale3d(.98, .98, 1) translate3d(20px, 0, 0);
        opacity: 0
    }
}

@-webkit-keyframes pageAnimateScaleOutTarget {
    from {
        -webkit-transform: scale3d(.98, .98, 1) translate3d(-20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        opacity: 1
    }
}

@-webkit-keyframes pageAnimatePokerInCurrent {
    from {
        -webkit-transform: rotateY(0) scale3d(1, 1, 1);
        opacity: 1
    }
    to {
        -webkit-transform: rotateY(-90deg) scale3d(.9, .9, 1);
        opacity: .7
    }
}

@-webkit-keyframes pageAnimatePokerInTarget {
    from {
        -webkit-transform: rotateY(90deg) scale3d(.9, .9, 1);
        opacity: .7
    }
    to {
        -webkit-transform: rotateY(0) scale3d(1, 1, 1);
        opacity: 1
    }
}

@-webkit-keyframes pageAnimatePokerOutCurrent {
    from {
        -webkit-transform: rotateY(0) scale3d(1, 1, 1);
        opacity: 1
    }
    to {
        -webkit-transform: rotateY(90deg) scale3d(.9, .9, 1);
        opacity: .7
    }
}

@-webkit-keyframes pageAnimatePokerOutTarget {
    from {
        -webkit-transform: rotateY(-90deg) scale3d(.9, .9, 1);
        opacity: .7
    }
    to {
        -webkit-transform: rotateY(0) scale3d(1, 1, 1);
        opacity: 1
    }
}

.clearfix {
    zoom: 1
}

.clearfix:after, .clearfix:before {
    content: "";
    display: table
}

.clearfix:after {
    clear: both
}

span.item-label {
    display: inline-block;
    width: auto;
    height: .45333333rem;
    line-height: .45333333rem;
    font-size: 12px;
    position: absolute;
    left: 0;
    top: .29333333rem;
    padding-left: .13333333rem;
    padding-right: .26666667rem;
    border-top-right-radius: .26666667rem;
    border-bottom-right-radius: .26666667rem;
    color: #fff;
    background-color: #edaf31
}

[data-dpr="2"] span.item-label {
    font-size: 24px
}

[data-dpr="2.5"] span.item-label {
    font-size: 30px
}

[data-dpr="2.75"] span.item-label {
    font-size: 33px
}

[data-dpr="3"] span.item-label {
    font-size: 36px
}

[data-dpr="4"] span.item-label {
    font-size: 48px
}

body {
    background: #f8f8f8
}

html * {
    max-height: 999999px
}

.hide {
    display: none
}

.single {
    background: #fff;
    padding-bottom: .73333333rem;
    margin-bottom: .26666667rem
}

.single .single-t {
    position: relative;
    margin-left: .26666667rem;
    margin-right: .26666667rem;
    padding-top: .46666667rem;
    padding-bottom: .2rem
}

.single .single-t h4 {
    display: inline;
    color: #000;
    font-weight: 700;
    font-size: 15px;
    vertical-align: middle;
    word-break: break-all
}

[data-dpr="2"] .single .single-t h4 {
    font-size: 30px
}

[data-dpr="2.5"] .single .single-t h4 {
    font-size: 38px
}

[data-dpr="2.75"] .single .single-t h4 {
    font-size: 41px
}

[data-dpr="3"] .single .single-t h4 {
    font-size: 45px
}

[data-dpr="4"] .single .single-t h4 {
    font-size: 60px
}

.single .single-t .raised {
    text-align: right;
    font-size: 12px;
    color: #666
}

[data-dpr="2"] .single .single-t .raised {
    font-size: 24px
}

[data-dpr="2.5"] .single .single-t .raised {
    font-size: 30px
}

[data-dpr="2.75"] .single .single-t .raised {
    font-size: 33px
}

[data-dpr="3"] .single .single-t .raised {
    font-size: 36px
}

[data-dpr="4"] .single .single-t .raised {
    font-size: 48px
}

.single .single-t .raised span {
    font-size: 12px;
    color: #de2f44
}

[data-dpr="2"] .single .single-t .raised span {
    font-size: 24px
}

[data-dpr="2.5"] .single .single-t .raised span {
    font-size: 30px
}

[data-dpr="2.75"] .single .single-t .raised span {
    font-size: 33px
}

[data-dpr="3"] .single .single-t .raised span {
    font-size: 36px
}

[data-dpr="4"] .single .single-t .raised span {
    font-size: 48px
}

.single .single-t .raised i {
    font-size: 18px;
    color: #de2f44
}

[data-dpr="2"] .single .single-t .raised i {
    font-size: 36px
}

[data-dpr="2.5"] .single .single-t .raised i {
    font-size: 45px
}

[data-dpr="2.75"] .single .single-t .raised i {
    font-size: 50px
}

[data-dpr="3"] .single .single-t .raised i {
    font-size: 54px
}

[data-dpr="4"] .single .single-t .raised i {
    font-size: 72px
}

.single .single-t .status {
    display: inline-block;
    color: #df3349;
    font-size: 12px;
    height: .53333333rem;
    line-height: .56rem;
    padding-right: .06666667rem;
    padding-left: .06666667rem;
    vertical-align: middle;
    border-width: 1px;
    border-style: solid;
    border-color: #df3349;
    border-radius: .08rem;
    text-align: center;
    font-weight: 400
}

[data-dpr="2"] .single .single-t .status {
    font-size: 24px;
    border-width: 2px
}

[data-dpr="2.5"] .single .single-t .status {
    font-size: 30px
}

[data-dpr="2.75"] .single .single-t .status {
    font-size: 33px
}

[data-dpr="3"] .single .single-t .status {
    font-size: 36px
}

[data-dpr="2.5"] .single .single-t .status, [data-dpr="2.75"] .single .single-t .status, [data-dpr="3"] .single .single-t .status {
    border-width: 3px
}

[data-dpr="4"] .single .single-t .status {
    font-size: 48px;
    border-width: 4px
}

.single .percent {
    width: 100%;
    box-sizing: border-box;
    padding-left: .26666667rem;
    padding-right: .26666667rem;
    height: 1.78666667rem
}

.single .percent .line-wapper {
    position: relative;
    padding-top: .66666667rem
}

.single .percent .line-wapper .line {
    position: absolute;
    z-index: 3;
    min-width: 1.06666667rem!important;
    left: 0;
    height: .36rem;
    background: -webkit-linear-gradient(to right, #fc4302 0, #de2f44 100%);
    background: linear-gradient(to right, #fc4302 0, #de2f44 100%);
    border-radius: .21333333rem
}

.single .percent .line-wapper .line .circle {
    position: absolute;
    right: 0;
    top: -.37333333rem;
    width: .93333333rem;
    height: .93333333rem;
    line-height: .96rem;
    vertical-align: middle;
    text-align: center;
    background-color: #fff;
    border-style: solid;
    border-color: #de2f44;
    border-width: .09333333rem;
    border-radius: .93333333rem;
    color: #de2f44;
    font-size: .4rem
}

.single .percent .line-wapper .line .circle p {
    display: inline;
    color: #de2f44;
    font-size: .4rem;
    text-align: center
}

.single .percent .line-wapper .line .circle p span {
    font-size: .32rem
}

.single .percent .line-wapper .line .circle.circle-more {
    width: auto;
    padding-left: .32rem;
    padding-right: .32rem
}

.single .percent .line-wapper .line .circle.circle-more p span {
    font-size: .4rem
}

.single .percent .line-wapper .line .circle.circle-more .icon-infinite {
    padding-left: .08rem;
    padding-right: .08rem
}

.single .percent .line-wapper .line .circle .icon-infinite {
    color: #de2f44;
    font-size: .64rem
}

.single .percent .line-wapper .line-bg {
    z-index: 2;
    position: absolute;
    width: 100%;
    left: 0;
    height: .36rem;
    background-color: #e5e5e5;
    border-radius: .21333333rem
}

.single .single-b {
    margin-left: .26666667rem;
    margin-right: .26666667rem;
    background-color: #f5f5f5
}

.single .single-b li {
    float: left;
    width: 33.33333%;
    padding-top: .4rem;
    padding-bottom: .4rem;
    position: relative
}

.single .single-b li .border {
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 1px;
    height: .46666667rem;
    background-color: #d9d9d9
}

.single .single-b li .p1 {
    color: #333;
    font-size: 12px;
    text-align: center
}

[data-dpr="2"] .single .single-b li .p1 {
    font-size: 23px
}

[data-dpr="2.5"] .single .single-b li .p1 {
    font-size: 29px
}

[data-dpr="2.75"] .single .single-b li .p1 {
    font-size: 32px
}

[data-dpr="3"] .single .single-b li .p1 {
    font-size: 35px
}

[data-dpr="4"] .single .single-b li .p1 {
    font-size: 46px
}

.single .single-b li .p1 span {
    font-size: 13px
}

[data-dpr="2"] .single .single-b li .p1 span {
    font-size: 26px
}

[data-dpr="2.5"] .single .single-b li .p1 span {
    font-size: 33px
}

[data-dpr="2.75"] .single .single-b li .p1 span {
    font-size: 36px
}

[data-dpr="3"] .single .single-b li .p1 span {
    font-size: 39px
}

[data-dpr="4"] .single .single-b li .p1 span {
    font-size: 52px
}

.single .single-b li .p1 i {
    font-size: 9px
}

[data-dpr="2"] .single .single-b li .p1 i {
    font-size: 18px
}

[data-dpr="2.5"] .single .single-b li .p1 i {
    font-size: 22.5px
}

[data-dpr="2.75"] .single .single-b li .p1 i {
    font-size: 25px
}

[data-dpr="3"] .single .single-b li .p1 i {
    font-size: 27px
}

[data-dpr="4"] .single .single-b li .p1 i {
    font-size: 36px
}

.single .single-b li .p2 {
    text-align: center
}

.single .single-b li .p2 span {
    color: #666;
    font-size: 12px
}

[data-dpr="2"] .single .single-b li .p2 span {
    font-size: 12px
}

[data-dpr="2.5"] .single .single-b li .p2 span {
    font-size: 15px
}

[data-dpr="2.75"] .single .single-b li .p2 span {
    font-size: 16.5px
}

[data-dpr="3"] .single .single-b li .p2 span {
    font-size: 18px
}

[data-dpr="4"] .single .single-b li .p2 span {
    font-size: 24px
}

.single .single-txt {
    margin-right: .26666667rem;
    margin-left: .26666667rem
}

.single .single-txt span {
    display: inline-block;
    background: #df3349;
    color: #fff;
    font-size: 12px;
    height: .53333333rem;
    line-height: .56rem;
    padding-right: .06666667rem;
    padding-left: .06666667rem;
    margin-right: .13333333rem;
    border-radius: .08rem
}

[data-dpr="2"] .single .single-txt span {
    font-size: 24px
}

[data-dpr="2.5"] .single .single-txt span {
    font-size: 30px
}

[data-dpr="2.75"] .single .single-txt span {
    font-size: 33px
}

[data-dpr="3"] .single .single-txt span {
    font-size: 36px
}

[data-dpr="4"] .single .single-txt span {
    font-size: 48px
}

.single .single-txt p {
    margin-top: .13333333rem;
    color: #666;
    font-size: 14px;
    line-height: 20px;
    text-align: justify
}

[data-dpr="2"] .single .single-txt p {
    font-size: 28px;
    line-height: 40px
}

[data-dpr="2.5"] .single .single-txt p {
    font-size: 35px;
    line-height: 50px
}

[data-dpr="2.75"] .single .single-txt p {
    font-size: 39px;
    line-height: 55px
}

[data-dpr="3"] .single .single-txt p {
    font-size: 42px;
    line-height: 60px
}

[data-dpr="4"] .single .single-txt p {
    font-size: 56px;
    line-height: 80px
}

.single .single-txt .raised {
    line-height: .45333333rem;
    float: right;
    font-size: 12px;
    color: #666
}

[data-dpr="2"] .single .single-txt .raised {
    font-size: 24px
}

[data-dpr="2.5"] .single .single-txt .raised {
    font-size: 30px
}

[data-dpr="2.75"] .single .single-txt .raised {
    font-size: 33px
}

[data-dpr="3"] .single .single-txt .raised {
    font-size: 36px
}

[data-dpr="4"] .single .single-txt .raised {
    font-size: 48px
}

.single .single-txt .raised .sign {
    font-size: 13px;
    color: #de2f44;
    font-style: initial
}

[data-dpr="2"] .single .single-txt .raised .sign {
    font-size: 26px
}

[data-dpr="2.5"] .single .single-txt .raised .sign {
    font-size: 33px
}

[data-dpr="2.75"] .single .single-txt .raised .sign {
    font-size: 36px
}

[data-dpr="3"] .single .single-txt .raised .sign {
    font-size: 39px
}

[data-dpr="4"] .single .single-txt .raised .sign {
    font-size: 52px
}

.single .single-txt .raised .gotham {
    font-size: 18px;
    color: #de2f44
}

[data-dpr="2"] .single .single-txt .raised .gotham {
    font-size: 36px
}

[data-dpr="2.5"] .single .single-txt .raised .gotham {
    font-size: 45px
}

[data-dpr="2.75"] .single .single-txt .raised .gotham {
    font-size: 50px
}

[data-dpr="3"] .single .single-txt .raised .gotham {
    font-size: 54px
}

[data-dpr="4"] .single .single-txt .raised .gotham {
    font-size: 72px
}

.pro {
    background: #fff
}

.card-nav-wrapper {
    position: relative
}

.card-nav-wrapper .card-nav {
    background-color: #fff;
    border-bottom-color: #E7E7E7;
    border-bottom-style: solid;
    border-bottom-width: 1px
}

[data-dpr="2"] .card-nav-wrapper .card-nav {
    border-bottom-width: 2px
}

[data-dpr="2.5"] .card-nav-wrapper .card-nav, [data-dpr="2.75"] .card-nav-wrapper .card-nav, [data-dpr="3"] .card-nav-wrapper .card-nav {
    border-bottom-width: 3px
}

[data-dpr="4"] .card-nav-wrapper .card-nav {
    border-bottom-width: 4px
}

.card-nav-wrapper .card-nav .card-nav-item {
    box-sizing: border-box;
    position: relative;
    float: left;
    width: 33.33%;
    height: 55px;
    padding-top: .32rem;
    padding-bottom: .26666667rem;
    text-align: center;
    margin-left: 0
}

[data-dpr="2"] .card-nav-wrapper .card-nav .card-nav-item {
    height: 110px
}

[data-dpr="2.5"] .card-nav-wrapper .card-nav .card-nav-item {
    height: 138px
}

[data-dpr="2.75"] .card-nav-wrapper .card-nav .card-nav-item {
    height: 151px
}

[data-dpr="3"] .card-nav-wrapper .card-nav .card-nav-item {
    height: 165px
}

[data-dpr="4"] .card-nav-wrapper .card-nav .card-nav-item {
    height: 220px
}

.card-nav-wrapper .card-nav .card-nav-item span {
    display: block;
    color: #333;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700
}

[data-dpr="2"] .card-nav-wrapper .card-nav .card-nav-item span {
    font-size: 32px;
    line-height: 40px
}

[data-dpr="2.5"] .card-nav-wrapper .card-nav .card-nav-item span {
    font-size: 40px;
    line-height: 50px
}

[data-dpr="2.75"] .card-nav-wrapper .card-nav .card-nav-item span {
    font-size: 44px;
    line-height: 55px
}

[data-dpr="3"] .card-nav-wrapper .card-nav .card-nav-item span {
    font-size: 48px;
    line-height: 60px
}

[data-dpr="4"] .card-nav-wrapper .card-nav .card-nav-item span {
    font-size: 64px;
    line-height: 80px
}

.card-nav-wrapper .card-nav .card-nav-item em {
    display: block;
    color: #999;
    font-size: 12px;
    line-height: 15px;
    font-weight: 700
}

[data-dpr="2"] .card-nav-wrapper .card-nav .card-nav-item em {
    font-size: 24px;
    line-height: 30px
}

[data-dpr="2.5"] .card-nav-wrapper .card-nav .card-nav-item em {
    font-size: 30px;
    line-height: 38px
}

[data-dpr="2.75"] .card-nav-wrapper .card-nav .card-nav-item em {
    font-size: 33px;
    line-height: 41px
}

[data-dpr="3"] .card-nav-wrapper .card-nav .card-nav-item em {
    font-size: 36px;
    line-height: 45px
}

[data-dpr="4"] .card-nav-wrapper .card-nav .card-nav-item em {
    font-size: 48px;
    line-height: 60px
}

.card-nav-wrapper .card-nav .card-nav-item.curr:after {
    content: '';
    display: inline-block;
    height: .05333333rem;
    width: 40%;
    background-color: #df3349;
    position: absolute;
    bottom: 0;
    left: 30%
}

.card-nav-wrapper .card-nav .card-nav-item.curr em, .card-nav-wrapper .card-nav .card-nav-item.curr span {
    color: #df3349
}

.card-nav-wrapper .card-nav .card-nav-item:last-child {
    border-right-width: 0
}

.pro-menu-fixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%
}

.pro-menu-hidden {
    visibility: hidden
}

.card-wapper {
    width: 100%;
    height: auto;
    min-height: 160px;
    overflow: hidden;
    display: block
}

.card-wapper .card-page {
    display: none;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: auto
}

.card-wapper .card-page.show {
    display: block
}

.card-wapper .card-page img {
    max-width: 100%
}

.card-con-wapper {
    background: #fff;
    padding-top: .46666667rem;
    padding-left: .26666667rem;
    padding-right: .26666667rem
}

.card-con-wapper1 .introduce {
    margin-bottom: .4rem;
    padding-bottom: .4rem;
    border-bottom: 1px dotted #e0e0e0
}

.card-con-wapper1 .introduce .img {
    float: left;
    width: 1rem;
    height: 1rem;
    border-radius: .53333333rem
}

.card-con-wapper1 .introduce .intro-detail {
    position: relative;
    float: right;
    width: 8rem
}

.card-con-wapper1 .introduce .intro-detail h4 {
    color: #333;
    font-size: 16px;
    line-height: 17px;
    margin-bottom: .13333333rem;
    padding-right: 1.06666667rem
}

[data-dpr="2"] .card-con-wapper1 .introduce .intro-detail h4 {
    font-size: 32px;
    line-height: 34px
}

[data-dpr="2.5"] .card-con-wapper1 .introduce .intro-detail h4 {
    font-size: 40px;
    line-height: 43px
}

[data-dpr="2.75"] .card-con-wapper1 .introduce .intro-detail h4 {
    font-size: 44px;
    line-height: 47px
}

[data-dpr="3"] .card-con-wapper1 .introduce .intro-detail h4 {
    font-size: 48px;
    line-height: 51px
}

[data-dpr="4"] .card-con-wapper1 .introduce .intro-detail h4 {
    font-size: 64px;
    line-height: 68px
}

.card-con-wapper1 .introduce .intro-detail h4 span {
    display: inline-block;
    line-height: 0;
    box-sizing: border-box;
    margin-left: .24rem;
    border: 1px solid #e59201;
    border-radius: 1.78666667rem;
    font-size: 10px;
    color: #e59201;
    text-align: center;
    vertical-align: top;
    padding: .09333333rem .2rem .09333333rem .13333333rem
}

[data-dpr="2"] .card-con-wapper1 .introduce .intro-detail h4 span {
    font-size: 20px
}

[data-dpr="2.5"] .card-con-wapper1 .introduce .intro-detail h4 span {
    font-size: 25px
}

[data-dpr="2.75"] .card-con-wapper1 .introduce .intro-detail h4 span {
    font-size: 28px
}

[data-dpr="3"] .card-con-wapper1 .introduce .intro-detail h4 span {
    font-size: 30px
}

[data-dpr="4"] .card-con-wapper1 .introduce .intro-detail h4 span {
    font-size: 40px
}

.card-con-wapper1 .introduce .intro-detail h4 span .warning {
    display: inline-block;
    width: .28rem;
    height: .26666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4NDJkZmMyOS05YTU2LTQ3ZjItOGFiMC1mMjY1M2I2ZGZiNjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDREN0I3OTA1MUI3MTFFN0E4MTRGN0EyQzE4QTYwRTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDREN0I3OEY1MUI3MTFFN0E4MTRGN0EyQzE4QTYwRTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozZTIzYzQ4OC1mNWRiLTQyMzItOTg4Yy1mMjUwOWI2NjcwOTEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOThjODRlNC05MTM3LTExN2EtOTg4OC1iYjNlYzNjZjI2NGUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6CpCwGAAABuUlEQVR42qSVzStEYRTG70wzkY+FKDXZWcmCFaUUipKSjbKwIhHJtwWxJOWrlIxYIKXZISZfKQv/gY0sLDALshmlhOt3dKam6brvzHjrmec9577nuc9933PveGzbtkzjacXbDHWDi0D/96JpvcckimAntBGXWkJ42K3GaxAsVMEFhDywOB4i35q2KOMEfCE4KgF8CF2BUFqiuKmAykBjwqUmvT6d8p5S9Ay94K6EeS7zKbBFfEO8zHwA+Ik/k3JKUQdUAOo1VQzGQK1uw6Dmd1J5/E0QpvhB45ibaNyaPtCGgYBRlEVzOm2JS9sJLG5XoXdw5CqKYBY0DmYo+rDMQ1qsnLoqN6e76mIyCUFZdw7dgQNHUe5WpI/c41DvV85wuCYtl099u5PTY/DG3YMOhVGHg4q5Faen8Z3w26fcpVrflDoWXVopDuqzxRCYpX4iJvpKIkKi9I8i6Vl5w27VmdOaBUg+NJlegi4meaDBxUyvts6ey6GN6DTk42cd7JN8dBHd1kM6M+yEfHjmfRqEDa1zDyXTZtJilohegzW2Qd6WiJX+yJEPuHSIiNbI3wQIWv8fsoWVPwIMABuOnJ9VTw3eAAAAAElFTkSuQmCC) center center no-repeat;
    background-size: 100% 100%;
    margin-right: .08rem;
    vertical-align: middle
}

.card-con-wapper1 .introduce .intro-detail h4 span em {
    vertical-align: middle
}

.card-con-wapper1 .introduce .intro-detail ul {
    margin-bottom: .26666667rem
}

.card-con-wapper1 .introduce .intro-detail ul li {
    display: inline;
    float: left;
    text-align: center;
    margin-right: .66666667rem
}

.card-con-wapper1 .introduce .intro-detail ul li .iconfont {
    color: #999;
    font-size: 14px;
    margin-right: .06666667rem
}

[data-dpr="2"] .card-con-wapper1 .introduce .intro-detail ul li .iconfont {
    font-size: 28px
}

[data-dpr="2.5"] .card-con-wapper1 .introduce .intro-detail ul li .iconfont {
    font-size: 35px
}

[data-dpr="2.75"] .card-con-wapper1 .introduce .intro-detail ul li .iconfont {
    font-size: 39px
}

[data-dpr="3"] .card-con-wapper1 .introduce .intro-detail ul li .iconfont {
    font-size: 42px
}

[data-dpr="4"] .card-con-wapper1 .introduce .intro-detail ul li .iconfont {
    font-size: 56px
}

.card-con-wapper1 .introduce .intro-detail ul li span {
    color: #999;
    font-size: 14px;
    line-height: 14px
}

[data-dpr="2"] .card-con-wapper1 .introduce .intro-detail ul li span {
    font-size: 28px;
    line-height: 28px
}

[data-dpr="2.5"] .card-con-wapper1 .introduce .intro-detail ul li span {
    font-size: 35px;
    line-height: 35px
}

[data-dpr="2.75"] .card-con-wapper1 .introduce .intro-detail ul li span {
    font-size: 39px;
    line-height: 39px
}

[data-dpr="3"] .card-con-wapper1 .introduce .intro-detail ul li span {
    font-size: 42px;
    line-height: 42px
}

[data-dpr="4"] .card-con-wapper1 .introduce .intro-detail ul li span {
    font-size: 56px;
    line-height: 56px
}

.card-con-wapper1 .introduce .intro-detail ul li.li-03 {
    color: #000;
    font-size: 11px
}

[data-dpr="2"] .card-con-wapper1 .introduce .intro-detail ul li.li-03 {
    font-size: 22px
}

[data-dpr="2.5"] .card-con-wapper1 .introduce .intro-detail ul li.li-03 {
    font-size: 28px
}

[data-dpr="2.75"] .card-con-wapper1 .introduce .intro-detail ul li.li-03 {
    font-size: 30px
}

[data-dpr="3"] .card-con-wapper1 .introduce .intro-detail ul li.li-03 {
    font-size: 33px
}

[data-dpr="4"] .card-con-wapper1 .introduce .intro-detail ul li.li-03 {
    font-size: 44px
}

.card-con-wapper1 .introduce .intro-detail p {
    color: #666;
    font-size: 14px;
    line-height: 15px
}

[data-dpr="2"] .card-con-wapper1 .introduce .intro-detail p {
    font-size: 28px;
    line-height: 30px
}

[data-dpr="2.5"] .card-con-wapper1 .introduce .intro-detail p {
    font-size: 35px;
    line-height: 38px
}

[data-dpr="2.75"] .card-con-wapper1 .introduce .intro-detail p {
    font-size: 39px;
    line-height: 41px
}

[data-dpr="3"] .card-con-wapper1 .introduce .intro-detail p {
    font-size: 42px;
    line-height: 45px
}

[data-dpr="4"] .card-con-wapper1 .introduce .intro-detail p {
    font-size: 56px;
    line-height: 60px
}

.card-con-wapper1 .introduce .intro-detail .icon-phone {
    position: absolute;
    right: 0;
    top: 0;
    width: .93333333rem;
    height: .93333333rem;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%
}

.card-con-wapper1 .introduce .intro-detail .icon-tips {
    position: absolute;
    right: 1.2rem;
    top: 0;
    width: .93333333rem;
    height: .93333333rem;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%
}

.card-con-wapper1 .pro-detail {
    position: relative;
    overflow: hidden
}

.card-con-wapper1 .pro-detail .bg-img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 3.33333333rem;
    background: url(src/assets/img/bg_project.png) no-repeat;
    background-size: 100% 100%;
    z-index: 2
}

[data-dpr="2"] .card-con-wapper1 .pro-detail .bg-img {
    bottom: -3px
}

[data-dpr="2.5"] .card-con-wapper1 .pro-detail .bg-img, [data-dpr="2.75"] .card-con-wapper1 .pro-detail .bg-img {
    bottom: -4px
}

[data-dpr="3"] .card-con-wapper1 .pro-detail .bg-img {
    bottom: -5px
}

[data-dpr="4"] .card-con-wapper1 .pro-detail .bg-img {
    bottom: -6px
}

.card-con-wapper1 .pro-detail .pro-detail-content {
    position: relative
}

.card-con-wapper1 .pro-detail .pro-detail-content .img-content {
    position: relative;
    margin-bottom: .26666667rem
}

.card-con-wapper1 .pro-detail .pro-detail-content .img-content img {
    display: block;
    width: 100%;
    border: none;
    outline: 0
}

.card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p {
    color: #323232;
    font-size: 12px;
    line-height: 18px;
    padding-bottom: .26666667rem;
    text-align: left
}

.bt-open, .bt-open span, .no-msg {
    text-align: center
}

[data-dpr="2"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p {
    font-size: 24px;
    line-height: 36px
}

[data-dpr="2.5"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p {
    font-size: 30px;
    line-height: 45px
}

[data-dpr="2.75"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p {
    font-size: 33px;
    line-height: 50px
}

[data-dpr="3"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p {
    font-size: 36px;
    line-height: 54px
}

[data-dpr="4"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p {
    font-size: 48px;
    line-height: 72px
}

.card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p strong {
    font-size: 14px;
    font-weight: 700
}

[data-dpr="2"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p strong {
    font-size: 28px
}

[data-dpr="2.5"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p strong {
    font-size: 35px
}

[data-dpr="2.75"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p strong {
    font-size: 39px
}

[data-dpr="3"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p strong {
    font-size: 42px
}

[data-dpr="4"] .card-con-wapper1 .pro-detail .pro-detail-content .pro-msg p strong {
    font-size: 56px
}

.bt-open {
    display: block;
    padding-top: .4rem;
    padding-bottom: .4rem
}

.bt-open span {
    box-sizing: border-box;
    display: inline-block;
    width: 3.84rem;
    height: 1.01333333rem;
    line-height: 1.01333333rem;
    border-radius: 2.66666667rem;
    border: 1px solid #e13045;
    color: #e13045;
    font-size: 14px
}

[data-dpr="2"] .bt-open span {
    font-size: 28px
}

[data-dpr="2.5"] .bt-open span {
    font-size: 35px
}

[data-dpr="2.75"] .bt-open span {
    font-size: 39px
}

[data-dpr="3"] .bt-open span {
    font-size: 42px
}

[data-dpr="4"] .bt-open span {
    font-size: 56px
}

.card-con-wapper2 .progress {
    padding-bottom: .66666667rem
}

.card-con-wapper2 .progress .progress-t {
    position: relative;
    padding-left: .8rem;
    padding-bottom: .33333333rem;
    margin-bottom: .53333333rem;
    color: #333;
    font-size: 15px;
    line-height: 25px;
    font-weight: 700;
    border-bottom: 1px dashed #999
}

[data-dpr="2"] .card-con-wapper2 .progress .progress-t {
    font-size: 30px;
    line-height: 50px
}

[data-dpr="2.5"] .card-con-wapper2 .progress .progress-t {
    font-size: 38px;
    line-height: 63px
}

[data-dpr="2.75"] .card-con-wapper2 .progress .progress-t {
    font-size: 41px;
    line-height: 69px
}

[data-dpr="3"] .card-con-wapper2 .progress .progress-t {
    font-size: 45px;
    line-height: 75px
}

[data-dpr="4"] .card-con-wapper2 .progress .progress-t {
    font-size: 60px;
    line-height: 100px
}

.card-con-wapper2 .progress .progress-t img {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: .66666667rem;
    height: .66666667rem;
    border-radius: .33333333rem
}

.card-con-wapper2 .progress .list-progress {
    padding-left: .8rem;
    padding-right: .8rem;
    margin-bottom: .33333333rem
}

.card-con-wapper2 .progress .list-progress li {
    position: relative
}

.card-con-wapper2 .progress .list-progress li:before {
    position: absolute;
    left: -.8rem;
    top: 0;
    content: "";
    width: .66666667rem;
    height: .64rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNFRjlCOTU4QzAxNTExRTY4REZDQUJDNDkxMzY3MEU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNFRjlCOTU5QzAxNTExRTY4REZDQUJDNDkxMzY3MEU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0VGOUI5NTZDMDE1MTFFNjhERkNBQkM0OTEzNjcwRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0VGOUI5NTdDMDE1MTFFNjhERkNBQkM0OTEzNjcwRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ic1KSAAAMZklEQVR42oRaa4xV1RVe+9xheMwMUEBmhocwVgodhIEiI2pxWilGtPVRiyY0tTUUm9pHmjSmTf3R/uCHqWkTE2xaERvT1gZFNDFoFVDRtlLQ4kAUUGBARoaJCMibgXtWv/0456y997n2Jufu59mPtdfjW2sfxcxUXdlKhJSUKtLsp8ukyy5VFPcx/agBVW1omoDSGPQbibQBzyDX/wL6nEbH46g7gope9OlB2+lifHJroKKctXlr8pdUWdZHdXItps29kA9dtrlisGFIO5DOwNOKbsqbNCOCHUPPNRT5MUgvd214Q/UhswOvdSM9402eb6oGgUXZ20hBfCbOqR9sxpab8H8NnjmoqMfubZMgLEkikArK+SLxIo1DOg411yultqH1DeRPFov0iGHTcB5vIzkVBUlYnJWdOEHhajxdGLTeDqqyjVdQPwHlNqTNqBuNfCOeerf5AaSnkH6CUj+eHgzbi7qqm24QunXivVnovAl1m1FbLU4oOJGAQ+oo/CmR8eUGC6NvoaE1GKgF+SvRpx2VQ/MxvIkMUTRb6fZLkJ+GPl3In0P6Lnq+BZY+7Matx/9CPDPQ7xmUP9bz47QKunLIvnIjHJxVRm37m4bndjyDxUDNyC3AMyWiUKg4cl73NqZ/Q9A2BwoHLKr2YFMbUN/vTggEomXIrcUmdkn59uVUiY1w+XG5Rc1B/c3IJcUpKr2BTlPHJdoslA3JHlQmQ6YdCoAuQ7oFpY1ILzr2vRM91qHubfYE2d9ZXfmg+bHNdZvIfqPQshhC3eItmmrwMFOJBiSfrt47hjDzUDcZpafxHDVyqegbjmhbw/myYuIdtal1kzFNRXmRzRsdBu3CS1nLhL/ZmBClXCROxju10p+e4/voM14c6iKUp4aEykZICnkQMysIpKI7MFHiJh6POb+LdFipTMUn6SgmqM+cEaj01Ci0A8xaMdyNdLyr02vVa7okVkyejOQjVswLRPVugFGYcAleqo8NTsmICZTTpV/H00VqxCTiIXi9glf5IszdJ8Qne4l636B0/wtEF47G75NnJ/ScS/CsMmymy0phM7QSHaqSLZWBKI+2SOpci4EWOh6sQ61lp3Dt4a+uidSMn1DSfifRsGb6v79znxLveorS7X8kOn+opsV25cNmMwwFYBe5HnX/yjihcu/hTNhzLdCEfl2C5xdAv7f4EhvDFXXpbZR8+ddAVi1F5WnYvKPvE3+8HYdxFic1CAjsCkrGQJM3gluGjCA1axlVvngXpVt+S7zzMSe8sBfBZpBrQd31yL7sqvQatxsEQFL9FqpzvmChZgzayVK9SkWeaY2ZP6Pkql8UG/hwE/EHz1K6b401zNKm6Brkk0m3wfrcSqrtRlim4ZTMX07cNJHSrb/xN+HydgnqKmS6HSrQaOE61K3L1pMInteCPDsXVKYFbIRd+QIrKJXITVw8R+mr91P1H6DwvtXYc9Xnf6Gq0wPPUbrhHuL19xGdPWKbZ/2Aks7lxaY9jcYWHinYr2wcRbNQNyxbWyIEbCZeHuRwlbaqUyLk6+TIHM5EaMNsEwOnKH3mJuI9fy3UIkvzW67p0p61VF1zA9HxfXb4jqWUTLm72HROtAz78RSjmu04g8yaXZ9EEG2meKezXKU6M1NppGTBClufXqR07S3En+4MlJh7f+JNVLnlBVKXLynRTnjO9lH1Odjc88dt7VceBLu1BJv31tIpBplJ5LNWgwGDtmMFc7SHxMxZTBvHjp+CSxtsl1d/TnxiZ6n8mNfavwNpm03J9O/l7/saEIWB45S+/MPCvHf+KrBNHu5rR77i5mpF2iQNYhteVM6KT7DgUOjz3MDpugolM+6xQ/ZtpXTvap/Q0m/RQw+csBlDceX7E1wQiA+/RtxjlZKathgrGBt4g5yx9WDSXqit0/5Mm5AR455m8KEtt8pZKgX8MkxS32g10Dt/iu2DUr6N47RIldys6JP5NNtWFMNM/bY/TrZhu7E2wS3jJGuNyf0P5mbhCUZ2lyYtdAbtGCz0uhq+DJVqHhW5o36ejwD4ftpjCTZhfjCWN1OzINpoyVqjBD+ODq04c7FK1WQPj/u3+WCRa/g1roGhnksRr/DrjTE8+Lqtb2zx5URJ+KK9z3yE0RLGNwgE3OihbBK+uD7+ISNt3ZEd5ZZeqkwluHdsB6muP5DKVZ/b4EEY0J6nCnE4tsf2HzqK4sAIFWss5LFBbmSwoYjtV1+4DWyiKo477SLrBjshPmUHFoETDj1D/T4stznnRnjIX7g9Fqmp3wTWW10oiPSCE8Y6ytckOUTlYJLytRfoV0IBtyAphFL9VQccSBzqkYs9QRez7lhFKcZI6jB3mgqUnJhyevC1YgCz40punwyT5GaMxcY8p64qsJY6b0/F2mkTJAgdJrasorSQD78UnNlOkZtLKtBMIM6hjVDTr1BVsqF0G1Tgtg6f5JTJcd89dv0cwQaEjJ2X6vd0Bj3wO1WqUjN7eKbfVjV/SeAgjl3+0P9XgQLwghIskHRXgZ7jIEg2l1zjObmRo04K9O+T0oVkuv/AK049wGC1LvD6cS31GgJOP+hQaMSR04lGWW827dscq/A86og15m0mTpZv5IiYsj/SnkJ40z1PgyutKq103OtTjQOLzRTHbIMwjjS+avaPi667ngxsAAkjynKN3kZ6xUs9saEWmig9Q/ze322jZoPWhQHLBE6YJERuFGO3QI2aRWrKbbZ634twiz8MUIU0qKpHwPlDciP7xRn2amQUnqZkh/Tt3+XQo3LDI1AZI+JgggqDGuQ0I5doNyzkxlUFOTYv97lBalUt3Ip6HcDmjPAOopiYbJ8bp4ryex7Dh5B+ACy66Zc2X99EldtfgHcwJo5Z0WfHbJWLdVRufta6v5pI/3mI+PS+ws7GkUqsjauOwH3W3S1OhIwPXKx3axRoYF+A0w/+QrzdUXHkZZQsXg9n68ZYFkLsJeHM2GupshiQZNw82+X9tcTdv/dtE0dab6vAhTt8f8QK23akF4wBZOyUeW+kNQJqppsfwMSP23JDCyWL/kxJ1yOkWr8qoJuKXd4x8yi55iFKbl1jiGA38Qylm34kfJYAKNpd7cUAfU7TXcBY3V5cy8mmvmR5B89cB2w2OKyfeLBe8rphhQcoObmf1Dw4Q3VDADnuMA8d3U3cp9Es2gAYOak3cS7VOhcbme6tMH3rYeL/PuirZi8SaWQtRdf14mTeMRdDMhov4IWGnh0OyxxGpy2onxffofioMt25ktQB7LvjPniEd9nQD+yB0k+ZPcxV7BriHSuJj3X7KDqDIv58oIrK1C7QB70u11QXeGFacDaZ+wl7TBvxTEZjS80oegYuT/cQ//t+Ut0rSH0earSlk9RwQP5hQNmVIVAhAINnofJPHYSxgwuw7zm4yLvdcNndRwYfVAFS7cb6TYS+gEqbjJALRVIXeWFsboquQCftw180UXHmpS5cFBu0QHb4zAFQ+WF9K1jDP/kMlRzaLPuqZnmN8y+6ebSm2hwSNCnBFlC/DCkEkOQMvtCTyF+oqYVq/TyUqrwARql7HLEg4xgZc3MWJD5v15YHzSgOB3mCBfyiaK0RMNv5I+SfQKezJeGZUvXsCWyEdiOqB3DKtJ9F+oSd28yj17LWQBIukIGiMNKYH1PWiTQDvyisqx7wMcru+kjFMFyVROgzlvEuW6WnJE6oSA+jvw5afyTqgVtot3Iucc6W3kY8CyyvhY1hfB71qVvIURfi3+zUYY27jRILH170ZBT1I4qpHVutMpR3EVaUnzdr4fjg46s3L87q3Wu/bb5OUMpehjJroXvJ6HFFX0P3y2PWDIJ1nvMVKIeiPbgM5cyBAn6hnaWfPIid1JWqUxXGqNQu/D+KJ7+eRks/FvE3G4ulK9Gn3XzZEF2CqvgrisK50v7Au/qiEy19/hkqbcfM9XThgKoaiiS86AkjhSoCjRXzxQPzdTaI7OmYiotStpmrax2yIdVkrinsWAMO4GlhBdUBxZl687B9IacaeuivH/RFTrVctvwgR/EtilK1fNIQnmvVrCfpRt3V5hMO1iiAsyDAAdQfKFXBNeC7mESHT7ah7Z9IT0RfY0gbU6K2yz8Y4Fgg2f+M4gTyLxnKKQ1p1AxjQDMqeNBd1VDLpomNgTMoVtmParz4BJf6NLGmDcJBEX/nDg3H6tPOdgbd30TFmzawx5NtHNl8AfQ5PMPcBabFR3qhSh1DvyNIe41Dx3wqVDbMQqDDpXGo6m36PwEGAOYj7JwAdFDiAAAAAElFTkSuQmCC) no-repeat;
    background-size: 100% 100%
}

.card-con-wapper2 .progress .list-progress li:after {
    position: absolute;
    left: -.44rem;
    top: .73333333rem;
    bottom: .06666667rem;
    content: "";
    width: .01333333rem;
    border-left: 1px solid #999
}

.card-con-wapper2 .progress .list-progress li .time {
    color: #999;
    font-size: 12px;
    line-height: 25px;
    margin-bottom: .13333333rem
}

[data-dpr="2"] .card-con-wapper2 .progress .list-progress li .time {
    font-size: 24px;
    line-height: 50px
}

[data-dpr="2.5"] .card-con-wapper2 .progress .list-progress li .time {
    font-size: 30px;
    line-height: 63px
}

[data-dpr="2.75"] .card-con-wapper2 .progress .list-progress li .time {
    font-size: 33px;
    line-height: 69px
}

[data-dpr="3"] .card-con-wapper2 .progress .list-progress li .time {
    font-size: 36px;
    line-height: 75px
}

[data-dpr="4"] .card-con-wapper2 .progress .list-progress li .time {
    font-size: 48px;
    line-height: 100px
}

.card-con-wapper2 .progress .list-progress li p {
    color: #333;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: .33333333rem;
    word-break: break-all
}

[data-dpr="2"] .card-con-wapper2 .progress .list-progress li p {
    font-size: 28px;
    line-height: 40px
}

[data-dpr="2.5"] .card-con-wapper2 .progress .list-progress li p {
    font-size: 35px;
    line-height: 50px
}

[data-dpr="2.75"] .card-con-wapper2 .progress .list-progress li p {
    font-size: 39px;
    line-height: 55px
}

[data-dpr="3"] .card-con-wapper2 .progress .list-progress li p {
    font-size: 42px;
    line-height: 60px
}

[data-dpr="4"] .card-con-wapper2 .progress .list-progress li p {
    font-size: 56px;
    line-height: 80px
}

.card-con-wapper2 .progress .list-progress li .single-thumbs img {
    float: left;
    width: 2.21333333rem;
    height: 2.21333333rem;
    margin-right: .4rem;
    margin-bottom: .4rem
}

.no-msg {
    padding-bottom: 1.6rem
}

.list-topic li, .official {
    padding-bottom: .8rem
}

.no-msg img {
    display: block;
    width: 100%
}

.no-msg p {
    color: #333;
    font-size: 14px
}

[data-dpr="2"] .no-msg p {
    font-size: 28px
}

[data-dpr="2.5"] .no-msg p {
    font-size: 35px
}

[data-dpr="2.75"] .no-msg p {
    font-size: 39px
}

[data-dpr="3"] .no-msg p {
    font-size: 42px
}

[data-dpr="4"] .no-msg p {
    font-size: 56px
}

.official {
    position: relative;
    margin-bottom: .50666667rem;
    border-bottom: 1px dashed #000
}

.official .official-title {
    box-sizing: border-box;
    width: 2.53333333rem;
    height: .50666667rem;
    line-height: .45333333rem;
    margin-bottom: .45333333rem;
    border-width: .02666667rem;
    border-style: solid;
    border-color: #df3349;
    border-radius: 2.53333333rem;
    color: #df3349
}

.official .official-title i {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: .50666667rem;
    height: .50666667rem;
    line-height: .53333333rem;
    background-color: #df3349;
    border-radius: .50666667rem;
    font-size: .34666667rem;
    color: #fff;
    text-align: center
}

.official .official-title span {
    margin-left: .65333333rem;
    font-size: .37333333rem
}

.official p {
    padding-left: .26666667rem;
    padding-right: .26666667rem;
    font-size: 12px;
    color: #333;
    text-align: justify;
    word-break: break-all
}

[data-dpr="2"] .official p {
    font-size: 24px
}

[data-dpr="2.5"] .official p {
    font-size: 30px
}

[data-dpr="2.75"] .official p {
    font-size: 33px
}

[data-dpr="3"] .official p {
    font-size: 36px
}

[data-dpr="4"] .official p {
    font-size: 48px
}

.list-btn li {
    box-sizing: border-box;
    float: left;
    margin-bottom: .85333333rem;
    margin-right: .4rem;
    padding-right: .4rem;
    font-size: 16px;
    line-height: .29333333rem;
    color: #999;
    border-right: 1px solid #000
}

[data-dpr="2"] .list-btn li {
    font-size: 32px
}

[data-dpr="2.5"] .list-btn li {
    font-size: 40px
}

[data-dpr="2.75"] .list-btn li {
    font-size: 44px
}

[data-dpr="3"] .list-btn li {
    font-size: 48px
}

[data-dpr="4"] .list-btn li {
    font-size: 64px
}

.list-btn li.hover {
    color: #df3349;
    font-weight: 700
}

.list-btn li:nth-child(2) {
    border-right: none
}

.list-topic li:last-child {
    padding-bottom: 0
}

.list-topic li .topic-apply, .list-topic li .topic-launch {
    margin-bottom: .4rem
}

.list-topic li .topic-apply .item, .list-topic li .topic-launch .item {
    position: relative;
    margin-bottom: .4rem
}

.list-topic li .topic-apply .item h3, .list-topic li .topic-launch .item h3 {
    position: relative;
    margin-bottom: .33333333rem
}

.list-topic li .topic-apply .item h3 span, .list-topic li .topic-launch .item h3 span {
    float: left
}

.list-topic li .topic-apply .item h3 .zhiding, .list-topic li .topic-launch .item h3 .zhiding {
    background: #84a4d5;
    border-radius: .06666667rem;
    color: #fff;
    font-size: 13px;
    line-height: 13px;
    padding: 3px;
    margin-right: .26666667rem
}

[data-dpr="2"] .list-topic li .topic-apply .item h3 .zhiding, [data-dpr="2"] .list-topic li .topic-launch .item h3 .zhiding {
    font-size: 26px;
    line-height: 26px;
    padding: 5px
}

[data-dpr="2.5"] .list-topic li .topic-apply .item h3 .zhiding, [data-dpr="2.5"] .list-topic li .topic-launch .item h3 .zhiding {
    font-size: 33px;
    line-height: 33px;
    padding: 6px
}

[data-dpr="2.75"] .list-topic li .topic-apply .item h3 .zhiding, [data-dpr="2.75"] .list-topic li .topic-launch .item h3 .zhiding {
    font-size: 36px;
    line-height: 36px;
    padding: 7px
}

[data-dpr="3"] .list-topic li .topic-apply .item h3 .zhiding, [data-dpr="3"] .list-topic li .topic-launch .item h3 .zhiding {
    font-size: 39px;
    line-height: 39px;
    padding: 8px
}

[data-dpr="4"] .list-topic li .topic-apply .item h3 .zhiding, [data-dpr="4"] .list-topic li .topic-launch .item h3 .zhiding {
    font-size: 52px;
    line-height: 52px;
    padding: 10px
}

.list-topic li .topic-apply .item h3 .name, .list-topic li .topic-launch .item h3 .name {
    color: #333;
    font-size: 12px;
    line-height: 18px;
    margin-right: .33333333rem
}

[data-dpr="2"] .list-topic li .topic-apply .item h3 .name, [data-dpr="2"] .list-topic li .topic-launch .item h3 .name {
    font-size: 24px;
    line-height: 36px
}

[data-dpr="2.5"] .list-topic li .topic-apply .item h3 .name, [data-dpr="2.5"] .list-topic li .topic-launch .item h3 .name {
    font-size: 30px;
    line-height: 45px
}

[data-dpr="2.75"] .list-topic li .topic-apply .item h3 .name, [data-dpr="2.75"] .list-topic li .topic-launch .item h3 .name {
    font-size: 33px;
    line-height: 50px
}

[data-dpr="3"] .list-topic li .topic-apply .item h3 .name, [data-dpr="3"] .list-topic li .topic-launch .item h3 .name {
    font-size: 36px;
    line-height: 54px
}

[data-dpr="4"] .list-topic li .topic-apply .item h3 .name, [data-dpr="4"] .list-topic li .topic-launch .item h3 .name {
    font-size: 48px;
    line-height: 72px
}

.list-topic li .topic-apply .item h3 .time, .list-topic li .topic-launch .item h3 .time {
    color: #999;
    font-size: 12px;
    line-height: 18px
}

[data-dpr="2"] .list-topic li .topic-apply .item h3 .time, [data-dpr="2"] .list-topic li .topic-launch .item h3 .time {
    font-size: 24px;
    line-height: 36px
}

[data-dpr="2.5"] .list-topic li .topic-apply .item h3 .time, [data-dpr="2.5"] .list-topic li .topic-launch .item h3 .time {
    font-size: 30px;
    line-height: 45px
}

[data-dpr="2.75"] .list-topic li .topic-apply .item h3 .time, [data-dpr="2.75"] .list-topic li .topic-launch .item h3 .time {
    font-size: 33px;
    line-height: 50px
}

[data-dpr="3"] .list-topic li .topic-apply .item h3 .time, [data-dpr="3"] .list-topic li .topic-launch .item h3 .time {
    font-size: 36px;
    line-height: 54px
}

[data-dpr="4"] .list-topic li .topic-apply .item h3 .time, [data-dpr="4"] .list-topic li .topic-launch .item h3 .time {
    font-size: 48px;
    line-height: 72px
}

.list-topic li .topic-apply .item .topic-detail, .list-topic li .topic-launch .item .topic-detail {
    line-height: 20px;
    word-break: break-all
}

[data-dpr="2"] .list-topic li .topic-apply .item .topic-detail, [data-dpr="2"] .list-topic li .topic-launch .item .topic-detail {
    line-height: 40px
}

[data-dpr="2.5"] .list-topic li .topic-apply .item .topic-detail, [data-dpr="2.5"] .list-topic li .topic-launch .item .topic-detail {
    line-height: 50px
}

[data-dpr="2.75"] .list-topic li .topic-apply .item .topic-detail, [data-dpr="2.75"] .list-topic li .topic-launch .item .topic-detail {
    line-height: 55px
}

[data-dpr="3"] .list-topic li .topic-apply .item .topic-detail, [data-dpr="3"] .list-topic li .topic-launch .item .topic-detail {
    line-height: 60px
}

[data-dpr="4"] .list-topic li .topic-apply .item .topic-detail, [data-dpr="4"] .list-topic li .topic-launch .item .topic-detail {
    line-height: 80px
}

.list-topic li .topic-launch .item h3 .bt-pinglun-wrapper {
    position: absolute;
    right: 0;
    top: -2px
}

[data-dpr="2"] .list-topic li .topic-launch .item h3 .bt-pinglun-wrapper {
    top: -3px
}

[data-dpr="2.5"] .list-topic li .topic-launch .item h3 .bt-pinglun-wrapper, [data-dpr="2.75"] .list-topic li .topic-launch .item h3 .bt-pinglun-wrapper {
    top: -4px
}

[data-dpr="3"] .list-topic li .topic-launch .item h3 .bt-pinglun-wrapper {
    top: -5px
}

[data-dpr="4"] .list-topic li .topic-launch .item h3 .bt-pinglun-wrapper {
    top: -6px
}

.list-topic li .topic-launch .item .topic-detail {
    color: #333;
    font-size: 14px
}

[data-dpr="2"] .list-topic li .topic-launch .item .topic-detail {
    font-size: 28px
}

[data-dpr="2.5"] .list-topic li .topic-launch .item .topic-detail {
    font-size: 35px
}

[data-dpr="2.75"] .list-topic li .topic-launch .item .topic-detail {
    font-size: 39px
}

[data-dpr="3"] .list-topic li .topic-launch .item .topic-detail {
    font-size: 42px
}

[data-dpr="4"] .list-topic li .topic-launch .item .topic-detail {
    font-size: 56px
}

.list-topic li .topic-apply {
    position: relative;
    background: #f2f2f2;
    padding: .4rem .26666667rem
}

.list-topic li .topic-apply:after {
    content: "";
    position: absolute;
    left: .53333333rem;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #f2f2f2
}

.wapper-phone, .wapper-phone .phone {
    width: 100%;
    height: 100%;
    overflow: hidden
}

[data-dpr="2"] .list-topic li .topic-apply:after {
    top: -20px
}

[data-dpr="2.5"] .list-topic li .topic-apply:after {
    top: -25px
}

[data-dpr="2.75"] .list-topic li .topic-apply:after {
    top: -28px
}

[data-dpr="3"] .list-topic li .topic-apply:after {
    top: -30px
}

[data-dpr="4"] .list-topic li .topic-apply:after {
    top: -40px
}

.list-topic li .topic-apply .item {
    margin-bottom: .66666667rem
}

.list-topic li .topic-apply .item:last-child {
    margin-bottom: 0
}

.list-topic li .topic-apply .item h3 {
    margin-bottom: .2rem
}

.list-topic li .topic-apply .item h3 .name {
    color: #666
}

.list-topic li .topic-apply .item h3 .time {
    color: #999
}

.list-topic li .topic-apply .item .topic-detail {
    color: #666;
    font-size: 12px
}

[data-dpr="2"] .list-topic li .topic-apply .item .topic-detail {
    font-size: 24px
}

[data-dpr="2.5"] .list-topic li .topic-apply .item .topic-detail {
    font-size: 30px
}

[data-dpr="2.75"] .list-topic li .topic-apply .item .topic-detail {
    font-size: 33px
}

[data-dpr="3"] .list-topic li .topic-apply .item .topic-detail {
    font-size: 36px
}

[data-dpr="4"] .list-topic li .topic-apply .item .topic-detail {
    font-size: 48px
}

.list-topic li .topic-apply .topic-apply-more {
    color: #e13045;
    font-size: 13px;
    display: block;
    text-align: center;
    margin-top: .4rem
}

[data-dpr="2"] .list-topic li .topic-apply .topic-apply-more {
    font-size: 26px
}

[data-dpr="2.5"] .list-topic li .topic-apply .topic-apply-more {
    font-size: 33px
}

[data-dpr="2.75"] .list-topic li .topic-apply .topic-apply-more {
    font-size: 36px
}

[data-dpr="3"] .list-topic li .topic-apply .topic-apply-more {
    font-size: 39px
}

[data-dpr="4"] .list-topic li .topic-apply .topic-apply-more {
    font-size: 52px
}

.list-topic li .bt-pinglun-wrapper {
    text-align: right
}

.list-topic li .bt-pinglun-wrapper .bt-pinglun {
    color: #999;
    font-size: 12px;
    line-height: 18px
}

[data-dpr="2"] .list-topic li .bt-pinglun-wrapper .bt-pinglun {
    font-size: 24px;
    line-height: 36px
}

[data-dpr="2.5"] .list-topic li .bt-pinglun-wrapper .bt-pinglun {
    font-size: 30px;
    line-height: 45px
}

[data-dpr="2.75"] .list-topic li .bt-pinglun-wrapper .bt-pinglun {
    font-size: 33px;
    line-height: 50px
}

[data-dpr="3"] .list-topic li .bt-pinglun-wrapper .bt-pinglun {
    font-size: 36px;
    line-height: 54px
}

[data-dpr="4"] .list-topic li .bt-pinglun-wrapper .bt-pinglun {
    font-size: 48px;
    line-height: 72px
}

.list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    position: relative;
    color: #c33;
    font-size: 18px;
    margin-right: 5px;
    top: 1px
}

[data-dpr="2"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    font-size: 36px;
    margin-right: 10px;
    top: 2px
}

[data-dpr="2.5"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    font-size: 45px
}

[data-dpr="2.75"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    font-size: 50px
}

[data-dpr="3"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    font-size: 54px
}

[data-dpr="4"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    font-size: 72px
}

[data-dpr="2.5"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    margin-right: 13px
}

[data-dpr="2.75"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    margin-right: 14px
}

[data-dpr="3"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    margin-right: 15px
}

[data-dpr="2.5"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun, [data-dpr="2.75"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun, [data-dpr="3"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    top: 3px
}

[data-dpr="4"] .list-topic li .bt-pinglun-wrapper .bt-pinglun .icon-pinglun {
    margin-right: 20px;
    top: 4px
}

.wapper-phone {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .4);
    display: none;
    opacity: 0
}

.wapper-phone.show {
    display: block;
    transition: all .24s ease-in;
    -webkit-transition: all .24s ease-in
}

.wapper-phone.show.sh {
    opacity: 1
}

.wapper-phone .phone {
    background-color: transparent;
    display: block;
    position: relative
}

.wapper-phone .phone .con .cancle, .wapper-phone .phone .con .tel {
    display: inline-block;
    background-color: #fff;
    text-decoration: none;
    width: 100%;
    text-align: center
}

.wapper-phone .phone .con {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all .24s ease-in;
    -webkit-transition: all .24s ease-in;
    transform: translate(0, 100%);
    -webkit-transform: translate(0, 100%)
}

.card, .card ul li i {
    transition: all .2s ease-in
}

.wapper-phone .phone .con.sh {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0)
}

.wapper-phone .phone .con .tel {
    position: relative;
    padding-top: .33333333rem;
    padding-bottom: .33333333rem;
    color: #2a9df8;
    font-size: 14px;
    border-bottom: 1px solid #eceff5
}

[data-dpr="2"] .wapper-phone .phone .con .tel {
    font-size: 28px
}

[data-dpr="2.5"] .wapper-phone .phone .con .tel {
    font-size: 35px
}

[data-dpr="2.75"] .wapper-phone .phone .con .tel {
    font-size: 39px
}

[data-dpr="3"] .wapper-phone .phone .con .tel {
    font-size: 42px
}

[data-dpr="4"] .wapper-phone .phone .con .tel {
    font-size: 56px
}

.wapper-phone .phone .con .cancle {
    position: relative;
    padding-top: .18666667rem;
    padding-bottom: .37333333rem;
    color: #000;
    font-size: 14px
}

[data-dpr="2"] .wapper-phone .phone .con .cancle {
    font-size: 28px
}

[data-dpr="2.5"] .wapper-phone .phone .con .cancle {
    font-size: 35px
}

[data-dpr="2.75"] .wapper-phone .phone .con .cancle {
    font-size: 39px
}

[data-dpr="3"] .wapper-phone .phone .con .cancle {
    font-size: 42px
}

[data-dpr="4"] .wapper-phone .phone .con .cancle {
    font-size: 56px
}

.wapper-phone .phone .con .tel span {
    display: block;
    width: 100%;
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-top: .13333333rem
}

[data-dpr="2"] .wapper-phone .phone .con .tel span {
    font-size: 24px
}

[data-dpr="2.5"] .wapper-phone .phone .con .tel span {
    font-size: 30px
}

[data-dpr="2.75"] .wapper-phone .phone .con .tel span {
    font-size: 33px
}

[data-dpr="3"] .wapper-phone .phone .con .tel span {
    font-size: 36px
}

[data-dpr="4"] .wapper-phone .phone .con .tel span {
    font-size: 48px
}

.icon-phone {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiCAYAAABMfblJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRENDMyMENBNkE2OTExRTY5RjNGRThBRkI0MjkwQTI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRENDMyMENCNkE2OTExRTY5RjNGRThBRkI0MjkwQTI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQ0MzIwQzg2QTY5MTFFNjlGM0ZFOEFGQjQyOTBBMjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ0MzIwQzk2QTY5MTFFNjlGM0ZFOEFGQjQyOTBBMjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vnD06AAADz0lEQVR42qxWWUhVURT1PYe0TCnFlKSIlLBSw4jK0qKyoEGIrKxoIDSIDAqtn/KjgYpo+qgI9KsSkgaMosAUEqL8KDUziMhKiyw0smeDqflaW9aFw/F6372+Liz2PWfvc9YZ9nBcXq83QP1aZywdAZEOFAArgRCgCDg/oaHyT4Cfn0slBNkCiIcW9iNB+tsfQrdCtkIhWyiTA4FAELCG/c9h59cOg0g2BuIu0A1EYRe/NLtbsDkCWQykAXV+EeJ7QDndhMz4jpKwlKT63YvIBkKBO0MdvaslNSscsgt4DaMpVqvDpDUQmUAwbPs0nQuiX+mShRXD7rN+hyn8L7JxIhcp43UFJvby3ucCsrA8oA0LydEJMwyHsEH4kTLSTCnHCNQC4nSTgU7gOkh3qneYyX877t5NGWxy3GEQh7nwMpC+RV80/j/IyeBfFlIvO4zimD4bhBEasa6Ta7kic4FgEgj+4j+R+jr0BQrhdz0mLb5V2tGqx/lFnBBYzblkh+PR/xP/G2iWL4qXbIT58NBxEHuBDkzSqemSGKcR0FVAJlD1nvIa5QU3PUo9Lp0oHqjCr+HeM03MJCUelNOCbRpIm2Vy8RG0Y9EWmwbZuRC+4yCzYHbx0hcD9eLyGNxqQngJSAIkaTxj3xllMfLdM+7N2HaByUQhlOUgkpXXDhEOglf4vcyFqv4wirJ9gBCGHnrobPEibS4pRy3iCNAF2XCqG0AlM444UTlQQd1WNZfuA84C04BGdeUg2oTfR8Ah4IAVG+yrIarZFO/MVdSngLUD9RCTjkbDw6PLtciRg3LosOohJumi86zXj445cjmbJ/yt+OrlrqPMM7G7DzQBhVhQzH95YrCe9fJe3dyZerSRTMbiDLG8X8mpyUwabeJgTGe+d8jgzGaz0MQhJAXuASTjbAfZWMgexp04VTNzaI7VM0R/RBmhIPEXyZDR9S/kZaB0b+NxLwJOsu8xsAzjf1gSclKp+hLETRiQbJJ9JFb3M18eYxozdHIdu4Bz7IrTK/4gQg4sofPkY0CpU8fA+DkQT9gMVd+zQ5WkHYzLEgxOcErIFGhcZJXPHXKVUpg72AxnXXO60zKIjUAMxrdbFl0YfIWYxaYHgyOGEXa7Kbf4OlKD9CmrvJu1Ls4h4TfKqbYISSov8iVsfgLpPAeE8ylrfN6hyX2kKE9Jqe6nsZhuC/toowZKXMO21xEhJ5GqchPIYpdknqtydJiwX4nFdGVXidC9cbxDjTiDxVZN5LV8eacofakga7QVFjZIA/jm3EwvnEiVvH2OA7dB1qOP+yfAALxChREMRsMMAAAAAElFTkSuQmCC);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    width: .37333333rem;
    height: .45333333rem;
    padding-right: .06666667rem
}

.content-slide {
    margin-bottom: 10px
}

.content-slide-phone {
    margin: 0 2.4% 1.86666667rem;
    background-color: transparent;
    color: #000
}

.content-slide-phone p {
    position: relative;
    text-align: center;
    padding-top: .24rem;
    padding-bottom: .48rem;
    color: #000;
    font-size: .37333333rem;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    background-color: #fff
}

.content-slide-phone p span {
    display: block;
    width: 100%;
    font-size: .32rem;
    color: #999;
    position: absolute;
    left: 0;
    bottom: .42666667rem;
    text-align: center
}

.favorite {
    background: #f8f8f8;
    margin-bottom: .08rem
}

.favorite h4 {
    position: relative;
    margin-left: .26666667rem;
    margin-right: .26666667rem;
    margin-bottom: .33333333rem;
    padding-top: .33333333rem
}

.favorite h4 .txt {
    color: #1f7ea6;
    font-size: 15px;
    line-height: 18px
}

[data-dpr="2"] .favorite h4 .txt {
    font-size: 30px;
    line-height: 36px
}

[data-dpr="2.5"] .favorite h4 .txt {
    font-size: 38px;
    line-height: 45px
}

[data-dpr="2.75"] .favorite h4 .txt {
    font-size: 41px;
    line-height: 50px
}

[data-dpr="3"] .favorite h4 .txt {
    font-size: 45px;
    line-height: 54px
}

[data-dpr="4"] .favorite h4 .txt {
    font-size: 60px;
    line-height: 72px
}

.favorite h4 .txt .icon-shuziyuleshiyebu {
    color: #1f7ea6;
    font-size: 18px;
    margin-right: .13333333rem
}

[data-dpr="2"] .favorite h4 .txt .icon-shuziyuleshiyebu {
    font-size: 36px
}

[data-dpr="2.5"] .favorite h4 .txt .icon-shuziyuleshiyebu {
    font-size: 45px
}

[data-dpr="2.75"] .favorite h4 .txt .icon-shuziyuleshiyebu {
    font-size: 50px
}

[data-dpr="3"] .favorite h4 .txt .icon-shuziyuleshiyebu {
    font-size: 54px
}

[data-dpr="4"] .favorite h4 .txt .icon-shuziyuleshiyebu {
    font-size: 72px
}

.favorite h4 .bt-new {
    position: absolute;
    right: 0;
    top: .33333333rem;
    color: #666;
    font-size: 12px;
    line-height: 18px
}

[data-dpr="2"] .favorite h4 .bt-new {
    font-size: 24px;
    line-height: 36px
}

[data-dpr="2.5"] .favorite h4 .bt-new {
    font-size: 30px;
    line-height: 45px
}

[data-dpr="2.75"] .favorite h4 .bt-new {
    font-size: 33px;
    line-height: 50px
}

[data-dpr="3"] .favorite h4 .bt-new {
    font-size: 36px;
    line-height: 54px
}

[data-dpr="4"] .favorite h4 .bt-new {
    font-size: 48px;
    line-height: 72px
}

.favorite .list_pro .item {
    position: relative;
    background: #fff;
    padding-bottom: .26666667rem
}

.favorite .list_pro .item .pro_title {
    color: #333;
    font-size: 14px;
    line-height: 18px;
    height: 36px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .13333333rem;
    margin-bottom: .13333333rem
}

[data-dpr="2"] .favorite .list_pro .item .pro_title {
    font-size: 28px;
    line-height: 36px;
    height: 72px
}

[data-dpr="2.5"] .favorite .list_pro .item .pro_title {
    font-size: 35px;
    line-height: 45px;
    height: 90px
}

[data-dpr="2.75"] .favorite .list_pro .item .pro_title {
    font-size: 39px;
    line-height: 50px;
    height: 99px
}

[data-dpr="3"] .favorite .list_pro .item .pro_title {
    font-size: 42px;
    line-height: 54px;
    height: 108px
}

[data-dpr="4"] .favorite .list_pro .item .pro_title {
    font-size: 56px;
    line-height: 72px;
    height: 144px
}

.favorite .list_pro .item .pro_title span {
    display: none;
    position: relative;
    background: #e13045;
    color: #fff;
    font-size: 10px;
    line-height: 10px;
    margin-left: .09333333rem;
    top: -.04rem;
    border-radius: .06666667rem;
    vertical-align: middle;
    padding: .06666667rem .13333333rem
}

[data-dpr="2"] .favorite .list_pro .item .pro_title span {
    font-size: 20px;
    line-height: 20px
}

[data-dpr="2.5"] .favorite .list_pro .item .pro_title span {
    font-size: 25px;
    line-height: 25px
}

[data-dpr="2.75"] .favorite .list_pro .item .pro_title span {
    font-size: 28px;
    line-height: 28px
}

[data-dpr="3"] .favorite .list_pro .item .pro_title span {
    font-size: 30px;
    line-height: 30px
}

[data-dpr="4"] .favorite .list_pro .item .pro_title span {
    font-size: 40px;
    line-height: 40px
}

.favorite .list_pro .item .pro_title span.show {
    display: inline-block
}

.favorite .list_pro .item .progress_wrapper .progress {
    position: relative;
    height: .10666667rem;
    border-radius: .04rem;
    background: #efefef
}

.favorite .list_pro .item .progress_wrapper .progress .progress_bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: .10666667rem;
    border-radius: .04rem;
    background: #e13045
}

.favorite .list_pro .item .progress_wrapper .progress .bar_100 {
    background: url(src/assets/img/line_bar.png) no-repeat;
    background-size: 100%
}

.favorite .list_pro .item .progress_wrapper .pregress_txt {
    position: relative
}

.favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left {
    float: left;
    display: inline
}

.favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span1 {
    color: #666;
    font-size: 12px;
    line-height: 15px
}

[data-dpr="2"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span1 {
    font-size: 24px;
    line-height: 30px
}

[data-dpr="2.5"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span1 {
    font-size: 30px;
    line-height: 38px
}

[data-dpr="2.75"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span1 {
    font-size: 33px;
    line-height: 41px
}

[data-dpr="3"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span1 {
    font-size: 36px;
    line-height: 45px
}

[data-dpr="4"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span1 {
    font-size: 48px;
    line-height: 60px
}

.favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span2 {
    color: #e13045;
    font-size: 12px;
    line-height: 15px
}

[data-dpr="2"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span2 {
    font-size: 24px;
    line-height: 30px
}

[data-dpr="2.5"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span2 {
    font-size: 30px;
    line-height: 38px
}

[data-dpr="2.75"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span2 {
    font-size: 33px;
    line-height: 41px
}

[data-dpr="3"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span2 {
    font-size: 36px;
    line-height: 45px
}

[data-dpr="4"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_left .span2 {
    font-size: 48px;
    line-height: 60px
}

.favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    float: right;
    display: inline;
    color: #666;
    font-size: 15px;
    line-height: 15px;
    margin-top: -1px
}

[data-dpr="2"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    font-size: 30px;
    line-height: 30px;
    margin-top: -2px
}

[data-dpr="2.5"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    font-size: 38px
}

[data-dpr="2.75"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    font-size: 41px
}

[data-dpr="3"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    font-size: 45px
}

[data-dpr="4"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    font-size: 60px
}

[data-dpr="2.5"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    line-height: 38px
}

[data-dpr="2.75"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    line-height: 41px
}

[data-dpr="3"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    line-height: 45px
}

[data-dpr="2.5"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right, [data-dpr="2.75"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right, [data-dpr="3"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    margin-top: -3px
}

[data-dpr="4"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right {
    line-height: 60px;
    margin-top: -4px
}

.favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right .span2 {
    font-size: 12px;
    line-height: 12px
}

[data-dpr="2"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right .span2 {
    font-size: 24px;
    line-height: 24px
}

[data-dpr="2.5"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right .span2 {
    font-size: 30px;
    line-height: 30px
}

[data-dpr="2.75"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right .span2 {
    font-size: 33px;
    line-height: 33px
}

[data-dpr="3"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right .span2 {
    font-size: 36px;
    line-height: 36px
}

[data-dpr="4"] .favorite .list_pro .item .progress_wrapper .pregress_txt .txt_right .span2 {
    font-size: 48px;
    line-height: 48px
}

.favorite .list_pro .item .num .icon-ren {
    font-size: 13px;
    line-height: 13px;
    margin-right: .06666667rem
}

[data-dpr="2"] .favorite .list_pro .item .num .icon-ren {
    font-size: 25px;
    line-height: 25px
}

[data-dpr="2.5"] .favorite .list_pro .item .num .icon-ren {
    font-size: 31px;
    line-height: 31px
}

[data-dpr="2.75"] .favorite .list_pro .item .num .icon-ren {
    font-size: 34px;
    line-height: 34px
}

[data-dpr="3"] .favorite .list_pro .item .num .icon-ren {
    font-size: 38px;
    line-height: 38px
}

[data-dpr="4"] .favorite .list_pro .item .num .icon-ren {
    font-size: 50px;
    line-height: 50px
}

.favorite .list_pro .item:nth-child(2n+1) {
    margin-right: .21333333rem
}

.favorite .list_pro .item:nth-child(2n+12) {
    margin-right: 0
}

.favorite .list_pro_l .item .pro_title, .favorite .list_pro_l .item .progress_wrapper {
    margin-left: .2rem;
    margin-right: .2rem
}

.favorite .list_pro_l .item {
    width: 4.62666667rem;
    float: left;
    margin-bottom: .21333333rem;
    border-radius: .13333333rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .2)
}

.favorite .list_pro_l .item img {
    display: block;
    width: 100%;
    border-top-left-radius: .13333333rem;
    border-top-right-radius: .13333333rem
}

.favorite .list_pro_l .item .progress_wrapper .progress {
    margin-bottom: .2rem
}

.favorite .list_pro_l .item .progress_wrapper .pregress_txt .txt_left .span2 {
    color: #e13045
}

.favorite .list_pro_l .item .progress_wrapper .pregress_txt .txt_right .span1 {
    display: none
}

.favorite .list_pro_l .item .progress_wrapper .pregress_txt .txt_right .span2 {
    color: #666
}

.favorite .list_pro_l .item .num {
    position: absolute;
    background-color: rgba(0, 0, 0, .4);
    right: .26666667rem;
    top: .26666667rem;
    border-radius: .33333333rem;
    color: #fff;
    padding: .13333333rem .26666667rem
}

.favorite .list_pro_l .item .num .icon-ren {
    color: #fff
}

.favorite .swiper-wrapper {
    margin-left: .26666667rem;
    margin-right: .26666667rem;
    margin-bottom: .48rem
}

.card-loadmore, .stalls {
    margin-bottom: .26666667rem
}

.favorite .swiper-pagination-bullet {
    width: .16rem;
    height: .16rem;
    margin-left: .05333333rem!important;
    margin-right: .05333333rem!important;
    background: #d8d8d8;
    opacity: 1
}

.favorite .swiper-pagination-bullet-active {
    width: .32rem;
    height: .16rem;
    border-radius: .08rem;
    background-color: #e13045
}

.card-loadmore {
    text-align: center;
    margin-top: .26666667rem
}

.card-loadmore.show {
    display: block
}

.card-loadmore.hide {
    display: none
}

.card-loadmore img {
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: .61333333rem;
    height: .26666667rem;
    text-align: center
}

.support, .support-placeholder {
    width: 100%;
    height: 1.86666667rem
}

.support {
    position: fixed;
    left: 0;
    bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    border-top: 2px solid #f8f8f8;
    background-color: #fff;
    z-index: 100;
    font-size: .48rem
}

.support .but {
    position: absolute;
    width: 4.66666667rem;
    height: 1.17333333rem;
    line-height: 1.17333333rem;
    text-align: center;
    top: .34666667rem;
    right: .26666667rem;
    font-size: 16px;
    border-radius: .16rem;
    color: #fff;
    background-color: #e13045
}

[data-dpr="2"] .support .but {
    font-size: 32px
}

[data-dpr="2.5"] .support .but {
    font-size: 40px
}

[data-dpr="2.75"] .support .but {
    font-size: 44px
}

[data-dpr="3"] .support .but {
    font-size: 48px
}

[data-dpr="4"] .support .but {
    font-size: 64px
}

.support .but.bank_support {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%)
}

.support .share-more, .support .share-star {
    top: .46666667rem;
    width: .93333333rem;
    height: .93333333rem;
    position: absolute
}

.support .share-star {
    left: .8rem
}

.support .share-more {
    right: .8rem
}

.support .share {
    position: absolute;
    width: .74666667rem;
    height: .74666667rem;
    font-size: .64rem;
    color: #df3349
}

.support .share.share-spec {
    left: 3.6rem;
    top: .6rem;
    font-size: .72rem
}

.support .share.share-pl:after, .support .share.share-sh:after, .support .share.share-spec:after {
    content: "";
    position: absolute;
    bottom: -.4rem;
    font-size: .37333333rem;
    color: #999;
    width: 100%;
    text-align: center
}

.support .share.share-spec:after {
    left: 0
}

.support .share.share-sh {
    left: .53333333rem;
    top: .6rem
}

.support .share.share-sh:after {
    left: 0
}

.support .share.share-pl {
    left: 2rem;
    top: .6rem
}

.support .share.share-pl:after {
    left: 0
}

.card h1:before, .stalls ul li:before {
    font-family: iconfont!important;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
    content: "\e678";
    font-style: normal
}

.support .share.bank_pl {
    left: .8rem
}

.banner {
    position: relative
}

.banner img {
    width: 100%
}

.banner #videoFrame {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0
}

.banner .play {
    width: 2.13333333rem;
    height: 2.13333333rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -1.06666667rem;
    margin-top: -1.06666667rem
}

.swiper, .swiper .placeholder, .swiper .placeholder img, .swiper .swiper-wrapper .swiper-slide img {
    width: 100%
}

.banner .play_conver {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20
}

.stalls, .stalls ul li {
    position: relative;
    box-sizing: border-box
}

.stalls {
    border: 1px solid #fff;
    background-color: #fff
}

.stalls h4 {
    padding-top: .16rem;
    padding-bottom: .16rem;
    padding-left: .26666667rem;
    border-bottom: 1px solid #e7e7e7;
    color: #666;
    font-size: 15px;
    font-weight: 700
}

[data-dpr="2"] .stalls h4 {
    font-size: 30px
}

[data-dpr="2.5"] .stalls h4 {
    font-size: 38px
}

[data-dpr="2.75"] .stalls h4 {
    font-size: 41px
}

[data-dpr="3"] .stalls h4 {
    font-size: 45px
}

[data-dpr="4"] .stalls h4 {
    font-size: 60px
}

.stalls .show {
    display: block
}

.stalls .hide {
    display: none
}

.stalls .icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden
}

.stalls ul li {
    height: 1.86666667rem;
    margin-left: .26666667rem;
    padding-top: .32rem
}

.stalls ul li:before {
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: .26666667rem;
    width: .26666667rem;
    height: .42666667rem;
    line-height: .48rem;
    color: #ccc;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%)
}

.stalls ul li.b_t {
    border-top: 1px solid #e7e7e7
}

.stalls ul li .discount {
    color: #e42d41;
    font-size: .32rem;
    padding-right: .13333333rem
}

.stalls ul li .discount em {
    font-size: .53333333rem;
    font-family: gotham
}

.stalls ul li .price {
    font-size: .29333333rem;
    color: #999;
    text-decoration: line-through
}

.stalls ul li .supporter {
    font-size: .29333333rem;
    line-height: .29333333rem;
    position: absolute;
    top: .44rem;
    right: .85333333rem;
    z-index: 2;
    color: #666
}

.stalls ul li .icon_text {
    font-size: 12px;
    line-height: 1.2;
    border-radius: .05333333rem;
    margin-top: .02666667rem;
    margin-bottom: .02666667rem;
    margin-right: .13333333rem;
    display: inline-block;
    color: #FFF;
    background: #E3B15E;
    padding: .02666667rem .16rem
}

[data-dpr="2"] .stalls ul li .icon_text {
    font-size: 24px
}

[data-dpr="2.5"] .stalls ul li .icon_text {
    font-size: 30px
}

[data-dpr="2.75"] .stalls ul li .icon_text {
    font-size: 33px
}

[data-dpr="3"] .stalls ul li .icon_text {
    font-size: 36px
}

[data-dpr="4"] .stalls ul li .icon_text {
    font-size: 48px
}

.stalls ul li.no_tag {
    height: 1.17333333rem
}

.stalls ul li.no_tag .discount {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%)
}

.stalls ul li.no_tag .supporter {
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%)
}

.block {
    position: relative;
    font-size: .29333333rem;
    color: #999
}

.block.padding {
    padding-top: .26666667rem;
    padding-bottom: .26666667rem
}

.swiper {
    height: auto;
    display: none;
    margin-bottom: .29333333rem!important
}

.swiper.show {
    display: block
}

.swiper .swiper-wrapper {
    position: absolute;
    left: 0;
    top: 0
}

.swiper .swiper-pagination-bullet {
    width: .13333333rem;
    height: .13333333rem;
    background: rgba(255, 255, 255, .5);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .5);
    margin-left: .05333333rem!important;
    margin-right: .05333333rem!important;
    opacity: 1
}

.card, .swiper .swiper-pagination-bullet-active {
    background-color: #fff
}

.go-index {
    display: inline-block;
    width: 100%;
    margin-bottom: .8rem
}

.card {
    height: 85px;
    overflow: hidden;
    margin-bottom: .26666667rem;
    margin-top: .26666667rem
}

[data-dpr="2"] .card {
    height: 170px
}

[data-dpr="2.5"] .card {
    height: 213px
}

[data-dpr="2.75"] .card {
    height: 234px
}

[data-dpr="3"] .card {
    height: 255px
}

[data-dpr="4"] .card {
    height: 340px
}

.card.small h1:before {
    display: none
}

.card h1 {
    height: 45px;
    line-height: 1.2rem;
    font-size: 15px;
    color: #666;
    font-weight: 700;
    padding-left: .26666667rem;
    padding-right: .26666667rem;
    position: relative
}

[data-dpr="2"] .card h1 {
    height: 90px;
    font-size: 30px
}

[data-dpr="2.5"] .card h1 {
    height: 113px;
    font-size: 38px
}

[data-dpr="2.75"] .card h1 {
    height: 124px;
    font-size: 41px
}

[data-dpr="3"] .card h1 {
    height: 135px;
    font-size: 45px
}

[data-dpr="4"] .card h1 {
    height: 180px;
    font-size: 60px
}

.card h1:before {
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    font-size: .32rem;
    right: .26666667rem;
    width: .26666667rem;
    height: .42666667rem;
    line-height: .48rem;
    color: #ccc;
    transform: translateY(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) rotate(90deg)
}

.card h1.unfolded:before {
    transform: rotate(-90deg) translateY(0) translateX(50%);
    -webkit-transform: rotate(-90deg) translateY(0) translateX(50%)
}

.card ul {
    width: 100%;
    height: auto
}

.card ul li {
    float: left;
    height: 40px;
    width: 3.33333333rem;
    overflow: hidden;
    position: relative;
    text-align: center
}

[data-dpr="2"] .card ul li {
    height: 80px
}

[data-dpr="2.5"] .card ul li {
    height: 100px
}

[data-dpr="2.75"] .card ul li {
    height: 110px
}

[data-dpr="3"] .card ul li {
    height: 120px
}

[data-dpr="4"] .card ul li {
    height: 160px
}

.card ul li:after, .card ul li:before {
    height: 1.06666667rem;
    width: .21333333rem;
    background-color: #fff;
    top: 0;
    z-index: 2;
    position: absolute;
    content: '';
    display: block
}

.card ul li:before {
    left: 0
}

.card ul li:after {
    right: 0
}

.card ul li i {
    display: block;
    font-size: .24rem;
    line-height: .37333333rem;
    text-align: center;
    height: .37333333rem;
    width: .93333333rem;
    border: 1px solid #c0aeb0;
    color: #c0aeb0;
    position: absolute;
    font-style: normal;
    right: .13333333rem;
    top: -.08rem;
    -webkit-transition: all .2s ease-in;
    transform: rotate(-10deg) translateY(-100%);
    -webkit-transform: rotate(-10deg) translateY(-100%);
    opacity: 0
}

.card ul:after, .card ul:before {
    content: '';
    display: block;
    clear: both
}

.card .label {
    display: inline-block;
    width: 2.90666667rem;
    height: .66666667rem;
    box-sizing: border-box;
    position: relative;
    line-height: .66666667rem;
    font-size: .32rem;
    border-radius: .10666667rem;
    border: 1px solid #ff5c5c;
    color: #ff5c5c
}

.card .label:after, .card .label:before {
    content: '';
    width: .13333333rem;
    height: .13333333rem;
    position: absolute;
    background-color: #fff;
    top: .26666667rem;
    display: block
}

.card .label:before {
    border-radius: .13333333rem;
    border: 1px solid #ff5c5c;
    left: -.08rem
}

.card .label:after {
    border-radius: .13333333rem;
    border: 1px solid #ff5c5c;
    right: -.08rem
}

.card .label.selected, .card .label.selected:after, .card .label.selected:before {
    border: 1px solid #c0aeb0
}

.card .label.selected {
    color: #c0aeb0
}

.card .label.selected i {
    opacity: 1;
    transform: rotate(-10deg) translateY(0);
    -webkit-transform: rotate(-10deg) translateY(0)
}

.noscroll, .noscroll body {
    overflow: hidden
}

.noscroll body {
    position: relative
}

.overlay {
    position: fixed;
    z-index: 500;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7)
}

.overlay .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%)
}

.overlay .risktip {
    background-color: #fff;
    border-radius: .13333333rem;
    box-sizing: border-box;
    margin-left: .4rem;
    margin-right: .4rem;
    max-height: 13.4rem;
    color: #333;
    overflow-y: auto;
    padding: .37333333rem .53333333rem .66666667rem
}

.overlay .risktip h1 {
    width: 100%;
    text-align: center;
    font-size: 15px
}

[data-dpr="2"] .overlay .risktip h1 {
    font-size: 30px
}

[data-dpr="2.5"] .overlay .risktip h1 {
    font-size: 38px
}

[data-dpr="2.75"] .overlay .risktip h1 {
    font-size: 41px
}

[data-dpr="3"] .overlay .risktip h1 {
    font-size: 45px
}

[data-dpr="4"] .overlay .risktip h1 {
    font-size: 60px
}

.overlay .risktip p {
    width: 8.13333333rem;
    margin-top: .53333333rem;
    font-size: .32rem;
    line-height: .53333333rem
}

.overlay .close {
    width: 1.2rem;
    height: 1.2rem;
    margin: .48rem auto 0;
    background: url(src/assets/img/close.png) center center no-repeat;
    background-size: 100% 100%
}

.down-wapper {
    height: 1.53333333rem
}

.wakelay {
    position: fixed;
    z-index: 500;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6)
}

.wakelay .wake-container {
    width: 8.29333333rem;
    height: 3.17333333rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    border-radius: .13333333rem;
    background-color: #fff
}

.wakelay .wake-container .wake-content {
    margin: .78666667rem .4rem .4rem
}

.wakelay .wake-container .wake-content .wake-title {
    height: .48rem;
    line-height: .48rem;
    font-size: .48rem;
    color: #333;
    text-align: center
}

.wakelay .wake-container .wake-content .wake-download {
    position: relative;
    height: .66666667rem;
    line-height: .66666667rem;
    font-size: 13px;
    margin-top: .42666667rem
}

[data-dpr="2"] .wakelay .wake-container .wake-content .wake-download {
    font-size: 26px
}

[data-dpr="2.5"] .wakelay .wake-container .wake-content .wake-download {
    font-size: 33px
}

[data-dpr="2.75"] .wakelay .wake-container .wake-content .wake-download {
    font-size: 36px
}

[data-dpr="3"] .wakelay .wake-container .wake-content .wake-download {
    font-size: 39px
}

[data-dpr="4"] .wakelay .wake-container .wake-content .wake-download {
    font-size: 52px
}

.wakelay .wake-container .wake-content .wake-download a {
    color: #E13045;
    position: absolute;
    right: .05333333rem
}

.wakelay .wake-container .wake-content #wake-btn {
    margin-top: .44rem
}

.wakelay .wake-container .wake-content #wake-btn a {
    text-decoration: none;
    float: left;
    width: 3.54666667rem;
    height: 1.06666667rem;
    line-height: .98666667rem;
    box-sizing: border-box;
    font-size: 16px;
    color: #E13045;
    text-align: center
}

[data-dpr="2"] .wakelay .wake-container .wake-content #wake-btn a {
    font-size: 32px
}

[data-dpr="2.5"] .wakelay .wake-container .wake-content #wake-btn a {
    font-size: 40px
}

[data-dpr="2.75"] .wakelay .wake-container .wake-content #wake-btn a {
    font-size: 44px
}

[data-dpr="3"] .wakelay .wake-container .wake-content #wake-btn a {
    font-size: 48px
}

[data-dpr="4"] .wakelay .wake-container .wake-content #wake-btn a {
    font-size: 64px
}

.wakelay .wake-container .wake-content #wake-btn .btn-browse-web {
    margin-right: .4rem
}

.wakelay .wake-container .wake-content #wake-btn .btn-active {
    color: #fff;
    background: #E13045
}

.tooltips, .tooltips a {
    color: #707070
}

.wakelay-show {
    display: block
}

.wakelay-hide {
    display: none
}

.tooltips {
    position: absolute;
    left: 2.08rem;
    bottom: 1.73333333rem;
    width: 5.06666667rem;
    padding-top: .18666667rem;
    padding-bottom: .18666667rem;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(193, 145, 145, .5);
    -webkit-box-shadow: 0 0 20px 0 rgba(193, 145, 145, .5);
    border-radius: .02666667rem;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;
    z-index: 999
}

[data-dpr="2"] .tooltips {
    font-size: 24px
}

[data-dpr="2.5"] .tooltips {
    font-size: 30px
}

[data-dpr="2.75"] .tooltips {
    font-size: 33px
}

[data-dpr="3"] .tooltips {
    font-size: 36px
}

[data-dpr="4"] .tooltips {
    font-size: 48px
}

.tooltips .arrow-down {
    height: .21333333rem;
    width: .45333333rem;
    position: absolute;
    left: 1.68rem;
    bottom: -.21333333rem;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAoCAYAAABKOyzUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg4MDBGN0UwODcxNjExRTc4Q0QwQUZBNjQ1RDVDNDFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg4MDBGN0UxODcxNjExRTc4Q0QwQUZBNjQ1RDVDNDFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdFNTdGRjU4NzE2MTFFNzhDRDBBRkE2NDVENUM0MUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdFNTdGRjY4NzE2MTFFNzhDRDBBRkE2NDVENUM0MUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4y01iKAAALL0lEQVR42uxa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) center center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%
}

.tooltips i {
    color: #e13045;
    font-style: normal
}

.tooltips.stalls-tips {
    line-height: 1;
    left: .13333333rem
}

.tooltips.stalls-tips .arrow-down {
    left: .85333333rem
}

.scale-small {
    animation: poundIn .3s ease-in-out 0s 1 alternate forwards;
    -webkit-animation: poundIn .3s ease-in-out 0s 1 alternate forwards
}

.scale-big {
    animation: poundOut .2s ease-in-out 0s 1 alternate forwards;
    -webkit-animation: poundOut .2s ease-in-out 0s 1 alternate forwards
}

@keyframes poundIn {
    0% {
        transform: none
    }
    100% {
        transform: scale(.8)
    }
}

@-webkit-keyframes poundIn {
    0% {
        transform: none
    }
    100% {
        transform: scale(.8)
    }
}

@keyframes poundOut {
    0% {
        transform: scale(.9)
    }
    100% {
        transform: scale(1)
    }
}

@-webkit-keyframes poundOut {
    0% {
        transform: scale(.9)
    }
    100% {
        transform: scale(1)
    }
}

#connectOnline {
    position: fixed;
    width: 1.33333333rem;
    height: 1.33333333rem;
    padding-left: .26666667rem;
    padding-right: .13333333rem;
    right: 0;
    bottom: 3.44rem;
    display: none;
    z-index: 498
}

#connectOnline .img {
    width: 1.33333333rem;
    hegiht: 1.33333333rem;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100%
}

#connectOnline.show {
    display: block
}
</style>
