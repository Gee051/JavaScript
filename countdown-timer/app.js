const timerInputBlock = document.querySelector('.timer-input')
const userInput = document.querySelector('.timer-input input')
const startBtn = document.querySelector('#start-btn')
const resetBtn = document.querySelector('#reset')

const minutesH1 = document.querySelector('.minutes')
const secondsH1 = document.querySelector('.seconds')
const infoDiv = document.querySelector('.info')

let time = null
let timerId = null

startBtn.onclick = startCountDown
userInput.onkeydown = (evt) => {
    if (evt.key === 'Enter') {
        startCountDown()
    }
}

function startCountDown () {
    if (!userInput.value.trim()) return

    resetBtn.style.display = 'inline-block'
    time = userInput.value * 60
    infoDiv.textContent = 'Timer in progress'
    userInput.value = ''
    timerInputBlock.style.display = 'none'
    
    timerId = setInterval(function () {
        time--
        let minutesLeft = Math.floor(time / 60)
        let secondsLeft = Math.floor(time % 60)
        
        if (time <= 0) {
            clearInterval(timerId)
            resetBtn.style.display = 'none'
            timerInputBlock.style.display = 'flex'
            infoDiv.textContent = 'Timer Complete'
        }
        
        minutesH1.textContent = minutesLeft.toString().padStart(2, '0')
        secondsH1.textContent = secondsLeft.toString().padStart(2, '0')
    }, 1000)
}

resetBtn.onclick = function () {
    timerInputBlock.style.display = 'flex'
    resetBtn.style.display = 'none'
    clearInterval(timerId)
    minutesH1.textContent = '00'
    secondsH1.textContent = '00'
}
    