<template>
         <div class="cat-btn" :disabled="disabled" :class="{
           'cat-btn-disabled':disabled,
           'cat-btn-big':big,
           'cat-btn-small':small,
           'cat-btn-not-radius':notRadius,
           'cat-btn-hollow':hollow,
           'cat-btn-fLeft':fLeft,
           'cat-btn-fRight':fRight
           }" @click="$emit('click')">
            {{text}}
          </div>
    </template>
<script>
export default {
  props: {
    disabled: Boolean,
    text: String,
    big: Boolean,
    small: Boolean,
    fLeft: Boolean,
    fRight: Boolean,
    hollow: Boolean,
    notRadius: Boolean
  },
  methods: {
  }
}
</script>
<style>
      .cat-btn{
        display: inline-block;
        color:#fff;
        background-color: #fc8d59;
        padding:12px 30px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .cat-btn:hover{
        background-color: #f25a13;
      }
      .cat-btn.cat-btn-big{
      font-size: 22px;
      }
      .cat-btn.cat-btn-small{
        font-size: 12px;
        padding:9px 12px;
      }
    .cat-btn.cat-btn-disabled{
      background-color:#999999;
    }
    .cat-btn.cat-btn-not-radius{
      border-radius: 0;
    }
    .cat-btn.cat-btn-fLeft{
      float: left;
    }
    .cat-btn.cat-btn-fLeft{
      float: right;
    }
    .cat-btn.cat-btn-hollow{
        background-color: #fff;
        color:#fc8d59;
        border: 1px solid #fc8d59;
    }
    .cat-btn-hollow:hover{
      background: #fc8d59;
      color: #fff;
    }
</style>
