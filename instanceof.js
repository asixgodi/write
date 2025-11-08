// function myInstanceOf(left, right) {
//     //得到实例对象的原型
//     let proto = Object.getPrototypeOf(left)
//     //得到构造函数的原型对象
//     let prototype = right.prototype
//     while (true) {
//         if (!proto) return false
//         else if (proto === prototype) {
//             return true
//         }
//         // 继续往原型链上找
//         proto = Object.getPrototypeOf(proto)
//     }
// }



function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        if (!proto) return false
        else if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

const arr = [1, 2, 3]
console.log(myInstanceof(arr, Array))