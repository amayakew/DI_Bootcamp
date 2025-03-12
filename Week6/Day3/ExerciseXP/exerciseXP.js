//🌟Exercise 1

// You will use this Gif URL: 
// https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. 
// Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('Bad response');
        }
    })
    .then((obj) => {
        console.log(obj);
    })
    .catch(function (error) {
        console.log(`We got the error ${error}`);
    });



//🌟Exercise 2

// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('Not Found');
        }
    })
    .then((obj) => {
        console.log(obj);
    })
    .catch(function (error) {
        console.log(`We got the error ${error}`);
    });


//🌟Exercise 3

// Improve the program below :

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

const fetchSWData = async (url) => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            let objectStarWars = await response.json();
            console.log(objectStarWars.result);
        } else {
            throw new Error("API - wrong link ");
        }

    }
    catch (error) {
        console.log(`We got the error ${error}`);
    }
};

fetchSWData("https://www.swapi.tech/api/starships/9/");


//🌟Exercise 4

// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');            
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// "calling" will be logged right after calling the "asyncCall" function.
// After two seconds the word "resolved" will be logged.