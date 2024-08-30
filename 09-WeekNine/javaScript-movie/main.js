// Sample movie data (in a real application, this would come from an API)
const movies = [
    { id: 1, title: "Inception", category: "Sci-Fi", duration: "2h 28min", imdbRating: 8.8, description: "A thief who enters the dreams of others to steal secrets from their subconscious.", trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" },
    { id: 2, title: "The Shawshank Redemption", category: "Drama", duration: "2h 22min", imdbRating: 9.3, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco", imageUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
    { id: 3, title: "The Dark Knight", category: "Action", duration: "2h 32min", imdbRating: 9.0, description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY", imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" },
];

// Function to display movie cards on the home page
function displayMovieCards() {
    const movieList = document.getElementById('movie-list');
    if (movieList) {
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.innerHTML = `
                <div class="card movie-card">
                    <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.category}</p>
                        <a href="product.html?id=${movie.id}" class="btn btn-primary">View Details</a>
                        <button onclick="addToFavorites(${movie.id})" class="btn btn-secondary">Add to Favorites</button>
                    </div>
                </div>
            `;
            movieList.appendChild(card);
        });
    }
}

// Function to display movie details on the product page
function displayMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        const movieDetails = document.getElementById('movie-details');
        movieDetails.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${movie.imageUrl}" class="img-fluid rounded" alt="${movie.title}">
                </div>
                <div class="col-md-8">
                    <h2>${movie.title}</h2>
                    <p>Category: ${movie.category}</p>
                    <p>Duration: ${movie.duration}</p>
                    <p>IMDB Rating: ${movie.imdbRating}</p>
                    <p>${movie.description}</p>
                    <div class="movie-trailer">
                        <iframe src="${movie.trailerUrl}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        `;
    }
}

// Function to display favorite movies
function displayFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    if (favoritesList) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(movieId => {
            const movie = movies.find(m => m.id === movieId);
            if (movie) {
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-4';
                card.innerHTML = `
                    <div class="card movie-card">
                        <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.category}</p>
                            <a href="product.html?id=${movie.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                `;
                favoritesList.appendChild(card);
            }
        });
    }
}


// Function to add a movie to favorites
function addToFavorites(movieId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(movieId)) {
        favorites.push(movieId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Movie added to favorites!');
    } else {
        alert('This movie is already in your favorites!');
    }
}

// Initialize the appropriate function based on the current page
if (document.getElementById('movie-list')) {
    displayMovieCards();
} else if (document.getElementById('movie-details')) {
    displayMovieDetails();
} else if (document.getElementById('favorites-list')) {
    displayFavorites();
}