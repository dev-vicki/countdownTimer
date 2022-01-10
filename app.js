  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  const btnStart = document.querySelector(".btnStart");
  const btnPause = document.querySelector(".btnPause");
  const btnStop = document.querySelector(".btnStop");
  const btnReset= document.querySelector(".btnReset");

  let interval;
  let pause = false;
  initiallyHideButtons();

btnStart.addEventListener("click", ()=> {
    const hour = parseInt(hoursElement.value);
    const min = parseInt(minutesElement.value);
    const sec = parseInt(secondsElement.value);
    console.log(hour,min,sec);

    const totalSeconds = hour * 60 * 60 + min * 60 + sec;
     startTimer(totalSeconds);
})

function initiallyHideButtons(){
    btnPause.style.display = "none";
    btnStop.style.display = "none";
    btnReset.style.display = "none";

}

function startTimer(totalSeconds){
    interval = setInterval(()=>{
        totalSeconds--;
        updateInputs(totalSeconds);
        if(totalSeconds<=0){
          interval = clearInterval(interval);
        }
    }, 1000)
}

function updateInputs(totalSeconds){
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    hoursElement.value = hours;
    minutesElement.value = minutes;
    secondsElement.value = seconds;

}