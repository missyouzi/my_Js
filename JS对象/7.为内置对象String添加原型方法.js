// 我们希望为系统的对象的原型中添加方法，相当于在改变源码
// 我希望字符串中有一个倒序字符串的方法
String.prototype.myReverse = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    console.log(this[i])
  }
}

let str = "abcdefg"
str.myReverse()