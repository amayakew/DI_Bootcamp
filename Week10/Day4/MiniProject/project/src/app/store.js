import {configureStore, combineReducers} from '@reduxjs/toolkit';
import postsReducer from '../features/posts/state/slice';
import usersReducer from '../features/users/state/slice';

const appReducers = combineReducers({
    postsReducer,
    usersReducer
});

const store = configureStore({
    reducer: appReducers
});

export default store;