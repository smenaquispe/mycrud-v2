import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doAction } from '../utils/apiFunctions.js'
import Task from './Task'
import AddButton from './AddButton.jsx'

function TaskTable(){

    const [tasks, setTasks] = useState(null)
    
    // obtener la lista de tasks
    useEffect(() => {
        doAction()
        .then(setTasks)
    }, [])

    if(!tasks)
    return <h1>Loading...</h1>

    return(
        <>
        <AddButton />
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
                    tasks.map(task => <Task task={task} />)
                }
            </tbody>
        </table>   
        </>
    )
}

export default TaskTable;