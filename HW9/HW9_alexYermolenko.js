const randomColor = function() {
    return `rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`
}
console.log(randomColor());

let container = document.querySelector('#root')
console.log(container);

function generateBlocks() {
for (let i = 0; i < 25; i++) {
    let div = document.createElement('div');
    div.classList.add('quad');
    div.style.backgroundColor = randomColor();
    container.append(div);
    }
}
generateBlocks()

function generateBlocksInterval() {
quad = document.querySelectorAll('.quad')
console.log(quad);
setInterval(() => {
    quad.forEach(element => {
        element.style.backgroundColor = randomColor();
    });
}, 1000);
}
generateBlocksInterval()