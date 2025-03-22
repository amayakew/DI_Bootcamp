
function setMessage(msg) {
    document.getElementById('message').innerText = msg;
};


async function register(formData) {
    try {
        const response = await axios.post('http://localhost:3000/register', formData);
        if (response.status === 200) {
            setMessage('Hello, your account is now created!');
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
}


function main() {
    const form = document.getElementById('form');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        await register({
            firstName,
            lastName,
            email,
            username,
            password
        });
    });
};


window.onload = main;
