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
            <p><span id="pseudo-king-${coin.id}">${coin.header}</span></p>
            <style>
                #pseudo-king-${coin.id}::after {
                    content: "${coin.king}";
                    float: right;
                    color: rgb(174, 54, 54);
                }
            </style>
            <p>${coin.description}</p>
        </div>
    </section>
`;
}
export default Coin;