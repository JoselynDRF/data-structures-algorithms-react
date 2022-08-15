type LinkedListData = number | string
type ListNode = LinkedListNodeProps | null

type LinkedListNodeProps = {
  data: LinkedListData
  next: ListNode
}

type LinkedListProps = {
  head: ListNode
  tail?: ListNode
  append: (data: LinkedListData) => void
  prepend: (data: LinkedListData) => void
  insertAfterNode: (data: LinkedListData, prevNode: ListNode) => void
  insert: (data: LinkedListData, insertIndex: number) => void
  find: (value: LinkedListData) => void
  get: (index: number) => void
  deleteHead: () => void
  deleteTail: () => void
  delete: (data: LinkedListData) => void
  deleteAtIndex: (index: number) => void
  reverse: () => void
}
