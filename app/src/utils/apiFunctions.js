export async function doAction(op, task){
    
    let info = {}
    if(task){
        info = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: task,
            mode: "cors"
        }
    } else {
        info = {
            method: 'GET',
            mode: "cors"
        }
    }

    let URL = import.meta.env.VITE_API_URI  
    op ? URL += op : URL

    const response = await fetch(URL, 
        info
    )
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
        console.warn(err)
        return err
    })


    return response
}