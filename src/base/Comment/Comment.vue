<!-- 评论 -->
<template>
  <div class="comment-view">
    <div class="avatar-wrapper" v-if="mode !== 'reply'">
      <img :src="avatar" alt="XX的头像">
    </div>
    <div class="commet-wrapper">
      <input type="text" placeholder="说点什么..." v-model="text">
    </div>
    <Button :text="'评论'" class="commet-button" @click="submit"></Button>
  </div>
</template>

<script>
import Button from 'components/BaseButton'

/**
 * 评论组件
 * 属性：avatar。-》评论人的头像
 * 事件：commentSubmit(msg)。-》用户点击评论出发的事件
 * msg: 用户评论内容
 */

export default {
  name: 'Comment',

  props: {
    avatar: {
      type: String,
      default: require('../../../build/logo.png')
    },

    mode: String
  },

  data () {
    return {
      text: ''
    }
  },

  components: {
    Button
  },

  methods: {
    submit () {
      this.$emit('commentSubmit', this.text)
    }
  }
}

</script>
<style scoped lang="stylus">
  .comment-view
    display flex
    height 30px
    align-items center
    .avatar-wrapper
      margin-left 10px
      margin-right 10px
      width 30px
      height 30px
      border-radius 50%
      overflow hidden
      img
        width 100%
    .commet-wrapper
      display flex
      flex 1
      margin-right 20px
      height 100%
      border 1px solid #ccc
      input
        flex 1
        margin-left 20px
        border none
        outline none
        font-size 12px
    .commet-button
      padding 0
      text-align center
      width 40px
      height 24px
      line-height 24px
      font-size 12px
</style>
