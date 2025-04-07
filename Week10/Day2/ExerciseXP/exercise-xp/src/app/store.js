import {configureStore, combineReducers} from '@reduxjs/toolkit';
import toDoReducer from '../features/toDo/toDoSlice';

const appReducer = combineReducers({
    toDoReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store;