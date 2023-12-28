const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
  
addButton.addEventListener('click', addTask);

function addTask() {
  let taskText = taskInput.value;
  taskList.innerHTML += '<li onclick="deleteTask(this)">' + taskText + '</li>';
  taskInput.value = '';
}

function deleteTask(taskEl) {
  taskEl.style.display = 'none';
  console.log(taskEl);
}

