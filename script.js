// function to add the list items

function addTodo() {
    let taskInput = document.getElementById("taskInput");
    let tasksContainer = document.getElementById("tasks");
    let taskCount = document.getElementById("task-count");
    if(taskInput.value.trim() !== ""){
        const todoItem=document.createElement('div');
        todoItem.className= "todo-item";

        const checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.onclick = function () {
            todoItem.classList.toggle("checked");
          };

          let taskText=document.createElement("span");
          taskText.textContent=taskInput.value;

          var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        tasksContainer.removeChild(todoItem);
        updateTaskCount();
      };
      todoItem.appendChild(checkbox);
      todoItem.appendChild(taskText);
      todoItem.appendChild(deleteButton);

      tasksContainer.appendChild(todoItem);
    
    taskInput.value = "";
      updateTaskCount();
    }}

    // function to filter the list items

function filterTasks() {
    let filter = document.getElementById("filterDropdown").value;
    let tasksContainer = document.getElementById("tasks");
    let todoItems = tasksContainer.getElementsByClassName("todo-item");
    

    for (let i = 0; i < todoItems.length; i++) {
      let todoItem = todoItems[i];
      let isChecked = todoItem.classList.contains("checked");

      if ((filter === "completed" && isChecked) ||
          (filter === "uncompleted" && !isChecked)) {
        todoItem.style.display = "flex";
      } else {
        todoItem.style.display = "none";
      }
    }

    updateTaskCount();
  }

// function to update the task count of the list items.

function updateTaskCount(){
    let taskCount = document.getElementById("task-count");
    var tasksContainer = document.getElementById("tasks");
    var todoItems = tasksContainer.getElementsByClassName("todo-item");
    taskCount.textContent = "Total Tasks: " + todoItems.length;
}

// function to delete all the list items.

function deleteAll(){
  var tasksContainer = document.getElementById("tasks");
  let taskCount = document.getElementById("task-count");
   
  if(tasksContainer){
    tasksContainer.innerHTML="";
  }
  updateTaskCount();
  addTodo();
}
 

