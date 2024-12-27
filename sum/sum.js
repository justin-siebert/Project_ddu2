const sumALl = document.getElementById("sumAll")
const sumMarkedNumbers = document.getElementById("sumMarkedNumbers")

function sumAllNumbers (){
    let sum = 0
    const alldivs = document.querySelectorAll("#gridtable div")
    
        alldivs.forEach((div)=>{
        let number = parseInt(div.textContent)
        if (!isNaN(number)){
            sum += number
            sumALl.textContent = `${sum}`
        }
    })
    return sum
}

function MarkedNumbersSummary(){
    let sum = 0
}

submit.addEventListener("click", ()=>{
    sumAllNumbers()
})