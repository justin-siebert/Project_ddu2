const body = document.querySelector("body")
const showMoneyOnScreen = document.getElementById("showMoneyOnScreen")
const tapToStart = document.getElementById("tapToStart")
const hitButton = document.getElementById("hitButton")
const standButton = document.getElementById("standButton")
const resultMessage = document.getElementById("resultMessage")

let currentPlayerIndex = 0;
let players = [];
let deck = [];
let playerScores = [];

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

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
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
    for (let i = 0; i < cardsPerPlayer; i++){
        for (let player of players){
            const card = deck.pop()
            player.hand.push(card)
        }
    }
}

function calculateHandValue(hand){
    let aces = 0
    let value = 0

    hand.forEach(card => {
        const cardValue = card.split(" ")[0]
        if (cardValue=== "Ace"){
            value += 11;
            aces++
        } else if (["Jack", "Queen", "King"].includes(cardValue)){
            value += 10
        } else {
            value += parseInt(cardValue)
        }    
    });

    while (value > 21 && aces > 0){
        value -= 10
        aces--
    }
    return value

}

function gameStart (){
    let numberOfPlayers = parseInt(prompt("Enter a number of Players (1-3)"))
    let buyIn = parseInt(prompt("Enter the buy in amount"))
    showMoneyOnScreen.textContent =`${buyIn}`

    const deck = createDeck();
    shuffleDeck(deck);

    const players = createPlayers(numberOfPlayers);

    dealCards(players, deck);
    
    if (isNaN(numberOfPlayers) || numberOfPlayers <1 || numberOfPlayers >3){
        alert("Please enter a valid number of Players between 1 and 3")
        return
    }

    if (isNaN(buyIn) || buyIn <= 0){
        alert ("Enter a valid amount")
        return
    }

    console.log("Players and their hands:", players);
    return players;
}

tapToStart.addEventListener("click", gameStart)

function renderHands (players){
    const board = document.getElementById("board")
    board.innerHTML = ""

    players.forEach(player =>{
        const playerDiv = document.createElement("div")
        playerDiv.classList.add("player")

        const name = document.createElement("h3")
        name.textContent = player.name

        const hand = document.createElement("p");
        hand.textContent = `Hand: ${player.hand.join(", ")}`;

        playerDiv.appendChild(name);
        playerDiv.appendChild(hand);
        board.appendChild(playerDiv)
    })
}