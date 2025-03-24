import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import ListItem from "../model/ListItem";

type InitialStateType = {
    tasks: ListItem[];
    filter: EnumActiveState;
};

export enum EnumActiveState {
    All,
    Active,
    Completed,
}

const initialState: InitialStateType = {
    tasks: [],
    filter: EnumActiveState.All
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: {payload: string}) => {
            const task: ListItem = new ListItem(nanoid(), action.payload);
            state.tasks.push(task.serialize() as ListItem);
        },
        removeTask: (state, action:  PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id ! == action.payload);
        },
        toogleTask: (state, action:  PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
              task.checked = !task.checked;
            }       
        },
        clear: (state) => {
            state.tasks = [];
        },
        active: (state, action: PayloadAction<EnumActiveState>) => {
            state.filter = action.payload;
        },
    },
});

export const tasksState = (state: RootState) => state.taskReducer.tasks;
export const filterState = (state: RootState) => state.taskReducer.filter;
export const state = (state: RootState) => state.taskReducer;

export const {addTask, removeTask, toogleTask, clear, active} = taskSlice.actions;

export default taskSlice.reducer;