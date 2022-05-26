export const reservationApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/atLoWEfmgzw7LGfVLApZ/reservations';
export const movieApi = 'https://api.tvmaze.com/shows';

const fetchAllMovieReservations = async (movieId) => {
  const response = await fetch(`${reservationApi}?item_id=${movieId}`).catch((error) => error);
  return response.json();
};
const fetchTotalNumberOfReservations = async (movieId) => {
  const response = await fetchAllMovieReservations(movieId)
    .then((data) => (!data.error ? data.length : 0))
    .catch(() => 0);
  return response;
};

const reservationPopUp = document.querySelector('.movie-popup');
const updateTotalNumberOfReservations = (movieId) => {
  fetchTotalNumberOfReservations(movieId).then((totalNumOfReservations) => {
    reservationPopUp.querySelector('.total-reservations').innerHTML = totalNumOfReservations;
  });
};
const countNumOfReservations = (response) => (typeof (response) === 'object' ? response.length : 'no match');
document.addEventListener('click', async (e) => {
  if (e.target.matches('.movie-reservation')) {
    const response = await fetchAllMovieReservations(e.target.id);
    const numberOfReservations = countNumOfReservations(response);
    reservationPopUp.querySelector('.total-reservations').textContent = numberOfReservations || 0;
  }
});

export default updateTotalNumberOfReservations;
export { fetchAllMovieReservations, countNumOfReservations };