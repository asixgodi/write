/**
 * 给出一组数字，返回该组数字的所有排列 例如：
[1,2,3]的所有排列如下
[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2], [3,2,1].
（以数字在数组中的位置靠前为优先级，按字典序排列输出。）
 */

// 回溯。


function permute( num ) {
    // 排序，保证是字典顺序
    num.sort((a,b)=>a-b)
    const result = []
    let arr = []
    function backTraking(arr){
        if(arr.length === num.length){
            result.push([...arr])
            return
        }
        for(let i = 0;i<num.length;i++){
            if(arr.includes(num[i])){
                continue
            }
            arr.push(num[i])
            backTraking(arr)
            arr.pop()
        }
    }

    backTraking([])
    return result
}