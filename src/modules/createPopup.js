import updateTotalNumberOfReservations, {
  fetchAllMovieReservations, reservationApi, movieApi,
} from './assets.js';

const reservationPopUp = document.querySelector('.movie-popup');

const getTvInfo = (tvUrl) => fetch(tvUrl)
  .then((response) => response.json())
  .then((actualData) => actualData)
  .catch((error) => error);

const reservation = (tvUrl, formData = {}) => fetch(tvUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),

}).then((response) => response.text())
  .then((actualData) => (actualData.error ? { error: true, info: actualData }
    : { error: false, info: actualData }))
  .catch((error) => ({ error: true, info: error }));

const addReservation = async (formData) => {
  const response = await reservation(reservationApi, formData);
  return response;
};
const tvInfo = async (movieId) => {
  const response = await getTvInfo(`${movieApi}/${movieId}`);
  return response;
};
const renderReservations = (reservation) => {
  reservationPopUp.querySelector('.list-of-reservations').innerHTML = reservation;
};

const displayReservations = (movieId) => {
  fetchAllMovieReservations(movieId).then((data) => {
    if (!data.error) {
      let reservations = '';
      data.forEach((reservation) => {
        reservations += `<span class="reservation-date-username">${reservation.username}</span><small>${reservation.date_start}</small>small>${reservation.date_end}</small>`;
      });
      renderReservations(reservations);
    } else {
      renderReservations('No Reservations To show!!!');
    }
  });
};
const closePopUp = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    reservationPopUp.style.display = 'none';
    reservationPopUp.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showPopUp = (movieId) => {
  reservationPopUp.innerHTML = `Fetching data...<br>
      <span id="close-popup">X</span>`;
  tvInfo(movieId).then((data) => {
    reservationPopUp.innerHTML = `
          <div id="close-popup">&times;</div>
          <div class="movie-info">
            <img src="${data.image.medium}" class="popup-img">
            <div class="movie-detail">
              <h3 class="tv-title">${data.name}</h3>
              <p><b>Premiered : </b> <small>${data.premiered}</small></p>
              <p><b>Ended : </b> <small>${data.ended}</small></p>
              <p><b>Language : </b> <small>${data.language}</small></p>
              <p><b>Genere : </b> <small>${data.type}</small></p>
             </div>
          </div>
         <div class="reservations-container">
            <div class="reservation-div">
                <h4> Total Reservations (<span class="total-reservations"></span>)</h4>
                <p class="list-of-reservations"></p>
            </div>
          <form class="add-reservation-form">
          <h3 class="reservation-form-title">Add Your Reservation Here</h3>
            <input type="text" name="username" placeholder="Your Name..." required>
            <input type="text" name="startdate" placeholder="Start Date..." required>
            <input type="text" name="enddate" placeholder="End Date..." required>
            <input type="submit" value="Reservation" id="submit-button">
          </form>
         </div>
          `;
    closePopUp();
    displayReservations(movieId);
    updateTotalNumberOfReservations(movieId);

    const form = reservationPopUp.querySelector('.add-reservation-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = form.elements.username.value;
      const startDate = form.elements.startdate.value;
      const endDate = form.elements.enddate.value;

      addReservation({
        item_id: movieId,
        username: userName,
        date_start: startDate,
        date_end: endDate,

      }).then(() => {
        displayReservations(movieId);
        updateTotalNumberOfReservations(movieId);
        form.reset();
      });
    });
  });
  reservationPopUp.style.display = 'block';
  closePopUp();
};

const reservationsListener = () => {
  const ReservationButton = document.querySelectorAll('.movie-reservation');
  ReservationButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const movieId = btn.getAttribute('movie-Id');
      showPopUp(movieId);
      document.body.style.overflow = 'hidden';
    });
  });
};

export default reservationsListener;
export { reservationPopUp };
