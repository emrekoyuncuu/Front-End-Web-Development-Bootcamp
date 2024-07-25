document.addEventListener('DOMContentLoaded', () => {
    // Select HTML elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');
    const nameInput = document.getElementById('name-input');
    const submitBtn = document.getElementById('submit-btn');
    const userNameSpan = document.getElementById('user-name');
    const clockDiv = document.getElementById('clock');
    const dateDiv = document.getElementById('date');

    // Listen for click event on the submit button
    submitBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            // Show user name and open main screen
            userNameSpan.textContent = name;
            welcomeScreen.classList.add('d-none');
            mainScreen.classList.remove('d-none');
            // Update date and time
            updateDateTime();
            setInterval(updateDateTime, 1000);
        }
    });

    // Function to update date and time
    function updateDateTime() {
        const now = new Date();
        clockDiv.textContent = now.toLocaleTimeString('en-US');
        dateDiv.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
});