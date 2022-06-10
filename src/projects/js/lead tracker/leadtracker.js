// //declare items
// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// // let leadsFromLocalStorage = localStorage.getItem("myLeads")
// // leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)
// console.log(leadsFromLocalStorage)

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     renderLeads()
// }

// inputEl.addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("input-btn").click();
//     }
// });

// inputBtn.addEventListener("click", function () {
//     //push items to array
//     myLeads.push(inputEl.value);
//     inputEl.value = "";
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     console.log(localStorage.getItem(myLeads))
//     renderLeads();
// });
// //log out items from input

// function renderLeads() {
//     let listItems = "";
//     for (let i = 0; i < myLeads.length; i++) {
//         //listItems += "<li><a target = '_blank' href='" + myLeads[i]+"' >" + myLeads[i] + "</a><li>"
//         listItems += `
//         <li>
//             <a target = '_blank' href='${myLeads[i]}' >
//                ${myLeads[i]}
//             </a>
//         <li>
//         `
//     }
//     ulEl.innerHTML = listItems;
// }

// // alt array func foreach

//declare items
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let deleteEl = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// let leadsFromLocalStorage = localStorage.getItem("myLeads")
// leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target = '_blank' href='" + myLeads[i]+"' >" + myLeads[i] + "</a><li>"
        listItems += `
        <li>
            <a target = '_blank' href='${leads[i]}' >
               ${leads[i]}
            </a>
        <li>
        `
    }
    ulEl.innerHTML = listItems;
}

// deleteEl.addEventListener("dblclick", function () {
//     localStorage.clear()
//     console.log("ouch")
//     myLeads = []
//     ulEl.innerHTML = "";
//     render(myLeads)
// })
// deleteEl.addEventListener("click", () => {
//     alert("Double click to clear all!")
// })

// deleteEl.onclick = event => {
//     if (event.detail === 1) {
//         // it was a single click
//         alert("Double click to clear all!")
//     } else if (event.detail === 2) {
//         // it was a double click
//         localStorage.clear()
//         console.log("ouch")
//         myLeads = []
//         ulEl.innerHTML = "";
//         render(myLeads)
//     }
// };

let timer
deleteEl.addEventListener('click', event => {
    if (event.detail === 1) {
        timer = setTimeout(() => {
            alert("Double click to clear all!")
            console.log('click')
        }, 400)
    }
})
deleteEl.addEventListener('dblclick', event => {
    clearTimeout(timer)
    localStorage.clear()
    console.log("ouch")
    myLeads = []
    ulEl.innerHTML = "";
    render(myLeads)
    console.log('dblclick')
})

inputEl.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input-btn").click();
    }
});

inputBtn.addEventListener("click", function () {
    //push items to array
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem(myLeads))
    render(myLeads);
});
//log out items from input



// alt array func foreach
