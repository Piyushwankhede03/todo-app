const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="removeTask(this)">❌</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
});

function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}
