// 能串行执行传入的promises，实现效果与promise.all区别只有串行
//为了能控制 Promise 的执行时机，我们传递给这个方法的不能是一个已经处于 pending 状态的 Promise 数组 
// ([p1, p2, p3])，因为一旦 Promise 被创建，它的异步操作就已经开始执行了。

// 整体的思路就是：需要创建一个async函数，使用await来控制执行的顺序。 需要一个延迟执行的函数，返回的是函数式的Promise
// 传入的参数是一个函数式的Promise数组，函数式的Promise是一个函数，调用这个函数才会创建Promise



async function serialPromise(promiseCreators) {
    const results = []
    for (const createPromise of promiseCreators) {
        try {
            const result = await createPromise()
            results.push(result)
        } catch (error) {
            console.error('A promise failed', error);
            throw error
        }
    }
    return results
}


function createDelayedPromise(time, value) {
    // 所以这里写成一个函数式是为了，能在调用时再创建 Promise
    return () => new Promise((resolve) => {
        console.log(`task for ${value} started,will take ${time}ms`);
        setTimeout(() => {
            console.log(`task for ${value} completed`);
            resolve(value)
        }, time)
    })
}

const promiseCreators = [
    createDelayedPromise(1000, 'A'),
    createDelayedPromise(500, 'B'),
    createDelayedPromise(2000, 'C')
]

serialPromise(promiseCreators).then(results => {
    console.log('All promises completed', results);
})