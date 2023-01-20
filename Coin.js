function Coin(coin) {
    return `
    <section class="content__coin">
        <div class="flip-wrapper">
            <div class="flip">
                <div class="flip-face front">
                    <img src="${coin.image.obverse}">
                </div>
                <div class="flip-face back">
                    <img src="${coin.image.reverse}">
                </div>
            </div>
        </div>
        <div class="coin-description">
            <div class="coin-description-header">
                <p id="${coin.id}">${coin.header}</p>
                <p>${coin.king}</p>
            </div>
            <p>${coin.description}</p>
        </div>
    </section>
`;
}
export default Coin;