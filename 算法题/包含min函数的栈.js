/**
 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的 min 函数，输入操作时保证 pop、top 和 min 函数操作时，栈中一定有元素。

    此栈包含的方法有：
    push(value):将value压入栈中
    pop():弹出栈顶元素
    top():获取栈顶元素
    min():获取栈中最小元素

    输入:    ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
    输出:    -1,2,1,-1
 */

// 此题需要两个栈 一个主栈和一个辅助栈（最小栈）
// 入栈的时候：最小栈需要进行一个判断，如果比栈顶的值还要小就入栈
// 出栈的时候也一样，如果普通栈出栈的值是最小值，则最小栈也要出栈
const stack = []
const miniStack = []
function push(node)
{
    stack.push(node)
    if(miniStack.length === 0 || miniStack[miniStack.length - 1]>=node){
        miniStack.push(node)
    }
}
function pop()
{
    const num = stack.pop()
    if(num === miniStack[miniStack.length - 1]) miniStack.pop()
}
function top()
{
    return stack[stack.length - 1]
}
function min()
{
    return miniStack[miniStack.length - 1]
}