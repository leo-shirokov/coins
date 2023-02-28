import { coins } from './coins.js';
import { coinsNew } from './coinsNew.js';
import Coin from './Coin.js';

const lang =
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.systemLanguage;
if (lang === 'ru') {
    window.location.href = 'https://leo-shirokov.github.io/coins/ru/index.html';
} else if (window.location === 'nl') {
    window.location.href = 'https://leo-shirokov.github.io/coins/nl/index.html';
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

main();
addUpButton();
