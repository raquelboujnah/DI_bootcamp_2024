import { configureStore } from "@reduxjs/toolkit";
import plannerReducer from '../features/plannerSlice'

export default configureStore({
    reducer: {
        plannerReducer
    } 
});
