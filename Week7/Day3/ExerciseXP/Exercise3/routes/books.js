import {Router} from 'express';
export const router = Router();

const books = [
    {bookId: 1, title: 'Gone with the Wind', author: 'Margaret Mitchell'},
    {bookId: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    {bookId: 3, title: 'A Little Life', author: 'Hanya Yanagihara'}
];

router.get('/', (req,res) => {
    res.send(books);
});

router.post('/',(req,res) => {
    const id = books.length + 1;
    const {title, author} = req.body;
    const newBook = {id,title,author};
    books.push(newBook);
    res.send(books);
});

// {"title": "A Moveable Feast", "author": "Ernest Hemingway"}

router.put('/:id',(req,res) => {
    const {id} = req.params;
    const {title} = req.body;
    const bookToUpdate = books.find(book => book.id == id);
    if (!bookToUpdate){
        res.status(404).json({message: 'Book is not found'});
    } else {
        bookToUpdate.title = title;
        res.send(bookToUpdate);
    };
});

// {"title": "The Old Man and the Sea"} for the 4th(new) book

router.delete('/:id',(req,res) => {
    const {id} = req.params;
    const bookToDelete = books.findIndex(book => book.id == id);
    if (bookToDelete == -1){
        res.status(404).json({message: 'Book is not found'});
    } else {
        books.splice(bookToDelete,1);
        res.send(books);
    };
});