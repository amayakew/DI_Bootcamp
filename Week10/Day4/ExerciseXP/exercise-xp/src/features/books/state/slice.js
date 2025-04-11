import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from 'nanoid';

const initialState = {
    books: [
        {id: nanoid(), title: 'The Shining', author: 'Stephen King', genre: 'Horror'},
        {id: nanoid(), title: 'The Return Of The King', author: 'J.R.R. Tolkien', genre: 'Fantasy'},
        {id: nanoid(), title: '1984', author: 'George Orwell', genre: 'Science Fiction'},
        {id: nanoid(), title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror'},
        {id: nanoid(), title: 'The Golden Compass', author: 'Philip Pullman', genre: 'Fantasy'},
    ], 
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {}
});

export const state = (state) => state.booksReducer;

export const {} = booksSlice.actions;

export default booksSlice.reducer;