const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="markCompleted(this.parentNode)">Complete</button>
      <button onclick="deleteTask(this.parentNode)">Delete</button>
    `;
    pendingList.appendChild(li);
    taskInput.value = "";
  }
}

function markCompleted(taskElement) {
  completedList.appendChild(taskElement);
  taskElement.classList.add("completed");
}

function deleteTask(taskElement) {
  taskElement.remove();
}
