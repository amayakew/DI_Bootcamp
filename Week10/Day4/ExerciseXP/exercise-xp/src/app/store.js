import {configureStore, combineReducers} from '@reduxjs/toolkit';
import booksReducer from '../features/books/state/slice.js';
import genreReducer from '../features/genres/state/slice.js';

const appReducer = combineReducers({
    booksReducer,
    genreReducer
});

const store = configureStore({
    reducer: appReducer
});

export default store;