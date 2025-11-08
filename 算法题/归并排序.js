/**
    归并排序的核心思想（数组版）
    分 (Divide)：找到数组的中间位置，把数组分割成左右两个子数组。
    治 (Conquer)：对左右两个子数组递归地进行归并排序。
    合 (Combine/Merge)：将两个已经排好序的子数组合并成一个大的有序数组。
 */
// mergeSort(arr)：负责递归和拆分。
// merge(leftArr, rightArr)：负责合并两个有序数组。

function mergeSort(arr){
    // 空元素或一个元素，他自然是有序的
    if(arr.length<=1){
        return arr
    }

    // 分
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    // 治 递归对左右子数组进行排序

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft,sortedRight)
}

function merge(leftArr,rightArr){
    let result = []; // 存放合并结果的数组
    let leftIndex = 0; // 左数组的指针
    let rightIndex = 0; // 右数组的指针
    // 当两个数组都还有元素时，进行比较
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        // 比较两个数组的当前元素，将较小的那个放入结果数组
        if (leftArr[leftIndex] <= rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++; // 移动左数组的指针
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++; // 移动右数组的指针
        }
    }
    // 循环结束后，其中一个数组可能还有剩余元素
    // 因为它们已经是有序的，所以直接拼接到结果数组的末尾即可
    // 使用 slice 获取剩余部分，并用 concat 连接
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}