<template>
  <div class="hello">
    <h1>基础组件展示</h1>
    <h3>cat for vue</h3>
    <h4>①按钮组件展示</h4>
    <ul>
      <li>
       <BaseButton v-on:click="show" text="我是普通按钮"></BaseButton>
      </li>
      <li>
         <BaseButton text="我是大个按钮" :big = 'true'></BaseButton>
      </li>
       <li>
         <BaseButton text="我是小个按钮" :small = 'true'></BaseButton>
      </li>
       <li>
         <BaseButton text="我是禁用按钮" :disabled = 'true'></BaseButton>
      </li>
       <li>
         <BaseButton text="我是无圆角" :notRadius = 'true'></BaseButton>
      </li>
       <li>
         <BaseButton text="我是浮动按钮" :fLeft = 'true'></BaseButton>
      </li>
       <li>
         <BaseButton text="我是空心小按钮" :small = 'true' :hollow = 'true'></BaseButton>
      </li>
    </ul>
    <h4>②弹窗组件展示</h4>
    <ul>
      <li>
        <BaseButton text='调出弹框(confirm)' @click="openAlert1"></BaseButton>
        <BaseAlertMsg type="confirm" :cancelText="cancelText" :confirmText="confirmText" @confirm="clickConfirm()" v-on:cancel="clickCancel()" :title="title" :content="content" v-model="showAlert1"></BaseAlertMsg>
      </li>
      <li>
        <BaseButton text='调出弹框(非confirm)' @click="openAlert2"></BaseButton>
        <BaseAlertMsg :confirmText="confirmText" @confirm="know()" :title="title" :content="content" v-model="showAlert2"></BaseAlertMsg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '温馨提示',
      confirmText: '我再想想吧',
      cancelText: '我准备好了',
      content: '喂养照顾喵星人可不是一件简单的事情，不仅要保证它的温饱，还要时刻注意他的健康状况，更不可因为自身原因随意丢弃。你确定自己准备好了吗？',
      showAlert1: false,
      showAlert2: false
    }
  },
  methods: {
    show: function () {
      alert(123)
    },
    openAlert1: function (index) {
      this.showAlert1 = true
    },
    openAlert2: function (index) {
      this.showAlert2 = true
    },
    clickConfirm: function () {
      alert('点击了确认按钮')
    },
    clickCancel: function () {
      alert('点击了取消按钮')
    },
    know: function () {
      alert('我知道了')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
