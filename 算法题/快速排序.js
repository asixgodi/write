/** 
 有一个整数数组，请你根据快速排序的思路，找出数组中第 k 大的数。

给定一个整数数组 a ,同时给定它的大小n和要找的 k ，请返回第 k 大的数(包括重复的元素，不用去重)，保证答案存在。
要求：时间复杂度 O(nlogn)，空间复杂度 O(1)
*/
function findKth(a, n, K) {
    // write code here
    quickSort(a, 0, n - 1)
    return a[K - 1]
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return
    const pivotIndex = partition(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
}

// 优化：只对包含第K大的数的那一部分进行排序
function quickSelect(arr, left, right, K) {
    if (left === right) return arr[left]
    const pivotIndex = partition(arr, left, right)
    if (pivotIndex === K) return arr[pivotIndex]
    else if (pivotIndex < K) return quickSelect(arr, pivotIndex + 1, right, K)
    else return quickSelect(arr, left, pivotIndex - 1, K)
}

// 这个版本的快速排序是降序排列
function partition(arr, left, right) {
    const privot = arr[left];
    let i = left, j = right
    while (i < j) {
        // 从右向左找第一个大于privot的元素
        while (i < j && arr[j] <= privot) j--
        if (i < j) arr[i++] = arr[j]

        // 从左向右找第一个小于privot的元素
        while (i < j && arr[i] > privot) i++
        if (i < j) arr[j--] = arr[i]
    }
    arr[i] = privot
    return i
}