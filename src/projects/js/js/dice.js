let randomEl = document.querySelector(".random-no")
//assigning 
let randomRol = document.querySelector(".random-roll")

var variable1 = parseInt(document.getElementById("inputfield1").value);

//roll function
function roll() {
    let randomNumber = Math.floor(Math.random() * enter())
    if (randomNumber == 0) {
        randomNumber =enter()
    }
    else {
        randomNumber === randomNumber
    }
    
    randomEl.textContent += randomNumber + " "
}

//clear function
function cleiar() {
    randomEl.textContent = "You rolled: "
}

//flip function
function flip() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 0) {
        randomNumber ="heads"
    }
    else if(randomNumber == 1){
        randomNumber = "Tails"
    }


    
    randomRol.textContent += randomNumber + " "
}

//clear function
function clearr() {
    randomRol.textContent = "You flipped: "
}
function enter() {
    var variable1 = parseInt(document.getElementById("inputfield1").value);
    if (variable1 > 1) {
        return variable1
    } else {
        randomEl.textContent += "Oops that can't be right!" + " "
    }
}
