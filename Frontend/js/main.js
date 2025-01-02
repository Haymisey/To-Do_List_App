document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("task-list");

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.classList.add("list-group-item", "text-center");
    emptyMessage.textContent = "Nothing to do currently";
    taskList.appendChild(emptyMessage);
  } else {
    tasks.forEach(taskText => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = taskText;
      taskList.appendChild(li);
    });
  }
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");

    tasks.forEach((taskText, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${index + 1}. ${taskText}`;
        taskList.appendChild(li);
    });
}
