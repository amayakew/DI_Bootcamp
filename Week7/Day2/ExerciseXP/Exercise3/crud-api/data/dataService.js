// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request 
// to the JSONPlaceholder API to fetch data for all posts.
// Export the fetchPosts function.

const axios = require('axios');

const fetchPosts = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data; //axios automatically parses the JSON response, to access it - response with .data.
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {fetchPosts};