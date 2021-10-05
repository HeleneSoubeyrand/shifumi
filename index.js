
// Stone = 1
// Paper = 2
// Scissors = 3


var random = 0 
var IaSign = document.getElementById("IA-Sign");
var RPSign = document.getElementById("RP-Sign")

var IaScore = 0
var RpScore = 0
var party = 0


// Random

function onButtonClick(num) {

    rpChoice(num)
   
    random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    
    if (random === 1) {    
       IaSign.setAttribute ("src", "image/imgStone.png")
       console.log("The IA choose Stone")
    } else if (random === 2) { 
        IaSign.setAttribute ("src", "image/imgPaper.png")
        console.log("The IA choose Paper")
    } else {
        IaSign.setAttribute ("src", "image/imgScissors.png")
        console.log("The IA choose Scissors")
    }  

    game(num)

    endGame()
   
}

// Affichage choix

function rpChoice(num) {

    if (num === 1) {
        RPSign.setAttribute("src", "image/imgStone.png")
        console.log("You choose Stone")

    } else if (num === 2) {
        RPSign.setAttribute ("src", "image/imgPaper.png")
        console.log("You choose Paper")
       
    } else {
        RPSign.setAttribute ("src", "image/imgScissors.png")
        console.log("You choose Scissors")
        
    }
}

// Game

function game(num) {

    score = document.createElement("h3");
    var element = document.getElementById("score");
    element.appendChild(score);

    for (var i = 0; i < 1; i++) {
        party = party + 1
        console.log(party)

        if (random === num) {
            console.log("Nobody win")
            IaScore = IaScore + 0
            RpScore = RpScore + 0
        
        } else if  ((random === 1 && num === 2) || (random === 2 && num === 3) || (random === 3 && num === 1)) { 
            console.log("You win !")
            RpScore = RpScore + 1
            
        } else {
            console.log("You loose !")
            IaScore = IaScore + 1   
        }   

    }

    score.innerHTML = `YOU : ${RpScore} / COMPUTER : ${IaScore}`
    console.log(score)
}


function endGame() {

    var message = document.createElement("h1");
    var element = document.getElementById("message");
    element.appendChild(message);

    if (IaScore === 3) {
        message.innerHTML = "You loose !"
    
    } else if (RpScore === 3) {
        message.innerHTML = "You win !"
       
    }  else if (party === 5) {
        message.innerHTML = "Game off"
    }

}

 

    