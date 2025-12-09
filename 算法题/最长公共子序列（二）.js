/**
 * 给定两个字符串str1和str2，输出两个字符串的最长公共子序列。如果最长公共子序列为空，则返回"-1"。目前给出的数据，仅仅会存在一个最长的公共子序列
 */

// dp[i][j]的含义是：str1的前i个字符和str2的前j个字符的最长公共子序列的长度
// 如果str1[i] === str2[j] 说明找到一个公共序列 dp[i][j] = dp[i-1][j-1] + 1
// 如果str1[i] !== str2[j] 说明字符对不上，那么最长长度就是str1少看一个或str2少看一个时的最大值 dp[i][j] = Math.max(d[i-1][j],dp[i][j-1])
function LCS( s1 ,  s2 ) {
    if(!s1 || !s2) return -1
    const n = s1.length
    const m = s2.length
    const dp = new Array(n+1).fill(0).map(item=>new Array(m+1).fill(0))
    // const dp = Array.from({length:n+1},()=>new Array(m+1).fill(0))
    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=m;j++){
            if(s1[i-1] === s2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    if(dp[n][m] === 0){
        return -1
    } 
    let res = []
    let i = n
    let j = m 
    while(i>0&&j>0){
        if(s1[i-1] === s2[j-1]){
            res.push(s1[i-1])
            i--
            j--
        }else{
            // 数值不相等，往数值大的地方回退
            if(dp[i-1][j]>=dp[i][j-1]){
                i--
            }else{
                j--
            }
        }
    }
    return res.reverse().join('')
}