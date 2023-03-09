import { coins } from './coins.js';
import { coinsNew } from './coinsNew.js';
import Coin from './Coin.js';

function logoAnimationStart() {
    if (window.scrollY > 0) {
        document.querySelector('.logo-animation').classList.add('active');
    } else {
        document.querySelector('.logo-animation').classList.remove('active');
    }
}

function main() {
    document
        .querySelector('section.content__about')
        .insertAdjacentHTML('afterend', coins.map(Coin).join(''));

    document
        .querySelector('section.content__info')
        .insertAdjacentHTML('afterend', coinsNew.map(Coin).join(''));

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

window.addEventListener('scroll', logoAnimationStart);
main();
addUpButton();
