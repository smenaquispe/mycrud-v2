export async function doAction(op, task){
    
    let info = {}
    if(task){
        info = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: task
        }
    } else {
        info = {
            method: 'GET'
        }
    }

    const response = await fetch(`http://localhost:4000/tasks/${op || ''}`, 
        info
    )
    .then(res => res.json())
    .then(res => res)
    .catch(console.warn)


    return response
}