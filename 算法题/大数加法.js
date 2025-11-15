/**
 * 以字符串的形式读入两个数字，编写一个函数计算它们的和，以字符串形式返回要求：时间复杂度 O(n)
 * 数据范围：s.length,t.length≤100000，字符串仅由'0'~‘9’构成
 */

// 思路无法直接用parse直接进行转换，因为js最大能表示的数是16位，题目要求可以100000
// 模拟竖式加法

function solve( s ,  t ) {
    // write code here
    if(s.length === 0 && t.length === 0) return '0'
    if(s.length === 0) return t
    if(t.length === 0) return s
    let i = s.length - 1
    let j = t.length - 1
    // 进位
    let carry = 0
    const result = []
    while(i>=0 || j>=0 || carry>0){
        const dig1 = i>=0 ? parseInt(s[i]) : 0
        const dig2 = j>=0 ? parseInt(t[j]) : 0
        const sum = dig1 + dig2 + carry
        result.push(sum % 10)
        carry = Math.floor(sum / 10)
        i--
        j--
    }
    return result.reverse().join('');
}