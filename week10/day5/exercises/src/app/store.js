import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from '../features/book/bookSlice';
import taskReducer from '../features/task/taskSlice';

export const appReducer = combineReducers({
    bookReducer,
    taskReducer
});

const store = configureStore({
    reducer: appReducer,
});

export default store