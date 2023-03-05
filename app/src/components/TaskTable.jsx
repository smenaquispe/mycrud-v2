function TaskTable({tasks}){
    return(
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

    )
}

export default TaskTable;