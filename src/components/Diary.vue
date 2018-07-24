<!--  -->
<template>
  <div class="diary">
      <Tab v-model="activeKey" @change="tabChanged">
        <TabItem name="1" label="我和喵星人的故事">
        </TabItem>
        <TabItem name="2" label="为喵星人寻找主人">
        </TabItem>
      </Tab>
      <!-- <DiaryList ></DiaryList> -->
      <router-view></router-view>
  </div>
</template>

<script>
import Tab from '../base/Tab/Tab'
import TabItem from '../base/Tab/TabItem'

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
    TabItem
  },
  methods: {
    tabChanged (key) {
      if (+key === 1) {
        this.$router.replace({
          name: 'DiaryList',
          params: {
            id: 1
          }
        })
      } else {
        this.$router.replace({
          name: 'DiaryList',
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
