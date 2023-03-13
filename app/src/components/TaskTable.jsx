import { Link } from 'react-router-dom'

/**
 * 
 * @param {Array} tasks
 * @returns rendering of table
 */

function TaskTable({tasks}){
    return(
        <>
        <header>my crud</header>
        <Link to={'/add'}><button>add</button></Link>
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
                <tr key={task.id}>
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

export default TaskTable;