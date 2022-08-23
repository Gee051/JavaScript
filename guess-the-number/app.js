const numgrid = document.querySelector('.numgrid')
const nums = [100, 450, 56, 45, 39, 689, 235, 2, 1000]

nums.forEach(num => {
    let btn = `<button class='num'>${num}</button>`
    numgrid.innerHTML += btn
})

const numbtns = document.querySelectorAll('.num')
const msg = document.querySelector('.msg')
const yourScoreCard = document.querySelector('.yours h2')
const computerScoreCard = document.querySelector('.computers h2')

let yourScore = 0
let computerScore = 0
let yourChosenNum = null
let computerChosenNum = null

function chooseRandomNum () {
    computerChosenNum = nums[Math.floor(Math.random() * nums.length)]
    // Math.random gives us a random number between 0 and 1 but never 1.. so therefore when you multiply math.random by a number,it gives
    // us a number between 0 and the number... using Math.floor, it gives us the number without decimal digits 
}

chooseRandomNum()


function determineWinner () {
    if(yourChosenNum === computerChosenNum) {
        yourScore += 50
        nums.splice(nums.indexOf(yourChosenNum), 1)
        chooseRandomNum()
        msg.textContent = 'Correct'
        return true
    } else {
        computerScore += 50
        // chooseRandomNum()
        msg.textContent ='Wrong' 
        return false   
    }
}

function handleGameOver () {
    if (nums.length === 0) {
        let whoWon = computerScore > yourScore ? 'Computer Wins' : 'You win'
        alert(`Game Over! \n ${whoWon}`)
    }
}



numbtns.forEach(btn => {
    btn.onclick = function () {
        yourChosenNum = Number(btn.textContent) // Anything brought from HTML is seen as a string, calling Number makes btn.textContent to be seen as a number
        let youWOnThisRound = determineWinner()
        if (youWOnThisRound) {
            btn.remove()

        }
        yourScoreCard.textContent = yourScore
        computerScoreCard.textContent = computerScore
        handleGameOver()
    }
})

