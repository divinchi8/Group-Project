document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'c60c8375066164ced44c7276db0dd3fd';

    // Fetch popular movies
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results, 'popularMovies'))
        .catch(error => console.error('Error fetching popular movies:', error));

    // Fetch retro movies (you can define retro as older movies, for example before the year 2000)
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.lte=2000-12-31&sort_by=popularity.desc`)
        .then(response => response.json())
        .then(data => displayMovies(data.results, 'retroMovies'))
        .catch(error => console.error('Error fetching retro movies:', error));

    function displayMovies(movies, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            `;
            container.appendChild(movieElement);
        });
    }
});
