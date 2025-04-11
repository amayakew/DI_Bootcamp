import {createSelector} from '@reduxjs/toolkit';
import {state} from './slice';

export const selectGenre = createSelector([state], (state) => {
    return state.genre;
});