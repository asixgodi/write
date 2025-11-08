console.log('第一步');

const promise = new Promise((resolve, reject) => {
    console.log('第二步');
    setTimeout(() => {
        //resolve的值是传给then的
        resolve('这次一定')
        console.log("第四步");
    })
})

promise.then((result) => {
    console.log(result);
}, (result) => {
    console.log(result.message);
}
)
console.log('第三步');
