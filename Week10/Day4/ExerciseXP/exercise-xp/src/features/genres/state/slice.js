import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from 'nanoid';

const initialState = {
    genre: 'All Books'
};

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setFilter: (state,action) => {
            state.genre = action.payload;
        }
    },
});

export const state = (state) => state.genreReducer;

export const {setFilter} = genreSlice.actions;

export default genreSlice.reducer;