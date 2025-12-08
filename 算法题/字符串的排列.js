/**
 * 输入一个长度为 n 字符串，打印出该字符串中字符的所有排列，你可以以任意顺序返回这个字符串数组。
    例如输入字符串ABC,则输出由字符A,B,C所能排列出来的所有字符串ABC,ACB,BAC,BCA,CBA和CAB。
 */
// 这里的字符可以重复，所以必须得用上visited数组

function Permutation( str ) {
    const result = []
    // 先转换为数组
    const nums = str.split('').sort()
    // 用来记录小标是否被使用
    const visited = new Array(nums.length).fill(false)
    function backTraking(arr){
        // 递归结束的条件
        if(arr.length === nums.length){
            result.push(arr.join(''))
            return
        }
        //循环单次递归
        for(let i = 0;i<nums.length;i++){
            if(visited[i] === true) continue
            
            // 重复元素去重。 如果是重复的元素，必须按照顺序使用，如果前面的兄弟没使用过，那我也不能用
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
                continue;
            }
            arr.push(nums[i])
            visited[i] = true
            backTraking(arr)
            visited[i] = false
            arr.pop()
        }
    }
    backTraking([])
    return result
} 