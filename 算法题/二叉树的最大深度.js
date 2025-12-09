/**
    求给定二叉树的最大深度，
    深度是指树的根节点到任一叶子节点路径上节点的数量。
    最大深度是所有叶子节点的深度的最大值。
    （注：叶子节点是指没有子节点的节点。）
 */
function maxDepth( root ) {
    function Deep(node){
        if(!node) return 0
        let leftNode = Deep(node.left)
        let rightNode = Deep(node.right)
        return Math.max(leftNode, rightNode) + 1;
    }
    return Deep(root)
}