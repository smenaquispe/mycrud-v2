const URL = import.meta.env.VITE_API_URI

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

    const response = await fetch(URL + op, 
        info
    )
    .then(res => res.json())
    .then(res => res)
    .catch(console.warn)


    return response
}