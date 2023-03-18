const openModalBtn = document.querySelector('#modal_open');
const modal = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.modal-close');
const style = document.createElement('style');

function openModalAndLockScroll() {
    // style.innerHTML = '.flip::after { content: none }';
    // document.head.appendChild(style);
    modal.classList.add('modal-open');
    overlay.classList.add('modal-open');
    document.body.classList.add('scroll-lock');
}

function closeModalAndReturnScroll() {
    style.remove();
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
