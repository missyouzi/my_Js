function MyObj(name, age) {
  this.name = name
  this.age = age
  this.eat = function () {
    console.log('eat方法')
    console.log('--this--', this) // MyObj本身
  }
}

let obj1 = new MyObj('cc1', 24)
let obj2 = new MyObj('cc1', 24)
console.log(obj1.eat === obj2.eat) // false，不是同一个方法






for (let i = 0; i < 100; i++) {
  let obj = new MyObj('cc', 24) // 这样会创建100个对象
  // obj.eat() // 这样会创建100个方法
}






// 以上写法太浪费内存空间了，可以改为
function myEat() {
  console.log('eat1方法')
}
// let myEat = 10 // 会造成命名冲突问题
function MyObj1(name, age) {
  this.name = name
  this.age = age
  this.eat = myEat
}
let obj3 = new MyObj1('cc3', 24)
let obj4 = new MyObj1('cc4', 24)
// console.log(obj3.eat === obj4.eat) // true，同一个方法
// 两者的eat方法是同一个eat方法，比较节省空间，但是这种写法也不太好，当我再定义一个变量名与方法同相同时
// 这样会造成命名冲突的问题。针对这种问题，可以利用原型来解决。（原型作用之一：数据共享，节省内存空间）


