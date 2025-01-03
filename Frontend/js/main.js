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
    tasks.forEach(({ task, dueDate }, index) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = `${index + 1}. ${task} ${dueDate ? `(Due: ${dueDate})` : ""}`;
      taskList.appendChild(li);
    });
  }
}
