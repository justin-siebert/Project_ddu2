const numberAddUpTo = document.getElementById("numberAddUpTo")


function addUp(){
    const allDivs = document.querySelectorAll("#gridtable div")
    let result = parseInt(numberAddUpTo.textContent)
    allDivs.forEach((div)=>{
        if (parseInt(div.textContent) && parseInt(div.textContent) === result) {
            div.classList.add("marked")
        }
    })
    
}