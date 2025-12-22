/**
 * 给定一个二叉树root和一个值 sum ，判断是否有从根节点到叶子节点的节点值之和等于 sum 的路径。
1.该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点
2.叶子节点是指没有子节点的节点
3.路径只能从父节点到子节点，不能从子节点到父节点
4.总节点数目为n
 */


// 每经过一个节点，就把目标值 sum 减去当前节点的值。到达叶子节点时，看 sum 剩下来的是不是 0。
function hasPathSum(root, sum) {
    // 1. 空节点直接返回 false
    if (!root) return false;

    // 2. 判断是不是叶子节点
    if (root.left === null && root.right === null) {
        // 如果是叶子节点，检查剩下的 sum 是否等于当前节点值
        return sum === root.val;
    }

    // 3. 递归左右子树
    // 只要有一条路走得通 (||)，就返回 true
    // 这里的 sum - root.val 就是把当前节点值减掉，传给下一层
    return hasPathSum(root.left, sum - root.val) || 
           hasPathSum(root.right, sum - root.val);
}