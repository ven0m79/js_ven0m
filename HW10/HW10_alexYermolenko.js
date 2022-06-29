const longList = document.querySelector("#wrapper");

const audioArray = [
    new Audio('sound/ak47.mp3'),
    new Audio('sound/aug.mp3'),
    new Audio('sound/awp.mp3'),
    new Audio('sound/deagle.mp3'),
    new Audio('sound/mp5.mp3'),
    new Audio('sound/usp.mp3'),
]
const keyArray = ['KeyA', 'KeyS', 'KeyD', 'KeyJ', 'KeyK', 'KeyL']

function playSmth(e) {
    if (e.target.id !== "wrapper") {
        console.log(e.target.id);
        audioArray[e.target.id - 1].currentTime = 0;
        audioArray[e.target.id - 1].play();
    }
}

longList.addEventListener("click", playSmth);
window.addEventListener("keydown", (e) => {
    keyArray.forEach ((item, index) => {
        if (item === e.code) {
            const keyDown = document.getElementById(index+1);
            console.log(keyDown);
            keyDown.classList.add("active");
            //console.log(audioArray[index]);
            audioArray[index].currentTime = 0;
            audioArray[index].play();

            setTimeout(() => keyDown.classList.remove("active"), 100)

        }
    })
})


