import './style.css';
import './modules/app.css';
import reservationListener from './modules/createPopup.js';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
  reservationListener();
};
displayItem();
