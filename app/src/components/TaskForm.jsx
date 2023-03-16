import { doAction } from '../utils/apiFunctions';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function TaskForm({operation}){
    
    // para redireccionamiento
    const navigate = useNavigate()

    // pasamos el id, si es que es necesrio buscar task con ese id
    const { id } = useParams();

    // seteamos task como null por defecto
    const [task, setTask] = useState(null);

    // esto solo pasa si tenemos el id, y no el task, significa que debemos de byscar el task y setar
    useEffect(() => {
        // si tenemos un id y no hay task, sera para actualizar y tendremos valores ya
        if(id && !task) {
            doAction(id) // realiza un get para obtener el task con el id enviado
            .then(res => {
                setTask({
                    id: id, 
                    name: res['name'],
                    description: res['description'],
                    date: res['date']
                })
            })
        }

    }, [task])
    
    // prevenimos el submit y realizamos la action correspondiente
    const handleSubmit = async (e) => {
        e.preventDefault();
        await doAction(operation, JSON.stringify(task))
        navigate('/')
    }


    // cuando el form cambia, el task se actualiza
    const handleInputs = (e) => {
        const { name, value } = e.target 
        
        setTask({
            ...task,
            [name] : value
        })
    }

    return(
        <>
        {
            <Form 
                task={task}
                handleSubmit={(e) => handleSubmit(e)}
                handleInputs={(e) => handleInputs(e)}
            />
        }
        </>
    
    )
}

export default TaskForm;