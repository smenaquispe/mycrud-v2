import { useFetch } from './custom/useFetch.js'
import TaskTable from './components/taskTable.jsx'

function App() {

  const tasks = useFetch('http://localhost:4000/tasks')

  return (
    <>
      <header>my crud</header>
      <TaskTable tasks={tasks}></TaskTable>
    </>
  )
}

export default App
