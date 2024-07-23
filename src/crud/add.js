import { db } from "../main";

const data = document.querySelector('#data')

export const addtask=()=>{
    if(!data.value) {
        alert('ingresa una tarea')
    }else{
        db.push({task:data.value,edit:'editClick', delete:'deleteClick'})
        localStorage.setItem('db',JSON.stringify(db))
    }
    data.value = ''
    location.reload()

}