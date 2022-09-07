const BASE_END_POINT = "https://swapi.dev/api/";
let page = 1;
const FIRST_PAGE = 1;
const LAST_PAGE = 6;
let container = document.querySelector('#wrapper');
const buttonGetUsers = document.querySelector('.users');
const buttonGetPlanets = document.querySelector('.planets');
const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');
buttonGetUsers.addEventListener('click', getUsers);
buttonGetPlanets.addEventListener('click', getPlanets.bind(null, page));
buttonNext.addEventListener("click", () => {
    page++;
    container.innerHTML = "";
    getPlanets(page);
    buttonPrev.style.display = 'initial';
    buttonNext.style.display = 'initial';
    if (page === LAST_PAGE) {
        buttonPrev.style.display = 'initial';
        buttonNext.style.display = 'none';
    }
})
buttonPrev.addEventListener("click", () => {
    page--;
    container.innerHTML = "";
    getPlanets(page);
    buttonPrev.style.display = 'initial';
    buttonNext.style.display = 'initial';
    if (page === FIRST_PAGE) {
        buttonPrev.style.display = 'none';
        buttonNext.style.display = 'initial';
    }

})

async function getUsers() {
    try {
        buttonGetPlanets.setAttribute('disabled', true)
        container.innerHTML = "";
        const visibility = document.getElementById('flip-page');
        visibility.style.display = 'none';
        const request = await fetch(`${BASE_END_POINT}films/2/`);
        const response = await request.json();
        for (promise of response.characters) {
            const hero = await fetch(promise).then((res) => res.json());
            const heroName = hero.name;
            const heroAge = hero.birth_year;
            const heroGender = hero.gender;
            let div = document.createElement('div');
            div.classList.add('circ-button');
            div.textContent = `Name:${heroName}, Age:${heroAge}, Gender:${heroGender}`;
            container.append(div);
        }
    }
    finally { buttonGetPlanets.removeAttribute('disabled') }
}

async function getPlanets(page) {
    try {
        buttonGetUsers.setAttribute('disabled', true)
        container.innerHTML = "";
        const visibility = document.getElementById('flip-page');
        visibility.style.display = 'initial';
        buttonPrev.style.display = 'none';
        const requestPlanets = await fetch(`${BASE_END_POINT}planets/?page=${page}`);
        const responsePlanets = await requestPlanets.json();
        responsePlanets.results.forEach(planet => {
            div = document.createElement('div');
            div.classList.add('circ-button');
            div.textContent = `Name:${planet.name}`;
            container.append(div);
        })
    }
    finally { buttonGetUsers.removeAttribute('disabled') }
}