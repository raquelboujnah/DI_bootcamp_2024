export const ADD_TASK = 'add';
export const REMOVE_TASK = 'remove';
export const EDIT_TASK = 'edit';

export const add = (day, task) => {
    return{
        type: ADD_TASK,
        payload: {day, task}
    };
};

export const edit = (day, id, newTask) => {
    return{
        type: EDIT_TASK,
        payload: {day, id, newTask}
    };
};

export const remove = (day, id) => {
    return{
        type: REMOVE_TASK,
        payload: {day, id}
    };
};