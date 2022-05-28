import updateTotalNumberOfComments, {
  fetchAllMovieComments, commentApi, movieApi,
} from './commentsItemDetail.js';

const commentPopUp = document.querySelector('.movie-popup');

const getTvInfo = async (tvUrl) => {
  try {
    const response = await fetch(tvUrl);
    const answer = response.json();
    return answer;
  } catch (error) {
    throw new Error('Request failed: ', error);
  }
};

const comment = async (tvUrl, formData = {}) => {
  const answer = await fetch(tvUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),

  });
  const response = answer.text();
  return response;
};

const addComment = async (formData) => {
  const response = await comment(commentApi, formData);
  return response;
};
const tvInfo = async (movieId) => {
  const response = await getTvInfo(`${movieApi}/${movieId}`);
  return response;
};
const renderComments = (comment) => {
  commentPopUp.querySelector('.list-of-comments').innerHTML = comment;
};

const displayComments = (movieId) => {
  fetchAllMovieComments(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<span class="comment-date-username">${comment.username}</span><small>${comment.creation_date}</small>
                  <p class="comment-body">${comment.comment} </p>`;
      });
      renderComments(comments);
    } else {
      renderComments('No Comments To show!!!');
    }
  });
};
const closePopUp = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    commentPopUp.style.display = 'none';
    commentPopUp.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showPopUp = (movieId) => {
  commentPopUp.innerHTML = `Fetching data...<br>
      <span id="close-popup">X</span>`;
  tvInfo(movieId).then((data) => {
    commentPopUp.innerHTML = `
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
          <div class="comments-container">
          <div class="commment-div">
              <h4> Total Comments (<span class="total-comments"></span>)</h4>
              <p class="list-of-comments"></p>
          </div>
        <form class="add-comment-form">
        <h3 class="comment-form-title">Add Your Comment Here</h3>
          <input type="text" name="username" placeholder="Your Name..." required>
          <textarea name="comment" required placeholder="Your Comment..."></textarea>
          <input type="submit" value="Comment" id="submit-button">
        </form>
       </div>
          `;
    closePopUp();
    displayComments(movieId);
    updateTotalNumberOfComments(movieId);

    const form = commentPopUp.querySelector('.add-comment-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = form.elements.username.value;
      const comment = form.elements.comment.value;
      addComment({
        item_id: movieId,
        username: userName,
        comment,
      }).then(() => {
        displayComments(movieId);
        updateTotalNumberOfComments(movieId);
        form.reset();
      });
    });
  });
  commentPopUp.style.display = 'block';
  closePopUp();
};

const commentsListner = () => {
  const commentButton = document.querySelectorAll('.movie-comment');
  commentButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const movieId = btn.getAttribute('movie-Id');
      showPopUp(movieId);
      document.body.style.overflow = 'hidden';
    });
  });
};

export default commentsListner;
export { commentPopUp };