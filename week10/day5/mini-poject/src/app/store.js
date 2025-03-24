import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postSlice';
import userReducer from '../features/users/userSlice.js';

export const appReducer = combineReducers({
    postReducer,
    userReducer
});

const store = configureStore({
    reducer: appReducer,
});

export default store