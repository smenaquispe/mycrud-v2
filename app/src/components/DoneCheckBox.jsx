import { doAction } from "../utils/apiFunctions";

function DoneCheckBox({id, done}){
    
    // marcar una task como hecho
    const doTask = (e, id) => {

        doAction('toggleDone', JSON.stringify({id}))
        .then(res => res)
        .then(res => e.target.checked = (res.Response.done))

    }

    return (
        <input onChange={e => doTask(e, id)} type="checkbox" name="done" id="done" checked={done} />
    )
}

export default DoneCheckBox;