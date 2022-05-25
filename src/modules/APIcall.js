const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/atLoWEfmgzw7LGfVLApZ';
const reservations = '/reservations';

// const itemsUl = document.getElementById('rsvList');
// const rsvCount = document.getElementById('rsvCount');

// GET
const getInfo = async (id, type) => {
  const response = await fetch(`${baseURL}${type}?item_id=${id}`);
  const data = await response.text();
  const result = JSON.parse(data);
  return result;
};

// POST

const postReservation = async (id, myUsername, startDate, endDate) => {
  const response = await fetch((baseURL + reservations), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: myUsername,
      date_start: startDate,
      date_end: endDate,
    }),
  });

  const data = await response.text();
  return data;
};

export { getInfo, postReservation, baseURL };