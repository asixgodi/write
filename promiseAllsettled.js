// 写的时候就记住：需要传入一个可迭代的对象，然后要返回一个promise，以便调用者可以使用 .then() 来获取最终的结果。
// 得先判断是不是可迭代的对象，或者直接转成数组
Promise.myAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        // 或者直接转成数组也行
        // arrayPromises = [...promises]
        if (typeof promises[Symbol.iterator] !== 'function') {
            reject(new TypeError('Argument is not iterable'))
        }
        // 将可迭代的对象转成数组
        const promisesArray = Array.from(promises)
        let len = promisesArray.length
        const result = new Array(len)
        if (len === 0) {
            return resolve([{
                status: 'fulfilled',
                value: undefined
            }])
        }
        let settledCount = 0
        promisesArray.forEach((promise, index) => {
            // Promise.resolve将非promise的值转成promise，然后调用then方法
            Promise.resolve(promise).then((value) => {
                result[index] = {
                    status: 'fulfilled',
                    value
                }

            }, (reason) => {
                result[index] = {
                    status: 'rejected',
                    reason
                }
            }).finally(() => {
                settledCount++
                if (settledCount === len) {
                    resolve(result)
                }
            })
        })
    })
}

Promise.myAllSettled([Promise.resolve(1), Promise.reject(2), 3]).then((results) => {
    console.log(results);
})