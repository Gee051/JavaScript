//functions allows us to write code that we wll run at a latter time
// HOw to declare/create functions:

/**Function Declaration Syntax */
function sayMyName() {
    alert('Grace')
}

// sayMyName()


/**Function Expression Syntax */
let multiply = function(num1, num2) {
    console.log(num1 * num2)

}
// multiply(20, 20)


/** Arrow Function Syntax */
// const generateMultipliactionTable = (range) => {
//     for (let index=1; index<= 12;index++){
//         let tr = document.createElement('tr')
//         for (let rangeIndex = 1;rangeIndex <= range; rangeIndex++){
//             let td = document.createElement('td')
//             td.textContent = rangeIndex * index
//             tr.appendChild(td)
//                 console.log(rangeIndex * index)
//         }
//         tbody.appendChild(tr)
//     }
// }

// generateMultipliactionTable(12)




// Return values
function encrypt (value) {
    let encrypted = ''
    value.split('').forEach((val, index) => {
        encrypted += val.charCodeAt() + (index < value.length -1 ? '$'.charCodeAt().toString : '')
    })
    return encrypted
}

let result = encrypt("Grace the legend")
console.log(result)


// function decrypt (value) {
//     let decrypted = ''
//     value.split('$').forEach(val => {
//         decrypted += String.fromCharCode(+val)
//     })
//     return decrypted
// }

// console.log('Decrypted', decrypt(result))
