// console.log("hello")
// methods are functions within an object

/*
what should a user be able to do?

- record bill amount
- select tip amount 
- select custom tip amount
- record number of people
- display tip amount/total amount per person
- reset button
- calculate the tip
*/

/*
// grab bill element
// console.log(document.getElementById("bill_input").value)
document.getElementById("right").addEventListener("click", function() {
    console.log('I have been clicked')
})

let bill = document.getElementById("bill_input")
// console.log(bill)

bill.addEventListener("change", function() {
    console.log('something changed')
    // console log exactly what changed
    console.log(bill.value)
})

let people = document.getElementById("people_input")
people.addEventListener("change", function() {
    console.log("# of people has changed")
    console.log(people.value)
})

// how do I make it so when I click ea button it will console log the percent
let buttons = document.querySelectorAll(".buttons")
// console.log(buttons) // returns a node list (array)
// buttons.addEventListener("onclick", function() {
//     console.log(buttons.textContent)
// })
buttons.forEach((btn) => {
    // console.log(btn.innerText) // prints out the text of ea button as a string
    btn.addEventListener("click", function() {
        // console.log(`${btn.innerText} is the percent as a string`);
        // console.log(parseInt(btn.innerText)/100) // logs the text of ea button as a number
        let percent = parseInt(btn.innerText)/100
        console.log(percent)
    }) 
})
*/

// create a function called tipSplit() that handles splitting the tip
// get bill amount
// calculate tip amount
// divide by # of people
// return the split amount


let bill = document.getElementById("bill_input")
let people = document.getElementById("people_input")
let percent = document.querySelectorAll(".buttons")

let theme = document.getElementById("theme_btn")
console.log(theme)
let darkMode = false;

// access the style of the body
let body = document.body.style

// access the style of the container 
// use querySelector to grab the first of a class or when theres only one class with it's name
// let container = document.querySelector(".container").style.backgroundColor // gains access to the background color of the container
let container = document.querySelector(".container").style

// access the price divs within the right div
let tip = document.getElementById("tipPerPerson")
let total = document.getElementById("totalPerPerson")

function tipSplit(billAmount, amtPeople, percentage) {

    billAmount = parseInt(bill.value)
    amtPeople = parseInt(people.value)
    // console.log(billAmount, amtPeople, percentage)

    if (custom.value) {
        console.log("there is a custom value")
    } else if(billAmount && amtPeople && percentage) {
        console.log("WE HAVE ALL THE INPUTS")
        console.log(billAmount, amtPeople, percentage)

        // condition that checks if all 3 inputs are there
        let tipPerPerson = (billAmount * percentage) / amtPeople;
        let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;

        console.log(`amount of tip: ${tipPerPerson}, bill amount plus tip ${totalPerPerson.toFixed(2)} per person`)
        tip.innerText = `$${tipPerPerson.toFixed(2)}`
        total.innerText = `$${totalPerPerson.toFixed(2)}`
        // toFixed is a method that allows you to set the number of decimal places

        /* custom input
        access the custom input
        calculate */
        let custom = document.getElementById("custom")

    }
}


// * grab the bill amount 
// bill.addEventListener("change", function() {
//     billAmount = bill.value;
// })
bill.addEventListener("change", tipSplit)

// * grab the people amount
// people.addEventListener("change", function() {
//     amtPeople = people.value
// })
people.addEventListener("change", tipSplit)

// console log the percent when each button gets pressed
percent.forEach((btn) => {
    // console.log(btn.innerText) // prints out the text of ea button as a string
    btn.addEventListener("click", function() {
        // console.log(`${btn.innerText} is the percent as a string`);
        // console.log(parseInt(btn.innerText)/100) // logs the text of ea button as a number
        // let percentInt = parseInt(btn.innerText)/100
        // console.log(percentInt)
        // tipSplit(billAmount, percentInt, amtPeople)

        let btns = parseInt(btn.innerText) / 100;
        tipSplit(bill, people, btns);
    }) 
})
/*
function done by classmate
const tipSplit = (billAmount, amtPeople, percentage) => {
    tipAmount = billAmount * percentage
    tipPerPerson = tipAmount / amtPeople
    totalPerPerson = tipPerPerson + (billAmount/amtPeople)

    console.log(tipPerPerson)
    console.log(totalPerPerson)
}
console.log(tipSplit(100, 2, .15))
console.log(document.getElementById('').innerText)
*/


// make the theme clickable
theme.addEventListener("click", function() {
    console.log("I've been clicked!")
    /* write 2 functions:
    if in light mode -> change to dark mode
    if in dark mode -> change to light mode */
    if (darkMode == false) {
        darkModeProps()
        console.log("IT'S DARK")
        // once darkModeProps() runs, change darkMode to true
        darkMode = true;
    } else {
        lightModeProps()
        console.log("IT'S LIGHT")
        // once lightModeProps() runs, turn darkMode to false
        darkMode = false;
    }

})

function lightModeProps() {
    body.background = "#c4e0e9"
    theme.src="./images/icon-moon.svg"
    container.backgroundColor = "white"
}

function darkModeProps() {
    body.background = 'rgb(20, 29, 47)' 
    // access source property of element/object
    theme.src = "./images/icon-sun.svg"  

    // container = "#1e2a47" // reassigns the background color rather than switch it when changing the mode
    container.backgroundColor = "#1e2a47"
}

// change tip and total back to 0.00 once reset button is clicked
let reset = document.querySelector(".reset")
reset.addEventListener("click", function() {
    console.log("reset button is clicked")
    tip.innerText = "$0.00"
    total.innerText = "$0.00"
})


// switch theme drop down

// let switchTheme = document.getElementById("theme1")
// switchTheme.addEventListener("click", function() {
//     console.log('switchThemeFunc')
// })

/*
- Change the background color
- Change the shape of the container
- Change the font
- Change where the input boxes go
- Add a theme switcher
- Add extra functionality that you can think of!

After you are satisfied deploy it on netlify and send me the link!
*/
function myTheme() {
//    body.background = "#727373";
    body.background = "#ebebeb"
    body.fontFamily = "Rubiks"
    container.backgroundColor = "#188FA7";
    right.style.background = "#EBD3C2";
}

function switchTheme() {
    window.location = 'switchTheme.html';
}

function mobileVersion() {
    console.log('mobile button clicked')
    body.background = "red";
}