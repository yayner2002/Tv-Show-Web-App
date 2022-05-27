const countNumOfReservations = require('./numOfResrvations.js');

test('properly counts the number of reservations for an array of object', () => {
  const testData = [
    {
      item_id: 1,
      username: 'Epaltechs',
      date_start: '2021-05-27',
      date_end: '2022-05-27',
    },

    {
      item_id: 2,
      username: 'Yayner',
      date_start: '2021-07-27',
      date_end: '2022-07-27',
    },

    {
      item_id: 3,
      username: 'Moombe',
      date_start: '2021-06-27',
      date_end: '2022-06-27',
    },

  ];
  const response = countNumOfReservations(testData);
  expect(response).toBe(3);
});
test('properly displays the error', () => {
  const testData = 'invalid';
  const response = countNumOfReservations(testData);
  expect(response).toBe('no match');
});
test('properly counts the number of reservations for an array', () => {
  const testData = ['a', 'b', 'c'];
  const response = countNumOfReservations(testData);
  expect(response).toBe(3);
});
