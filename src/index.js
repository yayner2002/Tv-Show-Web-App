import './style.css';
import './css/comment.css';
import commentsListner from './modules/commentsPopUp.js';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
  commentsListner();
};
displayItem();