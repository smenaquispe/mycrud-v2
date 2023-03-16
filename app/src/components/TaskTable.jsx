import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doAction } from '../utils/apiFunctions.js'
import { useNavigate } from 'react-router-dom'

function TaskTable(){

    const [tasks, setTasks] = useState(null)
    const navigate = useNavigate()
    
    // obtener la lista de tasks
    useEffect(() => {
        doAction()
        .then(setTasks)
    }, [])


    // eliminar un task
    const deleteTask = id => {
        doAction('delete', JSON.stringify({id}))
        .then(console.log)
        .then(navigate(0))
    }


    if(!tasks)
    return <h1>Loading...</h1>

    return(
        <>
        <header>my crud</header>
        <Link to={'/add'}><button>add</button></Link>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                tasks.map(task => {
                    return(
                    <tr key={task._id} id={task._id}>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td>{task.date}</td>
                        <td>
                        <Link to={`/edit/${task._id}`} ><button>Edit</button></Link> 
                        <button onClick={e => deleteTask(task._id)}>Delete</button>
                        <button>Done</button>
                        </td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>   
        </>
    )
}

export default TaskTable;