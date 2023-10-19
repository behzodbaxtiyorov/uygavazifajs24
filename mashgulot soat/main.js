document.addEventListener('DOMContentLoaded', function() {
    const intervalSpans = document.querySelectorAll('.interval');
    const startButton = document.querySelector('.btn:nth-of-type(1)');
    const stopButton = document.querySelector('.btn:nth-of-type(2)');
    const resetButton = document.querySelector('.btn:nth-of-type(3)');
    let timerIntervalId;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function startTimer() {
        timerIntervalId = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }

    function stopTimer() {
        clearInterval(timerIntervalId);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function resetTimer() {
        clearInterval(timerIntervalId);
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateTimerDisplay();
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = true;
    }

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        const formattedHours = padZero(hours);
        const formattedMinutes = padZero(minutes);
        const formattedSeconds = padZero(seconds);

        intervalSpans[0].textContent = formattedHours;
        intervalSpans[1].textContent = formattedMinutes;
        intervalSpans[2].textContent = formattedSeconds;
    }

    function padZero(number) {
        return number.toString().padStart(2, '0');
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});











document.addEventListener("DOMContentLoaded", function () {
    const adContainer = document.querySelector(".ad-container");
    const adImage = document.querySelector("#ad-image");
    const closeButton = document.querySelector("#close-button");
    const countdownElement = document.querySelector("#countdown");
    let countdown = 19;
    let countdownIntervalId;
  
    function show() {
      adContainer.style.display = "flex";
      closeButton.style.display = "block";
      countdownIntervalId = setInterval(updateCountdown, 1000);
    }
  
    function hAd() {
      adContainer.style.display = "none";
      clearInterval(countdownIntervalId);
    }
  
    function updateCountdown() {
      countdown--;
      countdownElement.textContent = countdown;
  
      if (countdown === 0) {
        countdownElement.textContent = "0";
        hAd();
      }
    }
  
    closeButton.addEventListener("click", function () {
      hAd();
    });
  
    show();
  });
  