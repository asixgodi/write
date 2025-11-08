// function readFile(filename, callback) {
//     setTimeout(() => {
//         console.log(`读取文件: ${filename}`);
//         callback(null, `文件内容: ${filename}`);
//     }, 1000);
// }

// readFile('a.txt', (err, data1) => {
//     readFile('b.txt', (err, data2) => {
//         readFile('c.txt', (err, data3) => {
//             console.log('文件内容读取完成 ', data1, data2, data3);
//         })
//     })
// })

// 这个方法会产生地狱回调，嵌套过深，错误需要层层捕获，每一层都写个if
// 使用promise可以扁平化链式调用，替代嵌套调用，避免回调地狱，错误还能集中在catch中处理

function readFile(filename) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`文件内容：${filename}`)
        }, 1000)
    })
}

// readFile('a.txt').then(data1 => {
//     console.log('a.txt的内容', data1);
//     return readFile('b.txt')
// }).then(data2 => {
//     console.log('b.txt的内容', data2);
//     return readFile('c.txt')
// }).then(data3 => {
//     console.log('c.txt的内容', data3);
// })
async function readAllFiles() {
    try {
        console.log('开始读取a.txt');
        const data1 = await readFile('a.txt');
        console.log('a.txt内容:', data1);

        console.log('开始读取b.txt');
        const data2 = await readFile('b.txt');
        console.log('b.txt内容:', data2);

        return '全部文件读取完成';
    } catch (err) {
        console.error('读取错误:', err);
    }
}
console.log('程序开始执行');
const result = readAllFiles();
console.log('等待文件读取...');
result.then(res => console.log(res));