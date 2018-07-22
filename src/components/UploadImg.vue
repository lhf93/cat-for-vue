<template>
<div class="container">
  <div class="upload-imgs">
    <label class="file-select">
      <input
       class="file-elem"
       type="file"
       multiple
       accept="image/*"
       ref="inputer"
       @change="handleFiles"
      >
      点击添加图片
    </label>
    <p v-html="tip" class="tips" v-show="showTips"></p>
    <ul class="file-list">
      <li
        class="data-list"
        v-for="item of imgList"
        :key="item.fileName"
        >
        <img
          class="upload-image"
          :src="item.imgUrl"
          @click="imgPreview"
        />
      </li>
    </ul>
  </div>
  <div
    class="preview"
    @mouseover="showImg==true?showBtn=true:showBtn=false"
    @mouseout="showImg==true?showBtn=false:showBtn=false">
    <p v-show="showText">点击图片可在此处预览</p>
      <img v-show="showImg" :src="previewImgURL">
    <img
      v-show="showBtn"
      class="delete-btn"
      @click="deleteImg"
      src="../assets/icon-d.png"
    />
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
      showTips: true,
      showBtn: false,
      previewImgURL: '',
      tip: '还未上传图片!',
      imgList: [
      //   {
      //    imgUrl: 'static/images/1119774901.png'
      //  },
      //  {
      //   imgUrl: 'static/images/818631595.png'
      // }, {
      //   imgUrl: 'static/images/1192470880.png'
      // }, {
      //   imgUrl: 'static/images/1379422516.png'
      // }, {
      //   imgUrl: 'static/images/456974699.png'
      // }, {
      //   imgUrl: 'static/images/1638780962.png'
      // }, {
      //   imgUrl: 'static/images/736785289.png'
      // }, {
      //   imgUrl: 'static/images/586689389.png'
      // }, {
      //   imgUrl: 'static/images/1503155070.jpg'
      // }
      ]
    }
  },
  methods: {
    imgPreview (event) {
      this.showText = false
      this.previewImgURL = event.target.src
      this.showImg = true
      this.showTips = false
    },
    handleFiles () {
      let files = this.$refs.inputer.files
      let URL = window.URL || window.webkitURL
      let len = files.length
      let listLen = this.imgList.length
      if (listLen === 0) {
        for (let i = 0; i < len; i++) {
          if (this.imgList.length >= 9) {
            this.tip = '最多只能上传9张图片!'
            this.showTips = true
            break
          }
          let obj = {}
          obj.fileName = files[i].name
          // 看支持不支持FileReader
          if (!files.length || !URL.createObjectURL) return
          // 创建URL，并设置图片的源为表示文件的URL对象
          obj.imgUrl = URL.createObjectURL(files[i])
          this.imgList.push(obj)
        }
        this.showTips = false
      } else {
        for (let i = 0; i < len; i++) {
          if (this.imgList.length >= 9) {
            this.tip = '最多只能上传9张图片!'
            this.showTips = true
            break
          }
          let count = 0
          for (let j = 0; j < listLen; j++) {
            if (this.imgList[j].fileName === files[i].name) {
              count++
            }
          }
          if (count === 0) {
            let obj = {}
            obj.fileName = files[i].name
            // 看支持不支持FileReader
            if (!files.length || !URL.createObjectURL) return
            // 创建URL，并设置图片的源为表示文件的URL对象
            obj.imgUrl = URL.createObjectURL(files[i])
            this.imgList.push(obj)
          }
        }
      }
    },
    deleteImg () {
      for (let i = 0; i < this.imgList.length; i++) {
        if (this.imgList[i].imgUrl === this.previewImgURL) {
          this.imgList.splice(i, 1)
          this.showImg = false
          this.showText = true
        }
      }
      if (this.imgList.length === 0) {
        this.tip = '还未上传图片!'
        this.showTips = true
      }
    }
  }
}
</script>
<style  lang="stylus" scoped>
.container
  width: 100%
  height: 430px
  margin-top: 30px
  position: relative
  .upload-imgs
    position: relative
    width: 405px
    height: 400px
    overflow: hidden
    .tips
      position: absolute
      right: 0
      top: 0
      margin: 0
      font-size: 20px
    .file-elem
      display: none
    .file-select
      position: absolute
      left: 0
      top: 0
      width: 124px
      height: 30px
      font-size: 14px
      font-family: "SimHei"
      line-height: 30px
      text-align: center
      color: #fff2ee
      background-color: #fc8d59
      border-radius: 4px
      cursor: pointer
    .file-list
      width: 360px
      height: 330px
      font-size: 0
      position: absolute
      left: 75px
      bottom: 32px
      padding-left: 0
      .data-list
        width: 80px
        height: 80px
        margin: 15px
        display: inline-block
        position: relative
      .upload-image
        width: 80px
        height: 80px
        object-fit: cover
        cursor: pointer
  .preview
    width: 400px
    height: 400px
    position: absolute
    right: 22px
    top: 0
    border-radius: 4px
    text-align: center
    line-height: 400px
  .preview p
    font-size: 32px
  .preview img
    width: 400px
    height: 400px
    object-fit: cover
  .preview .delete-btn
        position: absolute
        right: 0
        top: 376px
        width: 24px
        height 24px
        cursor: pointer
</style>
