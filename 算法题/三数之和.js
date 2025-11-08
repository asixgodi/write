/**
 * 给出一个有n个元素的数组S，S中是否有元素a,b,c满足a+b+c=0？找出数组S中所有满足条件的三元组。
 * 考点：排序+双指针
 */
// 思路就是：先进行排序，然后固定一个数，然后用双指针去寻找另外两个数，左指针是固定数的下一个，右指针是数组的最后一个数，两边往中间靠拢
// 注意得省略重复的元素
function threeSum(num) {
    // write code here
    if (num.length < 3) return [];
    // 先要进行排序
    num.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] > 0) break
        // 跳过重复的元素
        if (i > 0 && num[i] === num[i - 1]) continue
        // 定义双指针
        let left = i + 1
        let right = num.length - 1
        while (left < right) {
            const sum = num[i] + num[left] + num[right]
            if (sum === 0) {
                result.push([num[i], num[left], num[right]])
                // 跳过重复的 b和c
                while (left < right && num[left] === num[left + 1]) left++
                while (left < right && num[right] === num[right - 1]) right--
                left++
                right--
            }
            else if (sum < 0) left++
            else right--
        }
    }
    return result
}