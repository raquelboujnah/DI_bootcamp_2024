import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import usersReducer from '../features/users/usersSlice';
import counterReducer from '../features/counter/counterSlice'
import { increment} from "../features/counter/counterSlice";
import { fetchUsers } from "../features/users/usersSlice";

export const appReducer = combineReducers({
    counterReducer,
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
    // middleware: () => [logger, thunk]
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware().concat(logger);
    // }
});

export default store;

// store.dispatch((dispatch, getState) => {
//     setTimeout(() => {
//         dispatch(increment())
//     }, 5000)
// })

const getUsers = () => async (dispatch, getState) =>{
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json()
        dispatch(fetchUsers(data))
    }catch(err){
        console.log(err);
        
    };
}

store.dispatch(getUsers())