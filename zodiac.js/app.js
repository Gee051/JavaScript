const zodiacInput = document.querySelector('#zodiac-input')
const loading = document.querySelector('.loading')
const infoBox = document.querySelector('.info')
const infoH1 = document.querySelector('.info h1')
const infoWriteUp = document.querySelector('.info .write-up')


const zodiacSigns = {
    aquarius: 'Likes swimming and eating fish',
    pisces: 'Likes fishing and they cry alot',
    aries: 'They are stubborn AF.',
    taurus: 'Their oversabi is too much',
    gemini: 'Rumours has it that they are quite deceptive',
    cancer: 'They are so afraid of cancer and eat alot of pasta',
    leo: 'They like to fancy themselves a lion. Proud MFs',
    virgo: 'They are the real virgins but have been corrupted',
    libra: 'They are really meticulous in their dealings',   
    scorpio: 'Them to like wahala. O ti po ju',
    saggitarius: 'They are victims of judgement due to their strange ways',
    capricorn: 'People under this signs are related to actual goats.Monkeys fear them'


}  


function findMyZodiac (day, month) {
    if (month === 1 && day >=20 || month === 2 && day <= 18) {
        return 'Aquarius'
    } else if(month === 2 && day >=19 || month === 3 && day <= 20) {
        return 'Pisces'
    } else if(month === 3 && day >=21 || month === 4 && day <= 19) {
        return 'Aries'
    } else if(month === 4 && day >=20 || month === 5 && day <= 20) {
        return 'Taurus'
    } else if(month === 5 && day >=21 || month === 6 && day <= 21) {
        return 'Gemini'
    } else if(month === 6 && day >=22 || month === 7 && day <= 22) {
        return 'Cancer'
    } else if(month === 7 && day >=23 || month === 8 && day <= 22) {
        return 'Leo'
    } else if(month === 8 && day >=23 || month === 9 && day <= 22) {
        return 'Virgo'
    } else if(month === 9 && day >=23 || month === 10 && day <= 23) {
        return 'Libra'
    } else if(month === 10 && day >=24 || month === 11 && day <= 21) {
        return 'Scorpio'
    } else if(month === 11 && day >=22 || month === 12 && day <= 21) {
        return 'Saggitarius'
    } else if(month === 12 && day >=22 || month === 1 && day <= 19) {
        return 'Capricorn'
    } 
}

zodiacInput.oninput = function () {
    if (zodiacInput.value) {
         
        // format -> dd/mm/yyyy
        let[day, month] =zodiacInput.value.split('/')
        let sign = findMyZodiac(+day, +month) // you can also use parseInt(day), parseInt(month)
        if (sign) {
            infoBox.style.display = 'flex'
            infoH1.textContent = sign
            infoWriteUp.textContent = zodiacSigns[sign.toLowerCase()]
        } else {
            infoBox.style.display = 'none'
        }
    } else {
        loading.style.display = 'none'
    }
}
