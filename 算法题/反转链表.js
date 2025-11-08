/**
 给定一个单链表的头结点pHead(该头节点是有值的，比如在下图，它的val是1)，长度为n，反转该链表后，返回新链表的表头。
 function ListNode(x){
    this.val = x;
    this.next = null;
 }
 */
function reverseList(head) {
    if (!head || !head.next) return head
    let pre = null // 前驱节点初始为null
    let curr = head
    while (curr) {
        let temp = curr.next  // 保存下一个节点
        curr.next = pre //反转指针方向
        pre = curr //pre向后移动
        curr = temp //curr向后移动
    }
    return pre //pre指向新的头节点
}