function main(){
// Create an array which value is the planets of the solar system.
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const colors = ['orange','pink','green','red','yellow','purple','grey','blue'];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (let i = 0; i < planets.length; i++){
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.appendChild(document.createTextNode(planets[i]));
    planetDiv.style.backgroundColor = colors[i];
    document.body.getElementsByClassName('listPlanets')[0].appendChild(planetDiv);
}
}

window.onload = main;