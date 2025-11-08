

// 接收一个普通对象，返回一个响应式对象
function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            const result = Reflect.get(target, key, receiver)
            track(target, key)
            return result
        },
        set(target, key, value, receiver) {
            const oldValue = target[key]
            const result = Reflect.set(target, key, value, receiver)
            if (oldValue !== result) {
                trigger(target, key)
            }
            return result
        }
    }
    return new Proxy(target, handler)
}

//这个targetMap的key是一个对象，然后value是一个map，map中的key是该对象的属性，value是收集的依赖
const targetMap = new WeakMap()
let activeEffect = null

// 这个effect有个缺陷就是：执行完成之后，后面不会再重新收集依赖了
// const effect = (eff) => {
//     activeEffect = eff
//     // 执行副作用函数
//     activeEffect()
//     // 置空
//     activeEffect = null
// }


// 解决“重新执行时也能收集依赖”的问题
function effect(fn) {
    const effectFn = () => {
        try {
            activeEffect = effectFn
            fn()
        } finally {
            activeEffect = null
        }
    }
    effectFn()
}

const track = (target, key) => {
    if (activeEffect) {
        let depsMap = targetMap.get(target)
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()))
        }
        let dep = depsMap.get(key)
        if (!dep) {
            depsMap.set(key, (dep = new Set()))
        }
        dep.add(activeEffect)
    }
}

const trigger = (target, key) => {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    const dep = depsMap.get(key)
    if (dep) {
        dep.forEach(effect => effect())
    }
}


const product = reactive({ price: 10, quantity: 2 })
let total = 0
// 先要执行一次副作用函数，去收集依赖
effect(() => {
    total = product.price * product.quantity
})
console.log(total);
product.price = 50
console.log(total);


//定义Ref
const ref = (raw) => {
    const r = {
        get value() {
            track(r, 'value')
            return raw
        },
        set value(newValue) {
            if (newValue !== raw) {
                raw = newValue
                trigger(r, 'value')
            }
        }
    }
    return r
}