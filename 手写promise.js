// 执行的步骤：
// 1、new Commitment(func) 时，构造函数中的 func(...) 是同步立即执行的
// 2、然后执行resolve，但是resolve 被放在 setTimeout 里，不会立即改变状态，会被放入红任务队列中
// 3、new Commitment(...) 这个表达式执行完毕后，同步返回了一个 commitment 实例，此时的状态是pending
// 4、commitment.then(...) 被调用时，setTimeout 里的 resolve 还没有机会执行，所以状态还是pending，将回调函数就放入resolveCallbacks
// 5、当事件循环触发setTimeout的回调的时候，执行resolve，状态改变，然后执行resolveCallbacks的回调函数
class Commitment {
    //promise的三种状态
    static PENDING = '待定';
    static FULLFILED = '成功';
    static REJECTED = '拒绝';

    //promise创建的时候，传入的是一个函数，里面的两个参数又是两个函数
    constructor(func) {
        //初始状态为pending
        this.status = Commitment.PENDING
        this.result = null
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        try {
            func(this.resolve.bind(this), this.reject.bind(this))
        } catch {
            this.reject(error)
        }
    }
    //如果上面不bind的话，这里的this将指向全局
    //这里加setTimeout是因为，resolve和reject要在事件循环末尾执行的(要模拟异步的过程)
    resolve(result) {
        setTimeout(() => {
            if (this.status === Commitment.PENDING) {
                this.status = Commitment.FULLFILED
                this.result = result
                this.resolveCallbacks.forEach(callback => {
                    callback(result)
                })
            }
        })
    }
    reject(result) {
        setTimeout(() => {
            if (this.status === Commitment.PENDING) {
                this.status = Commitment.REJECTED
                this.result = result
                this.rejectCallbacks.forEach(callback => {
                    callback(result)
                })
            }
        })
    }
    //then传入的参数也是两个函数
    then(onFuLFILLED, onREJECTED) {
        return new Commitment((resolve, reject) => {
            onFuLFILLED = typeof onFuLFILLED === 'function' ? onFuLFILLED : () => { }
            onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
            if (this.status === Commitment.PENDING) {
                this.resolveCallbacks.push(onFuLFILLED)
                this.rejectCallbacks.push(onREJECTED)
            }
            if (this.status === Commitment.FULLFILED) {
                onFuLFILLED(this.result)
            }
            if (this.status === Commitment.REJECTED) {
                onREJECTED(this.result)
            }
        })
    }
}

console.log('第一步');
let commitment = new Commitment((resolve, reject) => {
    console.log('第二步');
    setTimeout(() => {
        resolve('这次一定')
        reject('下次一定')
    })
})

commitment.then((result) => {
    console.log(result);

}, (result) => {
    console.log(result.message);

})
console.log('第三步');