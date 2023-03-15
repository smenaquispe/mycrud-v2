import { doAction } from '../utils/apiFunctions';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TaskForm({operation}){
    
    const { id } = useParams();
    const [task, setTask] = useState(null);

    // prevenimos el submit y realizamos la action correspondiente
    const handleSubmit = (e) => {
        e.preventDefault();
        doAction(operation, task)
    }
        
    useEffect(() => {
        // si tenemos un id y no hay task, sera para actualizar y tendremos valores ya
        if(id && !task) {
            doAction(id) // realiza un get para obtener el task con el id enviado
            .then(res => {
                setTask({
                    name: res['name'],
                    description: res['description'],
                    date: res['date']
                })
            })
        }
    }, [task])


    // cuando el form cambia, el task se actualiza
    const handleTask = (e) => {
        const formData = new FormData(e.currentTarget)

        const newTask = {
            name: formData.get('name'),
            description: formData.get('description'),
            date: formData.get('date')
        }
        
        if(id) newTask['id'] = id 

        setTask(JSON.stringify(newTask));
    }

    return(
        <>
        {
            task ?
            (
                <form method="post" className='taskForm' onSubmit={handleSubmit} onChange={handleTask}>
                    <input className="name" type="text" name="name" value={task['name']}  placeholder="Nombre de la tarea"  required />
                    <textarea className="description" name="description" value={task['description']} placeholder="Descripcion de la tarea" cols="30" rows="10" required></textarea>
                    <input className="date" type="date" name="date" value={task['date']} required />
                    <button type='submit'>Enviar</button>
                </form>
            ) : 
            (
                <form method="post" className='taskForm' onSubmit={handleSubmit} onChange={handleTask}>
                    <input className="name" type="text" name="name" placeholder="Nombre de la tarea" required />
                    <textarea className="description" name="description" placeholder="Descripcion de la tarea" cols="30" rows="10" required></textarea>
                    <input className="date" type="date" name="date" required />
                    <button type='submit'>Enviar</button>
                </form>
            )
        }
        </>
    
    )
}

export default TaskForm;