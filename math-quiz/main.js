/**
 * Set of functions to generate random Math questions, 
 * options and answers
 * @author Darkmyke
 */

 function getRandomValue (range) {
    return Math.floor(Math.random() * range)
}

function getRandomSign () {
    let signs = '+,-,/,*,%,**'.split(',')
    return signs[getRandomValue(signs.length)]
}

function getMathProblem () {
    return `${getRandomValue(1000)} ${getRandomSign()} ${getRandomValue(1000)}`
}

function getSolution (problem) {
    return eval(problem)
}

function getFakeOptions (count) {
    return [...Array(count)].map(val => {
        return getRandomValue(10000)
    })
}

function getOptions (problem) {
    let rn = getRandomValue(5)
    let options = getFakeOptions(4)
    options.splice(rn, 0, getSolution(problem))
    return options
}

function getQuestions (count) {
    const questions = []
    
    for (let index = 0; index < count; index++) {
        let question = {}
        let problem = getMathProblem()
        question.question = `What is ${problem}?`
        question.options = getOptions(problem)
        question.answer = getSolution(problem)
    
        questions.push(question)
    }

    return questions
}