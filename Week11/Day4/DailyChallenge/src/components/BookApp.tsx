import { useState, ReactElement, useRef } from "react";
import { Book } from "../types";
import { nanoid } from "nanoid";
import List from "./List";

const initialBooksArr: Book[] = [
    {id: nanoid(), title: 'Pirates of the Caribbean: The Price of Freedom', author: 'A.C. Crispin',},
    {id: nanoid(), title: 'To Kill a Mockingbird', author: 'Harper Lee',},
];

const BookApp = (): ReactElement => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const authorRef =useRef<HTMLInputElement | null>(null);

    const [booksList, setBooksList] = useState<Book[]>(initialBooksArr);

    const addBook = (): void => {
        const title = titleRef.current?.value;
        const author = authorRef.current?.value;
        
        if (!title || !author) return; 

        const newBook: Book = {
            id: nanoid(),
            title,
            author,
        };
        const newBookList = [...booksList, newBook];
        setBooksList(newBookList);

        if (titleRef.current) titleRef.current.value = '';
        if (authorRef.current) authorRef.current.value = '';
    };

    const renderBook = (book: Book): ReactElement => {
        return (
            <div>
                <div>
                    <div>
                        <span style={{fontWeight: '500', fontSize: '0.9em'}}>"{book.title}"</span>
                    </div>
                    <div>
                        <span style={{fontWeight: '500', fontSize: '0.8em'}}>by {book.author}</span>
                    </div>
                </div><hr/>
            </div>
        )
    }

    return (
        <div>
            <h2>My Library</h2>
            <div style={{border: '1px solid black', borderRadius: '20px', padding: '10px 30px'}}>
                <p style={{fontWeight: 'bold', margin: '0px'}}>Add New Book:</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0'}}>
                    <input ref={titleRef} placeholder="Title" style={{height: '1.5em', border: '1px solid black'}}/>
                    <input ref={authorRef} placeholder="Author" style={{height: '1.5em', border: '1px solid black'}}/>
                    <button onClick={() => addBook()} style={{border: '1px solid black', padding: '2px 10px', fontSize: '1em'}}>Add</button>
                </div>
            </div>
            <div style={{border: '1px solid black', borderRadius: '20px', padding: '10px 30px', marginTop: '15px'}}>
                <p style={{fontWeight: 'bold', marginTop: '5px'}}>My Books:</p><hr/>
                <List items={booksList} renderItem={renderBook}/>
            </div>
        </div>
    );
};

export default BookApp;

// Use the useState hook in BookApp to manage a list of books. 
// Prepopulate it with a few entries, and let the list grow by adding new books.

// Implement a function addBook that generates a new book object (with a unique id) and appends it to the state.