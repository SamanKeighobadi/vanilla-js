const input = document.querySelector("#input-counter");
const start = document.querySelector("#start-counter");
const errorMessage = document.querySelector("#error-message");
const message = document.querySelector(".message");
const circleCounter = document.querySelector(".c100");
const timer = document.querySelector(".c100 > span");
const successMessage = document.querySelector(".message .success");
const loadingMessage = document.querySelector(".message .loading");
console.log(loadingMessage)
start.addEventListener("click", () => {
  let seconds = parseInt(input.value);

  if (isNaN(seconds)) {
    errorMessage.textContent = "زمان را به درستی وارد کنید";
    errorMessage.classList.add("active");
    return;
  }
  errorMessage.classList.remove("active");

  circleCounter.style.display = "block";
  timer.textContent = seconds;
  loadingMessage.style.display = "block";
  successMessage.style.display = "none";

  let orginalSeconds = seconds;
  let lastPersent = ''
  const timerId = setInterval(() => {

    if (seconds <= 0) {
      clearInterval(timerId);
      circleCounter.style.display = "none";
      message.style.display = "none";
      loadingMessage.style.display = "none";
      successMessage.style.display = "block";
      return;
    }

    if(lastPersent) circleCounter.classList.remove(lastPersent)

    seconds -= 1;

    let persent = Math.floor(((orginalSeconds - seconds) / orginalSeconds) * 100);
    lastPersent =  `p${persent}`
    circleCounter.classList.add(`p${persent}`)
    
    timer.textContent = seconds;
  }, 1000);

  input.value = "";
});

// input.addEventListener("input",(e) => {
//     console.log(e.target.value)
// })
