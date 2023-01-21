import { coins } from './coins.js';
import Coin from './Coin.js';

function main() {
    document.querySelector('main.content').insertAdjacentHTML(
        'beforeend',
        coins.map(Coin).join(''),
    );

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

main();
