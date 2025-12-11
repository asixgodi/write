/**
 * 现在有一个只包含数字的字符串，将该字符串转化成IP地址的形式，返回所有可能的情况。
    例如：
    给出的字符串为"25525522135",
    返回["255.255.22.135", "255.255.221.35"]. (顺序没有关系)
 */
// 这是一个分割问题，并不是排列问题
function restoreIpAddresses(s) {
    const result = []
    // 检查长度是否符合IP地址的长度
    if (s.length < 4 || s.length > 12) {
        return result
    }
    //startIndex表示目前遍历的位置，path表示的是当前收集的IP片段
    function backTracking(startIndex, path) {
        if (path.length === 4) {
            if (startIndex === s.length) {
                result.push(path.join('.'))
            }
            return
        }
        // 每次尝试截取长度1-3的子串
        for (let len = 1; len <= 3; len++) {
            if (startIndex + len > s.length) break
            //截取子串
            const subStr = s.substring(startIndex, startIndex + len)

            //检查前导零
            if (subStr.length > 1 && subStr[0] === '0') break
            const num = parseInt(subStr)
            if (num > 255) break
            path.push(subStr)
            backTracking(startIndex + len, path)
            path.pop()
        }
    }
    backTracking(0, [])
    return result
}