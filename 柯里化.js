

function curry(fn) {
    // 将参数收集到args数组中，...表示剩余参数
    return function curried(...args) {
        //如果一开始传入的参数已经够了，直接执行原函数。fn.length 返回的是函数在定义时声明的形式参数的个数
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            // 内层函数通过apply在调用 curried 时，找到并执行的永远是外层的那一个
            return function curried(...nextArgs) {
                // args 不是通过参数传递的，而是通过作用域链查找被访问到的
                return curried.apply(this, args.concat(nextArgs))
            }
        }
    }
}

const sum = function (a, b, c) {
    return a + b + c
}
//这个返回的是curried函数 ，而且是一个闭包函数
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6

// curriedSum(1)执行的结果返回的还是curried函数，存在闭包，记住了参数1
// curriedSum(1)(2)执行的结果返回的还是curried函数，存在闭包，记住了参数1,2，通过args.concat(nextArgs)把参数1,2合并
// curriedSum(1)(2)(3)执行的结果返回的是sum函数的执行结果，参数是1,2,3

// 1. curried(1)       → args = [1]
// 2. curried(1)(2)    → args = [1, 2]
// 3. curried(1)(2)(3) → args = [1, 2, 3] → 执行 sum(1, 2, 3)


function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return function curried(...nextArgs) {
            return curried.apply(this, args.concat(nextArgs))
        }
    }
}