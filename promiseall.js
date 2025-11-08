//1、参数：接受一个可迭代的对象
//2、返回值：返回一个promise
//3、成功的状态，失败的状态，对于传入的可迭代对象中非promise的值，会被视为成功的Promise，返回本身的值

//将多个promise合并为一个新的promise返回，每个promise的结果通过新的promise的resolve返回

Promise.myAll = function (promises) {
    //返回一个新的Promise
    return new Promise((resolve, reject) => {
        // 确保传入的是可迭代的对象
        if (typeof promises[Symbol.iterator] !== 'function') {
            return reject(new TypeError('Argument is not iterable'))
        }
        // 将可迭代的对象转换为数组
        const promisesArray = Array.from(promises)
        const len = promisesArray.length
        const result = new Array(len)
        // 记录已经成功的数量
        let resolvedCount = 0

        // 处理空数组的情况
        if (len === 0) {
            return resolve([])
        }

        //遍历数组
        promisesArray.forEach((promise, index) => {
            // 把所有传入的项都标准化成了 Promise 实例,才能调用.then方法
            Promise.resolve(promise).then((value) => {
                result[index] = value
                resolvedCount++
                if (resolvedCount === len) {
                    resolve(result)
                }
            }, (reason) => {
                // 有一个失败就返回
                reject(reason)
            })
        })
    })
}

// 返回的是一个promise，调用.then
Promise.myAll([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.error(error);
});
