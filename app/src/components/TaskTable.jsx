import { useState, useEffect } from 'react'
import { doAction } from '../utils/apiFunctions.js'
import Task from './Task'
import { AddButton } from './Buttons.jsx'

function TaskTable(){

    const [tasks, setTasks] = useState(null)

    // auxiliar que permite actualizar
    const [updateList, setUpdateList] = useState(false)
    const handleUpdtateList = e => {
        console.log(e.target.matches('.delete'))
            setUpdateList(true)
    }
    
    // obtener la lista de tasks
    useEffect(() => {
        doAction()
        .then(setTasks)

        if(updateList) setUpdateList(false)

    }, [updateList])

    if(!tasks)
    return <h1>Loading...</h1>

    return(
        <>
            <div id="my-space">
                <table id='task-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody onClick={handleUpdtateList}>
                        {
                            tasks.map(task => <Task task={task} />)
                        }
                    </tbody>
                </table>   

                <AddButton />
            </div>
        </>
    )
}

export default TaskTable;