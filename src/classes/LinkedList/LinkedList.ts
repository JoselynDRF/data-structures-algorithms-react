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

  /**
   * Inserts a new node after the given previous node
   * @param data New data
   * @param prevNode Previous node
   */
  insertAfterNode(data: LinkedListData, prevNode: ListNode) {
    const newNode = new LinkedListNode(data)

    if (prevNode) {
      newNode.next = prevNode.next
      prevNode.next = newNode
    } else {
      console.log('Prev node cannot be null')
    }
  }

  /**
   * Inserts a new node at a specific position in a linked list
   * @param data New data
   * @param insertIndex Insert index
   */
  insert(data: LinkedListData, insertIndex: number) {
    let currentNode: ListNode = this.head

    if (insertIndex > 0 && currentNode) {
      const newNode = new LinkedListNode(data)

      for (let index = 0; index < insertIndex - 1; index++) {
        if (!currentNode) return
        currentNode = currentNode.next
      }

      if (currentNode) {
        newNode.next = currentNode.next
        currentNode.next = newNode
      }
    } else {
      this.prepend(data)
    }
  }

  /**
   * Finds value in linked list
   * @param value Value
   */
  find(value: LinkedListData) {
    if (this.head) {
      let currentNode: ListNode = this.head

      while (currentNode) {
        if (currentNode.data === value) {
          return currentNode
        }
        currentNode = currentNode.next
      }
    }
  }

  /**
   * Gets the node of the given index in the linked list
   * @param index Index
   */
  get(index: number) {
    let currentNode: ListNode = this.head

    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next || null
    }

    return currentNode
  }

  /**
   * Deletes the first node of the linked list
   */
  deleteHead() {
    if (this.head) {
      const deletedHead = this.head
      this.head = deletedHead.next
    }
  }

  /**
   * Deletes the last node of the linked list
   */
  deleteTail() {
    let currentNode = this.head

    if (currentNode?.next) {
      while (currentNode.next?.next) {
        currentNode = currentNode.next
      }
      currentNode.next = null
    } else {
      this.head = null
    }
  }

  /**
   * Deletes the first occurrence of value in linked list
   * @param data Value to delete
   */
  delete(data: LinkedListData) {
    if (this.head) {
      let currentNode: ListNode = this.head

      if (currentNode.data === data) {
        this.head = currentNode.next
        return
      }

      while (currentNode.next) {
        if (currentNode.next.data === data) {
          currentNode.next = currentNode.next.next
          return
        } else {
          currentNode = currentNode.next
        }
      }
    }
  }

  reverse() {
    let currentNode = this.head
    let prevNode: ListNode = null
    let nextNode: ListNode = null

    while (currentNode) {
      // Store next node
      nextNode = currentNode.next

      // Change next node of the current node so it would link to previous node
      currentNode.next = prevNode

      // Move prevNode and currentNode nodes one step forward
      prevNode = currentNode
      currentNode = nextNode

      // Reset head
      this.head = prevNode
    }
  }
}

export default LinkedList
