class LinkedListNode {
  data: LinkedListData
  next: ListNode

  constructor(data: LinkedListData, next = null) {
    this.data = data
    this.next = next
  }
}
export default LinkedListNode
