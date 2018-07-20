<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{title}}</div>
            <div class="content" v-html="content"></div>
            <ul class="btn-box" v-if="type == 'confirm'">
                <li class="f_l">
                    <BaseButton @click="closeBtn" :disabled="true" :text="cancelText"></BaseButton>
                </li>
                <li class="f_r">
                    <BaseButton @click="confirmBtn" :text="confirmText"></BaseButton>
                </li>
            </ul>
             <ul class="btn-box center" v-if="type != 'confirm'">
                <li class="m_0">
                   <BaseButton @click="confirmBtn" :text="confirmText"></BaseButton>
                </li>
            </ul>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    value: {},
    type: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
      showMask: false
    }
  },
  methods: {
    closeMask () {
      this.showMask = false
    },
    closeBtn () {
      this.$emit('cancel')
      this.closeMask()
    },
    confirmBtn () {
      this.$emit('confirm')
      this.closeMask()
    }
  },
  mounted () {
    this.showMask = this.value
  },
  watch: {
    value (newVal, oldVal) {
      this.showMask = newVal
    },
    showMask (val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style lang="less" scoped>
    .m_0{
        margin:0 auto;
    }
    .f_l{
        float: left;
    }
    .f_r{
        float: right;
    }
    .center{
        text-align: center;
    }
    .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 600px;
            height: 340px;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 5px;
            border:5px solid #fc8d59;
            position: relative;
            .dialog-title{
                width: 100%;
                font-size: 22px;
                color: #333333;
                font-weight: 600;
                padding: 36px 50px 20px 17px;
            }
            .content{
                text-indent: 20px;
                color: #333;
                line-height: 26px;
                padding: 0 20px;
                box-sizing: border-box;
            }
            ul.btn-box {
                list-style-type: none;
                padding: 0;
                position: absolute;
                bottom: 85px;
                width: 100%;
                box-sizing: border-box;
                padding:0 80px;
                li {
                    display: inline-block;
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }
</style>
