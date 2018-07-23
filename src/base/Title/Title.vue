<!-- 评论 -->
<template>
  <div class="title-view">
    <img src="../../assets/icon-f.png" alt="" class="icon">
    <h5 class="title">{{text}}</h5>
    <span class="time">{{date}}</span>
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    date: {
      type: [Number, String],
      default: '2018-07-17 14：30'
    }
  }
}

</script>
<style scoped lang="stylus">
  .title-view
    display flex
    align-items center
    justify-content space-between
    .icon
      flex 0 0 20px
      width 20px
      height 20px
    .title
      flex 1
      margin-left 5px
      font-weight normal
      align-content flex-start
      text-align left
      font-size: 20px
    .time
      color #666
      font-size: 14px
</style>
