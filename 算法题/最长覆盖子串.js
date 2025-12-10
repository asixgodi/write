/**
 给出两个字符串 s 和 t，要求在 s 中找出最短的包含 t 中所有字符的连续子串。
    输入：
    "XDOYEZODEYXNZ","XYZ"
    返回值：
    "YXNZ"
 */

// 使用hash和滑动窗口
// 滑动窗口：右指针一直向右移动，直到将子串都包含在窗口内，然后移动左指针，尽量将窗口缩小
// 需要使用两个map，一个map用来存储T中每个字符需要的数量，另一个是存储滑动窗口的字符和数量
function minWindow(S, T) {
    let need = new Map()
    // 统计T中的字符
    for (let char of T) {
        need.set(char, (need.get(char) || 0) + 1)
    }

    // 统计滑动窗口中的字符
    let window = new Map()
    let left = 0
    let right = 0
    // 当前已有多少个字符满足要求了
    let valid = 0
    let start = 0
    let minLen = Infinity
    while (right < S.length) {
        let c = S[right]
        right++
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if (window.get(c) === need.get(c)) {
                valid += 1
            }
        }

        // 判断左侧窗口是否需要收缩
        while (valid === need.size) {
            // 先更新最小覆盖子串的位置
            if (right - left < minLen) {
                start = left
                minLen = right - left
            }
            // 移出窗口
            let d = S[left++]
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return minLen === Infinity ? "" : S.substring(start, start + minLen)
}