const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'xKdCcCB1CZVZ3fVJxMXD';

const postLike = async (itemID) => {
  const response = await fetch(`${URL}${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const post = await response.text();
  return post;
};

const getLikes = async () => {
  const response = await fetch(`${URL}${appID}/likes`);
  const likes = await response.json();
  return likes;
};

const listenHeartClicks = (movieId, likes) => {
  const likeHeart = document.querySelectorAll('.like-btn');
  likeHeart.forEach((like) => {
    if (like.id === movieId) {
      likes = Number(likes) + 1;
      like.nextElementSibling.textContent = likes;
      postLike(movieId);
    }
  });
};

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-btn')) {
    const likes = e.target.nextElementSibling.textContent;
    listenHeartClicks(e.target.id, likes);
  }
});

export { postLike, getLikes, listenHeartClicks };
