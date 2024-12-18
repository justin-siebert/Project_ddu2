const message = document.getElementById("message")
message.textContent = "Click on a Number to find copies";

grid.addEventListener("click", (event)=>{
    if (event.target && event.target.tagName ==="DIV"){
        const clickedDiv = event.target
        const randomNumber = parseInt(clickedDiv.textContent);
        highlightSameNumbers(randomNumber);
    }
})

reset.addEventListener("click", ()=>{
    grid.innerHTML = ""
});