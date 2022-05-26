import './style.css';
import './modules/app.css';
import reservationListener from './modules/createPopup.js';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import './modules/moviesCount.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
<<<<<<< HEAD
  const total = movies.slice(0, 40);
  showMovies(total);
  commentsListner();
=======
  showMovies(movies);
  reservationListener();
>>>>>>> 43e7becfcedfa1fd76c55e2673065f78cbca3f3d
};
displayItem();
