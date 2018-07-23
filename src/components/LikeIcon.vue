<template>
  <span
    class="iconfont"
    :class="isLike?'icon-like':'icon-like_fill'"
    @click="changeLikeState">
  </span>
</template>
<script>
export default {
  name: 'LikeIcon',
  data () {
    return {
      isLike: 'true'
    }
  },
  methods: {
    changeLikeState () {
      this.isLike = !this.isLike
      this.$emit('change', this.isLike)
    }
  }
}
</script>
<style lang="stylus" scoped>
.icon-like,
.icon-like_fill
  cursor: pointer
  font-size: 20px
.icon-like
  color: #d3d3d3
.icon-like_fill
  color: #d73027
</style>
