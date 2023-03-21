import { EditButton, DeleteButton } from './Buttons'
import DoneCheckBox from './DoneCheckBox'

function Task({task}){
    return (
        <tr key={task._id} id={task._id} className={task.done && 'line'}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.date}</td>
            <td>
                <EditButton id={task._id}/>
                <DeleteButton id={task._id} />
                <DoneCheckBox id={task._id} done={task.done} />
            </td>
        </tr>

    )
}

export default Task;