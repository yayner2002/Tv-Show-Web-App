import getData from './getdata.js';

const countedMovies = document.querySelector('.num-of-movies');

const counterFunction = async () => {
  const moviesNumber = await getData();
  const total = moviesNumber.length;
  countedMovies.textContent = `Movie Shows(${total})`;
  return total;
};

counterFunction();