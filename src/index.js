import './style.css';
import './css/comment.css';
import commentsListner from './modules/commentsPopUp.js';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import './modules/moviesCount.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  const total = movies.slice(0, 40);
  showMovies(total);
  commentsListner();
};
displayItem();