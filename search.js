document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        fetchMovies(query);
    }
});

async function fetchMovies(query) {
    const apiKey = 'c60c8375066164ced44c7276db0dd3fd';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results.length > 0) {
            displayMovies(data.results);
        } else {
            document.getElementById('movieContainer').innerHTML = '<p>No movies found</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movieContainer');
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        `;
        movieElement.addEventListener('click', () => {
            window.location.href = `searchdetails.html?movieID=${movie.id}`;
        });
        movieContainer.appendChild(movieElement);
    });
}
