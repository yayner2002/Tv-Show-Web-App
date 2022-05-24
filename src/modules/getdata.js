

const baseURL = 'https://api.tvmaze.com/shows';
const getData = async (url) => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  };
  
  export default getData;




//   movieDisplay.innerHTML = '';
//   data.forEach((movie) => {
//     const movieTag = `
//         <div class="movie-content">
//         <div class="card-image">
//         <img src="${movie.image.medium}" alt="movies">
//         </div>
//         <div class="movie-descrp">
//         <div class="movie-ratings">
//             <i class="fa-solid like-btn fa-star"></i>
//             <p id="rateCounts">${movie.ratings} likes</p>
//         </div>
//         <h2 class="movie-title">${movie.title}</h2>
//         <button class="movie-comment" id="comment-btn">Comments</button>
//         <button class="movie-reservation" id="reservation-btn">Reservations</button>
//         </div>
//         </div>`;
//     movieDisplay.innerHTML += movieTag;
//     main.appendChild(movieDisplay);
//   });
//   return movieDisplay