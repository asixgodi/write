/**
 * 给出一个仅包含字符仅由括号字符 的括号序列字符串 s ，你需要判断给出的括号序列字符串 s是否是有效的括号序列
 */


function isValid(s) {
    // write code here
    if (!s) return true
    const arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
            arr.push(s[i])
        } else {
            if (arr.length === 0) return false
            if (s[i] === ')') {
                if (arr[arr.length - 1] === '(') {
                    arr.pop()
                } else {
                    return false
                }
            } else if (s[i] === '}') {
                if (arr[arr.length - 1] === '{') {
                    arr.pop()
                } else {
                    return false
                }
            } else if (s[i] === ']') {
                if (arr[arr.length - 1] === '[') {
                    arr.pop()
                } else {
                    return false
                }
            }
        }
    }
    if (arr.length === 0) return true
}


// 另一种方法：使用map来映射

function isValid(s) {
    // 括号数量为奇数，直接判定为无效
    if (s.length % 2 !== 0) {
        return false;
    }

    const stack = [];
    const map = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            // 如果是左括号，则将其压入栈中
            stack.push(char);
        } else {
            // 如果是右括号
            // 检查栈是否为空，或者栈顶的左括号是否与当前右括号不匹配
            const lastOpen = stack.pop();
            if (map[lastOpen] !== char) {
                return false;
            }
        }
    }

    // 如果遍历完所有括号，栈应该为空
    return stack.length === 0;
}