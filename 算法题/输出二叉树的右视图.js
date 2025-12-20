/**
 请根据二叉树的前序遍历，中序遍历恢复二叉树，并打印出二叉树的右视图
 */

// 关键是如何重建二叉树

 function solve( preOrder ,  inOrder ) {
    // 重建二叉树
    if(!preOrder || preOrder.length === 0 ) return []
    // 为了快速定位根节点在中序数组中的位置，构建哈希表
    const indexMap = new Map()
    for(let i = 0;i<inOrder.length;i++){
        indexMap.set(inOrder[i],i)
    }
    const result = []
    //递归构建二叉树
    // preStart, preEnd: 当前子树在前序数组中的范围
    // inStart, inEnd: 当前子树在中序数组中的范围
    const buildTree = (preStart,preEnd,inStart,inEnd)=>{
        if(preStart>preEnd) return null
        // 前序遍历的第一个元素就是当前子树的根节点
        const rootVal = preOrder[preStart]
        const root = new TreeNode(rootVal)

        // 根节点在中序遍历中的位置
        const rootIndex = indexMap.get(rootVal)

        // 3. 关键点：计算左子树的节点数量
        // rootIndex 是根的位置，inStart 是左边界，中间的长度就是左子树个数
        const leftSize = rootIndex - inStart;
        // 递归构建左子树
        root.left = buildTree(
            preStart+1,
            preStart+leftSize,
            inStart,
            rootIndex-1
        )
        //递归构建右子树
        root.right = buildTree(
            preStart + leftSize + 1,
            preEnd,
            rootIndex+1,
            inEnd
        )

        return root
    }
    const root = buildTree(0,preOrder.length - 1,0,inOrder.length - 1)

    //层序遍历获取右视图
    const queue = []
    if(!root) return []
    queue.push(root)
    while(queue.length>0){
        let levelSize = queue.length
        for(let i = 0;i<levelSize;i++){
            const node = queue.shift();
            if(i === levelSize-1){
                result.push(node.val)
            }
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result
}