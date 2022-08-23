const hoursTime = document.querySelector('.hours')
const minutesTime = document.querySelector('.minutes')
const secondsTime = document.querySelector('.seconds')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')


let hoursRem = 00
let minutessRem = 00
let secondsRem = 00
let countingTime = null


startBtn.onclick =  function () {
    if(countingTime!==null){
        clearInterval(countingTime);
    }
    countingTime = setInterval(onTiming, 1000);

}

pauseBtn.onclick = function () {
    clearInterval(countingTime)
}

resetBtn.onclick = function () {
    clearInterval(countingTime)
    secondsRem = '00'
    minutessRem = '00'
    hoursRem = '00'
    hoursTime.innerHTML = '00'
    minutesTime.innerHTML = '00'
    secondsTime.innerHTML = '00'
    

}





function onTiming () {
    secondsRem++
    if(secondsRem == 60){
        secondsRem = 0;
        minutessRem++;
        if(minutessRem == 60){
            minutessRem = 0;
            hoursRem++;
           
        }
    }
    hoursTime.textContent = hoursRem
    minutesTime.textContent = minutessRem
    secondsTime.textContent = secondsRem

    hoursTime.textContent = hoursRem.toString().padStart(2, '0')
    minutesTime.textContent = minutessRem.toString().padStart(2, '0')
    secondsTime.textContent = secondsRem.toString().padStart(2, '0')
}








































// startBtn.onclick = displayTimer
// pauseBtn.onclick = pauseTiming
// resetBtn.onclick = resetTiming

// let [seconds,minutes,hours] = [0,0,0];
// let int = null
// let timerRef = null


// startBtn.onkeydown = (evt) => {
//     if (evt.key === 'Enter') {
//         startTiming()
//     }
// }
// pauseBtn.onkeydown = (evt) => {
//     if (evt.key === 'Enter') {
//         pauseTiming()
//     }
// }

// resetBtn.onkeydown = (evt) => {
//     if (evt.key === 'Enter') {
//        resetTiming 
//     }
// }

// function resetTiming() {
//     hoursTime.textContent = '00'
//     minutesTime.textContent = '00'
//     secondsTime.textContent = '00'
    
    
// }

// function startTiming() {
//     //  if(int!==null){
//     //      clearInterval(int);
//     //  }
//     // int = setInterval(displayTimer,10);
//     displayTimer()
 

// }

// function pauseTiming()  {
//     clearInterval(int);
// };




// function displayTimer(){
//     seconds++
//         if(seconds == 60){
//             seconds = 0;
//             minutes++;
//             if(minutes == 60){
//                 minutes = 0;
//                 hours++;
            
//             }
//         }
    
        
//     }
//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
    
//     hoursTime.innerHTML = ` ${h}` 
//     minutesTime.innerHTML = ` ${m}` 
//     secondsTime.innerHTML = ` ${s}` 
    
//     // timerRef= setInterval(function () {
        
        
//     //     hoursTime.textContent = minutesLeft.toString().padStart(2, '0')
//     //     minutesTime.textContent = minutesLeft.toString().padStart(2, '0')
//     //     secondsTime.textContent = secondsLeft.toString().padStart(2, '0')
//     // }, 1000)
    
// // let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// // let timerRef = document.querySelector('.timerDisplay');
// // let int = null;

// // document.getElementById('startTimer').addEventListener('click', ()=>{
// //     if(int!==null){
// //         clearInterval(int);
// //     }
// //     int = setInterval(displayTimer,10);
// // });

// // document.getElementById('pauseTimer').addEventListener('click', ()=>{
// //     clearInterval(int);
// // });

// // document.getElementById('resetTimer').addEventListener('click', ()=>{
// //     clearInterval(int);
// //     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// //     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
// // });

// // function displayTimer(){
// //     milliseconds+=10;
// //     if(milliseconds == 1000){
// //         milliseconds = 0;
// //         seconds++;
// //         if(seconds == 60){
// //             seconds = 0;
// //             minutes++;
// //             if(minutes == 60){
// //                 minutes = 0;
// //                 hours++;
// //             }
// //         }
// //     }

// //  let h = hours < 10 ? "0" + hours : hours;
// //  let m = minutes < 10 ? "0" + minutes : minutes;
// //  let s = seconds < 10 ? "0" + seconds : seconds;
// //  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

// //  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
// // }
