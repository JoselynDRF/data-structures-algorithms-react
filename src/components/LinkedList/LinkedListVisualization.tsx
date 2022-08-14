import { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import LinkedListActions from './LinkedListActions'

type LinkedListVisualizationProps = {
  linkedList: LinkedListProps
}

const LinkedListVisualization: FC<LinkedListVisualizationProps> = ({
  linkedList
}) => {
  const [linkedListView, setLinkedListView] = useState<JSX.Element[]>()

  const printList = (linkedListResult?: ListNode) => {
    let currentNode = linkedList.head
    const text: JSX.Element[] = []

    while (currentNode != null) {
      text.push(
        <span
          key={uuidv4()}
          style={{
            fontWeight:
              linkedListResult?.data === currentNode.data ? 'bold' : 'normal'
          }}
        >
          {currentNode.data} &#8594;{' '}
        </span>
      )
      currentNode = currentNode.next
    }

    console.log('linkedList', linkedList)
    setLinkedListView(text)
  }

  return (
    <>
      <LinkedListActions linkedList={linkedList} printList={printList} />
      <div>{linkedListView}</div>
    </>
  )
}

export default LinkedListVisualization
