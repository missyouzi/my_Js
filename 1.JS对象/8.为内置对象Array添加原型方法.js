// 为Array内置对象的原型对象中添加倒序方法
Array.prototype.mySort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] < this[j + 1]) {
        let temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}

let arr = [100, 3, 56, 78, 23, 10]
arr.mySort()
console.log(arr)
