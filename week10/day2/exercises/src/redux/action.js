export const ADD_TODO = 'add';
export const REMOVE_TODO = 'remove';
export const TOOGLE_TODO = 'toogle';

export const addTodo = (text) => {
    return{
        type: ADD_TODO,
        payload: text
    };
};

export const removeTodo = (id) => {
    return{
        type: REMOVE_TODO,
        payload: id
    };
};

export const toogleTodo = (id) => {
    return{
        type: TOOGLE_TODO,
        payload: id
    };
};