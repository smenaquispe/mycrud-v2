import { useEffect, useState } from 'react';

function TaskForm(){
    
    const [task, setTask] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newTask = {
            name: formData.get('name'),
            description: formData.get('description'),
            date: formData.get('date')
        }

        setTask(JSON.stringify(newTask));
    }
        
    
    useEffect(() => {

        console.log(task)

        fetch("http://localhost:4000/tasks/add", 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: task
            })
        .then(res => res.json())
        .then(console.log)
        .catch(console.warn)
    }, [task])

    return(
        <form method="post" onSubmit={handleSubmit}>
            <input className="name" type="text" name="name" placeholder="Nombre de la tarea" required />
            <textarea className="description" name="description" placeholder="Descripcion de la tarea" cols="30" rows="10" required></textarea>
            <input className="date" type="date" name="date" required />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default TaskForm;