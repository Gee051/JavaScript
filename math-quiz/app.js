const questions = getQuestions(10)
let questionsLeft = questions.length

const highScoreH1 = document.querySelector('.highscore h1')
const questionsList = document.querySelector('#questions-list')
const questionsLeftBox = document.querySelector('.questions-left')
const finishBtn = document.querySelector('#finish-btn')


const scoreBoard = document.querySelector('.score-board')
const scoreH1 = document.querySelector('.score-board h1')
const infoBox = document.querySelector('.score-board span')
const retryBtn = document.querySelector('.score-board button')

// Game variables
let highScore = 0
let currentScore = 0

// Create html for questions

questions.forEach((obj, index) => {
    questionsList.append(generateQuestionHTML(obj,index))
})

function generateQuestionHTML(obj,index) {
        let questionContainer = document.createElement ('div')
        questionContainer.classList.add('q-container')
        questionContainer.dataset.index = index


    let questionBox = document.createElement('p')
    questionBox.classList.add('question')
    questionBox.innerHTML = `${index + 1}: ${obj.question}`

    let optionsContainer = document.createElement('div')
    optionsContainer.classList.add('options')
    obj.options.forEach((option, index) => {
        let button = document.createElement('button')
        button.classList.add('option')
        button.dataset.value = option
        button.textContent = `${String.fromCharCode(index + 1 * 65)}: ${option}`
        optionsContainer.append(button)
        button.onclick = () => {
            button.parentElement.querySelectorAll('.option')
            .forEach(opt => opt.classList.remove('selected'))

            button.classList.add('selected')
        }
    })

    questionContainer.append(questionBox)
    questionContainer.append(optionsContainer)

    return questionContainer

}

let time = 60

function start () {
    questionsList.innerHTML = ''
    questions.forEach((obj,index) => {
        generateQuestionHTML(obj, index)
    })

    timerId = setInterval(function() {
        time--
        if(time<= 0){
            clearInterval(timerId)
            alert("Time Elapsed. Game Over")
            time = 60
        }
    },1000)
}

function calculateScore() {
    const allSelectedOptions = document.querySelectorAll('.selected')

    allSelectedOptions.forEach(option => {
        let idx = option.parentElement.parentElement.dataset.index
        let question = questions[idx]
        if (option.dataset.value === question.answer.toString()) {
            currentScore += 1000
        }
    })

    let timeLeft = 60 - time
    currentScore += timeLeft * 200

    if (currentScore > highScore) {
        highScore = currentScore
    }

    alert(currentScore)
}

finishBtn.onclick = calculateScore
