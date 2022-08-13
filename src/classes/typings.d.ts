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
}
