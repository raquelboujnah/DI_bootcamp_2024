import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "./actions";

const initialState = {};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, [action.payload.day]: [...(state[action.payload.day] || []), action.payload.task]};
        case EDIT_TASK:
            return {...state, [action.payload.day]: state[action.payload.day].map((task, index) => index === action.payload.index ? action.payload.newTask : task)};   
        case REMOVE_TASK:
            return {...state, [action.payload.day]: state[action.payload.day].filter((task, index) => index !== action.payload.index)};
        default:
            return state;
    };
};

export default taskReducer;