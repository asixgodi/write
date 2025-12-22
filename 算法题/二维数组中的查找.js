
/*
    在一个二维数组array中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
[
[1,2,8,9],
[2,4,9,12],
[4,7,10,13],
[6,8,11,15]
]
给定 target = 7，返回 true。

给定 target = 3，返回 false。
*/


// 使用线性搜索法 从右上角或者左下角开始
// 如果当前值比target要小，那么该列都要比它大，那么就往左边走一列
// 如果当前值要比target大，那么该行都要比他小，往下走一行
function Find( target ,  array ) {
    if(!array || array.length === 0 || array[0].length === 0) return false
    const rows = array.length
    const cols = array[0].length
    // 从右上角开始走
    let row = 0
    let col = cols-1
    while(row<rows && col>=0){
        const val = array[row][col]
        if(val === target) return true
        else if(val>target){
            col -= 1
        }else{
            row +=1
        }
    }
    return false
}