const note = document.querySelector(".nowplaying");
const allKeys = document.querySelectorAll('.key')
const hints = document.querySelectorAll('.hints')

window.addEventListener("keydown", (e) => {
  const keyCode = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  if(!keyCode) return;

  const keyNote = keyCode.getAttribute("data-note");

  keyCode.classList.add('playing')
  note.innerHTML = keyNote;
    audio.currentTime = 0
  audio.play()

});

allKeys.forEach(key => key.addEventListener('transitionend',removeTransition))

hints.forEach((elm,index) => {
    elm.style = `transition-delay : ${index * 50}ms`
})

function removeTransition() {
    this.classList.remove('playing')
}