const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'xKdCcCB1CZVZ3fVJxMXD';

const postLike = async (itemID) => {
    try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xKdCcCB1CZVZ3fVJxMXD/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemID }),
    });
    const post = await response.text();
    return post;
  } 
  catch (err) {
    console.log('Request error: ', err);
  }
  };

  const getLikes = async () => {
    const response = await fetch(`${URL}${appID}/likes`);
    const likes = await response.json();
    return likes;
  };

  const updateLikes = async () => {
    const response = await getLikes();
    const likecount= document.querySelectorAll('.rateCounts');
    likecount.forEach((button) => {
      for (let i = 0; i < response.length; i += 1) {
        if (Number(button.id) === response[i].item_id) {
          button.textContent = `${response[i].likes} likes`;
        } 
      }
    });
    
  };

  
  export { postLike, getLikes ,updateLikes };