import {configureStore, combineReducers} from '@reduxjs/toolkit';
import plannerReducer from '../features/planner/plannerSlice';

const appReducer = combineReducers({
    plannerReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store;