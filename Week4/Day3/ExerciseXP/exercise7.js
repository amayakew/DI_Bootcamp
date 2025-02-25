function main (){

const allBooks = [{
    title: 'Dune',
    author: 'Frank Herbert',
    image: 'https://wallpapersok.com/images/hd/dune-by-frank-herbert-6til0ya9acobicsr.jpg',
    alreadyRead: true
},{
    title: 'Moby-Dick',
    author: 'Herman Melville',
    image: 'https://i.etsystatic.com/17212209/r/il/1336b0/1498853645/il_fullxfull.1498853645_4zx2.jpg',
    alreadyRead: false
}];

for (let i = 0; i < allBooks.length; i++){
    const bookDiv = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src',allBooks[i].image);
    image.setAttribute('width',100);
    const description = document.createTextNode(`${allBooks[i].title} written by ${allBooks[i].author}.`);
    bookDiv.appendChild(description);
    bookDiv.appendChild(image);
    if (allBooks[i].alreadyRead){
        bookDiv.style.color = 'red';
    }
    document.body.firstElementChild.appendChild(bookDiv)
}
}

window.onload = main