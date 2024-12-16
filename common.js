const body = document.querySelector("body")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")
const grid = document.getElementById("gridtable")


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

reset.addEventListener("click", ()=>{
    grid.innerHTML = ""
});

/*
submit.addEventListener("click", function (e){
    // skapa en funktion som startar en funktion som tar nummer i input
    // och skapar X antal div efter nummer som står med kombination
    // av mathrandom() som skapar olika siffor mellan 0-100

})
*/