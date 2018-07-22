<template>
<div class="container">
    <a class="avatar" href="#">
    <img src="" alt="">
    </a>
  <form class="publish" v-on:submit.prevent="popUp">
    <textarea
      class="text"
      maxlength="500"
      placeholder="请输入内容"
      v-model="textarea">
    </textarea>
    <upload-img></upload-img>
    <div class="location">
      <img class="icon-l" src="../assets/icon-l.png" alt="定位图标">
      <span>所在位置</span>
    </div>
    <input class="submit" type="submit" value="发布">
  </form>
</div>
</template>

<script>
import UploadImg from './UploadImg'
export default {
  name: 'Publish',
  components: {
    UploadImg
  },
  data () {
    return {
      textarea: ''
    }
  },
  methods: {
    popUp() {
      alert('发布成功！')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width: 1080px
  margin: 50px auto 0
  .avatar
    float: left;
    width: 80px
    height: 80px
    display: inline-block
    border-radius: 50%
    background-color: #ccc
.publish
  float: right
  width: 960px
  height: 1250px
  display: inline-block
  position: relative
  .text
    width: 100%
    height: 188px
    resize: none
    font-size: 14px
    line-height: 21px
    padding-left: 10px
    padding-top: 10px
    overflow: auto
    border-radius: 4px
    border: 1px solid #ccc
  .location
    width: 500px
    height: 50px
    line-height: 50px
    border: 1px solid #ccc
    border-radius: 2px
    font-size: 14px
    color: #747474
    vertical-align: middle
    .icon-l
      margin: 10px
      cursor: pointer
    span
      position: relative
      top: -30%
  .submit
    width: 500px
    height: 60px
    margin-top: 100px
    position: relative
    left: 230px
    background-color: #fc8d59
    color: #fff
    font-size: 30px
    font-family: "SimHei"
    cursor: pointer
    border: 1px solid #fc8d59
    border-radius: 4px
</style>
