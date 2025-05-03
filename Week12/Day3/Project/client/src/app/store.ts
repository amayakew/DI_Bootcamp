import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import storiesReducer from '../features/storiesSlice';

const appReducers = combineReducers({
    auth: authReducer,
    stories: storiesReducer
});

const store = configureStore({
    reducer: appReducers
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;