// JavaScript code for managing tasks
let tasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${task}
            <div>
                <button class="btn btn-success btn-sm" onclick="completeTask(${index})">Done</button>
                <button class="btn btn-danger btn-sm ml-2" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
    });

    displayCompletedTasks();
}

function completeTask(index) {
    const completedTask = tasks.splice(index, 1)[0];
    completedTasks.push(completedTask);
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayCompletedTasks() {
    const completedTasksList = document.getElementById('completedTasks');
    completedTasksList.innerHTML = '';

    completedTasks.forEach((completedTask) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = completedTask;
        completedTasksList.appendChild(listItem);
    });
}

// Initial display
displayTasks();
