// Everything is an object


// console.log(window)
// let newWindow = window.open('about:blank', '_blank')
// 
// 
// setTimeout(function () {
    // newWindow.alert('Closing the window')
    // newWindow.close()
// }, 5000)

// How to get our webcam in our browser
// const constraints = {
    // video: true
// }
// 
// navigator.mediaDevices.getUserMedia(constraints)
// .then(stream => {
    // const myVideo = document.querySelector('#myVideo')
    // myVideo.srcObject = stream
// })
// 


// Document Object
console.log(document)

//  The Root Element
console.log(document.documentElement) //html

//  The Head
console.log(document.head) //head

// The Body
console.log(document.body) // body

// The Document Title
document.title = "Changed Title"
console.log(document.title) // title

// getting elements

console.log(document.querySelector('h1'))
console.log(document.querySelector('[data-asake]'))
// console.log(document.getElementsByTagName('h1')[0]) -- old method 


const myH1 = document.querySelector('h1')
const btn = document.querySelector('button')

// beforebegin, afterbegin, beforeend, afterend
btn.insertAdjacentElement('afterend', myH1)

const section = document.createElement('section')
// document.body.prepend(section) -- adds to the begining of the code
// document.body.appendChild(section) -- adds to the end of the code

myH1.insertAdjacentElement("afterend", section)
section.innerHTML = "I am a section"
section.id = 'mySection'