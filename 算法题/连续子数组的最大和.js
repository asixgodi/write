/**
 * 输入一个长度为n的整型数组array，数组中的一个或连续多个整数组成一个子数组，子数组最小长度为1。求所有子数组的和的最大值。
 */

// 方法1、使用动态规划，dp[i]的含义是，以array[i]结尾的所有子数组中，和最大的那个值
// 所以对于当前i有两种选择，如果dp[i-1]是正数，就加上当前的array[i]；如果dp[i-1]是负数的话，就更换起点，从当前i开始
// 所有状态转移方程为：dp[i] = Math.max(array[i],dp[i-1]+array[i])

function FindGreatestSumOfSubArray( array ) {
    // write code here
    const dp = new Array(array.length).fill(0)
    dp[0] = array[0]
    let max = array[0]
    for(let i = 1;i<array.length;i++){
        dp[i] = Math.max(array[i],dp[i-1]+array[i])
        if(max<dp[i]){
            max = dp[i]
        }
    }
    return max
}

// 进阶解法：空间复杂度为O(1)
// 只需要一个变量 pre 来记录“前一个位置的最大和”即可
function FindGreatestSumOfSubArray( array ) {
    // write code here
    pre = array[0]
    let max = array[0]
    for(let i = 1;i<array.length;i++){
        // 如果pre小于0的话，那么加上array[i]肯定要小于array[i],不如从array[i]重新开始
        if(pre>0){
            pre = pre + array[i]
        }else{
            pre = array[i]
        }
    }
    return max
}