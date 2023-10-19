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
