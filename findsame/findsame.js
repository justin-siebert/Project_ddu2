const message = document.getElementById("message");
message.textContent = "Click on a Number to find copies";

grid.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "DIV") {
        const clickedDiv = event.target;
        const selectedNumber = parseInt(clickedDiv.textContent); 

        highlightSameNumbers(selectedNumber); 
        const count = countHighlightedNumbers(selectedNumber);

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
