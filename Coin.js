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
            <div class="card">
                <div class="card_front">
                    <div class="coin-description-header">
                        <p id="${coin.id}">${coin.header}</p>
                        <p>${coin.king}</p>
                    </div>
                    <div class="coin-description-container">
                        <p>${coin.description}</p>
                    </div>
                </div>
                <div class="card_back">
                    <div class="coin-info-container">
                        <p>${coin.info}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
}
export default Coin;
