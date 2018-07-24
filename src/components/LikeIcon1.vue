<template>
  <div>
    <span
      class="iconfont"
      :class="isLike?'icon-like':'icon-like_fill'"
      @click="changeLikeState">
    </span>
    <i>{{count}}</i>
  </div>
</template>
<script>
export default {
  name: 'LikeIcon',
  props: {
    isLike: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeLikeState () {
      this.$emit('change')
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
