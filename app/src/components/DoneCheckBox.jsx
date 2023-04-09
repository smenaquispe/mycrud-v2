import { doAction } from "../utils/apiFunctions";

function DoneCheckBox({id, done}){
    
    // marcar una task como hecho
    const doTask = (e) => {

        doAction('toggleDone', JSON.stringify({id}))
        .then(res => res)
        .then(res => e.target.checked = (res.Response.done))

    }

    return (
        <input onChange={e => doTask(e)} type="checkbox" name="done"  checked={done} />
    )
}

export default DoneCheckBox;