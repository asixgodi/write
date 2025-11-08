// let arr = [1, [2, [3, [4]]]]
// function flatten(arr) {
//     return arr.toString().split(',').map(Number)
// }
// console.log(flatten(arr));


// Promise.myallSettled = function (promises) {
//     return new Promise((resolve, reject) => {
//         if (typeof promises[Symbol.iterator] !== 'function') {
//             return reject(new TypeError('Arguments is not a function'))
//         }

//         const promisesArray = Array.from(promises)
//         const len = promisesArray.length
//         const result = new Array(len)
//         let settledCount = 0;
//         promisesArray.forEach((promise, index) => {
//             Promise.resolve(promise).then((value) => {
//                 result[index] = {
//                     status: 'fulfilled',
//                     value
//                 }
//             }, (reason) => {
//                 result[index] = {
//                     status: 'rejected',
//                     reason
//                 }
//             }).finally(() => {
//                 settledCount++
//                 if (settledCount === len) {
//                     resolve(result)
//                 }
//             })
//         })
//     })
// }

// let fn
// let bar = fn

// setTimeout(() => {
//     // 这里是局部作用域内的 fn，不会影响外部的 fn 变量，而且这里重新定义了fn
//     function fn() {
//         console.log('fn')
//     }
// }, 1000);
// setTimeout(() => {
//     bar()
// }, 2000);

const promise1 = new Promise((resolve, reject) => {
    console.log('promise1');
    resolve('resolve1')
})

const promise2 = promise1.then((res) => {
    console.log(res);
})
console.log('1', promise1);
console.log('2', promise2);

