<!--
 * @Author: your name
 * @Date: 2021-12-01 01:54:34
 * @LastEditTime: 2021-12-01 01:54:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bibao\src\components\test.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-12-01 00:41:04
 * @LastEditTime: 2021-12-01 01:50:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bibao\src\components\HelloWorld.vue
-->
<template>
  <div>
    <div>余额：{{money}}</div>
    <input type="text" v-model="addMoney" />
    <button @click="cunFn">存</button>
    <button @click="quFn">取</button>
    <button @click="clearFn">清零</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      money: 0,
      addMoney: 0,
      account: this.f1() // 闭包 // 31行的操作var num = 0只在这执行了一次
    }
  },
  methods: {
    f1() {
      var num = 0 // 银行账户余额
      return {
        cun: function (add) {
          if (add < 0) {
            alert('请输入大于0的值！')
          } else {
            num = num + add
          }
          return num
        },
        qu: function (add) {
          if (add < 0) {
            alert('请输入大于0的值！')
          } else {
            if (num - add >= 0) {
              num = num - add
            } else {
              alert('账户余额不足！')
            }
          }
          return num
        },
        clear: function () {
          num = 0
          return num
        }
      }
      // function (add, type) {
      //   // console.log("匿名函数内部")
      //   if (add < 0) {
      //     alert('请输入大于0的值！')
      //   }
      //   if (type === '取') {
      //     if (num - add >= 0) {
      //       num = num - add
      //     } else {
      //       alert('账户余额不足！')
      //     }
      //   } else if (type === '存') {
      //     num = num + add
      //   } else {
      //     alert('请输入正确的类型：存or取')
      //   }
      //   return num
      // }
    },
    cunFn() {
      // this.money = this.account(Number(this.addMoney), '存')
      this.money = this.account.cun(Number(this.addMoney))
    },
    quFn() {
      // this.money = this.account(Number(this.addMoney), '取')
      this.money = this.account.qu(Number(this.addMoney))
    },
    clearFn() {
      this.money = this.account.clear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
