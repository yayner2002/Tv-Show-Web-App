import './style.css';
import './modules/app.css';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import './modules/moviesCount.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  const total = movies.slice(0, 40);
  showMovies(total);
  showMovies(movies);
};
displayItem();
