import { useReducer, ReactElement, createContext } from "react";

type InitialStateType = {
    count: number;
    // text: string;
};

const initialState: InitialStateType = {
    count: 0,
    // text: ''
};

// type ActionType = 'INCREMENT'| 'DECREMENT';

// type ReducerActionType = {
//     INCREMENT: ActionType;
//     DECREMENT: ActionType;
// }
// same as:

enum ActionEnum {
    INCREMENT,
    DECREMENT
}

type ReducerAction = {
    type: ActionEnum;
    payload?: number
}

const reducer = (state: InitialStateType, action: ReducerAction): InitialStateType => {
    switch (action.type) {
        case ActionEnum.INCREMENT:
            if(!action.payload) return state
            return {...state, count: state.count + action.payload};
        case ActionEnum.DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state
    }
}

interface AuthContextType {
    token: string;
};

const AuthContextType = createContext<AuthContextType | null>(null)

const CounterReducer = (): ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => dispatch({type: ActionEnum.INCREMENT, payload: 5});
    const decrement = () => dispatch({type: ActionEnum.DECREMENT});

    return (
        <>
            <h1>Count: {state.count}</h1>
            <div>
                <button onClick={increment}> + </button>
                <button onClick={decrement}> - </button>
            </div>
        </>
    )
};

export default CounterReducer