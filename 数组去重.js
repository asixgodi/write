//1、使用set实现
// function uniqueArray(arr) {
//     return [...new Set(arr)]
// }

// //使用filter函数 + indexOf，该函数的返回值是一个新的数组
// function uniqueArray(arr) {
//     // 循环一次数组，每次取出值和索引
//     // 用该值去得到索引，然后索引之间比较
//     return arr.filter((item, index) => {
//         return arr.indexOf(item) === index
//     })
// }


//使用reduce + includes
// function uniqueArray(arr) {
//     return arr.reduce((acc, currentElement) => {
//         if (!acc.includes(currentElement)) {
//             acc.push(currentElement);
//         }
//         //累加器每次都要返回，以前是简写，所以没有return
//         return acc
//     }, [])
// }

//新建一个空数组，遍历数组
// function uniqueArray(arr) {
//     const newArr = []
//     arr.forEach((item) => {
//         if (!newArr.includes(item)) {
//             newArr.push(item)
//         }
//     })
//     return newArr
// }


// 使用Object键值去重
function uniqueArray(arr) {
    const obj = {}
    arr.forEach(item => obj[item] = true)
    //这里的Number是将值转换为数字类型
    return Object.keys(obj).map(Number)
}
const arr = [1, 2, 2, 3, 4, 5, 66, 66, 8, 11, 2]
const unique = uniqueArray(arr)
console.log(unique);
