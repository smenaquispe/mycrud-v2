import { useNavigate } from "react-router-dom"

// parent button

export function Button({doTask, classTag, children}){
    return (
        <button className={`custom-button ${classTag}`} onClick={doTask} >{children}</button>
    )
}


// button to go to add

export function AddButton(){

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

// button to delete a task


export function DeleteButton({id}){
    
    const navigate = useNavigate()

    // eliminar un task
    const deleteTask = id => {
        doAction('delete', JSON.stringify({id}))
        .then(console.log)
        .then(navigate('/'))
    }
    
    return (
        <Button classTag={'delete'} doTask={() => deleteTask(id)}>
            Delete
        </Button>
    )
}

// button to go to edit a task

export function EditButton({id}){
    
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

// button to return to main sesion


export function ReturnButton(){

    const navigate = useNavigate()

    return (
        <Button classTag={'return'} doTask={() => navigate('/')}>
            Regresar
        </Button>
    )
}
