// // loops
// for(let index = 5; index>=1; index--) {
//     console.log(index)
// }

// alert('Holla') // -- example of a synchronous code

// /**  sychronous codes are codes that work line by line... if there are five lines of code, the second code will wait for
// the first code to run before it will run, the third code will wait for the second to finish and so on...
//  */

// // TImeout
// // Asyncrounous Code : are codes that do not woek line by line
// // setTimeout(function () {
// //     alert('Helloworld')
// // }, 5000)  // you can do this or do 

// function handler () {
//     alert('Logging user out')
// }

// let timeout = prompt("Enter Inactivity Delay timer in Seconds") // * 1000 if you want to use one line
// let finalTimeout = timeout * 1000

// // let timeout = 5000
// let timeoutId = setTimeout(handler, finalTimeout)
// // let user = prompt('Enter your name')
// // if (user === 'myke') {
// //     clearTimeout(timeoutId)
// // }


// // Detect user Activity
// window.onmousemove = function () {
//     clearTimeout(timeoutId)
// }

// alert("After setTImeout")                         --- examples of asyncrounous code


// Interval


let totalSecs = 5
let intervalId = null

// let intervalId =setInterval( function() {
//     totalSecs--
//     if (totalSecs <= 0) {
//         clearInterval(intervalId)
//     }
//     console.log(`${totalSecs} Seconds left`)
// }, 1000 )

// if you want it to restart when it reaches 0
// Recursions

// function start() {
// let timeId = 0
// let intervalId =setInterval( function() {
//     totalSecs--
//     console.log(`${totalSecs} Seconds left`)
//     if (totalSecs <= 0) {
//         clearInterval(intervalId)
//         totalSecs = 5
//         start()
//     }
// }, 1000 )
// }

// start ()


let count = 0
function countTo5 () {
    count ++
    console.log(count)
    if (count<5) {
        return countTo5()
    }
}
countTo5()

