const message = document.getElementById("message")
message.textContent = "Click on a Number to find copies";

grid.addEventListener("click", (event)=>{
    if (event.target && event.target.tagName ==="DIV"){
        const clickedDiv = event.target
        const randomNumber = parseInt(clickedDiv.textContent);
        highlightSameNumbers(randomNumber);
    }
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
    })
    message.textContent = `${count} copies of the Number ${selectedNumber}`
}

reset.addEventListener("click", ()=>{
    grid.innerHTML = ""
});