  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  const btnStart = document.querySelector(".btnStart");
  const btnPause = document.querySelector(".btnPause");
  const btnStop = document.querySelector(".btnStop");
  const btnReset= document.querySelector(".btnReset");

  let interval;
  let pause = false;
  let totalSeconds = 0;
  let totalSecondsBackup = 0;
  initiallyHideButtons();



function initiallyHideButtons(){
    btnPause.style.display = "none";
    btnStop.style.display = "none";
    btnReset.style.display = "none";

    btnStart.addEventListener("click", () => {
      const hour = parseInt(hoursElement.value);
      const min = parseInt(minutesElement.value);
      const sec = parseInt(secondsElement.value);
      totalSecondsBackup = totalSeconds = hour * 60 * 60 + min * 60 + sec;

      startTimer();

      btnPause.style.display = "inline-block";
      btnStop.style.display = "inline-block";
      btnReset.style.display = "inline-block";
      btnStart.style.display = "none";


    });

    btnPause.addEventListener("click", ()=>{
        pause = !pause;
        if(pause){
            btnPause.innerText = "Resume";
        } else {
            btnPause.innerText = "Pause";
        }
    })

    btnStop.addEventListener("click", ()=>{
        stopTimer();
        totalSeconds = totalSecondsBackup;
        pause = false;
        updateInputs();

        btnPause.style.display = "none";
        btnStop.style.display = "none";
        btnReset.style.display = "none";
        btnStart.style.display = "";
    })

    btnReset.addEventListener("click", ()=>{
        totalSeconds = totalSecondsBackup;
        updateInputs();
    })
}

function startTimer(){
    interval = setInterval(()=>{

        if(pause) return;

        totalSeconds--;
        updateInputs();

        if(totalSeconds<=0){
         stopTimer();
        }
    }, 1000)
}

function stopTimer(){
     interval = clearInterval(interval);
}

function updateInputs(){
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    hoursElement.value = hours;
    minutesElement.value = minutes;
    secondsElement.value = seconds;

}
