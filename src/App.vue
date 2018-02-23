

<template>
  <div class="hello">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <firstcomponent></firstcomponent>
    <router-link to="/view1">Go to view1</router-link>
    <router-link to="/view2">Go to view2</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import firstcomponent from './components/first-component.vue'
export default {
  name: 'hello',
  data() {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  },
  components: {firstcomponent}
}
</script>

<!-- 样式代码 -->
<style>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
