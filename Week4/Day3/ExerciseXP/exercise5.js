function main() {
    // 🌟 Exercise 5 

    // Retrieve the div and console.log it
    const theDiv = document.getElementById('container').innerText;
    console.log(theDiv);
    // Change the name “Pete” to “Richard”.
    let changePete = document.body.firstElementChild.nextElementSibling.lastElementChild;
    changePete.innerText = 'Richard'
    // Delete the second <li> of the second <ul>.
    let secondUl = document.body.lastElementChild;
    let lastLi = secondUl.firstElementChild.nextElementSibling;
    secondUl.removeChild(lastLi);
    // Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
    const lists = document.getElementsByClassName('list');
    for (let i = 0; i < lists.length; i++){
        lists[i].firstElementChild.innerText = 'Anastasiya';
    }
    // Add a class called student_list to both of the <ul>'s.
    for (let i = 0; i < lists.length; i++){
        lists[i].classList.add('student_list');
    }
    // Add the classes university and attendance to the first <ul>.
    lists[0].classList.add('university', 'attendance');

    // Add a “light blue” background color and some padding to the <div>.
    document.getElementById('container').style.backgroundColor = 'lightblue';
    document.getElementById('container').style.padding = '30px';
    // Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
    secondUl.lastElementChild.style.display = 'none';
    // Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
    changePete.style.border = '3px solid pink';
    // Change the font size of the whole body.
    document.body.style.fontSize = '24px';
    // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
    if (document.getElementById('container').style.backgroundColor === 'lightblue'){
        const users = document.querySelectorAll('ul > li')
        let names = ''
        for (let i = 0; i < users.length;i++){
            names+=`${users[i].innerText} `
        }
        alert(`Hello ${names}`);
    }
}

window.onload = main
