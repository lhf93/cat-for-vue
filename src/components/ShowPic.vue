<template>
<div class="container">
  <img class="image" :src="imgUrl" >
  <a class="avatar" href="#">
  </a>
  <span class="name">昵称</span>
  <like-icon class="like" @change="changeLikeState"></like-icon>
  <comment-icon class="comment" @change="clickCommentIcon"></comment-icon>
  <collection-icon class="collection" @change="changeCollectState"></collection-icon>
</div>
</template>
<script>
import LikeIcon from './LikeIcon'
import CommentIcon from './CommentIcon'
import CollectionIcon from './CollectionIcon'
export default {
  name: 'ShowPic',
  data () {
    return {
      imgUrl: 'static/images/1907992647.jpg'
    }
  },
  components: {
    LikeIcon,
    CommentIcon,
    CollectionIcon
  },
  methods: {
    changeLikeState () {
    },
    clickCommentIcon () {
    },
    changeCollectState () {
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  width: 275px
  height: 360px
  position: relative
  .image
    width: 275px
    height: 320px
    object-fit: cover
    border-radius: 4px solid #fff
    position: absolute
    left: 0
    top: 0
  .like,
  .comment,
  .collection,
  .avatar,
  .name
    position: absolute
  .like
    right: 30px
    bottom: 5px
  .comment
    right: 0
    bottom: 5px
  .collection
    right: 14px
    top: 9px
  .avatar
    width: 30px
    height: 30px
    border-radius: 50%
    left: 15px
    bottom: 0px
    background-color: #e8c3c3
  .name
    left: 56px
    bottom: 7px
    font-size: 14px
</style>
