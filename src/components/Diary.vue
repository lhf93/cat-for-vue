<!--  -->
<template>
  <div class="diary">
      <ul class="listBox">
        <li class="listCont">
          <CTitle text="aaaabbbbbcccc"></CTitle>
          <div class="listContL">
            <article class="cont">
              <p>你个话痨小孩！说实话我觉得活泼张扬、清新单纯的你是还不错，就像肯德基柚香鸡腿堡，柚子酱搭配烤鸡腿，酸甜鲜嫩，另外你的约定我勉强答应了！#红黑双堡敢爱敢怼#今年夏天约上你的兄弟也一起来肯德基分享全新红黑双堡吧。</p>
              <span class="lookMore" @click="enterDirayDetail">查看全文 ></span>
            </article>
            <div class="listContR">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531910552309&di=f4fdf780dfefa2a2878d5a7828b7f2c9&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F18%2F09%2F89u58PICUtM_1024.jpg" alt="">
            </div>
          </div>
        </li>
      </ul>
      <Tab v-model="activeKey">
        <TabItem name="1" label="我和喵星人的故事">
          <div style="padding-top: 30px">
            我和喵星人的故事
          </div>
        </TabItem>
        <TabItem name="2" label="为喵星人寻找主人">为喵星人寻找主人</TabItem>
      </Tab>
  </div>
</template>

<script>
import Tab from '../base/Tab/Tab'
import TabItem from '../base/Tab/TabItem'
import CTitle from '../base/Title/Title'

export default {
  data () {
    return {
      activeKey: '1'
    }
  },

  components: {
    Tab,
    TabItem,
    CTitle
  },

  methods: {
    enterDirayDetail () {
      this.$router.push({
        path: '/diaryDetails'
      })
    }
  }
}

</script>
<style scoped>
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
.listBox{
  width:50%;
  height:auto;
  margin: 0 auto;
}
.listCont{
  width: 100%;
  height:250px;
  box-sizing: border-box;
  margin-top:28px;
  padding-bottom:30px;
  border-bottom:1px  #000 solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  /* height:220px; */
  overflow: hidden;
  border-radius: 5px;
  /* width:18%; */
  /* min-width: 180px; */
}
.time{
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: right;
}
.listContR>img{
  width: 100%;
  height: 180px;
  /* margin-top: 24px; */
}
</style>
