
//防抖: 事件触发之后，n秒内函数只执行一次，如果在n秒内再次触发，则重新计算执行时间（只执行最后一次） 回城
//就是给目标函数外面套了一个函数，通过这个外层函数控制目标函数的调用时机和频率
const debounce = (func, delay) => {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.call(this, ...args)
        }, delay)
    }
}

// 原始函数（可能被频繁触发）
function handleClick() {
    console.log("按钮被点击");
}
// 防抖包装
const debouncedClick = debounce(handleClick, 500);
// 绑定事件
button.addEventListener("click", debouncedClick);



// 节流：连续触发事件，但在n秒内只执行一次函数 点再多都没用，只执行一次
// 当玩家连续快速点击某个技能按钮时：首次点击​​：立即释放技能。后续点击​​：在技能冷却时间内（例如 5 秒），无论玩家点击多少次，​​技能不会再次释放​​。


const throttle = (func, delay) => {
    let timer = null
    return function (...args) {
        //如果没有timer，就开始执行
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null
            }, delay)
        }
    }
}

const test = throttle(() => {
    console.log('执行');
}, 2000)
test() //2秒后输出
test() //被忽略