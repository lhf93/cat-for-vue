<!--  -->
<template>
  <div class="diary">
      <Tab v-model="activeKey" @change="tabChanged">
        <TabItem name="1" label="我和喵星人的故事">
        </TabItem>
        <TabItem name="2" label="为喵星人寻找主人">
        </TabItem>
      </Tab>
      <DiaryList ></DiaryList>
  </div>
</template>

<script>
import Tab from '../base/Tab/Tab'
import TabItem from '../base/Tab/TabItem'
import DiaryList from './DiaryList'
import LikeIcon from './LikeIcon'
import CommentIcon from './CommentIcon'
import ShowPic from './ShowPic'

export default {
  data () {
    return {
      activeKey: this.$route.params.id,
      isCollect: 'true',
      collectNum: 53,
      likeNum: 53,
      commentNum: 53
    }
  },

  components: {
    DiaryList,
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
          name: 'Diary',
          params: {
            id: 1
          }
        })
      } else {
        this.$router.push({
          name: 'Diary',
          params: {
            id: 2
          }
        })
      }
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

</style>
