const body = document.querySelector("body")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")
const grid = document.getElementById("gridtable")
const home = document.getElementById("home")
const homeButton = home.appendChild(document.createElement("a"))
homeButton.textContent = "Home"
homeButton.setAttribute("href", "../index.html")


function createGrid (numberOfBoxes){
    grid.innerHTML = "";
    for (let i = 1; i <= numberOfBoxes; i++){
        let div = grid.appendChild(document.createElement("div"));
        let randomNumber = Math.floor(Math.random()*99)+1;
        div.textContent = randomNumber
    }
};

submit.addEventListener("click", ()=> {
    const text = document.getElementById("text").value
    let numberOfBoxes = parseInt(text);
    if (!isNaN(numberOfBoxes) && numberOfBoxes >0){
        createGrid(numberOfBoxes)
    }
});

