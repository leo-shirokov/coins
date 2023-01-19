import { coins } from './coins.js';
import Coin from './Coin.js';

function main() {
    document.querySelector('main.content').insertAdjacentHTML(
        'beforeend',
        coins.map(Coin).join(''),
    );

    document.querySelectorAll('.flip-wrapper').forEach((wrapper) => {
        wrapper.addEventListener('click', () => {
            const coin = wrapper.querySelector('.flip');
            coin.classList.toggle('rotated');
        });
    });
}

main();