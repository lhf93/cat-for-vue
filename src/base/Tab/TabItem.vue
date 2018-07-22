<!--  -->
<template>
  <div class="jr-tab-pannel" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  }
}

</script>
<style lang='less' scoped>
  .jr-tab-pannel {
    height: 100%
  }
</style>
