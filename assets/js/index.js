// 
//  DECLARACION DE VARIABLES
console.log("hola mundo");
// ARREGLO DE OBJETOS
const myTareas = [
    {id : 1, actividad: "Actividad 1", realizado: false},
    {id : 2, actividad: "Actividad 2", realizado: false},
    {id : 3, actividad: "Actividad 3", realizado: false}
]

// VARIABLES DEL DOM
let idSeq    = 3; // Secuencia de Actividades
let idTbody  = document.getElementById("idTbody");
let idTotal  = document.getElementById("idTotal");
let idReali  = document.getElementById("idReali");
let idBtn    = document.getElementById("idBtn") ;
let idTask   = document.getElementById("idTask");



// cleanTask : Funcion que permite limpiar un elemnto del DOM.
const cleanTask = () => ( idTbody.innerHTML = "");

// displayTask : Función que renderiza un arreglo
const displayTask = function (listaTareas = myTareas){ 
    cleanTask();
    
    let tmpTbody = "";
    for(let lista of myTareas) {
        tmpTbody += `
        <tr>
          <td>${lista.id}</td>   
          <td>${lista.actividad}</td>   
          <td>
            <input class="form-check-input" onclick="doTask(${lista.id})" 
            ${lista.realizado ? "Checked" : ""}
            type="checkbox" value="" id="flexCheck">
          </td>    
          <td>
             <button onclick="delTask(${lista.id})" ><i class="fa fa-trash" aria-hidden="true"></i>
             </button>
          </td>
          </tr>
        ` ;
    }
    idTbody.innerHTML = tmpTbody;
    idTotal.innerHTML = myTareas.length;
    const nRealizada  = myTareas.filter((lista) => lista.realizado === true);
    idReali.innerHTML = nRealizada.length;
}

displayTask();

// doTask : Funcion que permite marcar una actividad o tarea como realizada
function doTask (iD){
  myTareas.map((el) => {if (el.id == iD) el.realizado = !el.realizado});
  displayTask();
}

// Agregar una nueva Actividad o Tarea
idBtn.addEventListener("click",()=>{
   myTareas.push({id:parseInt(++idSeq), actividad: idTask.value, realizado:false});
   idTask.value = "";    
   displayTask();
});

// delTask : Funcion que elimina elemento con index = parId de un arreglo

function  delTask(parId){
  const indexA = myTareas.findIndex((actividad)=> actividad.id == parId);
  myTareas.splice(indexA,1);
  displayTask();

}
