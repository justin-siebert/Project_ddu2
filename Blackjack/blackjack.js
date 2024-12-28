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

function shuffleDeck (deck){
    for (let i = deck.length; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function createPlayers (numberOfPlayers){
    let players = []
    for (let i = 1; i <= numberOfPlayers; i++){
        players.push({
            name: `Player ${i}`,
            hand: []
        })
    } 
    players.push({
        name: "Dealer",
        hand: []
    });
    return players;
}

function dealCards(players, deck, cardsPerPlayer = 2){
    for (let i = 0; i < players.length; i++){
        for (let player of players){
            const card = deck.pop()
            player.hand.push(card)
        }
    }
}