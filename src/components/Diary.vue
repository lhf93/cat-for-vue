<!--  -->
<template>
  <div class="diary">
      <Tab v-model="activeKey" @change="tabChanged">
        <TabItem name="1" label="我和喵星人的故事"></TabItem>
        <TabItem name="2" label="为喵星人寻找主人"></TabItem>
      </Tab>
      <router-view></router-view>
  </div>
</template>

<script>
import Tab from '../base/Tab/Tab'
import TabItem from '../base/Tab/TabItem'
import LikeIcon from './LikeIcon'
import CommentIcon from './CommentIcon'
import ShowPic from './ShowPic'

export default {
  data () {
    return {
      activeKey: '1',
      isCollect: 'true',
      collectNum: 53,
      likeNum: 53,
      commentNum: 53
    }
  },

  components: {
    Tab,
    TabItem,
    LikeIcon,
    CommentIcon,
    ShowPic
  },
  methods: {
    tabChanged (key) {
      if (+key === 1) {
        this.$router.push({
          path: '/diary/list'
        })
      } else {
        this.$router.push({
          path: '/diary/detail'
        })
      }
    },

    getReply (id, name) {

    },

    getComment (msg) {

    },
    changeLikeState (isLike) {
      !isLike ? this.likeNum += 1 : this.likeNum -= 1
    },
    clickCommentIcon () {
      this.commentNum += 1
    },
    changeCollectState () {
      this.isCollect = !this.isCollect
      !this.isCollect ? this.collectNum += 1 : this.collectNum -= 1
    },
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
