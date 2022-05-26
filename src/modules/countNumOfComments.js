const countNumOfComments = (response) => (typeof (response) === 'object' ? response.length : 'no match');
module.exports = countNumOfComments;