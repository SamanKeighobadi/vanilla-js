const input = document.querySelector("#input-counter");
const start = document.querySelector("#start-counter");
const circleCounter = document.querySelector(".c100");
const timer = document.querySelector(".c100 > span");

start.addEventListener("click", () => {
  let seconds = parseInt(input.value);

  if (isNaN(seconds)) {
    toggleErrorMessage({ show: true, message: "زمان را به درستی وارد کنید" });
    
    return;
  }

  toggleErrorMessage({ show: false });
  toggleLoadingMessage({ show: true });
  circleCounter.style.display = "block";
  timer.textContent = seconds;

  let orginalSeconds = seconds;
  let lastPersent = "";

  const timerId = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timerId);
      circleCounter.style.display = "none";
      toggleLoadingMessage({ show: false });
      return;
    }

    if (lastPersent) circleCounter.classList.remove(lastPersent);

    seconds -= 1;

    let persent = Math.floor(
      ((orginalSeconds - seconds) / orginalSeconds) * 100
    );
    lastPersent = `p${persent}`;
    circleCounter.classList.add(`p${persent}`);

    timer.textContent = seconds;
  }, 1000);

  input.value = "";
});

const toggleErrorMessage = ({ show, message }) => {
  const errorMessage = document.querySelector("#error-message");

  if (show) {
    errorMessage.textContent = message;
    errorMessage.classList.add("active");
  } else {
    errorMessage.classList.remove("active");
  }
};

const toggleLoadingMessage = ({ show }) => {
  const successMessage = document.querySelector(".message .success");
  const loadingMessage = document.querySelector(".message .loading");

  if (show) {
    loadingMessage.style.display = "block";
    successMessage.style.display = "none";
  } else {
    loadingMessage.style.display = "none";
    successMessage.style.display = "block";
  }
};
