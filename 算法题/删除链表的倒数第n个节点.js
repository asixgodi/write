/**
 * 给定一个链表，删除链表的倒数第 n 个节点并返回链表的头指针
 */
// 思路： 双指针法，快指针先走 n+1 步，然后快慢指针一起走，当快指针到达末尾时（null），慢指针正好到达倒数第 n 个节点的前一个节点，然后删除该节点即可。
// 为什么要走n+1步，n+1 步的目的是让快慢指针之间保持 n 个节点的间隔
function removeNthFromEnd(head, n) {
    // write code here
    // 创建一个虚拟节点处理边界
    const dummy = new ListNode(0)
    dummy.next = head
    let fast = dummy
    let slow = dummy
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
}