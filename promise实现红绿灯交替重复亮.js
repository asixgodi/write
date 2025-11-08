
// 封装一个亮灯函数
function light(color, time) {
    return new Promise((resolve) => {
        console.log(color + ' light is on');
        // 设置一个定时器，模拟亮灯的时间
        setTimeout(() => {
            resolve()
        }, time)
    })
}

function runTraffic() {
    light('red', 3000).then(() => {
        return light('green', 2000)
    }).then(() => {
        return light('yellow', 1000)
    }).then(() => {
        runTraffic()
    })
}

runTraffic()