<!-- 评论项，用来展示用户的评论 -->
<template>
  <div class="reply-view">
    <!-- 上半部分评论展示区 -->
    <div class="top-section">
      <div class="avatar-wrapper">
        <img :src="avatar" alt="XX的头像">
      </div>
      <div class="reply-display">
        <article class="reply-content">
          <span class="user">{{userName}}</span>：
          <p class="text">{{comment}}</p>
        </article>
        <p class="reply-part">
          <time class="reply-time">{{time}}</time>
          <span class="reply" @click="reply">回复</span>
        </p>
      </div>
    </div>

    <!-- 下半部分 回复位置 -->
    <div class="bottom-section" v-show="replying">
      <div class="commet-wrapper">
        <input type="text" placeholder="说点什么..." v-model="text">
      </div>
      <Button :text="'评论'" class="commet-button" @click="submit"></Button>
    </div>
    <!-- <div class="reply-list">
    </div> -->
  </div>
</template>

<script>
import Button from 'components/BaseButton'
import Comment from './Comment'

/**
 * 评论项组件
 * 属性：avatar。-》评论人的头像
 *      userName -》评论人用户名
 *      userId -》评论人ID
 *      comment -》评论内容
 *      time -》 时间
 * 事件：reply(id, name)。-》用户点击回复出发的事件
 * id: 被评论的用户id,
 * name: 被评论的用户名
 */

export default {
  name: 'Comment',

  props: {
    avatar: {
      type: String,
      default: require('../../../build/logo.png')
    },

    userName: {
      type: String,
      default: '不将就的皮皮喵'
    },

    userId: [Number],

    comment: {
      type: String,
      default: '-你一路走来，扬起漫天尘埃；我一路陪你，剪断牵绊挂碍'
    },

    time: {
      type: [String, Number],
      default: '今天 12:20'
    }
  },

  data () {
    return {
      text: '',
      replying: false
    }
  },

  components: {
    Button,
    Comment
  },

  methods: {
    reply () {
      this.replying = true
    },

    submit () {
      if (!this.text) {
        alert('请添加回复内容')
        return
      }

      this.$emit('reply', this.userId, this.userName, this.text)
      this.replying = false
    }
  }
}

</script>
<style scoped lang="stylus">
  .reply-view
    display flex
    flex-direction column
    padding 9px 0
    font-size 12px
    .top-section
      display flex
      align-items center
      width 100%
      .avatar-wrapper
        margin-left 10px
        margin-right 10px
        width 30px
        height 30px
        border-radius 50%
        overflow hidden
        img
          width 100%
      .reply-display
        flex 1
        .reply-content
          margin-bottom 6px
          .user
            color #fc8d59
          .text
            color  #333
            display inline
        .reply-part
          display flex
          justify-content space-between
          color #666666
          // .reply-time
          .reply
            cursor pointer
            margin-right 10px
    .bottom-section
      display flex
      height 30px
      align-items center
      margin 10px 100px 10px 50px
      .commet-wrapper
        margin-right 20px
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
