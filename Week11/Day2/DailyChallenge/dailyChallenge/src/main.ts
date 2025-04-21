// Define an interface Book with the following properties:
// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
};

// Create a class Library with:
// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  };

  getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  };

  getBooks(){
    return this.books;
  };
};

// Create a class DigitalLibrary that extends Library and adds:
// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.

class DigitalLibrary extends Library{
  constructor(readonly website: string){
    super();
  };

  listBooks(): string[] {
    const allBooks = this.getBooks();
    return allBooks.map(book => book.title);
  };
};

// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books 
// and the list of all book titles.

const library = new DigitalLibrary('http://myLibrary.com');

const book1 = {
  title: 'Pirates of the Caribbean: The Price of Freedom',
  author: 'A.C. Crispin',
  isbn: '12345',
  publishedYear: 2011,
  genre: 'advanture',
};

const book2 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  isbn: 'gewkhvcdjve',
  publishedYear: 1960,
};

const book3 = {
  title: 'Sunrise of the Reaping',
  author: 'Suzanne Collins',
  isbn: '26rvb2',
  publishedYear: 2025,
  genre: 'fantasy',
};

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.getBookDetails('26rvb2'));

console.log(library.listBooks());