<!-- 评论项，用来展示用户的评论 -->
<template>
  <div class="comment-view">
    <div class="avatar-wrapper">
      <img :src="avatar" alt="XX的头像">
    </div>
    <div class="comment-display">
      <article class="comment-part">
        <span class="user">{{userName}}</span>：
        <p class="text">{{comment}}</p>
      </article>
      <p class="reply-part">
        <time class="reply-time">{{time}}</time>
        <span class="reply" @click="reply">回复</span>
      </p>
    </div>
  </div>
</template>

<script>
import Button from 'components/BaseButton'

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
      text: ''
    }
  },

  components: {
    Button
  },

  methods: {
    reply () {
      this.$emit('reply', this.userId, this.userName)
    }
  }
}

</script>
<style scoped lang="stylus">
  .comment-view
    display flex
    padding 9px 0
    align-items center
    font-size 12px
    // border-bottom 1px solid #ccc
    .avatar-wrapper
      margin-left 10px
      margin-right 10px
      width 30px
      height 30px
      border-radius 50%
      overflow hidden
      img
        width 100%
    .comment-display
      flex 1
      .comment-part
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
</style>
