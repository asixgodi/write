/**
 * 判断给定的链表中是否有环。如果有环则返回true，否则返回false。
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
// 思路：快慢指针，只要有环，快慢指针就一定会相遇的。要注意while循环的条件
function hasCycle( head ) {
    // write code here
    if(!head) return false
    if(head.next === null) return false
    let fast = head
    let slow = head
    // 确保 fast 和 fast.next 都存在，才能安全地访问 fast.next.next
    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}