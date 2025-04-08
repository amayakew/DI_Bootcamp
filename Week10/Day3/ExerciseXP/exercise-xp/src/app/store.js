import {configureStore, combineReducers} from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

const appReducer = combineReducers({
    usersReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store;