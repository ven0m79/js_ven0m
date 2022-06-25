
const audioArray = [
    new Audio ('sound/awp.mp3'),

]
const audioObj = new Audio('sound/mp5.mp3');

const circ = document.querySelector('.circ-button');

circ.addEventListener("click", event => {
    /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
    audioObj.play();
  });