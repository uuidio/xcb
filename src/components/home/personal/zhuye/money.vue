<template lang="html">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="http://img3.imgtn.bdimg.com/it/u=3949423674,1523933749&fm=27&gp=0.jpg" alt="">
                <div>
                    <h4>个人简介</h4>
                    <p>歌手、音乐人、制作人、导演、商人</p>
                </div>
                <em>查看全文 </em>
            </div>
            <div :class="$style.item">
                <img src="http://img2.imgtn.bdimg.com/it/u=2898782339,71297277&fm=27&gp=0.jpg" alt="">
                <div>
                    <h4>我的故事</h4>
                    <p>我生在一个僻静的乡村，那里环境很好，周围的邻居也是很热情...</p>
                </div>
                <em>查看全文 </em>
            </div>
            <div :class="$style.item">
                <img src="//pic.qiantucdn.com/58pic/25/75/42/62U58PICRiI_1024.jpg" alt="">
                <div>
                    <h4>粉丝送礼</h4>
                    <p><span style="color:#8495cb">一路狂奔</span>   送了一颗葡萄</p>
                </div>
                <em>查看 > </em>
            </div>
        </section>
</template>

<script>
export default {
  components: {
  },
}
</script>

<style lang="scss" module>
@import "~css/element.scss";
  .content {
    @include flex;
    border-top:#f5f5f5 solid 10px;
    .item {
      @include flex(row);
      align-items: center;
      height: 180px;
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
        width: 88px;
        height: 88px;
        display: inline-block;
        margin: 0 32px;
        border:8px solid #fff;
        border-radius: 50%;
        box-shadow: 3px 3px 1px #ccc;
      }
      > div {
        font-size: 32px;
        color: #333;
        line-height: 1.8;
        width: 344px;
        p {
          color: #666;
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
</style>
