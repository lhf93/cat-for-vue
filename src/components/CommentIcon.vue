<template>
  <span class="iconfont icon-message"  @click="clickCommentIcon"></span>
</template>
<script>
export default {
  name: 'CommentIcon',
  methods: {
    clickCommentIcon () {
      this.$emit('change')
    }
  }
}
</script>
<style lang="stylus" scoped>
.icon-message
  color: #d3d3d3
  font-size: 20px
  cursor: pointer
</style>
