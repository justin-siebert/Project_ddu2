const numberAddUpTo = document.getElementById("numberAddUpTo")
const addingUpButton = document.getElementById("addingUpButton")


function addUp(){
    const allDivs = document.querySelectorAll("#gridtable div")
    let result = parseInt(numberAddUpTo.value)
    allDivs.forEach((div) => div.classList.remove("marked"));


    for (let i = 0; i < allDivs.length; i++){
        let number1 = parseInt(allDivs[i].textContent)
        for (let j = i + 1; j < allDivs.length; j++) {
            const number2 = parseInt(allDivs[j].textContent)
            if(number1 + number2 == result){
                allDivs[i].classList.add("marked")
                allDivs[j].classList.add("marked")
                return
            }
        }
    
    }
}

addingUpButton.addEventListener("click", addUp)