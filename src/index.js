import './style.css';

import createPopup from './modules/createPopup.js';

createPopup('Reservation');

const rsvBtn = document.createElement('button');
rsvBtn.classList = 'home-button reservation-buttons';
// rsvBtn.name = `${json.results[i].name}`;
rsvBtn.innerText = 'Reservations';
// card.appendChild(rsvBtn);

import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();

