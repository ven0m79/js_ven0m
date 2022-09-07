const randomColor = function() {
    const MAX_RGB_VALUE = 256;
    return `rgb(${Math.floor(MAX_RGB_VALUE*Math.random())},${Math.floor(MAX_RGB_VALUE*Math.random())},${Math.floor(MAX_RGB_VALUE*Math.random())})`
}

let container = document.querySelector('#root')
function generateBlocks() {
    const MAX_COUNT_QUAD = 25
for (let i = 0; i < MAX_COUNT_QUAD; i++) {
    let div = document.createElement('div');
    div.classList.add('quad');
    div.style.backgroundColor = randomColor();
    container.append(div);
    }
}

function generateBlocksInterval() {
quadElem = document.querySelectorAll('.quad')
setInterval(() => {
    quadElem.forEach(element => {
        element.style.backgroundColor = randomColor();
    });
}, 1000);
}

function init() {
    generateBlocks()
    generateBlocksInterval()
}
init()