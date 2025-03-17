// In app.js, import the express module and create an instance of an Express app.
// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

const express = require('express');
const {fetchPosts} = require('./data/dataService.js');

const app = express();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Node.js web server at port 5000 is running..`);
});

// Create an endpoint in your Express app that uses the fetchPosts function from the dataService module 
// to retrieve data from the JSONPlaceholder API.
// Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts
// Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.

app.get('/api/posts', async (req,res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('The data has been successfully retrieved and sent as a response')
    } catch (error) {
        res.sendStatus(400);
    };
});