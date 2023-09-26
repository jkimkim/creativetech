//let mcount = 6
//console.log(mcount)

//let myAge = 22
//let humanDogratio = 7

//let myDodAge = myAge * humanDogratio
//console.log(myDodAge)

//let bonusPoints = 50

//console.log(bonusPoints)

//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)


//practice code... Runs on the console

function number() {
    console.log(42)
}

number()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function totalTime() {
    let time = lap1 + lap2 + lap3
    console.log(time)
}

totalTime()

let lapsCompleted = 0
function laps() {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)

    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)

    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}
laps()
laps()
laps()

//strings
//let name = "Kim"
//let greeting = "Hi! My name is "
//let myGreating = greeting + name + "!"
//console.log(myGreating)

//the end of practice code



//add btn... increasing the count when clicked
let countEl = document.getElementById("count_el")
console.log(countEl)

let saveEl = document.getElementById("save-el")


let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
increment()

function save() {
    let prevEntry = count + " -  "
    saveEl.textContent += prevEntry
    console.log(count)
    count = 0
    countEl.textContent = count
}
//end of count btn

//welcome message
let welcomeEl = document.getElementById('welcome-el')
let name = "John"
let greeting = "welcome back, "
welcomeEl.innerText = greeting + name
welcomeEl.innerText += "😘👌";
//welcome message

