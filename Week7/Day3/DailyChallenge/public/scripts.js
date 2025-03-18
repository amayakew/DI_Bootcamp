
function setQuestion(question) {
    document.getElementById('answer').value = '';
    document.getElementById('question').innerText = question;
};

async function init() {
    const response = await fetch('http://localhost:3000/quiz');
    const responseJson = await response.json();
    setQuestion(responseJson.question);
};

function getQuestionAndAnswer() {
    const question = document.getElementById('question').innerText;
    const answer = document.getElementById('answer').value;
    return {question, answer};
};

function notifyUser(responseJson) {
    if (responseJson.correct) {
        alert('Correct Answer!');
    } else {
        alert('Wrong Answer!');
    };
};

async function submitAnswer(question, answer) {
    const response = await fetch('http://localhost:3000/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question,
            answer
        })
    });
    const responseJson = await response.json();
    return responseJson;
};


async function finalizeGame() {
    const response = await fetch('http://localhost:3000/quiz/score');
    const responseJson = await response.json();
    const {score} = responseJson;
    alert(`Game finished! Your score is: ${score}`);
    document.getElementById('score').innerText = score;
    await init();
};

async function setupSubmitBtn() {
    const btn = document.getElementById('btn');

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const {question, answer} = getQuestionAndAnswer();

        if (!answer) {
            alert('Please set answer!')
            return;
        };

        const responseJson = await submitAnswer(question, answer);
        notifyUser(responseJson);

        if (responseJson.nextQuestion) {
            setQuestion(responseJson.nextQuestion);
        }
        else {
            await finalizeGame();
        }
    });
};

async function main() {
    await init();
    await setupSubmitBtn();
};

window.onload = main;