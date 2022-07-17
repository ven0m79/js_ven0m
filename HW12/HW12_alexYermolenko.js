let container = document.querySelector('#wrapper')
const buttonGetUsers = document.querySelector('.users')
const buttonGetPlanets = document.querySelector('.planets')
buttonGetUsers.addEventListener('click', getUsers)
buttonGetPlanets.addEventListener('click', getPlanets)

const BASE_END_POINT = "https://swapi.dev/api/";

async function getUsers() {
    container.innerHTML = "";
    const request = await fetch(`${BASE_END_POINT}films/2/`);
    const response = await request.json();
    console.log({ response })

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

async function getPlanets(page = 2) {
    container.innerHTML = "";
    const requestPlanets = await fetch(`${BASE_END_POINT}planets/?page=2`);
    const responsePlanets = await requestPlanets.json();
    console.log({ responsePlanets });

    responsePlanets.results.forEach(planet => {
        div = document.createElement('div');
        div.classList.add('circ-button');
        div.textContent = `Name:${planet.name}`;
        container.append(div);
    })



}




