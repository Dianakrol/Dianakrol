export function getData() {
  const db = JSON.parse(localStorage.getItem('db'))
 
  document.querySelector('#app').innerHTML=`
  <div>
   ${db.map((array)=>`
   <div class="flex justify-between gap-10">
     <h2>${array.task}</h2>
     <div class="flex">
      <button class="${array.edit}" >✏️</button>
      <button class="${array.delete}" >❌</button>
     </div>
   </div>
   `).join('')}
  </div>
  `
}
