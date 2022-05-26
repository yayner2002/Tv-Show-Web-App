import getData from './getdata.js';
import showsNumber from '../showsCount.js';



const countedMovies = document.querySelector('.num-of-movies');

const counterFunction = async () => {
  const moviesNumber = await getData();
  const total = moviesNumber.slice(0, 40);
  showsNumber(total);
  countedMovies.textContent = `Movie Shows(${showsNumber(total)})`;
  console.log(total);
};
counterFunction();
export default counterFunction;