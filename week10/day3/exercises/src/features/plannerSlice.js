import {createSlice, nanoid} from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {};

export const plannerSlice = createSlice({
    name: 'dayPlanner',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const dayTasks = state[action.payload.day] ? [...state[action.payload?.day]] : [];
            dayTasks.push({id: nanoid(), task: action.payload.task});
            state[action.payload?.day] = dayTasks;
        },
        editTask: (state, action) => {
            console.log(action);
            
            const currentDay = state[action.payload.day]
            state[action.payload.day] = currentDay.map(task => task.id == action.payload.id ? {...task, task: action.payload.newTask} : task);
        },
        removeTask: (state, action) => {
            state[action.payload.day] = state[action.payload.day].filter(task => task.id !== action.payload.id);
        }
    }
})

export const {addTask, editTask, removeTask} = plannerSlice.actions;

export default plannerSlice.reducer;