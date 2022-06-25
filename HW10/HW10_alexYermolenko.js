
const audioArray = [
    new Audio ('sound/ak47.mp3'),
    new Audio ('sound/aug.mp3'),
    new Audio ('sound/awp.mp3'),
    new Audio ('sound/deagle.mp3'),
    new Audio ('sound/mp5.mp3'),
    new Audio ('sound/usp.mp3'),

]
const audioObj = new Audio('sound/usp.mp3');

const circ = document.querySelector('.circ-button');

circ.addEventListener("click", event => {
    /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
    audioObj.play();
  });