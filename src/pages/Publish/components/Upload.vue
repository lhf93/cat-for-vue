<template>
<div class="container">
  <div class="uploadImgs">
    <input
    id="fileElem"
    type="file"
    multiple
    accept="image/*"
    ref="inputer"
    @change="handleFiles"
    >
    <a href="#" id="fileSelect" @click="upload">点击添加图片</a>
    <ul id="fileList">
      <li id="dataList" v-for="item of imgList" :key="item.id" @click="imgPreview">
        <img class="upload-image" :src="item.imgUrl"/>
      </li>
    </ul>
  </div>
  <div id="preview">
    <p v-bind:style="{'fontSize': '32px'}" v-if="showText">点击图片可在此处预览</p>
    <img ref="previewImg" v-if="showImg" src="#">
  </div>
</div>
</template>
<script>
export default {
  name: 'UploadImg',
  data () {
    return {
      showText: true,
      showImg: false,
      imgList: [
      //   {
      //    id: '1',
      //    imgUrl: 'static/images/1119774901.png'
      //  },
      //  {
      //   id: '2',
      //   imgUrl: 'static/images/818631595.png'
      // }, {
      //   id: '3',
      //   imgUrl: 'static/images/1192470880.png'
      // }, {
      //   id: '4',
      //   imgUrl: 'static/images/1379422516.png'
      // }, {
      //   id: '5',
      //   imgUrl: 'static/images/456974699.png'
      // }, {
      //   id: '6',
      //   imgUrl: 'static/images/1638780962.png'
      // }, {
      //   id: '7',
      //   imgUrl: 'static/images/736785289.png'
      // }, {
      //   id: '8',
      //   imgUrl: 'static/images/586689389.png'
      // }, {
      //   id: '9',
      //   imgUrl: 'static/images/1503155070.jpg'
      // }
      ],
      fileName: []
    }
  },
  methods: {
    upload (e) {
      let fileElem = document.getElementById('fileElem')
      if (fileElem) {
        fileElem.click()
      }
      e.preventDefault()
    },
    imgPreview (event) {
      this.showText = false
      this.$refs.previewImg.src = event.target.src
      this.showImg = true
    },
    handleFiles (e) {
      let files = this.$refs.inputer.files
      let URL = window.URL || window.webkitURL
      let len = files.length
      let currentFile = files[len - 1]
      if (this.fileName.indexOf(currentFile.name) === -1) {
        this.fileName.push(currentFile.name)
        // 创建URL，并设置图片的源为表示文件的URL对象
        let obj = {}
        obj.id = String(len)
        // 看支持不支持FileReader
        if (!files.length || !URL.createObjectURL) return
        obj.imgUrl = URL.createObjectURL(currentFile)
        this.imgList.push(obj)
      }
    }
  }
}
</script>
<style  lang="stylus" scoped>
.container
  width: 100%
  height: 4.3rem
  margin-top: 0.3rem
  position: relative
  .uploadImgs
    position: relative
    width: 4.05rem
    height: 4rem
    #fileElem
      display: none
    #fileSelect
      position: absolute
      left: 0
      top: 0
      width: 1.24rem
      height: 0.3rem
      font-size: 0.14rem
      font-family: "SimHei"
      line-height: 0.3rem
      text-align: center
      color: #fff2ee
      background-color: #fc8d59
      border-radius: 0.04rem
    #fileList
      width: 3.3rem
      height: 3.3rem
      font-size: 0
      position: absolute
      right: 0
      bottom: 0.32rem
    #fileList li
          width: 0.8rem
          height: 0.8rem
          margin: 0.15rem
          display: inline-block
    #fileList li img
      width: 100%
      height: 100%
      cursor: pointer
  #preview
    width: 4rem
    height: 4rem
    position: absolute
    right: 0.22rem
    top: 0
    bottom: 0
    border-radius: 0.04rem
    text-align: center
    line-height: 4rem
</style>
