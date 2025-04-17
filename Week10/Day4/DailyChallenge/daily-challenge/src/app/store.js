import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/state/slice.js';

const store = configureStore({
    reducer: tasksReducer
});

export default store;