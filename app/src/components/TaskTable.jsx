import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function TaskTable(){

    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/tasks')
        .then(res => res.json())
        .then(setTasks)
        .then(console.log)
    }, [])


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
                        <button>Delete</button>
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