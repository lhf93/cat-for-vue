<!--  -->
<template>
  <div class="diaryDetails">
    <CTitle text="aaaabbbbbcccc"></CTitle>
    <div class="cont">
      <p class="article">"But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment "But consider your daughters. Only think what an establishment </p>
      <img class="bigImg" :src="imgSrc" alt="">
      <div class="smallImgBox">
        <div class="img-list">
          <div class="smallImg" v-for="(item,index) in items" @click="changImg(index)" :key="index">
            <img :src="item.img" />
          </div>
        </div>
         <Location></Location>
      </div>
      <Button :small="true" :hollow="true" text="申请当它的主人" class="button"></Button>
      <p class="icon-group">
        <CollectionIcon class="collection icon"></CollectionIcon>12
        <LikeIcon class="icon"></LikeIcon>45
        <CommentIcon class="icon"></CommentIcon>90
      </p>
    </div>
    <div class="comment-wrapper">
      <Comment @commentSubmit="getComment"></Comment>
    </div>
    <div class="comment-list">
      <CommentItem @reply="getReply"></CommentItem>
    </div>
  </div>
</template>

<script>
import { Comment, CommentItem } from '../base/Comment'
import Button from 'components/BaseButton'
import CTitle from '../base/Title/Title'
import Location from '../base/Location/Location'
import LikeIcon from './LikeIcon'
import CommentIcon from './CommentIcon'
// import ShowPic from './ShowPic'
import CollectionIcon from './CollectionIcon'

export default {
  data () {
    return {
      imgSrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532079901&di=136d3af21bf70015231bf122765a53dc&src=http://www.qqzhi.com/uploadpic/2015-01-27/090956855.jpg',
      items: [
        {
          img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532079901&di=136d3af21bf70015231bf122765a53dc&src=http://www.qqzhi.com/uploadpic/2015-01-27/090956855.jpg'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532091040549&di=22d79fc5dcdfc375b37a808a61a36086&imgtype=0&src=http%3A%2F%2Fimg.qikula.com%2Ffile%2Fimage%2Fpic%2F3a24673409n345490018c27.jpg'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532089985357&di=f58734db1b0326fe1f2257cbcdac646e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1801%2F10063WH1-9.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532089985355&di=2e9043d98478ab5a6f1208486ce4f5ea&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-05-27%2F195332242.jpg'
        },
        {
          img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532079901&di=136d3af21bf70015231bf122765a53dc&src=http://www.qqzhi.com/uploadpic/2015-01-27/090956855.jpg'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532091040549&di=22d79fc5dcdfc375b37a808a61a36086&imgtype=0&src=http%3A%2F%2Fimg.qikula.com%2Ffile%2Fimage%2Fpic%2F3a24673409n345490018c27.jpg'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532089985357&di=f58734db1b0326fe1f2257cbcdac646e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1801%2F10063WH1-9.jpg'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532089985355&di=2e9043d98478ab5a6f1208486ce4f5ea&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-05-27%2F195332242.jpg'
        }
      ]
    }
  },

  components: {
    Button,
    Comment,
    CommentItem,
    Location,
    CTitle,
    LikeIcon,
    CommentIcon,
    CollectionIcon
  },

  methods: {
    changImg (index) {
      this.imgSrc = this.items[index].img
    },

    getReply (id, name) {

    },

    getComment (msg) {

    }
  }
}
</script>
<style scoped>
.diaryDetails {
  margin: 50px auto;
  width: 1000px;
  height: auto;
}
.tit {
  font-size: 20px;
  line-height: 20px;
  color: #333333;
}
.time {
  float: right;
  font-size: 10px;
  color: #919191;
  line-height: 24px;
}
.cont > .article {
  text-indent: 28px;
  font-size: 14px;
  line-height: 22px;
  margin-top: 32px;
}
.cont .icon-group {
  display: flex;
  justify-content: flex-end;
  color: #ccc;
}
.cont .icon-group .icon {
  margin-left: 10px
}
.cont .icon-group .collection {
  font-size: 20px;
  color: #ccc;
}
.cont .button {
  margin: auto;
  display: block;
  padding: 0;
  font-size: 20px;
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.bigImg {
  width: auto;
  height: auto;
  display: block;
  margin: 20px auto;
}
.smallImgBox {
  width: 805px;
  margin: auto;
}
.img-list {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.img-list .smallImg {
  width: 80px;
  height: 80px;
  margin: 0 5px;
}
.smallImg > img {
  width: 100%;
  height: 100%;
}
.comment-wrapper {
  /* box-sizing: border-box; */
  padding-top: 20px;
  height: 58px;
  border-bottom: 1px solid #ccc;
}
.comment-list {
  border-bottom: 1px solid #ccc;
}
</style>
