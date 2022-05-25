const body = document.querySelector('body');

const createPopup = (type) => {
  const popUp = document.createElement('div');

  popUp.classList = 'popUp';
  popUp.innerHTML = `<section class="popBox">
    <div class="close">
      <i class="gg-close"></i>
    </div>
  </section>`;

  // Hide card
  const close = popUp.querySelector('.close');
  close.addEventListener('click', () => {
    popUp.classList = 'popUp';
  });
  popUp.addEventListener('click', (e) => {
    if (e.target.classList.contains('popUp')) {
      popUp.classList = 'popUp';
    }
  });

   // Reservations
   const mazeReserv = document.createElement('div');
   mazeReserv.classList = 'rsvDiv reservation';
   mazeReserv.innerHTML = `<h3>${type}s <span class="rsvCount">()</span></h3>
     <ul class="rsvList">Loading...</ul>`;
}
  
export default createPopup;
