const sumALl = document.getElementById("sumAll")
const sumMarkedNumbers = document.getElementById("sumMarkedNumbers")
let markedSum = 0

function sumAllNumbers (){
    let sum = 0
    const allDivs = document.querySelectorAll("#gridtable div")
    allDivs.forEach((div)=>{
        let number = parseInt(div.textContent)
        if (!isNaN(number)){
            sum += number
            sumALl.textContent = `${sum}`
        }
    })
    return sum
}

function handleGridClick(event) {
    const clickedDiv = event.target; 

    if (clickedDiv && clickedDiv.tagName === "DIV" && clickedDiv.id !== "gridtable") {
        const number = parseInt(clickedDiv.textContent);
        if (!isNaN(number)) {
            if (!clickedDiv.classList.contains("marked")) {
                markedSum += number;
                clickedDiv.classList.add("marked");
            } else {
                markedSum -= number;
                clickedDiv.classList.remove("marked");
                clickedDiv.style.backgroundColor = "";
            }

            sumMarkedNumbers.textContent = `${markedSum}`;
        }
    }
}

function deleteStuff (){
    const allDivs = document.querySelectorAll("#gridtable div")
    allDivs.forEach((div) =>{
        if (div.classList.contains("marked")){
            div.classList.remove("marked")
        }
    })

    markedSum = 0;
    if (sumMarkedNumbers) {
        sumMarkedNumbers.textContent = "-";
    }
}


submit.addEventListener("click", ()=>{
    sumAllNumbers()
    deleteStuff()
})

grid.addEventListener("click", handleGridClick);

reset.addEventListener("click", () => {
deleteStuff()
});