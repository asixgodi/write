/**
 给定一个长度为 n 的字符串，请编写一个函数判断该字符串是否回文。如果是回文请返回true，否则返回false。
 */
function judge( str ) {
    let flag = true
    let left = 0
    let right = str.length-1
    while(left<=right){
        if(str[left++] !== str[right--]) return false
    }
    return flag
}