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
    const count = highlightSameNumbers(selectedNumber)
    if (count === 0) {
        showRemovedNumber.textContent = "There is nothing to remove";
        return;
    }

    const allDivs = document.querySelectorAll("#gridtable div")
    allDivs.forEach((div) =>{
        if (parseInt(div.textContent)===selectedNumber){
            div.textContent = "X"
            div.classList.add("removed")
            showRemovedNumber.textContent= `${selectedNumber} has been removed`
        } 
    })
    showRemovedNumber.textContent= `${selectedNumber} has been removed ${count} times`
}

removeButton.addEventListener("click", () => {
    removeNumber()
})

newRandomNumberButton.addEventListener("click", ()=>{
    newRandomNumber()
})


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
        return count
    })
}