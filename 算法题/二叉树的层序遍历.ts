

export function levelOrder(root: TreeNode): number[][] {
    if (!root) return []
    // write code here
    const result: number[][] = []
    const queue: TreeNode[] = [root]
    while (queue.length > 0) {
        // 关键点    记录当前层的数量
        // 一层结束之后，队列中剩下的就是下一层的节点
        let levelSize = queue.length
        // 用于存放当前层节点值的临时数组
        let currentLevel: number[] = []
        for (let i = 0; i < levelSize; i++) {
            // 取出队头元素
            const node = queue.shift()
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(currentLevel)
    }
    return result
}