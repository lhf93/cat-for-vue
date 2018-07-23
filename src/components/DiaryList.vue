<!--  -->
<template>
  <div class="diary-list">
      <ul class="listBox">
        <li class="listCont">
          <CTitle text="aaaabbbbbcccc"></CTitle>
          <div class="listContL">
            <article class="cont">
              <p>
                你个话痨小孩！说实话我觉得活泼张扬、清新单纯的你是还不错，
                就像肯德基柚香鸡腿堡，柚子酱搭配烤鸡腿，酸甜鲜嫩，另外你的约定我勉强答应了！
                #红黑双堡敢爱敢怼#今年夏天约上你的兄弟也一起来肯德基分享全新红黑双堡吧。
              </p>
              <span class="lookMore" @click="enterDirayDetail">查看全文 ></span>
            </article>
            <div class="listContR">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531910552309&di=f4fdf780dfefa2a2878d5a7828b7f2c9&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F18%2F09%2F89u58PICUtM_1024.jpg" alt="">
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import CTitle from '../base/Title/Title'

export default {
  data () {
    return {
    }
  },
  components: {
    CTitle
  },
  methods: {
    enterDirayDetail () {
      this.$router.push({
        name: 'DiaryDetail',
        params: {
          id: 123
        }
      })
    }
  }
}

</script>
<style lang='stylus' scoped>
.diary-list {
  margin-top 50px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
.listBox{
  width:1000px;
  margin: 0 auto;
}
.listCont{
  // width: 100%;
  // height:250px;
  // box-sizing: border-box;
  margin-top:28px;
  padding-bottom:30px;
  border-bottom:1px  #ccc solid;
  display: flex;
  flex-direction: column;
}
.listContL{
  margin-top: 24px;
  display: flex;
  /* text-align: left */
  /* width:75%; */
  position: relative;
}
.contTit{
  font-size: 20px;
}
.cont{
  flex: 1;
  position: relative;
  text-indent: 28px;
  /* margin-top:28px; */
  font-size: 14px;
  line-height: 20px;
}
.lookMore{
  cursor: pointer;
  color: #fba37e;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.listContR{
  width: 180px;
  height: 180px;
  margin-left: 50px;
  overflow: hidden;
  border-radius: 5px;
}
.time{
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: right;
}
.listContR>img{
  width: 100%;
  height: 100%;
  /* margin-top: 24px; */
}
.icon-collection,
.icon-collection_fill {
  cursor: pointer;
}
.icon-collection {
  color: #d3d3d3;
  font-size: 30px;
}
.icon-collection_fill {
  color: #fee090;
  font-size: 30px;
}
.icons {
  font-size: 0px;
  height: 20px;
  line-height: 20px;
}
.icons span {
  font-size: 12px;
  margin-left: 3px;
}
.icons .collect,
.icons .comment,
.icons .like {
  font-size: 20px;
}
.icons .comment {
  margin-left: 65px;
}
.icons .comment-span {
  margin-right: 65px;
}
</style>
