const gridContainerBonus = document.getElementById("grid-container");
const refreshButton = document.getElementById("refresh-button");
const playButton = document.getElementById("play-button")
const selectDifficult = document.getElementById("selectInput")
let numeroOrizontale;
let bombArray = [];
let gameOver=false;
function generateBomb(bombNumber) {
    
    for (let i = 0; i < bombNumber; i++) {
        let numeroGenerato = Math.floor(Math.random() * 100) + 1
        if (!bombArray.includes(numeroGenerato)) {
            bombArray.push(numeroGenerato)
        }
        else{
            i--
        }
    }
return bombArray
}


playButton.addEventListener("click", function () {
    let punteggio=0;
    const bombNumber=16;
    let y=generateBomb(bombNumber);
    console.log(y);
    gridContainerBonus.innerHTML = ""
    const difficolta = parseInt(selectDifficult.value);
    gridContainerBonus.style.width = "0";
    console.log(difficolta);
    if (difficolta == 0) {
        numeroOrizontale = 0;
        gridContainerBonus.style.width = "0";
    }
    else if (difficolta == 1) {
        numeroOrizontale = 10
        let x = numeroOrizontale * 70 + 1
        gridContainerBonus.style.width = `${x}px`
    }
    else if (difficolta == 2) {
        numeroOrizontale = 9
        let x = numeroOrizontale * 70 + 1
        gridContainerBonus.style.width = `${x}px`
    }
    else if (difficolta == 3) {
        numeroOrizontale = 7
        let x = numeroOrizontale * 70 + 1
        gridContainerBonus.style.width = `${x}px`
    }



    function createGrid(numeroOrizontale) {

        console.log(numeroOrizontale);
        const numeroTotale = numeroOrizontale * numeroOrizontale



        for (let i = 1; i <= numeroTotale; i++) {
            const elementoHtml = document.createElement("div")
            elementoHtml.classList.add("number-container")
            
            gridContainerBonus.append(elementoHtml)
            elementoHtml.addEventListener("click", function () {
                let x = this;
                
                if(y.includes(i)){
                    x.classList.add("bomb")
                    alert("Hai perso!"+ punteggio)
                }
                else{
                    x.classList.toggle("add-color-onClick")
                    punteggio++
                }
               
            })


            refreshButton.addEventListener("click", function () {
                elementoHtml.classList.remove("add-color-onClick")
            })

        }
    }

    createGrid(numeroOrizontale)
})









