// 
 // var Paper = 0
 // var Scissors = 1
 // var Stone = 2 

// Images


// Button click
function onButtonClick(num) {
    
    var random = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        console.log(random)

    if (random === 0 && num === 1) {
        console.log("Vous avez gagné")

    } else if (random === 0 && num === 2) {
        console.log("L'IA a gagné")

    } else if (random === 1 && num === 2) {
        console.log("Vous avez gagné")

    } else if (random === 1 && num === 0) {
        console.log("L'IA a gagné")

    } else if (random === 2 && num === 0) {
        console.log("Vous avez gagné")

    } else if (random === 2 && num === 1) {
        console.log("L'IA a gagné")

    } else {
            console.log("Egalité")
    }
   
}
