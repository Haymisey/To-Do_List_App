document.getElementById("add-task").addEventListener("click", addTask);
document.getElementById("new-task").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '5px';

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input", "me-2");
        checkbox.style.transform = 'scale(1.5)';
        li.appendChild(checkbox);

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskContent.style.marginLeft = '0';
        li.appendChild(taskContent);

        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '5px';

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-warning", "btn-sm");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(taskContent, editButton);
        buttonContainer.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(li);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);
        taskList.appendChild(li);

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";
    } else {
        alert('Please enter a task.');
    }
}

function editTask(taskContent, editButton) {
    const taskText = taskContent.textContent;
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskText;
    taskContent.textContent = "";
    taskContent.appendChild(inputField);

    editButton.textContent = "Save";
    editButton.onclick = () => saveTask(inputField, taskContent, editButton);
}

function saveTask(inputField, taskContent, editButton) {
    const newTaskText = inputField.value.trim();
    if (newTaskText !== "") {
        taskContent.textContent = newTaskText;

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const index = tasks.indexOf(inputField.value);
        if (index > -1) {
            tasks[index] = newTaskText;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        editButton.textContent = "Edit";
    }
}

function deleteTask(taskItem) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(taskItem);

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task !== taskItem.querySelector("span").textContent.trim());
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");

    tasks.forEach(taskText => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '5px';

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input", "me-2");
        checkbox.style.transform = 'scale(1.5)';
        li.appendChild(checkbox);

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskContent.style.marginLeft = '0';
        li.appendChild(taskContent);

        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '5px';

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-warning", "btn-sm");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(taskContent, editButton);
        buttonContainer.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(li);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);
        taskList.appendChild(li);
    });
}

document.addEventListener('change', function(event) {
    if (event.target && event.target.type === 'checkbox') {
        setTimeout(() => {
            alert("You completed the task!");
            event.target.closest('li').remove();
            const taskText = event.target.closest('li').querySelector('span').textContent;
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const updatedTasks = tasks.filter(task => task !== taskText);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }, 3000);
    }
});
