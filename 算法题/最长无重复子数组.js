/**
 给定一个长度为n的数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组
 */

// 用滑动窗口的方法 （滑动窗口+set） 通过左右指针维护一个无重复的窗口，遇到重复时移动指针
function maxLength(arr) {
    if (arr.length === 0) return 0
    let max = 0
    let set = new Set()
    let left = 0
    for (let right = 0; right < arr.length; right++) {
        // 当遇到重复元素的时候，左指针右移，直到没有重复元素为止
        while (set.has(arr[right])) {
            set.delete(arr[left])
            left++
        }
        set.add(arr[right])
        max = Math.max(max, right - left + 1)
    }
    return max
}