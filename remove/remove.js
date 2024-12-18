const showNumber = document.getElementById("showNumber")
const showRemovedNumber = document.getElementById("showRemovedNumber")
const newRandomNumberButton = document.getElementById("newRandomNumberButton")
const removeButton = document.getElementById("removeButton")
let selectedNumber = null

function newRandomNumber(){
    let randomNumber = Math.floor(Math.random()*99)+1;
    showNumber.textContent = randomNumber
    selectedNumber = randomNumber
    highlightSameNumbers(selectedNumber)
}

function removeNumber(){
    if ( selectedNumber=== null){
        return selectedNumber
    }
    const alldivs = document.querySelectorAll("#gridtable div")
    alldivs.forEach((div) =>{
        if (parseInt(div.textContent)===selectedNumber){
            div.textContent = "X"
            div.style.backgroundColor = "red"
            div.classList.add("removed")
            showRemovedNumber.textContent= `${selectedNumber} has been removed`
        }
    })
}

removeButton.addEventListener("click", () => {
    removeNumber()
})

newRandomNumberButton.addEventListener("click", ()=>{
    newRandomNumber()
})



//vi vill skapa en funktion som skapar ett random nummer mellan 1-99
// funktionen ska anropas genom att man klickar på knappen innan 
