// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements we'll be working with
    const jokeElement = document.getElementById('joke');
    const newJokeBtn = document.getElementById('newJokeBtn');

    // Function to fetch and display a new joke
    function getJoke() {
        // Show loading message
        jokeElement.textContent = 'Loading...';
        
        // Fetch a random joke from the Chuck Norris API
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => {
                // Check if the response is ok (status in the range 200-299)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display the joke text
                jokeElement.textContent = data.value;
            })
            .catch(error => {
                // Log the error and display an error message
                console.error('Error:', error);
                jokeElement.textContent = 'Failed to load joke. Please try again.';
            });
    }

    // Add click event listener to the button
    newJokeBtn.addEventListener('click', getJoke);

    // Load a joke when the page first loads
    getJoke();
});