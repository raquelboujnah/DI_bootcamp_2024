import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import usersReducer from '../features/usersSlice'

export const appReducer = combineReducers({
    usersReducer
});

export const logger = (store) => (next) => (action) => {
    console.log('prev state >', store.getState());
    console.log('actiom >', action);
    const retAction = next(action);
    console.log('next state >', store.getState());
};

const store = configureStore({
    reducer: appReducer,
    middleware: () => [logger, thunk]
})

export default store;

