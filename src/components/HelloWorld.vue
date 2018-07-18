<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    show: function () {
      alert(123)
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
