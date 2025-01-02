document.getElementById("search-button").addEventListener("click", searchTasks);
document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchTasks();
    }
});

function searchTasks() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const filteredTasks = tasks.filter(task => task.toLowerCase().includes(query));

    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    if (filteredTasks.length === 0) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = "Nothing Found";
        resultsContainer.appendChild(li);
    } else {
        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = task;
            resultsContainer.appendChild(li);
        });
    }
}
