import { Routes, Route, Link } from 'react-router-dom'
import TaskTable from './components/taskTable.jsx'
import TaskForm from './components/TaskForm.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/tasks')
    .then(res => res.json())
    .then(setTasks)
    .then(console.log)
    console.log(tasks)
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={ <TaskTable tasks={tasks} /> }></Route>
        <Route path='/add' element={ <TaskForm /> }></Route>
      </Routes>
    </>
  )
}

export default App
