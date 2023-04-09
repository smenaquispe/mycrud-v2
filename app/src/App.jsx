import { Routes, Route } from 'react-router-dom'
import TaskTable from './components/TaskTable.jsx'
import TaskForm from './components/TaskForm.jsx'
import './css/App.css'
import Header from './components/Header.jsx'

function App() {

  
  return (
    <>
      <div id='main-space'>
        <Header />
        <Routes>
          <Route path='/' element={ <TaskTable /> }></Route>
          <Route path='/add' element={ <TaskForm operation={'add'} /> }></Route>
          <Route path='/edit/:id' element={ <TaskForm operation={'edit'} /> }></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
