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

  const appendItem = () => {
    linkedList.append(inputValue)
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
      <button onClick={appendItem} disabled={!inputValue}>
        Append
      </button>
    </>
  )
}

export default LinkedListActions
