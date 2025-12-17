/*
    给定一个二叉树的根节点root，返回它的中序遍历结果。
    function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
*/

function inorderTraversal( root ) {
    const res = []
    function inorder(node){
        if(node === null) return 
        inorder(node.left)
        res.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    return res
}

// 使用栈的方式
function inorderTraversal( root ) {
    const res = []
    const stack = []
    let current  = root
    while(current !== null || stack.length > 0){
        while(current !==null){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current.val)
        current = current.right
    }
    return res
}