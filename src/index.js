import './style.css';
import './css/app.css';
import './css/comment.css';
import reservationListener from './modules/createPopup.js';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import commentsListner from './modules/commentsPopUp.js';
import './modules/moviesCount.js';
// import listenHeartClicks from './modules/Involvement.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
  reservationListener();
  commentsListner();
};
displayItem();
