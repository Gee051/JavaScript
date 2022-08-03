// Data types in javascript

/**
* Primitive
* - strings
* - numbers
* - boolean
* - null
* - undefined
* - bigInt
* - symbol
*
*Reference Types
* - arrays
* - objects
* - sets
* - maps
*/

/** This is a string */ 
let myName = "Grace"
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(myName.repeat(3))
console.log(myName.replace('ace','ass'))
console.log(myName.replaceAll('G','Z'))
console.log(myName.slice(0, -1))
console.log(myName.split('c'))




/** This is a number */
let favNum = 400000000
console.log(favNum.toString())
console.log(favNum.toFixed(2))
console.log(favNum.toPrecision(7))
console.log(favNum.toExponential(5))
console.log(favNum.toLocaleString('en-us'))

console.log(Math)

/** This is a boolean */ 
let isBroke = true
console.log(isBroke.valueOf())
console.log(isBroke.toString())

/** This is a Null type*/ 
let doesNotExist = null
let imgTag = document.querySelector('img') // null, because no img element available 

/** This is a valid/undefined */
let val // undefined because it wasn't given a value
let anotherVal = undefined // undefined because it was stated as so

/** This is a bigInt */
let bigVal = 2e56

/** This is a symbol */
let uniqueVal = Symbol('$$$')
let anotherUniqueVal = Symbol('$$$')
console.log(uniqueVal.description)

// console.log(uniqueVal == anotherUniqueVal)

// References / Objects Types
/** This is an array */
let fruits = ['Mango','Orange','Apple','Pear','Lemon']
fruits.forEach(function (value) {
    document.write(`<h1>${value}</h1>`)
})

// map
// filter
// reduce
// some
// every
// find

// fruits.pop()
// console.log(fruits)

// fruits.push('Emeka')
// console.log(fruits)


// fruits.shift()
// console.log(fruits)

// fruits.unshift('guava')
// console.log(fruits)

// fruits.reverse()
// console.log(fruits)

// console.log(fruits.concat(['Ada','Kunle']))
// // fruits = fruits.concat(['Ada','Kunle'])
// console.log(fruits)

console.log(fruits.slice(2, 4))






/** This is an object literal */
let person = {
    name: 'grace',
    age: 234,
    occupation: 'legendary footballer',
    skinColour: 'brow skin girl',
    walk: function () {
        console.log('I am Walking')
    }
}

let h1 = document.querySelector('h1')
let btn = document.querySelector('button')

btn.onclick = function () {
    h1.innerHTML = hi.innerText.slice(0, -1)
}