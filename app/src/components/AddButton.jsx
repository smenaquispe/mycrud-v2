import { useNavigate } from "react-router-dom";
import Button from "./Button";

function AddButton(){

    const navigate = useNavigate()

    const navigateToAdd = () => {
        navigate('/add')
    }

    return (
        <Button classTag={'add'} doTask={navigateToAdd}>
            Add
        </Button>
    )
}

export default AddButton;