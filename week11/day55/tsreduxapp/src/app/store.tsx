import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskReducer from '../features/slice'

const combineReducersApp = combineReducers({ taskReducer });

const store = configureStore({
  reducer: combineReducersApp,
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store;