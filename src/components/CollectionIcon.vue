<template>
  <span
    class="iconfont"
    :class="isCollect?'icon-collection':'icon-collection_fill'"
    @click="changeCollectState">
  </span>
</template>
<script>
export default {
  name: 'CollectionIcon',
  data () {
    return {
      isCollect: 'true'
    }
  },
  methods: {
    changeCollectState () {
      this.isCollect = !this.isCollect
      this.$emit('change')
    }
  }
}
</script>
<style lang="stylus" scoped>
.icon-collection,
.icon-collection_fill
  cursor: pointer
  font-size: 30px
.icon-collection
  color: #fee090
.icon-collection_fill
  color: #fee090
</style>
