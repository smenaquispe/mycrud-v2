import { useEffect } from 'react';
import { useState } from 'react'
import * as api from './api/api.js'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.getTasks().then(setTasks)
  },[])

  return (
    <>
      <header>my crud</header>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Options</th>
        </tr>
        {
          tasks.map(task => {
            return(
              <tr>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>Done</button>
                </td>
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default App
