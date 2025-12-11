/**
 * 将一个节点数为 size 链表 m 位置到 n 位置之间的区间反转
    输入：
    {1,2,3,4,5},2,4
    返回值：
    {1,4,3,2,5}
 */
// 虚拟节点+头插法
// 头插法，固定三个指针：pre、cur、next
// pre 指向待反转区间的前一个节点，cur 指向待反转区间的第一个节点，next 指向 cur 的下一个节点
// 每次将 next 插入到 pre 和 pre.next 之间，然后更新 cur 和 next 指针，直到完成反转
// pre指针始终不用动
function reverseBetween( head ,  m ,  n ) {
    // write code here
}   

// 不使用头插法
function reverseBetween( head ,  m ,  n ) {
    const dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy
    // pre永远指向翻转区间的前一个节点。
    for(let i = 0;i<m-1;i++){
        pre = pre.next
    }
    // 翻转区间的起点
    let leftHead = pre.next
    let prev = null
    let curr = leftHead
    for(let i = 0;i<n-m+1;i++){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    // 此时 leftHead 是翻转段的【新尾】，它应该指向剩下的部分(curr)
    leftHead.next = curr;

    // pre 是翻转段前面的节点，它应该指向翻转段的【新头】(prev)
    pre.next = prev;

    return dummy.next;
}