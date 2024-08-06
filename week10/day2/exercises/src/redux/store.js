import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const store = configureStore({
    reducer: {
        todoList: todoReducer
    }
})

export default store;