// Conditionals -> Backbone of programming 
// Allows us to do code branching, or branch programming 


// * if...else
// let userInput = prompt('Enter your name')

// if (userInput) {
//     console.log(`Welcome, ${userInput}`)
// }else {
//     alert('You did not give us your name')
//     location.reload() -- this is used to reload the current page
// }


// Multiple code branching or ladders
// let userInput = prompt('Enter a fruit you like')

// if (userInput === 'Banana') {
//     console.log('YOu be correct guy')
// } else if(userInput === 'Apple') {
//     console.log('You be OG')
// } else if(userInput === 'Grapes') {
//     console.log('You be supreme OG')
// }else {
//     console.log('That wan na fruit? Comot body jor')
// }



// * switch...case
// switch(userInput) {
//     case `Banana`: console.log('You be correct guy')
//     break
//     case `Apple`: console.log('You be OG')
//     break
//     case `Grapes`: console.log('You be supreme OG')
//     break
//     default: console.log('That wan na fruit? Comot body jor')
// }


// Loops/Iterative Programming
// This allows us to perform task that are repetitive in nature

// while, for

// let index = 0

// while (index < 50) {
//     console.log('Hello world') // if you want to see it listed out console.log('Hello world', index)
//     index++
// }

// let names = ['Nnamdi','Adebayo','Smith','Abayomi','Rukevwe']
// let start = 0

// while (start < names.length) {
//     console.log(names[start])
//     start++ // or you can also do start += 1
// }

// let start = names.length -1
// while (start >=0) {
//     console.log(names[start])

//     start--
// }


// let username = null
// let password = null

// while (!username || !password) {
//     if (!username) {
//         username = prompt('Enter your username')
//         continue
//     } else if (!password) {
//         password = prompt('Enter your password')
//         continue
//     }

//     if (username && password) {
//         break
        
//     }
    
// }

// alert(`Welcome ${username}`)


// for (let count = 0; count < 5; count++) {
//     console.log(count)
// }

// function
// myFunction(a, b) {
// a = parseInt(prompt("Enter first number"))
// b = parseInt(prompt("Enter second number"))
// const sum = a + b 
// console.log(sum)
// return sum
//  }

// myFunction()

// let names = ['Nnamdi','Adebayo','Smith','Abayomi','Rukevwe']
// let nameIndexes = []

// for (let index = 0; index < names.length; index ++) {
//     nameIndexes.push(index)
// }


// let names = ['Nnamdi','Adebayo','Smith','Abayomi','Rukevwe']
// let oddNames = []

// for(let index = 0;index < names.length;index++) {
//     if (index%2 === 1) {
//         oddNames.push(names[index])
//     }
// }
// console.log(oddNames)

// for(let index = 1;index < names.length;index+=2) {
//     if (index % 2 === 1) {
//         oddNames.push(names[index])
//     }
// }


// let names = ['Nnamdi','Adebayo','Smith','Abayomi','Rukevwe']
// let endNames = []

// for (let index = 0;index < names.length;index++) {
//     if (names[index].endsWith('i') ) {
//         endNames.push(names[index]) 
//     }
// }
// console.log(endNames)


// let names = ['Nnamdi','Adebayo','Smith','Abayomi','Rukevwe']
// let conNames = []

// for (let index = 0;index < names.length;index++) {
//     if (names[index].includes('ayo')) {
//         conNames.push(names[index])
//     }
// }
// console.log(conNames)


// To get randoms letter in a given string 
// let names = 'Kelvin'
// na = names[Math.floor(Math.random() *  names.length)]
// console.log(na)

console.log('a'.charCodeAt())
console.log('A'.charCodeAt())


// to decode numbers
Name = "osheyy"
let encripted = ''
for (let index = 0;index < Name.length; index++) {
    encripted += Name[index].charCodeAt() + ';'
}

console.log(encripted)

let decrypted = ''

encripted = encripted.split(';')
for (let index = 0;index < encripted.length; index++) {
    decrypted += String.fromCharCode(Number(encripted[index]))
//     if (index !== Name.length -1) {
//         encripted += ';'
//     }

}

console.log(decrypted)













