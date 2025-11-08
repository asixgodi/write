/**
 * 给定一个节点数为n的无序单链表，对其按升序排序。
 * 要求：空间复杂度 O(n)，时间复杂度 O(nlogn)
 */
// 我的思路，遍历一遍链表，将其放到数组当中去，然后运用快排进行排序，在遍历链表放入链表
// 链表排序的最佳方法：归并排序.---->分解为：合并两个有序链表和归并
function sortInList( head ) {
    // write code here
    // 一个节点或者空节点已经是有序的
    if(head === null || head.next === null){
        return head
    }
    let slow = head
    let fast = head.next
    while(fast!==null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    // 后半部分的头结点
    const righthalf = slow.next
    slow.next = null
    const leftSorted = sortInList(head)
    const rightSorted = sortInList(righthalf)
    return merge(leftSorted,rightSorted)
}

// 合并两个有序链表
function merge(head1,head2){
    const dummy = new ListNode(-1)
    let head = dummy
    while(head1!==null && head2!==null){
        if(head1.val<head2.val){
            head.next = head1
            head1 = head1.next
        }else{
            head.next = head2
            head2 = head2.next
        }
    }
    if(head1!== null) head.next = head1
    if(head2!== null) head.next = head2
    return dummy.next
}