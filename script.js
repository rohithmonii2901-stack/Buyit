// Script.js for To-Do List Application with Local Storage Functionality

// Function to add a new task
function addTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
}

// Function to get tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to display tasks on the page
function displayTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

// Event listener for adding tasks
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    addTask(taskInput.value);
    taskInput.value = '';
    displayTasks();
});

// Display tasks on page load
displayTasks();