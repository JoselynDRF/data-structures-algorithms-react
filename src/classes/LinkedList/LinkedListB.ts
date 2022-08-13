import LinkedListNode from './LinkedListNode'

class LinkedList {
  head: ListNode

  constructor() {
    this.head = null
  }

  /**
   * Appends a new node at the end of the linked list
   * @param data New data
   */
  append(data: LinkedListData) {
    const newNode = new LinkedListNode(data)

    // If the Linked List is empty, then make the new node as head
    if (!this.head) {
      this.head = new LinkedListNode(data)
      return
    }

    // This new node is going to be the last node, so make next of it as null
    newNode.next = null
    let tail = this.head

    // Traverse until the last node
    while (tail.next != null) {
      tail = tail.next
    }

    // Change the next of last node
    tail.next = newNode
    return
  }

  /**
   * Prepends a new node at the start of the linked list
   * @param data New data
   */
  prepend(data: LinkedListData) {
    const newNode = new LinkedListNode(data)

    newNode.next = this.head
    this.head = newNode
  }
}

export default LinkedList
