/**
 给出一个升序排序的链表，删除链表中的所有重复出现的元素，只保留原链表中只出现一次的元素。
 */

 // 方法一：利用map。本质上是修改前驱节点的指针
 function deleteDuplicates( head ) {
    const map = new Map()
    const dummy = new ListNode(0)
    dummy.next = head
    let p = head
    while(p!==null){
        map.set(p.val, (map.get(p.val) || 0) + 1)
        p = p.next
    }
    p = dummy
    // 要从p.next开始判断，因为从p开始，头结点的val为undefined
    while(p.next){
        if(map.get(p.next.val)>1){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return dummy.next
}

// 进阶方法，利用有序链表的有序性
function deleteDuplicates( head ) {
   const dummy = new ListNode(0)
   dummy.next = head
   let cur = dummy
   // 当后面至少还有两个节点时，才需要判断重复
   while(cur.next && cur.next.next){
        // 这里一直操作的是cur.next节点，并没有移动cur
        if(cur.next.val === cur.next.next.val){
            const x = cur.next.val
            while(cur.next && cur.next.val === x){
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
   }
   return dummy.next
}