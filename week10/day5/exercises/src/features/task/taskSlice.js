import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {id: 1, task: 'clean', categorie: 'Room',  completed: false},
        {id: 2, task: 'order', categorie: 'Kitchen', completed: true}

    ],
    categories: 'categories',
    done: null
};


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        filterCategorie: (state, action) => {
            state.categories = action.payload
        },
        filterCompleted: (state, action) => {
            state.categories = action.payload
        },
        addTask: (state, action) => {
            const { task, categorie } = action.payload;
            state.tasks = [...state.tasks, { id: nanoid(), task, categories: categorie, completed: false }];        
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {...task, task: action.payload.newTask, categorie: action.payload.newCategorie} : task);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task);
        },
    }
});

export const tasks = (state) => state.taskReducer.tasks;
export const categories = (state) => state.taskReducer.categories;
export const done = (state) => state.taskReducer.done;



export const { filterCategorie, filterCompleted, addTask, editTask, removeTask, toggleTask, addCategorie, editCategorie, removeCategorie} = taskSlice.actions

export default taskSlice.reducer;
