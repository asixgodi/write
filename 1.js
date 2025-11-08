

function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

// 首次调用时立即执行，之后在 delay 时间内不再执行
function throttle(func, delay) {
    let timer = 0
    return function (...args) {
        const now = Date.now()
        if (now - timer >= delay) {
            func.apply(this, args)
            timer = now
        }
    }
}

function test() {
    console.log('test');
}
function test1() {
    console.log('test1');
}
const debouncedTest = debounce(test, 1000);
const throttleTest = throttle(test1, 1000)
debouncedTest()
throttleTest()
throttleTest()