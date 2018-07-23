<!--  -->
<template>
  <div class="location">
    <img class="icon-l" src="../../assets/icon-l.png" alt="定位图标">
    <span>所在位置</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  methods: {}
}

</script>
<style lang='stylus' scoped>
  .location
    // width: 500px
    display flex
    align-items center
    height: 50px
    line-height: 50px
    // border: 1px solid #ccc
    // border-radius: 2px
    font-size: 14px
    color: #747474
    // vertical-align: middle
    .icon-l
      margin-right: 10px
      cursor: pointer
    // span
      // position: relative
      // top: -30%
</style>
