// apply第一个参数传null的时候，this默认是window。
// 传obj时，this就表示obj这个对象了。即apply可以改变this的指向。
function f1(x, y) {
  console.log("结果是：" + (x + y))
  console.log(this.age)
}
// 不能把f1中的this.age的值打印出来，值为undefined
f1(10, 20) // 结果是：30  undefined

let obj = {
  age: 99
}

// 可以把f1中的this.age的值打印出来
f1.apply(obj, [10, 20]) // 结果是：30  99