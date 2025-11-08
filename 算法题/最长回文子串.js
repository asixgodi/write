/**
 * 对于长度为n的一个字符串A（仅包含数字，大小写英文字母），请设计一个高效算法，计算其中最长回文子串的长度。
 * 要求空间复杂度为O(1)，时间复杂度为O(n2)。
 * 进阶：空间复杂度为O(n)，时间复杂度达到O(n)。
 */
// 方法一：中心扩展法，时间复杂度O(n^2)，空间复杂度O(1)
// 思路是：以每个字符为中心，向两边扩展，寻找最长回文子串，两个指针L和R分别指向当前字符的左右两端
function longestPalindromeLength(s) {
    if (!s || s.length === 0) return 0;
    let maxLength = 1;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        // 以s[i]为中心，向两边扩展，寻找奇数长度的回文子串
        let L = i - 1;
        let R = i + 1;

        // 可以把这个while循环抽象成一个函数
        while (L >= 0 && R < n && s[L] === s[R]) {
            const currentLength = R - L + 1;
            maxLength = Math.max(maxLength, currentLength);
            L--;
            R++;
        }
        // 以s[i]和s[i+1]为中心，向两边扩展，寻找偶数长度的回文子串
        L = i;
        R = i + 1;
        while (L >= 0 && R < n && s[L] === s[R]) {
            const currentLength = R - L + 1;
            maxLength = Math.max(maxLength, currentLength);
            L--;
            R++;
        }
    }

    return maxLength;
}


// 方法二：使用动态规划，时间复杂度O(n^2)，空间复杂度O(n^2)
// 思路就是：如果s是回文串，那么他的第一个字符和最后一个字符相同，并且去掉这两个字符后的子串也是回文串
// dp[i][j] 表示s从i到j的子串是否是回文串
// dp[i][j] 要为 true，必须满足上面两个条件，状态转移方程：dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1]

// 计算的顺序必须是从短的子串开始，逐步计算更长的子串。
function longestPalindromeLengthDP(s) {
    if (!s || s.length === 0) return 0;
    const n = s.length;
    let maxLength = 1;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false))
    // 所有长度为1的子串都是回文
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    // 检查长度为2的子串
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLength = 2;
        }
    }
    // 检查长度大于2的子串
    for (let length = 3; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                maxLength = Math.max(maxLength, length);
            }
        }
    }
    return maxLength;
}