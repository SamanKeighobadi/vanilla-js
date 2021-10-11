// Select DOM elements
const playerArea = document.querySelector(".myplayer");
const media = document.querySelector("video");
const volumeIcon = document.querySelector(".volume .icon");
const volumeProgressbar = document.querySelector(".volume .volume__progress");
const volumeProgressbarInput = document.querySelector("#volume_bar");
const playBtn = document.querySelector(".play");
const forwardBtn = document.querySelector(".forward");
const rewindBtn = document.querySelector(".rewind");
const fullscreenBtn = document.querySelector(".fullscreen");
const videoTime = document.querySelector(".timer .videoTime");
const currnetTime = document.querySelector(".timer .currentTime");
const progressbar = document.querySelector(".controls__progressbar-current");

media.volume = 0.5;

// Event listener
playBtn.addEventListener("click", () => {
  videoTime.textContent = getTime(media.duration);

  if (media.paused) {
    togglePlayIcon();
    media.play();
  } else {
    togglePlayIcon();
    media.pause();
  }
});

media.addEventListener("click", () => {
  videoTime.textContent = getTime(media.duration);

  if (media.paused) {
    togglePlayIcon();
    media.play();
  } else {
    togglePlayIcon();
    media.pause();
  }
});

media.addEventListener("timeupdate", () => {
  currnetTime.textContent = getTime(media.currentTime);

  const barLength = (media.currentTime / media.duration) * 100;
  progressbar.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%)`;
});

forwardBtn.addEventListener("click", () => {
  media.currentTime = media.currentTime + 5;
});
rewindBtn.addEventListener("click", () => {
  media.currentTime = media.currentTime - 5;
});
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    if (playerArea.requestFullscreen) {
      playerArea.requestFullscreen();
    } else if (playerArea.requestFullscreen) {
      playerArea.requestFullscreen();
    } else if (playerArea.msFullscreen) {
      playerArea.msFullscreen();
    } else if (playerArea.mozFullscreen) {
      playerArea.mozFullscreen();
    } else if (playerArea.webkitFullscreen) {
      playerArea.webkitFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

volumeIcon.addEventListener("click", () => {
  volumeProgressbar.classList.toggle("active");
});

progressbar.addEventListener("input", function () {
  media.currentTime = (this.value * 100) / media.duration;
});

volumeProgressbarInput.addEventListener("input", function () {
  media.volume = this.value / 100;
  volumeProgressbarInput.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%)`;
});

// Fucntions
function togglePlayIcon() {
  let icon = playBtn.querySelector("i");
  icon.classList.toggle("ion-md-pause");
  icon.classList.toggle("ion-md-play");
}

function getTime(time) {
  let minuteValue;
  let secondValue;
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) {
    minuteValue = `0 ${minutes}`;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = `0 ${seconds}`;
  } else {
    secondValue = seconds;
  }

  return (currnetTime.textContent = `${minuteValue} : ${secondValue}`);
}
