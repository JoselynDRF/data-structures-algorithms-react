import LinkedList from './classes/LinkedList/LinkedList'
import LinkedListVisualization from './components/LinkedList/LinkedListVisualization'

const App = () => {
  const linkedList = new LinkedList()

  return <LinkedListVisualization linkedList={linkedList} />
}

export default App
