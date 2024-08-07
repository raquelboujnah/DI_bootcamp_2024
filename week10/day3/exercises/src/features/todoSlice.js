import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name:'todoList',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action){
                state.todos.push(action.payload)
            },
            prepare(task){
                return {payload: {id: nanoid(), task, completed: false}}
            }
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        },
        toggleTodo: (state, action) => {
            state.todos[action.payload].completed = !state.todos[action.payload].completed
        }
    }
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer;
