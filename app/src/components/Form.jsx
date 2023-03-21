import { ReturnButton } from "./Buttons";

function Form({task, handleSubmit, handleInputs}){
    
    // si le otorgamos un task con valor no nulo, pues este tenddra values
    if(task) return (
        <form method="post" className='taskForm' onSubmit={handleSubmit}>
            <input className="name" type="text" name="name" value={task['name']}  placeholder="Nombre de la tarea"  onChange={handleInputs} required />
            <textarea className="description" name="description" value={task['description']} placeholder="Descripcion de la tarea" cols="30" rows="10" onChange={handleInputs} required></textarea>
            <input className="date" type="date" name="date" value={task['date']} onChange={handleInputs} required />
            
            <div className="container-buttons">
                <ReturnButton />
                <button type='submit' className="custom-button submit">Enviar</button>
            </div>
        </form>
    )

    return (
        <form method="post" className='taskForm' onSubmit={handleSubmit}>
            <input className="name" type="text" name="name" placeholder="Nombre de la tarea" onChange={handleInputs} required />
            <textarea className="description" name="description" placeholder="Descripcion de la tarea" cols="30" rows="10" onChange={handleInputs} required></textarea>
            <input className="date" type="date" name="date" onChange={handleInputs} required />

            <div className="container-buttons">
                <ReturnButton />
                <button type='submit' className="custom-button submit">Enviar</button>
            </div>
        </form>
    )

}

export default Form;