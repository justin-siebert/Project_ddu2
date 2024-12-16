const body = document.querySelector("body")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")
const grid = document.getElementById("gridtable")
const message = document.getElementById("message")


function createGrid (numberOfBoxes){
    grid.innerHTML = "";
    message.textContent = "Click on a Number to find copies";
    for (let i = 1; i <= numberOfBoxes; i++){
        let div = grid.appendChild(document.createElement("div"));
        let randomNumber = Math.floor(Math.random()*99)+1;
        div.textContent = randomNumber

        div.addEventListener("click", ()=>{
            highlightSameNumbers(randomNumber)
        });
    }
};
