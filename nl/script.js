import { coins } from './coins.js';
import Coin from './Coin.js';

function main() {
    document
        .querySelector('main.content')
        .insertAdjacentHTML('beforeend', coins.map(Coin).join(''));

    document.querySelectorAll('.flip-wrapper').forEach((wrapper) => {
        wrapper.addEventListener('click', () => {
            wrapper.querySelector('.flip').classList.toggle('rotated');
        });
    });

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

function addUpButton() {
    const button = document.createElement('div');
    button.classList.add('upbtn');
    document.body.append(button);
    document.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight - 100) {
            button.style.bottom = '55px';
        } else {
            button.style.bottom = '-80px';
        }
    });
    button.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    });
}

main();
addUpButton();
