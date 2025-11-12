const m = 5
const n = 4
// 方法一
// 解释：Array.from() 是一个静态方法，它可以从一个类数组对象或可迭代对象创建一个新的、浅拷贝的数组实例
// 外层的Array.from,创建一个长度为M的空数组，内层的函数，会使这个新的空数组每一个位置都执行一次这个函数，这个函数的返回值将成为新数组中对应位置的元素。
const arr1 = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))

// 方法二
const arr2 = new Array(m).fill(0).map(() => new Array(n).fill(0))