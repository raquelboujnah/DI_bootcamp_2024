import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "./actions";

const initialState = {};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const dayTasks = state[action.payload?.day] ? [...state[action.payload?.day]] : []
            dayTasks.push({id: dayTasks.length+1, task: action.payload.task})
            return {...state, [action.payload?.day]: dayTasks};
        case EDIT_TASK:
            console.log(action.payload);
            const currentDay = state[action.payload.day]
            return {...state, [action.payload.day]: currentDay.map((task) => task.id == action.payload.id ? {...task, task: action.payload.newTask} : task)};
        case REMOVE_TASK:
            return {...state, [action.payload.day]: state[action.payload.day].filter((task) => task.id !== action.payload.id)};
        default:
            return state;
    };
};

export default taskReducer;