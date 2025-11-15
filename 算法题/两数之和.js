/**
 * 给出一个整型数组 numbers 和一个目标值 target，
 * 请在数组中找出两个加起来等于目标值的数的下标，返回的下标按升序排列
 * 要求：空间复杂度 O(n)，时间复杂度 O(nlogn)

 */
// 就返回一对结果
function twoSum( numbers ,  target ) {
    // write code here
    const map = new Map()
    for(let i = 0;i<numbers.length;i++){
        const complement = target - numbers[i]
        if(map.has(complement)){
            return [map.get(complement)+1,i+1].sort((a,b)=>a-b)
        }
        map.set(numbers[i],i)
    }
    return []
}