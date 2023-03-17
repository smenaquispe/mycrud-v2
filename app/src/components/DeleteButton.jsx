import { doAction } from "../utils/apiFunctions";
import { useNavigate } from "react-router-dom";
import Button from './Button.jsx'

function DeleteButton({id}){
    
    const navigate = useNavigate()

    // eliminar un task
    const deleteTask = id => {
        doAction('delete', JSON.stringify({id}))
        .then(console.log)
        .then(navigate(0))
    }
    
    return (
        <Button classTag={'delete'} doTask={() => deleteTask(id)}>
            Delete
        </Button>
    )
}

export default DeleteButton;