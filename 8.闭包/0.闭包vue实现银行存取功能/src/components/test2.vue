<!--
 * @Author: your name
 * @Date: 2021-12-10 18:40:13
 * @LastEditTime: 2021-12-10 18:51:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-闭包\bibao\src\components\test2.vue
-->
<template>
  <div>
    <button @click="buttonClick">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    }
  },
  methods: {
    buttonClick() {
      this.testVariable()
    },
    testVariable() {
      let id = '11'
      if (this.flag) {
        id = '22'
      }
      console.log('id', id)
    }
  }
}
</script>

<style>
</style>