// .concat方法，用于合并多个数组或值，返回一个新的数组，不会修改原数组
//数组扁平化：将嵌套数组转换为一个一维数组

//递归
// function flattenArray(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         // 如果是一个数组的话
//         if (Array.isArray(arr[i])) {
//             //进行递归操作
//             //将现有的result，和递归完成后的结果进行拼接，返回一个新的数组
//             result = result.concat(flattenArray(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

//使用reduce
// function flattenArray(arr) {
//     return arr.reduce((acc, current) => {
//         if (Array.isArray(current)) {
//             return [...acc, ...flattenArray(current)]
//         } else {
//             return [...acc, current]
//         }

//     }, [])
// }

//使用扩展运算符
function flattenArray(arr) {
    while (arr.some(item => Array.isArray(item))) {
        // 这里使用了扩展运算符，而concat会拆开一层数组，如果不是...的话，这么写是不变的
        // 如arr = [1, [2, [3]]];
        // 使用...arr 得到 1，[2,[3]],然后使用concat会展开一层
        arr = [].concat(...arr)
    }
    return arr
}

//使用Array.flat(Infinity)   括号里的数字表示展开几层，Infinity表示完全展开
console.log(arr.flat(Infinity));

//使用join+split+map


const arr = [1, 2, [3, 4]]
console.log(arr.flat(Infinity));

console.log(flattenArray(arr));


