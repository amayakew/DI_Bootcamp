const {Router} = require('express');
const { readAllBooks, readOneBook, addNewBook } = require('../controllers/books.js')

const router = Router();

router.get('/', readAllBooks);
router.get('/:bookId', readOneBook);
router.post('/', addNewBook);

module.exports = router;