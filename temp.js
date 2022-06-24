function doSmth(e, index) {
    e.stopPropagation();    console.log(`Hi from ${index}`);
}
function doElse() {
    console.log('4d nah');
}

const parent = document.querySelector('.parent');
const child1 = document.querySelector('.child1');
const child2 = document.querySelector('.child2');


[parent, child1, child2].forEach((el, index) => 
    el.addEventListener("click", (e) => doSmth(e, index))
    );

