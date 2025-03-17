let score = 0;

async function main() {
    setScore();
    await setForm();
    const submit = document.getElementById('submit');
    submit.addEventListener('click', submitForm);
};

window.onload = main;

async function setForm(){
    document.getElementById('optionsWrap').innerHTML = '';

    const randomEmoji = await getRandomEmoji();
    document.getElementById('emoji').value = randomEmoji.emoji;
    const options = randomEmoji.options;

    options.forEach(option => {
        const item = document.createElement('input');
        item.setAttribute('type', 'radio');
        item.setAttribute('name', 'option');
        item.value = option;
        item.id = `option-${option}`;

        const label = document.createElement('label');
        label.setAttribute('for', `option-${option}`);
        label.innerText = option;

        document.getElementById('optionsWrap').appendChild(item);
        document.getElementById('optionsWrap').appendChild(label);
        document.getElementById('optionsWrap').appendChild(document.createElement('br'));
    });
};

async function submitForm (e){
    e.preventDefault();

    const selectedOption = document.querySelector('input[name="option"]:checked');
    const emoji = document.getElementById('emoji').value;
    const valid = await validateInput(emoji,selectedOption.value);

    if (valid){
        alert('correct answer');
        score += 1;
        setScore();
    } else {
        alert('wrong answer');
    };

    setForm();
};

async function getRandomEmoji() {
    const result = await fetch('http://localhost:8080/api/random-emoji');
    const resultJson = await result.json()
    return resultJson;
}

async function validateInput(emoji,name) {
    const result = await fetch('http://localhost:8080/api/check-emoji', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emoji,
            option: name
        })
    });

    const resultJson = await result.json();
    const correct = resultJson.correct;
    return correct;
};

function setScore(){
    document.getElementById('score').innerText = score;
};