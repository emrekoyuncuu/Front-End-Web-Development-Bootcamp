// Function to play sound and animate button
function playSound(e) {
    const key = (e.type === 'keydown') ? e.key.toUpperCase() : e.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    
    if (!audio) return; // Stop the function if no audio found
    
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    button.classList.add('playing');
    
    // Add the specific animation class for this key
    button.classList.add(`animate-${key}`);
    
    // Remove the animation class after it completes
    setTimeout(() => {
        button.classList.remove(`animate-${key}`);
        button.classList.remove('playing');
    }, 300); // 300ms matches the animation duration in CSS
}

// Add click event listeners to all drum buttons
const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('click', playSound));

// Add keydown event listener to the window
window.addEventListener('keydown', playSound);

// Mini-game: Rhythm Challenge
let sequence = [];
let playerSequence = [];
let level = 0;

function startGame() {
    sequence = [];
    playerSequence = [];
    level = 0;
    nextSequence();
}

function nextSequence() {
    playerSequence = [];
    level++;
    updateLevelTitle();
    
    const randomKey = drums[Math.floor(Math.random() * drums.length)].dataset.key;
    sequence.push(randomKey);
    
    playSequence();
}

function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        playSound({ target: { dataset: { key: sequence[i] } } });
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
        }
    }, 600);
}

function checkSequence(key) {
    playerSequence.push(key);
    
    if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        gameOver();
        return;
    }
    
    if (playerSequence.length === sequence.length) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }
}

function gameOver() {
    alert(`Game Over! You reached level ${level}`);
    startGame();
}

function updateLevelTitle() {
    document.querySelector('h1').textContent = `Rhythm Master - Level ${level}`;
}

// Start the game when 'Start Game' button is clicked
const startButton = document.createElement('button');
startButton.textContent = 'Start Rhythm Challenge';
startButton.style.marginTop = '20px';
startButton.addEventListener('click', startGame);
document.querySelector('.container').appendChild(startButton);

// Check player's sequence during the game
window.addEventListener('keydown', (e) => {
    if (level > 0) {
        const key = e.key.toUpperCase();
        if (['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].includes(key)) {
            playSound(e);
            checkSequence(key);
        }
    }
});

drums.forEach(drum => drum.addEventListener('click', (e) => {
    if (level > 0) {
        playSound(e);
        checkSequence(e.target.dataset.key);
    }
}));