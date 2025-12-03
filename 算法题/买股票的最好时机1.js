/**
 * 假设你有一个数组prices，长度为n，其中prices[i]是股票在第i天的价格，请根据这个价格数组，返回买卖股票能获得的最大收益
    1.你可以买入一次股票和卖出一次股票，并非每天都可以买入或卖出一次，总共只能买入和卖出一次，且买入必须在卖出的前面的某一天
    2.如果不能获取到任何利润，请返回0
    3.假设买入卖出均无手续费
 */
function maxProfit( prices ) {
    // write code here
    let minPrice = prices[0]
    let max = 0
    for(let i = 1;i<prices.length;i++){
        // 目前价格比买入点高，先算一下利润
        if(prices[i] - minPrice>0){
            max = Math.max(max,prices[i] - privot)
        }else{
            // 发现更低的买入点，更新买入点
            minPrice = prices[i]
        }
    }
    return max
}