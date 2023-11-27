 // Iniciar objetos vacíos. Declaracion de Variables. Estructura DOM 20%.
 var tasks = [];
 var taskIndex;

 /* Funcion para aniadir Tareas al momento de dar click "Agregar".5% */ 
  function addTask() {
   // Obtener el valor del input
  var newTask = document.getElementById("taskInput").value;

   // Validar que el input no esté vacío
   if (newTask !== "") {

  // Agregar/Crear la nueva tarea al arreglo 5%
   tasks.push(newTask);

 /*  Guardar el arreglo en Local Storage. 
  Persistir los Datos y almacenarlos en el Local Storage 20%. */
  localStorage.setItem("tasks", JSON.stringify(tasks));

     // Actualizar la lista de tareas 
     renderTasks();

     // Limpiar el input
     document.getElementById("taskInput").value = "";
   }
 }
/* Funcion para Editar Tareas al momento de dar click "Editar".5%*/ 
 function editTask(index) {
   // Guardar el índice de la tarea a editar 
   taskIndex = index;

   // Obtener el valor de la tarea a editar 
   var task = tasks[index];

   // Mostrar el valor en el input de edición
   document.getElementById("editInput").value = task;

   // Mostrar el modal de edición
   document.getElementById("editModal").style.display = "block";
 }

 /* Funcion para Actualizar Tareas al momento de dar click "Actualizar".5% */
 function updateTask() {
   // Obtener el nuevo valor del input de edición
   var updatedTask = document.getElementById("editInput").value;

   // Actualizar el valor en el arreglo
   tasks[taskIndex] = updatedTask;

   // Guardar el arreglo actualizado en Local Storage
   localStorage.setItem("tasks", JSON.stringify(tasks));

   // Actualizar la lista de tareas
   renderTasks();

   // Cerrar el modal de edición
   document.getElementById("editModal").style.display = "none";
 }

 /* Funcion para Eliminar Tareas al momento de dar click "Eliminar".5% */
 function deleteTask(index) {
   // Eliminar la tarea del arreglo
   tasks.splice(index, 1);

   // Guardar el arreglo actualizado en Local Storage
   localStorage.setItem("tasks", JSON.stringify(tasks));

   // Actualizar la lista de tareas
   renderTasks();
 }
/* Funcion para renderizar las tareas de la lista */
 function renderTasks() {
   // Obtener el elemento de la lista de tareas
   var taskList = document.getElementById("taskList");

   // Limpiar la lista antes de renderizar las tareas
   taskList.innerHTML = "";

   // Obtener el arreglo de tareas almacenado en Local Storage
   tasks = JSON.parse(localStorage.getItem("tasks")) || [];

   // Renderizar las tareas en la lista
   tasks.forEach(function(task, index) {  /* LLama al metodo forEach(),funcion callback */
     var listItem = document.createElement("li");   /* Se declara la variable Item de Lista */
     listItem.innerText = task;

     var editButton = document.createElement("button");  /* Se declara la variable editar */
     editButton.className = 'edit-Button';  /* Se declara el nombre de la clase para conectar CSS */
     editButton.innerText = "Editar";    /* Asigna el Texto al Boton editar */
     editButton.onclick = function() {/* Edita el elemento al momento de dar click */
       editTask(index);
     };

     var deleteButton = document.createElement("button");  /* Se declara la variable borrar */
     deleteButton.className = 'delete-Button'; /* Se declara el nombre de la clase para conectar CSS */
     deleteButton.innerText = "Borrar";    /* Asigna el Texto al Boton borrar */
     deleteButton.onclick = function() {  /* Borrar el elemento al momento de dar click */
       deleteTask(index);
     };

     listItem.appendChild(editButton);  /* Agrega el boton editar al elemento li(ListItem) */
     listItem.appendChild(deleteButton);  /* Agrega el boton eliminar/borrar al elemento li(ListItem)*/
     taskList.appendChild(listItem);  /* Agrega el elemento li(ListItem) a la lista de Tareas */
   });
 }