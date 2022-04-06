<!--
 * @Author: your name
 * @Date: 2021-12-01 00:41:04
 * @LastEditTime: 2021-12-10 18:41:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-闭包\bibao\src\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Test2 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test2 from './components/test2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
