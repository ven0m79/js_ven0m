const PLANETS_COUNT = 60
let container = document.querySelector('#wrapper')
const button = document.querySelector('.users')
const button1 = document.querySelector('.planets')
button.addEventListener('click', getUsers)
button1.addEventListener('click', getPlanets)

const BASE_END_POINT = "https://swapi.dev/api/";

async function getUsers() {
    container.innerHTML = "";
    const request = await fetch(`${BASE_END_POINT}films/2/`);
    const response = await request.json();
    console.log({response})

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

async function getPlanets() {
    container.innerHTML = "";
    const requestPlanets = await fetch(`${BASE_END_POINT}planets/`);
    const responsePlanets = await requestPlanets.json();
    console.log({responsePlanets});
    for (promise1 of responsePlanets.results.planetsArray) {
        const planet = await fetch(promise1).then((res) => res.json());
        console.log({planet})
    
    
    }
}

