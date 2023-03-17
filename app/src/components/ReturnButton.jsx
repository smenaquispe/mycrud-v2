import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ReturnButton(){

    const navigate = useNavigate()

    return (
        <Button classTag={'return'} doTask={() => navigate('/')}>
            Regresar
        </Button>
    )
}

export default ReturnButton;