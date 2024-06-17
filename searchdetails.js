const apiKey = "c60c8375066164ced44c7276db0dd3fd";
const movieContainer = document.querySelector(".more-movies");

async function fetchMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    const data = await response.json();
    displayMovies(data.results.slice(0, 9)); // Display only the first 9 movies
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function displayMovies(movies) {
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    `;
    movieContainer.appendChild(movieElement);
  });
}

// Fetch and display movies on page load
fetchMovies();
