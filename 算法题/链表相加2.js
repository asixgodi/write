/**
 * 假设链表中每一个节点的值都在 0 - 9 之间，那么链表整体就可以代表一个整数。
    给定两个这种链表，请生成代表两个整数相加值的结果链表。
    要求：空间复杂度O(n),时间复杂度O(n)
    链表 1 为 9->3->7，链表 2 为 6->3，最后生成新的结果链表为 1->0->0->0。
     function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

// 创建一个新的链表，利用栈，现将两个链表中的val压入栈，然后出栈进行计算，
// 采用头插法     
function addInList( head1 ,  head2 ) {
    // write code here
    const stack1 = []
    const stack2 = []
    // 压入栈
    while(head1){
        stack1.push(head1.val)
        head1 = head1.next
    }
     while(head2){
        stack2.push(head2.val)
        head2 = head2.next
    }
    // 新链表的头结点
    let reshead = null
    let carry = 0
    while(stack1.length>0 || stack2.length>0 || carry>0){
        let val1 = stack1.length > 0? stack1.pop() : 0
        let val2 = stack2.length > 0? stack2.pop() : 0
        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        let currentVal = sum % 10
        let newNode = new ListNode(currentVal)
        newNode.next = reshead
        reshead = newNode
    }
    return reshead
}