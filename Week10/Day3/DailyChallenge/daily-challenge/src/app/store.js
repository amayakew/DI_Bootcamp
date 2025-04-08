import {configureStore, combineReducers} from '@reduxjs/toolkit';
import ageTrackerReducer from '../features/ageTracker/ageTrackerSlice';

const appReducer = combineReducers({
    ageTrackerReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store;