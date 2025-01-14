const clearButton = document.getElementById("clearButton")

function handleGridClick(event) {
    const clickedDiv = event.target; 

    if (clickedDiv && clickedDiv.tagName === "DIV" && clickedDiv.id !== "gridtable") {
        const number = parseInt(clickedDiv.textContent);
        if (!isNaN(number)) {
            if (!clickedDiv.classList.contains("marked")) {
                clickedDiv.classList.add("marked");
                let randomNumber = Math.floor(Math.random()*99)+1;
                clickedDiv.textContent = randomNumber
            } else {
                clickedDiv.classList.remove("marked");
                clickedDiv.style.backgroundColor = "";
                let randomNumber = Math.floor(Math.random()*99)+1;
                clickedDiv.textContent = randomNumber
            }
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
}

grid.addEventListener("click", handleGridClick);
clearButton.addEventListener("click", deleteStuff)