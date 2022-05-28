// import { countNumOfComments } from './commentsItemDetail.js';
const countNumOfComments = require('./countNumOfComments.js');

test('properlly counts the number of comments for an array of object', () => {
  const testData = [
    {
      item_id: 1,
      username: 'yay',
      comment: 'Good Movie',
    },
    {
      item_id: 2,
      username: 'yayner',
      comment: 'Awsome Movie',

    },
    {
      item_id: 3,
      username: 'Kidu',
      comment: 'OMG I like this Movie',

    },
  ];
  const response = countNumOfComments(testData);
  expect(response).toBe(3);
});
test('properlly displays the error', () => {
  const testData = 'invalid';
  const response = countNumOfComments(testData);
  expect(response).toBe('no match');
});
test('properlly counts the number of comments for an array', () => {
  const testData = ['a', 'b', 'c'];
  const response = countNumOfComments(testData);
  expect(response).toBe(3);
});