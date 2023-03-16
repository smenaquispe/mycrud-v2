import { doAction } from "../utils/apiFunctions";
import { useNavigate } from "react-router-dom";

function DeleteButton({id}){
    
    const navigate = useNavigate()

    // eliminar un task
    const deleteTask = id => {
        doAction('delete', JSON.stringify({id}))
        .then(console.log)
        .then(navigate(0))
    }
    
    return (
        <button onClick={e => deleteTask(id)}>Delete</button>
    )
}

export default DeleteButton;