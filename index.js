
// Paper = 1
// Scissors = 2
// Stone = 3

var btnPaper = document.getElementById("btnPaper");
btnPaper.getAttribute ("src", "image/Paper-sign.png")

var btnScissors = document.getElementById("btnScissors");
btnScissors.getAttribute ("src", "image/Scissors-sign.png")

var btnStone = document.getElementById("btnStone");
btnStone.getAttribute ("src", "image/Stone-sign.png")


// Action

function onButtonClick() {

    var random = 0 
    random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    
    var IaSign = document.getElementById("IA-Sign");

    if (random === 1) {    
       console.log(IaSign.getAttribute ("src", "image/Paper-sign.png"))
    } else if (random === 2) { 
        console.log(IaSign.getAttribute ("src", "image/Scissors-sign.png"))
    } else {
        console.log(IaSign.getAttribute ("src", "image/Stone-sign.png"))
    }  

}


// Game

function signChoice(num) {

    if (random === num) {
        console.log("Egalité")
    } else if  ((random === 1 && num === 2) || (random === 2 && num === 3) || (random === 3 && num === 1)) { 
        console.log("Vous avez gagné")
    } else {
        console.log("L'IA a gagné")       
    }   

}
