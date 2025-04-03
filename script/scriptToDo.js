let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let sessionCount = sessionStorage.getItem('sessionCount') ? parseInt(sessionStorage.getItem('sessionCount')) : 0;

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', () => {
        const taskInput = document.getElementById('taskInput');
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    load();

    totalTasks();

    darkMode();

    pexelImage();
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    });

    darkMode();

    load();

    totalTasks();

    pexelImage();
});

document.getElementById('addButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});

function addTask(task) {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    sessionCount++;
    sessionStorage.setItem('sessionCount', sessionCount.toString());

    load();

    totalTasks();
}

function load() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    load();
}

function totalTasks() {
    document.getElementById('sessionCount').textContent = sessionCount;
}

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
});

function darkMode() {
    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (themeCookie) {
        const theme = themeCookie.split('=')[1];
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
}

async function pexelImage() {
    const apiKey = 'Ra0tKdEY24s2HmdATczaJaMiN4ZyNt05HG5cfT6zoWMgRMQ711t29qVj'; 

    try {
        const response = await fetch('https://api.pexels.com/v1/curated?per_page=1&page=1', {
            headers: {
                'Authorization': apiKey
            }
        });
        const data = await response.json();
        const imageUrl = data.photos[0].src.original;
        document.getElementById('pexelImage').innerHTML = `<img src="${imageUrl}" alt="Random Image" style="width:60%; height:auto;">`;
    } catch (error) {
        document.getElementById('pexelImage').innerHTML = "<p>Failed to fetch an image. Please try again later.</p>";
    }
}
