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

function countHighlightedNumbers (selectedNumber){
    let count = 0
    const allDivs= document.querySelectorAll("#gridtable div")
    allDivs.forEach((div)=> {
        if (parseInt(div.textContent)=== selectedNumber){
            count++
        }
    })
    return count
}

function highlightSameNumbers(selectedNumber){
    const allDivs = document.querySelectorAll("#gridtable div");
    let count = 0;
    allDivs.forEach((div)=>{
        if (parseInt(div.textContent) === selectedNumber){
            div.style.backgroundColor = "lightblue"
            count++
        } else{
            div.style.backgroundColor = "blanchedalmond"
        }
    })
}

//obs message måste flyttas till findesame??? eller