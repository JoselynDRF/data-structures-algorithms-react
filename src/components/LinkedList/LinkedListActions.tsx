import { FC, useState } from 'react'

type LinkedListActionsProps = {
  linkedList: LinkedListProps
  printList: (linkedListResult?: ListNode) => void
}

const LinkedListActions: FC<LinkedListActionsProps> = ({
  linkedList,
  printList
}) => {
  const [inputValue, setInputValue] = useState('')

  const appendItem = (
    action: LinkedListData,
    value?: ListNode | LinkedListData
  ) => {
    const data =
      action === 'get' || action === 'deleteAtIndex'
        ? Number(inputValue)
        : inputValue

    const linkedListResult = linkedList[action](data, value)

    printList(linkedListResult)
    setInputValue('')
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button onClick={() => appendItem('append')} disabled={!inputValue}>
        Append
      </button>
      <button onClick={() => appendItem('prepend')} disabled={!inputValue}>
        Prepend
      </button>
      <button
        onClick={() => appendItem('insertAfterNode', linkedList.head?.next)}
        disabled={!inputValue}
      >
        insert After 2º Node
      </button>
      <button onClick={() => appendItem('insert', 2)} disabled={!inputValue}>
        insert index 2
      </button>
      <button onClick={() => appendItem('find')} disabled={!inputValue}>
        Find by Value
      </button>
      <button onClick={() => appendItem('get')} disabled={!inputValue}>
        Get by Index
      </button>
      <button onClick={() => appendItem('deleteHead')}>Delete Head</button>
      <button onClick={() => appendItem('deleteTail')}>Delete Tail</button>
      <button onClick={() => appendItem('delete')}>Delete</button>
      <button onClick={() => appendItem('deleteAtIndex')}>
        Delete at Index
      </button>
      <button onClick={() => appendItem('reverse')}>Reverse</button>
    </>
  )
}

export default LinkedListActions
