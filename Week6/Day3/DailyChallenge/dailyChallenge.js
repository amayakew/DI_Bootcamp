// Use this Giphy API Random documentation.
// In the HTML file, add a form, containing an input and a button.
// In the JS file, create a program to fetch one random gif depending on the search of the user 
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. 
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

async function fetchImage(category) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    const responseJSON = await response.json();
    const url = responseJSON.data[Math.floor(Math.random() * 11)].images.original.url;
    return url;
};

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',async function (e){
    e.preventDefault();
    const input = document.getElementById('category').value;
    const gifUrl = await fetchImage(input);
    const img = document.createElement('img');
    img.src = gifUrl;

    const imgWrap = document.createElement('div');
    imgWrap.appendChild(img);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete Gif';
    imgWrap.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        imgWrap.remove();
    });

    const gifsContainer = document.getElementById('gifsContainer');
    gifsContainer.appendChild(imgWrap);
});

const deleteAllBtn = document.getElementById('deleteAll');
deleteAllBtn.addEventListener('click', function() {
    document.getElementById('gifsContainer').innerHTML = '';
});