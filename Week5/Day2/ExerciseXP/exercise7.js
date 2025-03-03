(function userWelcome (name) {
    let userInfo = document.createElement('div');

    let userGreeting = document.createElement('span');
    userGreeting.innerText = `Hi, ${name} `;
    userGreeting.style.fontWeight = 'bold'; 

    let userPhoto = document.createElement('img');
    userPhoto.src = './exercise7pic.jpg';
    userPhoto.style.width = '30px';
    userPhoto.style.heigth = '30px';
    userPhoto.style.borderRadius = '20px';

    userInfo.appendChild(userGreeting);
    userInfo.appendChild(userPhoto);
    userInfo.style.display = 'flex';
    userInfo.style.alignItems = 'center';
    userInfo.style.gap = '5px';
    document.body.firstElementChild.appendChild(userInfo);
})("John")