/**
 给一个长度为 n 的数组，数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
要求 时间复杂度为O(n)，空间复杂度为O(1)。
 */

function MoreThanHalfNum_Solution( numbers ) {
    if(numbers.length === 1) return numbers[0]
    numbers.sort((a,b)=>a-b)
    return numbers[Math.floor(numbers.length / 2)]
}

// 方法二：摩尔投票法
function MoreThanHalfNum_Solution( numbers ) {
   let candidate = null
   let count = 0
   for(let num of numbers){
    if(count === 0){
        candidate = num
        count = 1
    }else if(num === candidate){
        count++
    }else{
        count-- 
    }
   }
   return candidate
}