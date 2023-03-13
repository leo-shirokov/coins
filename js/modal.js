const openModalBtn = document.querySelector('#modal_open');
const modal = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.modal-close');

function openModalAndLockScroll() {
    modal.classList.add('modal-open');
    overlay.classList.add('modal-open');
    document.body.classList.add('scroll-lock');
}

function closeModalAndReturnScroll() {
    modal.classList.remove('modal-open');
    overlay.classList.remove('modal-open');
    document.body.classList.remove('scroll-lock');
}

function overlayModal() {
    modal.classList.remove('modal-open');
    this.classList.remove('modal-open');
}

openModalBtn.addEventListener('click', openModalAndLockScroll);
closeModalBtn.addEventListener('click', closeModalAndReturnScroll);
overlay.addEventListener('.overlay', overlayModal);
