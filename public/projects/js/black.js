let cards = []
let hasBlackjack = false
let start = false
let isAlive = false
let messages = ""
let message_el = document.getElementById("message_el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
var sum = 0

let player = {
    name: 'Kim',
    chips: 400
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips

console.log(cards)
 
function getRrandomCard() {
    let randomNo = Math.floor(Math.random() * 13) + 1
    if (randomNo === 1) {
       return 11 
    }
    
else if (randomNo >= 11){
        return 10
    }
    else {
        return randomNo
    }
    
}


function startGame() {
    start = true
    isAlive = true
    let firstCard = getRrandomCard()
    let secondCard = getRrandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
     sumEl.textContent = "Sum: "+ sum
    
 if (sum <= 20) {
     messages = "Do you want to draw another card?"
     isAlive = true

     
 }
 else if (sum === 21) {
    messages = "You've got Blackjack!"
     hasBlackjack = true
 }
 else {
     messages = "You're out of the game!"
     hasBlackjack = false
     isAlive = false
}
 //cash out
    message_el.textContent = messages
}
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newcard = getRrandomCard()
    sum += newcard
    cards.push(newcard)
         renderGame()
    }
     }
 

// var age = 20
// if (age < 21) {
//     console.log('You are not old enough!')
// }
// else {
//     console.log('Welcome')
// }

// let age = 99
// if (age < 100) {
//     console.log('you are not eligible')
// }
// else if (age === 100) {
//     console.log('Here is your birthday card from the King!')
// }
// else {
//     console.log('Not eligible! You already have one!')
// }