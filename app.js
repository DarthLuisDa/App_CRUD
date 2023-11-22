 // Iniciar objetos vacíos
 var tasks = [];
 var taskIndex;

 function addTask() {
   // Obtener el valor del input
   var newTask = document.getElementById("taskInput").value;

   // Validar que el input no esté vacío
   if (newTask !== "") {
     // Agregar la nueva tarea al arreglo
     tasks.push(newTask);

     // Guardar el arreglo en Local Storage
     localStorage.setItem("tasks", JSON.stringify(tasks));

     // Actualizar la lista de tareas
     renderTasks();

     // Limpiar el input
     document.getElementById("taskInput").value = "";
   }
 }

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

 function deleteTask(index) {
   // Eliminar la tarea del arreglo
   tasks.splice(index, 1);

   // Guardar el arreglo actualizado en Local Storage
   localStorage.setItem("tasks", JSON.stringify(tasks));

   // Actualizar la lista de tareas
   renderTasks();
 }

 function renderTasks() {
   // Obtener el elemento de la lista de tareas
   var taskList = document.getElementById("taskList");

   // Limpiar la lista antes de renderizar las tareas
   taskList.innerHTML = "";

   // Obtener el arreglo de tareas almacenado en Local Storage
   tasks = JSON.parse(localStorage.getItem("tasks")) || [];

   // Renderizar las tareas en la lista
   tasks.forEach(function(task, index) {
     var listItem = document.createElement("li");
     listItem.innerText = task;

     var editButton = document.createElement("button");
     editButton.innerText = "Editar";
     editButton.onclick = function() {
       editTask(index);
     };

     var deleteButton = document.createElement("button");
     deleteButton.innerText = "Eliminar";
     deleteButton.onclick = function() {
       deleteTask(index);
     };

     listItem.appendChild(editButton);
     listItem.appendChild(deleteButton);
     taskList.appendChild(listItem);
   });
 }