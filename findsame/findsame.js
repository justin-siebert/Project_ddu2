const message = document.getElementById("message");
message.textContent = "Click on a Number to find copies";

grid.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "DIV") {
        const clickedDiv = event.target;
        const selectedNumber = parseInt(clickedDiv.textContent); 

        const count = highlightSameNumbers(selectedNumber);


        if (count >= 1) {
            message.textContent = `${count} copies of the Number ${selectedNumber}`;
        } else {
            message.textContent = "No copies of this number found.";
        }
    }
});

reset.addEventListener("click", () => {
    grid.innerHTML = "";
    message.textContent = "Click on a Number to find copies";
});

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
    return count
}
