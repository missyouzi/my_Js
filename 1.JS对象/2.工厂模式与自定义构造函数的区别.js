// 1.自定义构造函数创建对象(首字母大写)（优化后的工厂模式）
function MyObj(name, age) {
  this.name = name
  this.age = age
  this.eat = function () {
    console.log('eat3方法')
    console.log('--this--', this) // MyObj本身
  }
}

let obj3 = new MyObj('cc3', 24)
// console.log(obj3.name)
// obj3.eat()
// console.log(obj3)
// console.log(obj3 instanceof MyObj) // 为true,说明obj3是MyObj类型的对象






// 2.工厂模式创建对象(首字母小写)
function myObj(name, age) {
  // 创建一个对象，并对对象拓展属性和方法
  var o = new Object()
  o.name = name
  o.age = age
  o.eat = function () {
    console.log('工厂模式eat方法')
    console.log('--this1--', this) // o本身
  }
  console.log('--this2--', this)
  return o
}
let obj1 = myObj('cc1', 24)  //工厂模式创建对象，它首先创建了一个函数，然后让obj1=这个函数，并传参，并不需要new，因为函数不需要new
console.log(obj1.name)
obj1.eat()







// 共同点：
//   都是函数，都可以创建对象，都可以传参
// 不同点：
//   1. 工厂模式
//       函数名小写
//       函数内部需要new
//       函数内部有返回值，需要return
//       函数内部new之后的对象是当前的对象
//       函数外部创建对象时直接调用
//   2. 自定义构造函数
//       函数名大写
//       函数内部不需要new，直接调用
//       函数内部没有返回值，不需要return
//       函数内容this是当前对象
//       函数外部创建对象时通过new的方式






