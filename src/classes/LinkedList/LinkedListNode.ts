class LinkedListNode {
  data: LinkedListData
  next: ListNode

  constructor(data: LinkedListData, next: ListNode = null) {
    this.data = data
    this.next = next
  }
}
export default LinkedListNode
