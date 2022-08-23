const screen = document.querySelector('.screen')
const tapscreen = document.querySelector('.semitap')
const allBtns = document.querySelectorAll('.tap button')

screen.innerHTML = ''
tapscreen.innerHTML = ''
allBtns.forEach(btn => {
    btn.onclick = function() {
        if (btn.classList.contains('AC')) {
            tapscreen.innerHTML = ''
            screen.innerHTML = '' 
        } else if (btn.classList.contains('erase')) {
            tapscreen.innerHTML = tapscreen.innerText.slice(0, -1)
        } else if (btn.classList.contains('equal')) {
            screen.innerHTML = eval(tapscreen.innerHTML)
        } else if (btn.classList.contains('multiply')) {
            tapscreen.innerHTML += '*'
       } else {
            tapscreen.innerHTML += btn.innerHTML
        }
    }
})
    
       
    