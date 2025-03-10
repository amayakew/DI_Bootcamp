const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

function createCard(array) {
    array.forEach (robot => {
        const roboCard = document.createElement('div');
        roboCard.classList.add('card');
        const mainContainer = document.getElementById('main');
        mainContainer.appendChild(roboCard);

        const roboImg = document.createElement('img');
        roboImg.src = robot.image;
        roboImg.classList.add('img');
        roboCard.appendChild(roboImg);

        const roboInfo = document.createElement('div');
        roboInfo.classList.add('info');
        roboCard.appendChild(roboInfo);

        const roboName = document.createElement('h2');
        roboName.innerText = robot.name;
        roboName.classList.add('name');
        roboInfo.appendChild(roboName);

        const roboUsername = document.createElement('h5');
        roboUsername.innerText = `Username: ${robot.username}`;
        roboUsername.classList.add('username');
        roboInfo.appendChild(roboUsername);

        const roboEmail = document.createElement('p');
        roboEmail.innerText = `Email: ${robot.email}`;
        roboEmail.classList.add('email');
        roboInfo.appendChild(roboEmail);
    });
};

createCard(robots);

function searchCards(searchString = undefined) {
    document.getElementById('main').innerHTML = '';

    if (searchString == undefined){
        createCard(robots)
    } else {
        let chosenRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchString.toLowerCase()) || robot.username.toLowerCase().includes(searchString.toLowerCase()));
        createCard(chosenRobots);
    };
};

const searchLine = document.body.getElementsByClassName('pageSearch')[0];

searchLine.addEventListener('input', function(event) {
    const searchString = event.target.value;
    searchCards(searchString);
});

