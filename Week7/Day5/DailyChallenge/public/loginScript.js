
function setMessage(msg) {
    document.getElementById('message').innerText = msg;
};


async function login(formData) {
    try {
        const response = await axios.post('http://localhost:3000/login', formData);
        if (response.status === 200) {
            setMessage(`Hi, ${response.data.username}, welcome back again`);
        } else {
            setMessage(response.data.message);
        }
    } catch (error) {
        if (error.response && error.response.data.message) {
            setMessage(error.response.data.message);
        }
        else {
            setMessage('Error occured, please try again');
        }
    }
};


function main() {
    const form = document.getElementById('form');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        await login({
            username,
            password
        });
    });
};


window.onload = main;
