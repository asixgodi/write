/**
 将给出的链表中的节点每 k 个一组翻转，返回翻转后的链表
如果链表中的节点数不是 k 的倍数，将最后剩下的节点保持原样
你不能更改节点中的值，只能更改节点本身。
对于给定的链表 1 2 3 4 5
k = 2时，应该返回 2 1 4 3 5
k = 3时 应该返回 3 2 1 4 5
要求空间复杂度 O(1)  时间复杂度 O(n)
 */

// 整体的思路就是：
// 1. 遍历链表，找到每一组的头尾节点
// 2. 反转该组节点
// 3. 将反转后的节点连接到前一组的尾节点和下一组的头节点
// 4. 重复上述步骤直到遍历完整个链表
function reverseKGroup(head, k) {
    // write code here
    if (!head || k === 1) return head
    // 创建一个虚拟节点，可以简化边界情况的处理
    let dummy = new ListNode(0)
    dummy.next = head
    // 指向每个待翻转分组的前一个节点
    let prev = dummy
    while (head) {
        let tail = prev
        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) return dummy.next
        }
        // 下一个分组的头节点
        let nextGroup = tail.next
        let current = head
        let reversedPrevd = nextGroup  //翻转后的链表的下一个节点。

        while (current !== nextGroup) {
            const next = current.next
            current.next = reversedPrevd  // 将当前节点的next指向前一个节点
            reversedPrevd = current  // 更新前一个节点为当前节点
            current = next
        }
        prev.next = reversedPrevd
        prev = head
        head = nextGroup
    }
    return dummy.next
}