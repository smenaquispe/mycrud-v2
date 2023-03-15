import { Routes, Route, Link } from 'react-router-dom'
import TaskTable from './components/taskTable.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={ <TaskTable /> }></Route>
        <Route path='/add' element={ <TaskForm operation={'add'} /> }></Route>
        <Route path='/edit/:id' element={ <TaskForm operation={'edit'} /> }></Route>
      </Routes>
    </>
  )
}

export default App
