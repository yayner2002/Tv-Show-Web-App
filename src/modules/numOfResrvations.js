const countNumOfReservations = (response) => (typeof (response) === 'object' ? response.length : 'no match');
module.exports = countNumOfReservations;