/**
 给定一个长度为 n 的数组 num 和滑动窗口的大小 size ，找出所有滑动窗口里数值的最大值。

例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
{[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， 
{2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */


// 队头（front）永远是当前窗口里最大值的下标。
// 为什么说是队列呢，因为当我的窗口向右滑动时，我会判断队头的下标是否还在窗口内，如果不在窗口内，我就把它出队。
function maxInWindows( num ,  size ) {
    if(num.length<size || num.length === 0 || size === 0) return []
    const result = []
    // 定义一个双端队列用于存下标，单调递减队列
    const deque = []
    for(let i = 0;i<num.length;i++){
        // 队列不为空且新来的比队尾的大，队尾出队
        while(deque.length>0 && num[i]>=num[deque[deque.length-1]]){
            deque.pop()
        }
        // 新来的大的入队
        deque.push(i)
        // 队头的老大是否已经滑出了窗口
        if(deque[0]<=i-size){
            deque.shift()
        }
        if(i>=size - 1) result.push(num[deque[0]])
    }
    return result
}