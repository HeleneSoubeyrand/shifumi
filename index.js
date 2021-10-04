// 
 // var Paper = 1
 // var Scissors = 2
 // var Stone = 3
   
// Button click
function onButtonClick(num) {

     // Paper 
    // On cible notre element
    var imgPaper = document.getElementsByClassName("IA-Sign");
    // On renseigne l'attribut src
    imgPaper.setAttribute("src", "image/Paper-sign.png")     

     // Scissors
    // On cible notre element
    var imgScissors = document.createElement("imgScissors");
    // On renseigne l'attribut src
    imgScissors.setAttribute("src", "image/Scissors-sign.png") 

    // Stone
    // On cible notre element
    var imgStone = document.createElement("imgStone");
    // On renseigne l'attribut src
    imgStone.setAttribute("src", "image/Stone-sign.png") 
    
 // var Paper = 1
 // var Scissors = 2
 // var Stone = 3

    var random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
        console.log(random)

    if (random === 1 && num === 2) { 
        console.log(imgPaper)
        console.log("Vous avez gagné")

    } else if (random === 1 && num === 3) {
        console.log("L'IA a gagné")

    } else if (random === 2 && num === 3) {
        console.log("Vous avez gagné")

    } else if (random === 2 && num === 1) {
        console.log("L'IA a gagné")

    } else if (random === 3 && num === 1) {
        console.log("Vous avez gagné")

    } else if (random === 3 && num === 2) {
        console.log("L'IA a gagné")

    } else {
            console.log("Egalité")
    }
   
}

onButtonClick(1)
