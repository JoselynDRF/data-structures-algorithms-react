import LinkedListNode from './LinkedListNode'

class LinkedList {
  head: ListNode
  tail: ListNode

  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * Appends a new node at the end of the linked list
   * @param data New data
   */
  append(data: LinkedListData) {
    const newNode = new LinkedListNode(data)

    // If the Linked List is empty, then make the new node as head
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    // Add the new element to the end of the list
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
      return
    }
  }

  /**
   * Prepends a new node at the start of the linked list
   * @param data New data
   */
  prepend(data: LinkedListData) {
    const newNode = new LinkedListNode(data, this.head)

    this.head = newNode

    // If there is no tail, then make new node a tail
    if (!this.tail) {
      this.tail = newNode
    }

    return
  }
}

export default LinkedList
