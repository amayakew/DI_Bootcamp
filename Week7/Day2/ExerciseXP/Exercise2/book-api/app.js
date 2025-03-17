// In app.js, import the express module and create an instance of an Express app.
// Define a basic data array containing a few book objects. Each book object should have properties 
// like id, title, author, and publishedYear.
// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

const express = require('express');
const app = express();

const books = [
    {bookId: 1, title: 'Gone with the Wind', author: 'Margaret Mitchell', publishedYear: 1936},
    {bookId: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960},
    {bookId: 3, title: 'A Little Life', author: 'Hanya Yanagihara', publishedYear: 2015}
];

app.use(express.json());

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get('/api/books', (req,res) => {
    res.json(books);
});

// Implement the “Read” route by defining a route at GET /api/books/:bookId. 
// Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. 
// If the book is found, send a JSON response with the book details and a status code of 200 (OK). 
// If the book is not found, send a 404 status with a “Book not found” message.
app.get('/api/books/:bookId', (req,res) => {
    const {bookId} = req.params;
    const book = books.find(book => book.bookId == bookId);

    if (!book) {
        return res.status(404).json({message: 'Book not found'});
    };
    res.status(200).json(book);
});

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. 
// Inside the route handler, create a new book object with an incremented ID and the data from the request body. 
// Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

app.post('/api/books', (req,res) => {
    const {title, author, publishedYear} = req.body;
    const newBook = {id: books.length + 1, title, author, publishedYear};
    books.push(newBook);
    res.status(201).json(newBook);
});

// Data for new book:
// {"title": "A Moveable Feast", "author": "Ernest Hemingway", "publishedYear": "1964"}

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Node.js web server at port 5000 is running..`);
});