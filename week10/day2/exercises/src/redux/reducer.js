import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from "./action";

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, {id:state.todos.length + 1, text: action.payload, completed: false }]};
        case REMOVE_TODO:
            
            return{...state, todos: state.todos.filter((todo) => todo.id !== action.payload)};
        case TOOGLE_TODO:
            return{...state, todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo)};
        default:
            return state
    }
}

export default todoReducer