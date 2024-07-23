import { db } from "../main";

const newData = document.querySelector('#newData')

export function editTask(i){
    db[i].task = newData.value
    localStorage.setItem('db',JSON.stringify(db))
    location.reload()

}