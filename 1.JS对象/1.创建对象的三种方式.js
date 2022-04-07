// 2.创建对象的三种方式
// 2.(1).字面量方式
let obj = {
  name: 'cc',
  age: '24',
  eat: function () {
    console.log('eat方法')
  }
}
// console.log(obj)






// 2.(2).调用系统的构造函数
// 注意方式(1)和方式(2)只能创建Object对象，不能创建类似Person或者Dog的对象
let obj2 = new Object()
obj2.name = "cc2"
obj2.age = 24
obj2.eat = function () {
  console.log('eat2方法')
}
// obj2.eat()
// console.log(obj2)






// 2.(3).自定义构造函数
// 函数声明形式，还有一种是函数表达式，如let MyObj = function(){}

// 我下意识写的：没有传参
function MyObj() {
  this.name = 'cc3';
  this.age = 24;
  this.eat = function () {
    console.log('eat3方法')
  }
}
// let obj3 = new MyObj()
// console.log(obj3.name)
// obj3.eat()
// console.log(obj3)

// 其实应该这么写：有传参
function MyObj(name, age) {
  this.name = name
  this.age = age
  this.eat = function () {
    console.log('eat3方法')
  }
}

let obj3 = new MyObj('cc3', 24) // 创建对象-->实例化一个对象的同时对属性进行初始化
// console.log(obj3.name)
// obj3.eat()
// console.log(obj3)
// console.log(obj3 instanceof MyObj) // 为true,说明obj3是MyObj类型的对象








// 1.对象：
//   特指的某个事物，具有属性和方法（一组无序的属性的集合）
//   特征：属性
//   行为：方法
// 2.创建对象的三种方式
//   (1)字面量的方式
//   (2)调用系统的构造函数
//   (3)自定义构造函数
//   (4)工厂模式，见2.工厂模式与自定义构造函数的区别.js

