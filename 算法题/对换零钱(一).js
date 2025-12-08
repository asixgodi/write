/**
 * 给定数组arr，arr中所有的值都为正整数且不重复。每个值代表一种面值的货币，每种面值的货币可以使用任意张，再给定一个aim，代表要找的钱数，求组成aim的最少货币数。
   如果无解，请返回-1.
   [5,2,3],20
   返回 4 
 */
 // 不可使用贪心。因为在任意给定的数组中，贪心会失效

 // 完全背包问题  
 // dp[i]表示的是 组成i金额所需要的最少货币数
 // dp[j] = Math.min(dp[j],dp[j-coin] + 1)  对于金额j来说，如果使用了一张面值为coin的钱，那么状态转移方程就是这个。
function minMoney( arr ,  aim ) {
    if(aim === 0) return 0
    
    const max = aim + 1
    const dp = new Array(max).fill(max)
    dp[0] = 0
    // 外层遍历每一种货币
    for(let i = 0;i<arr.length;i++){
        let coin = arr[i]
        // 遍历每一个目标金额
        for(let j = coin;j<=aim;j++){
            if(dp[j-coin] !== max){
                dp[j] = Math.min(dp[j],dp[j-coin] + 1)
            }
        }
    }
    return dp[aim]!==max?dp[aim] : -1
}