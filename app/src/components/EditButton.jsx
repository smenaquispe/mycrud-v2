import { useNavigate } from "react-router-dom";
import Button from "./Button";

function EditButton({id}){
    
    const navigate = useNavigate()

    const navigateToEdit = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <Button classTag={'edit'} doTask={navigateToEdit}>
            Edit
        </Button>
    )
}

export default EditButton;