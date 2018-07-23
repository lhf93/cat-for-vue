<!--  -->
<template>
  <div class="diary">
      <Tab v-model="activeKey" @change="tabChanged">
        <TabItem name="1" label="我和喵星人的故事"></TabItem>
        <TabItem name="2" label="为喵星人寻找主人"></TabItem>
      </Tab>
      <router-view></router-view>


      <Comment @commentSubmit="getComment"></Comment>
      <CommentItem @reply="getReply"></CommentItem>
  </div>
</template>

<script>
import { Comment, CommentItem } from '../base/Comment'
import Tab from '../base/Tab/Tab'
import TabItem from '../base/Tab/TabItem'
import DiaryList from 'components/DiaryList'
import DiaryDetail from 'components/DiaryDetail'

export default {
  data () {
    return {
      activeKey: '1'
    }
  },

  components: {
    Comment,
    CommentItem,
    Tab,
    TabItem,
    DiaryList,
    DiaryDetail
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
  justify-content: space-between;
}
.listContL{
  display: block;
  text-align: left;
  width:75%;
  position: relative;
}
.contTit{
  font-size: 20px;
}
.cont{
  text-indent: 28px;
  margin-top:28px;
  font-size: 14px;
  line-height: 20px;
}
.lookMore{
  color: #fba37e;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.listContR{
  height:220px;
  overflow: hidden;
  border-radius: 5px;
  width:18%;
  min-width: 180px;
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
  margin-top: 24px;
}
</style>
