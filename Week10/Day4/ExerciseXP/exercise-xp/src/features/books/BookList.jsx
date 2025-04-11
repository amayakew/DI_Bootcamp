import BookFilter from "../genres/BookFilter";
import { useFilteredBooksSelector } from "./state/hooks";
import { useGenreSelector } from '../genres/state/hooks';


const BookList = () => {
    const genre = useGenreSelector();
    const books = useFilteredBooksSelector(genre);

    return (
        <>
            <h2>Books</h2>
                <BookFilter/>
                <section>
                    {books.map((book) => {
                        return (
                            <article key={book.id}>
                                <h3>"{book.title}"</h3>
                                <span>Written by {book.author}</span>
                            </article>
                        );
                    })}
                </section>
        </>
    );
};

export default BookList;