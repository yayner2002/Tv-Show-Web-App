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

export { postLike, getLikes };