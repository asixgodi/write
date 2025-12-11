/**
 给你一个大小为 n 的字符串数组 strs ，其中包含n个字符串 , 
 编写一个函数来查找字符串数组中的最长公共前缀，返回这个公共前缀。
 输入：
["abca","abc","abca","abc","abcc"]
返回值： "abc"
 */

// 我这样做虽然能通过，但是存在一个问题：我的外层循环是字符数组的总长度。假设输入：["aaaaa", "aaaaa"]，那我循环只进行两次，最长前缀为aa
function longestCommonPrefix( strs ) {
    let max = 0
    if(strs.length === 0) return ""
    if(strs.length === 1) return strs[0]
    for(let i=0;i<strs.length;i++){
        let current = strs[0].substring(0,max+1)
        for(let j = 1;j<strs.length;j++){
            if(current!=strs[j].substring(0,max+1)){
                return strs[0].substring(0,max)
            }
        }
        max++
    }
    return strs[0].substring(0,max)
}


function longestCommonPrefix( strs ) {
    if(strs.length === 0) return ""
    // 外层遍历的是第一个字符串的每一个字符
    for(let i = 0;i<strs[0].length;i++){
        let char = strs[0][i]
        //内层遍历的是字符串数组
        // 就是拿第一个字符串的每一个字符去和其他字符串的对应位置字符比较
        for(let j = 1;j<strs.length;j++){
            // 如果当前长度 i 超过了 strs[j] 的长度（越界）,或者当前字符不匹配
            if(i === strs[j].length || strs[j][i] !== char){
                return strs[0].substring(0,i)
            }
        }
    }
    return strs[0]
}