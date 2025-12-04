/**
 * 给定一个整形数组arr，已知其中所有的值都是非负的，
 * 将这个数组看作一个柱子高度图，计算按此排列的柱子，下雨之后能接多少雨水。(数组以外的区域高度视为0)
 * [3,1,2,5,2,4]   返回值：5
 */

// 使用单调栈 单调递减栈（从栈底到栈顶递减） 栈中存储索引  
// 为什么要递减栈？如果柱子高度一直在下降（5 -> 3 -> 1），是无法存水的，水会流走。只有当出现一个比栈顶高的柱子时，能形成一个凹槽。
// 当前元素比栈顶大时，弹出栈顶，作为凹槽的底部，当前元素就是右边界，此时栈中的元素就是左边界。
// 计算宽度：通过索引 right-left-1
// 计算高度：min（左边界高度，右边界高度）底部高度
function maxWater( arr ) {
    // write code here
    const stack = []
    let totalWater = 0
    for(let i = 0;i<arr.length;i++){
        // 栈不为空且栈顶元素要小于当前元素时，说明形成了低洼处，可以接水
        while(stack.length>0 && arr[stack[stack.length-1]]<arr[i]){
            const bottomIndex = stack.pop()
            // 如果栈空了，说明没有左边界挡水，接不住，直接退出本次循环
            if (stack.length === 0) {
                break;
            }
            const leftIndex = stack[stack.length - 1]
            const width = i - leftIndex - 1
            const height = Math.min(arr[leftIndex],arr[i]) - arr[bottomIndex]
            const currentWater = width * height
            totalWater += currentWater
        }
        stack.push(i)
    }
    return totalWater
}