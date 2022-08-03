const myH1 = document.querySelector('h1')

const myBtn = document.querySelector('button')
myBtn.onclick = function () {
    myH1.innerHTML = "Grace"
}

// created 2 constant for h1 and button
// Added a click event to the button
// when thr button is clicked, the content of the h1 is changed 


// usage of const -> is a keyword used for declaring constant
// Usage of document -> The document object allows us to work with HTML
// Usage of querySelectors -> A document method used for selecting html elements from the document
// Usage of onclick -> This property aloowsus to listen for click events on THML elements
// Usage of functions -> Allows us to create an action/effect

// Need for variables
// Variabls allows us to store references for values that we will use. Working with a proraming language will be difficult 

//  The three wise men
// * There are 3 keywords that we use for variable cretaion
// 1. Var -> old javascript keyword. Not used in mordern javascript
// 2. Let -> New javascript keyword. Used all thr time.
// 3. Const -> New javascript keyword. Used sometimes

// Introducing the Console
// console.log("This is a message for the Console")
// console.log(myH1)
// console.warn("Do not try this again or you go see shege")
// console.error('You have done something bad. I don leave am for you')

// for(let count = 0; count < 5; count++) {
//     console.log('Hello Grace', count)
// }


// Rules of variable naming 
//  Variables cannot start with numbers or special characters
    // let 21Savage -> not valid
    // Let +doing stuff -> Not Valid
    // Let tiwaSavage -> Valid
    // Let $bling = 45 -> Valid
    // let _doingMyThing = true -> Valid 


// Naming styles/Casing
// camelCase -> Valid in JS
// PascalCase -> Valid in JS
// snake_case -> Valid in JS
// kebab-case -> Not valid in JS


// Reassignments to constants are not allowed
// const planet = "Earth"
// planet = 'Venus'
// console.log(planet)

// Operators