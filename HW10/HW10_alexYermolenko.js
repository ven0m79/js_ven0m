
const audioArray = [
    new Audio ('sound/ak47.mp3'),
    new Audio ('sound/aug.mp3'),
    new Audio ('sound/awp.mp3'),
    new Audio ('sound/deagle.mp3'),
    new Audio ('sound/mp5.mp3'),
    new Audio ('sound/usp.mp3'),

]
/* const audioObj = new Audio('sound/usp.mp3');

const circ = document.querySelector('.circ-button');

circ.addEventListener("click", event => {

    audioObj.play();
  });
 */


  function doSmth(target) {
    console.log(target.id);
        audioArray[target.id - 1]?.currentTime = 0;
        audioArray[target.id - 1]?.play();

    }
   
   const longList = document.querySelector("#wrapper");
   wrapper.addEventListener("click", (e) =>  doSmth(e.target))