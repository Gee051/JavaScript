const month = document.querySelector('.month')
const year = document.querySelector('year')
const prevYear = document.querySelector('#prev')
const nextYear = document.querySelector('#next')

const box = document.querySelector('#box')
const dayIndexes = []

function createBoxDay(index) {
    const boxDay = document.createElement('div')
    boxDay.classList.add('boxDay')

        if(!boxDay.hasChildNodes()) {
            let id = dataTransfer.getData('text/plain')
            boxDay.appendChild(document.getElementById(id))
        }


    boxDay.dataset.index = index
    return boxDay
}


for (let index= 0; index < 12; index++) {
    box.appendChild(createBoxDay(index))
}


for (let index= 1; index <=11; index++){
    dayIndexes.push(index)
}

const boxDays = document.querySelectorAll('.tile')
boxDays.forEach((boxDays ,index) => {
    if(index >  0) {
    boxDays.appendChild(createBoxDay(dayIndexes))
    }
})



function createDay (arr) {
    let randomDay = a
    arr.splice(arr.indexOf(randomDay), 1)

    const day = document.createElement('div')
    day.classList.add('day')
    day.textContent = randomDay
    day.id = `day${randomDay}`


    return day
}

var range = (start, stop, step=1) => {
    const length = Math.ceil((stop - start) / step);
    return Array.from({length}, (_, i) => (i * step) + start);
}
a = range (1, 31)
console.log(a)