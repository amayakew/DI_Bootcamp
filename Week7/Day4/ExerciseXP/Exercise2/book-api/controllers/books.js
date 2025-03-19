const {db} = require('../config/dbConnection.js');

const readAllBooks = (req,res) => {
    db('books')
    .select('*')
    .then((books) => {
        res.json(books);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

const readOneBook = (req,res) => {
    const {bookId} = req.params;
    db('books')
    .select('*')
    .where({id: bookId})
    .then((books) => {
        if(books.length === 1){
            res.status(200).json(books[0]);
        } else {
            res.status(404).json({message: 'Book is not found'});
        };
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

const addNewBook = (req,res) => {
    const {title, author, publishedyear} = req.body;
    db('books')
    .insert({title, author, publishedyear},['*'])
    .then((books) => {
        res.json(books);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

// Data for new book:
// {"title": "A Moveable Feast", "author": "Ernest Hemingway", "publishedYear": "1964"}

module.exports = {
    readAllBooks,
    readOneBook,
    addNewBook
};