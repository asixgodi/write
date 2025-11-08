// 实际数据的请求
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('这是服务器返回的数据')
        }, Math.random() * 5000)
    })
}

// 超时处理函数
function withTimeout(promise, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('操作超时'))
        }, timeout)
    })
    return Promise.race([promise, timeoutPromise])
}

withTimeout(fetchData(), 1000).then(data => {
    console.log('数据加载成功:', data);
}).catch(error => {
    console.error('数据加载失败:', error);
})

