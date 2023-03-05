const API_TASK_URI  = 'http://localhost:4000'

export async function getTasks(){
    try{
        const response = await (await fetch(API_TASK_URI + '/tasks')).json()
        return response
    } catch(error) {
        console.log(error)
        return []
    }
}

