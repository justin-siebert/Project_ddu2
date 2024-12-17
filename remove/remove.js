const showNumber = document.getElementById("showNumber")
const showRemovedNumber = document.getElementById("showRemovedNumber")
const newRandomNumberButton = document.getElementById("newRandomNumberButton")

function newRandomNumber(){
    let randomNumber = Math.floor(Math.random()*99)+1;
    showNumber.textContent = randomNumber
    const allDivs = document.querySelectorAll("#gridtable div");
    let count = 0;
    allDivs.forEach((div)=>{
        if (parseInt(div.textContent) === randomNumber){
            div.style.backgroundColor = "lightblue"
            count++
        } else{
            div.style.backgroundColor = "blanchedalmond"
        }
    })
}

newRandomNumberButton.addEventListener("click", ()=>{
    newRandomNumber()
})

//vi vill skapa en funktion som skapar ett random nummer mellan 1-99
// funktionen ska anropas genom att man klickar på knappen innan 
