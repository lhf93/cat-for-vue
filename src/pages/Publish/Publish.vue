<template>
<div class="container">
    <a class="avatar" href="#">
    <img src="" alt="">
    </a>
  <form id="publish" action="#" method="post">
    <textarea
      id="text"
      placeholder="请输入内容"
      v-model="textarea">
    </textarea>
    <upload-img></upload-img>
    <div id="location">
      <i class="iconfont">&#xe63f;</i>
      <span>所在位置</span>
    </div>
    <input  id="submit" type="submit" value="发布">
  </form>
</div>
</template>

<script>
import UploadImg from './components/Upload'
export default {
  name: 'Publish',
  components: {
    UploadImg
  },
  data () {
    return {
      textarea: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width: 10.80rem
  margin: 0.5rem auto 0
.avatar
  float: left;
  width: 0.8rem
  height: 0.8rem
  display: inline-block
  border-radius: 50%
  background-color: #ccc
#publish
  float: right
  width: 9.6rem
  height: 12.50rem
  display: inline-block
  position: relative
#text
  width: 100%
  height: 1.88rem
  resize: none
  font-size: 0.14rem
  line-height: 0.21rem
  padding-left: 0.1rem
  padding-top:0.1rem
  overflow: auto
#location
  width: 5rem
  height: 0.5rem
  line-height: 0.5rem
  border: 1px solid #ccc
  border-radius: 2px
  font-size: 0.14rem
  color: #747474
#location .iconfont
  margin: 0.1rem
  font-size: 0.4rem
  color: #d73027
  cursor: pointer
#location span
  position: relative
  top: -10%
#submit
  width: 5rem
  height: 0.6rem
  margin-top: 1rem
  position: relative
  left: 2.3rem
  background-color #fc8d59
  color: #fff
  font-size: 0.3rem
  font-family: "SimHei"
  cursor: pointer
</style>
