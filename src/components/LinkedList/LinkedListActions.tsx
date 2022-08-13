import { FC, useState } from 'react'

type LinkedListActionsProps = {
  linkedList: LinkedListProps
  printList: () => void
}

const LinkedListActions: FC<LinkedListActionsProps> = ({
  linkedList,
  printList
}) => {
  const [inputValue, setInputValue] = useState('')

  const appendItem = (action: string) => {
    linkedList[action](inputValue)
    printList()
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
    </>
  )
}

export default LinkedListActions
