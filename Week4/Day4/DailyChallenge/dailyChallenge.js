
    // Get the value of each of the inputs in the HTML file when the form is submitted. Remember 
    // the event.preventDefault()
    // Make sure the values are not empty
    // Write a story that uses each of the values.
    // Make sure you check the console for errors when playing the game.

const stories = [
    (noun,adjective,person,verb,place) => `It was a ${adjective} day. ${person} went to ${place} to ${verb}. 
        When ${person} arrived, he couldn't do anything because he saw a ${noun}, and his only desire was to eat it.`,
    (noun,adjective,person,verb,place) => `${person} really wanted to go to ${place} to have some rest, 
    as ${person}'s work was absolutely ${adjective}. So ${person} took a ${noun} and went to ${place} to ${verb}.`,
    (noun,adjective,person,verb,place) => `${place} is a ${adjective} place. 
    You can find a magnificent ${noun} there. 
    Invite your buddy, ${person}, to ${verb} together near this eighth wonder of the world.`
];

let activeStory = stories[0];

const btn = document.getElementById('lib-button');
btn.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    const valuesArr = [noun, adjective, person, verb, place];
    if (valuesArr.every(word => word.length > 0)){
        const story = activeStory(noun, adjective, person, verb, place);
        const span = document.getElementById('story');
        span.innerText = story;
    } else {
        alert('Fill all the inputs');
    };
};


    // Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently 
    // displayed (but keep the values entered by the user). The user could click the button at least three times and 
    // get a new story. Display the stories randomly.

const shuffleBtn = document.createElement('button');
shuffleBtn.innerText = 'Shuffle!';
const form = document.getElementById('libform');
form.appendChild(shuffleBtn);

shuffleBtn.addEventListener('click', showNewStory);

function showNewStory(e){
    e.preventDefault();

    activeStory = stories[Math.floor(Math.random() * stories.length)];
    handleSubmit(e);
};
