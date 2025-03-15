// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website 
// by clicking a button.
// Note: The API contains 83 different characters.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// If there is an error getting the data, display a message.

async function getRandomCharacterId(){
    let url = 'https://www.swapi.tech/api/people';
    const response = await fetch(url);
    const responseJSON = await response.json();
    const charactersAmount = responseJSON.total_records;
    const randomCharacterId = Math.floor(Math.random() * charactersAmount) + 1;    
    return randomCharacterId;
};

async function getRandomCharacter(){
    const characterId = await getRandomCharacterId();
    const characterInfoResponse = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
    const characterInfo = await characterInfoResponse.json();

    const homeResponse = await fetch(characterInfo.result.properties.homeworld);
    const home = await homeResponse.json();

    const result = {
        name: characterInfo.result.properties.name,
        height: characterInfo.result.properties.height,
        gender: characterInfo.result.properties.gender,
        birthYear: characterInfo.result.properties.birth_year,
        homeWorld: home.result.properties.name
    };

    return result;
};

function addLoading(){
    const icon = document.createElement('i');
    icon.classList.add('fa-solid','fa-spinner','fa-spin-pulse','fa-spin-reverse','icon');
    document.getElementById('infoContainer').appendChild(icon);
    const loading = document.createElement('p');
    loading.classList.add('info','loading');
    loading.innerText = 'Loading...';
    document.getElementById('infoContainer').appendChild(loading);
};

function clearInfo() {
    document.getElementById('infoContainer').innerHTML = '';
};

const findBtn = document.getElementById('findBtn');
findBtn.addEventListener('click', async function() {
    clearInfo();
    addLoading();
    try {
        const randomCharacter = await getRandomCharacter();
    } catch {
        clearInfo();
        const error = document.createElement('p');
        error.classList.add('info');
        error.innerText = 'OH NO! That person is not available :(';
        document.getElementById('infoContainer').appendChild(error);
        return
    }
    clearInfo();

    const name = document.createElement('h2');
    name.classList.add('name');
    name.innerText = randomCharacter.name;
    document.getElementById('infoContainer').appendChild(name);

    const height = document.createElement('p');
    height.classList.add('info');
    height.innerText = `Height: ${randomCharacter.height}`;
    document.getElementById('infoContainer').appendChild(height);

    const gender = document.createElement('p');
    gender.classList.add('info');
    gender.innerText = `Gender: ${randomCharacter.gender}`;
    document.getElementById('infoContainer').appendChild(gender);

    const birthYear = document.createElement('p');
    birthYear.classList.add('info');
    birthYear.innerText = `Birth Year: ${randomCharacter.birthYear}`;
    document.getElementById('infoContainer').appendChild(birthYear);  
    
    const homeWorld = document.createElement('p');
    homeWorld.classList.add('info');
    homeWorld.innerText = `Home World: ${randomCharacter.homeWorld}`;
    document.getElementById('infoContainer').appendChild(homeWorld);
})