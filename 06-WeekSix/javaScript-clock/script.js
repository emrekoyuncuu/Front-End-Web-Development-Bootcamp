document.addEventListener('DOMContentLoaded', () => {
    // Select HTML elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');
    const nameInput = document.getElementById('name-input');
    const submitBtn = document.getElementById('submit-btn');
    const userNameSpan = document.getElementById('user-name');
    const clockDiv = document.getElementById('clock');
    const dateDiv = document.getElementById('date');
    const weatherDiv = document.getElementById('weather');
    const quoteDiv = document.getElementById('quote');
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo');
    const todoItems = document.getElementById('todo-items');
    const timerDiv = document.getElementById('timer');
    const startPomodoroBtn = document.getElementById('start-pomodoro');
    const resetPomodoroBtn = document.getElementById('reset-pomodoro');
    const themeSelect = document.getElementById('theme-select');

    // Event listener for the submit button
    submitBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            userNameSpan.textContent = name;
            welcomeScreen.classList.add('d-none');
            mainScreen.classList.remove('d-none');
            updateDateTime();
            setInterval(updateDateTime, 1000);
            getWeather();
            getQuote();
        }
    });

    // Function to update date and time
    function updateDateTime() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        clockDiv.textContent = now.toLocaleTimeString('en-US', timeOptions);
        dateDiv.textContent = now.toLocaleDateString('en-US', dateOptions);
    }

    // Function to fetch weather data
    async function getWeather() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric');
            const data = await response.json();
            weatherDiv.textContent = `Weather: ${data.weather[0].main}, ${data.main.temp}°C`;
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    }

    // Function to fetch a random quote
    async function getQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteDiv.textContent = `"${data.content}" - ${data.author}`;
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    // Event listener for adding todo items
    addTodoBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = todoText;
            todoItems.appendChild(li);
            todoInput.value = '';
        }
    });

    // Pomodoro timer variables and functions
    let timer;
    let timeLeft = 1500; // 25 minutes

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDiv.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Event listener for starting the Pomodoro timer
    startPomodoroBtn.addEventListener('click', () => {
        if (!timer) {
            timer = setInterval(() => {
                timeLeft--;
                updateTimer();
                if (timeLeft === 0) {
                    clearInterval(timer);
                    alert('Pomodoro session finished!');
                }
            }, 1000);
        }
    });

    // Event listener for resetting the Pomodoro timer
    resetPomodoroBtn.addEventListener('click', () => {
        clearInterval(timer);
        timer = null;
        timeLeft = 1500;
        updateTimer();
    });

    // Event listener for changing themes
    themeSelect.addEventListener('change', (e) => {
        document.body.className = `theme-${e.target.value}`;
    });
});