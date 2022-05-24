const movies = [
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
    {
        image: "/images/movie1.jpg",
        ratings: 3,
        title: 'Hard Target',
    },
];

const movieDisplay = document.querySelector('.movies-display');
const showMovies = () => {
    movieDisplay.innerHTML = "";
    movies.forEach(movie => {
        let movieTag = `
        <div class="movie-content">
        <div class="card-image">
        <img src="${movie.image}" alt="movies">
        </div>
        <div class="movie-descrp">
        <div class="movie-ratings">
            <i class="fa-solid like-btn fa-heart"></i>
            <p id="rateCounts">${movie.ratings}</p>
        </div>
        <h2 class="movie-title">${movie.title}</h2>
        <button class="movie-comment" id="comment-btn">comment</button>
        </div>
        </div>`;
        movieDisplay.innerHTML += movieTag;
    });
    return movieDisplay;
}
export default showMovies;