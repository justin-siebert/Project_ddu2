const body = document.querySelector("body")

function createDeck() {
    let cardType = ["♥️", "♠️", "♣️", "♦️"];
    let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
        "Jack", "Queen", "King", "Ace"];
    const deck = [];

    for (let i = 0; i < cardType.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            deck.push(`${cards[j]} ${cardType[i]}`);
        }
    }
    return deck;
}