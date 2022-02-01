let fname = "John"
let lname = "Kim"
let fullname = fname + " " + lname
console.log(fullname);

//second recap
let name = "Linda"
let greeting = "Hi there"
function greet() {
    let fullGreet = greeting + "," + " " + name + "!"
    console.log(fullGreet)
}
greet();

//third recap
let errorMsg = document.getElementById("error")
function error() {
    errorMsg.innerText = "An error occured! Please try again!"
}


//simple calculator
let num1 = 8
let num2 = 2
let sum = document.getElementById("sum")
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function add() {
    let result = num1 + num2
    sum.textContent += result + " "
}

function subtract() {
    let subres = num1 - num2
    sum.textContent += subres + " "
}

function divide() {
    let divres = num1 / num2
    sum.textContent += divres + " "
}

function multiply() {
    let multres = num1 * num2
    sum.textContent += multres + " "
}

//
let skills = [
    "javaScript",
    "HTML",
    "CSS",
    "Java", 
    "VB"]
console.log(skills[1])
console.log(skills[2])
console.log(skills[0]
)
let messages = [
    "hey, how's it going",
    "I'm great! Thank you",
    "all good."
]
let newMessage = "same here"
messages.push(newMessage)
messages.pop(newMessage)
console.log(messages)



//for loop
// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }
// let cards = [7, 3, 9]
// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")
// console.log(greetingEl)
// for (let i = 0; i < sentence.length; i++){
//     console.log(sentence[i])
//     greetingEl.textContent += sentence[i] + " "
// }

let randomNumber = Math.floor( Math.random() *6)
console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)


let player1 = 304
let player2 = 205

function getTotalTime() {
    return player1 + player2
}
let totalTime = getTotalTime()
console.log(totalTime)

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }
// function generateCertificate() {
//     console.log("Generating certificate...")
// }

//js operators
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false)
{
    showSolution()
    }

function showSolution() {
    console.log("Showing Solution...")
}

let likesStartups = false
let likesDocumentaries = true

if (likesDocumentaries === true || likesStartups === true)
{
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey! Check out this new film we think you will like!")
}


//js objects
rentCastle = {
    isSuperHost: true,
    head: "live like a king in my Castle",
    title: "The Great Castle",
    Location: "Kenya",
    tags: [4 + " Guests", 2 + " Bedrooms", 2 + " Beds"],
    price: "$" + 140 + "/ night",
   rating: [4.95, 1235 + " reviews"]
}

console.log(rentCastle.rating, rentCastle.tags)

//recap_blackjack

let person = {
    name: "John",
    age: 23,
    country: "Kenya"
}

function logData() {
    sentence = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(sentence)
}
logData()

//if else recap

let age = 24
if (age < 6) {
    console.log("Free")
}
else if (age >= 6 && age <= 17) {
    console.log("child discount")
}
else if (age >= 18 && age <= 26) {
    console.log("student discount")
}
else if (age >= 27 && age <= 66) {
    console.log("full price")
}
else {
    console.log("senior citizen discount")
}

//for loop and arrays

let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largestCountries.pop("Tuvalu", "Monaco")
largestCountries.push("Pakistan")
largestCountries.shift()
largestCountries.unshift("China")



for (i = 0; i < largestCountries.length;i++){
    console.log("- "+largestCountries[i])
}


//logical operators

let dayOfMonth = 15
let weekDay = "friday"
if (dayOfMonth === 13 && weekDay === "friday") {
    console.log("😱😱😱")
}
else {
    console.log("😉😉😉")
}

// rock paper scissor
function game() {
    //version 1
    let hands = ["Rock", "Paper", "Scissor"]
    function getRandom() {
        let randomHand = Math.floor(Math.random() * 3)
        console.log(randomHand)
        return hands[randomHand]
    }
    console.log(getRandom())

    //version 2
    let randomHand = Math.floor(Math.random() * 3)
    console.log(randomHand)
    function getRandom2() {
        if (randomHand === 1) {
            return hands[0]
        }
        else if (randomHand === 2) {
            return hands[1]
        }
        else {
            return hands[2]
        }
    }
    console.log(getRandom2())
}
game()

//sort fruit function

let fruit = ["🍎", "🥭", "🥭", "🥚", "🥭", "🍎", "🍎"]
let appleShelf = document.querySelector(".apple-shelf")
let mangoShelf = document.querySelector(".mango-shelf")
let otherShelf = document.querySelector(".other-shelf")
console.log(appleShelf)

function sortFruit() {
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🥭") {
            mangoShelf.textContent += "🥭"
        } else {
            otherShelf.textContent += "🥚"
        }
    }
}
sortFruit()

let openBox = document.getElementById("box")
openBox.addEventListener("click", function () {
    console.log("I want to open the Box")
})
