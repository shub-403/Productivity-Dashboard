const timeDispay = document.querySelector(".timeDispay");
const startBtn = document.querySelector(".timerStart");
const stopBtn = document.querySelector(".timerStop");
const resetBtn = document.querySelector(".timerReset");

let totalSeconds = 25 * 60;
let interval = null;

function updateTimer(){
   let minutes = Math.floor(totalSeconds / 60);
   let seconds = totalSeconds % 60;

   timeDispay.textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

function startTimer(){
    if(interval !== null) return;

    interval = setInterval(()=>{
        if(totalSeconds > 0){
            totalSeconds--;
            updateTimer();
        }else{
            clearInterval(interval);
            interval = null;
            alert("Time Khatam Meri Jaan");
        }
    },1000);
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    clearInterval(interval);
    interval = null;
    totalSeconds = 25 * 60;
    updateTimer();
}

startBtn.addEventListener("click" , startTimer);
stopBtn.addEventListener("click" , stopTimer);
resetBtn.addEventListener("click" , resetTimer);

updateTimer();