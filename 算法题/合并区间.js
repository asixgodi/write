/**
 * 给出一组区间，请合并所有重叠的区间。
请保证合并后的区间按区间起点升序排列。
输入：[[10,30],[20,60],[80,100],[150,180]]
返回值：[[10,60],[80,100],[150,180]]
 */
// 整体思路就是：先对区间起点进行排序，将第一个区间先放入结果集，然后，取出结果集中最后的元素，依次遍历剩余区间进行比较
function merge(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a.start - b.start)
    const result = []
    result.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i]
        const last = result[result.length - 1]
        if (last.end >= current.start) {
            last.end = Math.max(current.end, last.end)
        } else {
            result.push(current)
        }
    }
    return result
}