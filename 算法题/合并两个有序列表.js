/**输入两个递增的链表，单个链表的长度为n，合并这两个链表并使新链表中的节点仍然是递增排序的。
要求：空间复杂度 O(1)，时间复杂度 O(n) 
*/
// 思路就是创建一个虚拟节点,实际上就是新建一个链表，只不过这个链表是通过移动现有节点来实现的，并不是新建节点
function Merge(pHead1, pHead2) {
    const dummy = new ListNode(-1)
    let current = dummy
    if (!pHead1) return pHead2
    if (!pHead2) return pHead1
    while (pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
            current.next = pHead1
            pHead1 = pHead1.next
        } else {
            current.next = pHead2
            pHead2 = pHead2.next
        }
        current = current.next
    }
    // 处理未处理的节点
    if (pHead1 !== null) {
        current.next = pHead1;
    } else { // pHead2 !== null
        current.next = pHead2;
    }
    return dummy.next
}