// Promise.resolve() 的规范规定：如果传递给它的值本身已经是一个 Promise，那么它将直接返回这个 Promise，而不会创建一个新的 Promise。
//const p1 = Promise.resolve(1)  //创建一个新的promise对象，状态为fulfilled，p1持有该promise 的引用
//const p2 = Promise.resolve(p1) //根据上面的规范，p2直接引用p1，而不是创建一个新的promise对象
//console.log(p1 === p2); // true


// const p1 = Promise.resolve(1)
// // Promise 解包 (Unwrapping) 机制，但这个解包/同化过程是异步的。它会把一个“同化”任务放进 微任务队列 (Microtask Queue) 中。
// p1是
// const p2 = new Promise((resolve) => resolve(p1))  // 这里new了一个全新的Promise对象，但是p2的状态会跟随p1
// console.log(p1 === p2); // false
// console.log(p1, p2); // p1是fulfilled，p2是pending


// const p1 = Promise.resolve(1) //fulfilled
// const p2 = Promise.resolve(2).then(() => p1) //pending  这里的.then被放入微任务队列
// // 这里p2.then的回调不会立即进入微任务队列，而是被注册到了p2的内部，等到p2的状态变为fulfilled后，then的回调才会进入微任务队列
// p2.then(() => {
//     console.log(1);
// }).then(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })

// // 将第一个.then回调放入微任务队列
// p1.then(() => {
//     console.log(4);

// }).then(() => {
//     console.log(5);

// })
//// 45123

// 第一次同步任务执行完成后呢,微任务队列中[() => p1,   () => console.log(4) ],先执行p2的then回调，返回p1，但是不会立即改变p2的状态，而是将p1的状态“同化”给p2，这个“同化”过程是异步的，所以p2的状态还是pending
// 然后执行p1的then回调，打印4，然后将下一个then回调放入微任务队列，[(内部任务：用p1解析p2),   () => console.log(5)]，然后执行第一个微任务，p2的状态变为fulfilled，然后将p2的第一个then回调放入微任务队列， [() => console.log(5), () => console.log(1)]



// 当一个 .then 的回调函数返回另一个 Promise 时，状态吸收（或称“解包”）并不是同步的。它会额外安排一个微任务来完成这个“同化”过程。
Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4) // 存在状态吸收，then返回的新的promise吸收了Promise.resolve(4)的状态
    })
    .then((res) => {
        console.log(res);
    })

Promise.resolve()
    .then(() => {
        console.log(1);
    }).then(() => {
        console.log(2);
    }).then(() => {
        console.log(3);
    }).then(() => {
        console.log(5);
    }).then(() => {
        console.log(6);
    })
console.log(typeof NaN);


// 0进入微任务队列，1进入微任务队列 打印0，返回 Promise.resolve(4)，触发状态吸收，需要插入​​两个​​微任务来处理状态吸收（规范要求）
// [解析Promise1, 输出2]，解析 Promise.resolve(4)，需要再插入一个微任务来完成状态吸收
// 打印1 将2放入微任务队列
// 执行同化操作