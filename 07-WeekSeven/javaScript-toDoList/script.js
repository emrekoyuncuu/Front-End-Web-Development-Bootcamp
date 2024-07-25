// DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const toast = document.getElementById('toast');
const allTasksBtn = document.getElementById('allTasks');
const activeTasksBtn = document.getElementById('activeTasks');
const completedTasksBtn = document.getElementById('completedTasks');
const clearCompletedBtn = document.getElementById('clearCompleted');

// Task array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Current filter
let currentFilter = 'all';

// Render tasks based on current filter
function renderTasks() {
    const filteredTasks = filterTasks();
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="complete-btn"><i class="fas ${task.completed ? 'fa-undo' : 'fa-check'}"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        if (task.completed) {
            li.classList.add('completed');
        }
        
        const completeBtn = li.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => toggleTask(index));
        
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(index));
        
        taskList.appendChild(li);
    });
    updateTaskCount();
    saveTasks();
}

// Filter tasks based on current filter
function filterTasks() {
    switch (currentFilter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

// Add new task
function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.unshift({ text, completed: false, createdAt: new Date() });
        taskInput.value = '';
        renderTasks();
        showToast('Task added successfully!');
    } else {
        showToast('Please enter a task!', true);
    }
}

// Toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    showToast('Task deleted successfully!');
}

// Update remaining task count
function updateTaskCount() {
    const remainingTasks = tasks.filter(task => !task.completed).length;
    taskCount.textContent = remainingTasks;
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Show toast notification
function showToast(message, isError = false) {
    toast.textContent = message;
    toast.className = 'toast show';
    if (isError) {
        toast.classList.add('error');
    }
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Set active filter
function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${filter}Tasks`).classList.add('active');
    renderTasks();
}

// Clear completed tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
    showToast('Completed tasks cleared!');
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
allTasksBtn.addEventListener('click', () => setFilter('all'));
activeTasksBtn.addEventListener('click', () => setFilter('active'));
completedTasksBtn.addEventListener('click', () => setFilter('completed'));
clearCompletedBtn.addEventListener('click', clearCompleted);

// Initial render
renderTasks();

// Optional: Sort tasks by creation date
function sortTasksByDate() {
    tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    renderTasks();
}

// Optional: Add due dates to tasks
function addDueDate(index, dueDate) {
    tasks[index].dueDate = dueDate;
    renderTasks();
}

// Optional: Filter tasks by due date
function filterTasksByDueDate(date) {
    return tasks.filter(task => {
        if (!task.dueDate) return false;
        const taskDate = new Date(task.dueDate);
        return taskDate.toDateString() === date.toDateString();
    });
}

// Optional: Add task categories or tags
function addTaskCategory(index, category) {
    if (!tasks[index].categories) {
        tasks[index].categories = [];
    }
    tasks[index].categories.push(category);
    renderTasks();
}

// Optional: Search tasks
function searchTasks(query) {
    return tasks.filter(task => task.text.toLowerCase().includes(query.toLowerCase()));
}