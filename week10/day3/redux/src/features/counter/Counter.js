import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { increment, decrement, reset, incrementByNum, incrementBy2Nums, incrementWithPrepare } from "./counterSlice";

const Counter = (props) => {
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    const numRef = useRef();
    const num1Ref = useRef();
    const num2Ref = useRef();



    const addByNum = () => {
        const num = numRef.current.value;
        dispatch(incrementByNum(Number(num)))
    };

    const addBy2Num = () => {
        const num1 = num1Ref.current.value;
        const num2 = num2Ref.current.value;
        // dispatch(incrementBy2Nums({n1: Number(num1), n2: Number(num2)}))
        dispatch(incrementWithPrepare(Number(num1), Number(num2)))
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}> + </button>
            <button onClick={() => dispatch(decrement())}> - </button>
            <button onClick={() => dispatch(reset())}> reset </button>
            <div>
                <h2>Increment by number</h2>
                <input ref={numRef} placeholder="enter a number"/>
                <button onClick={() => addByNum()}>Increment by number</button>
            </div>
            <div>
                <h2>Increment by 2 number</h2>
                <input ref={num1Ref} placeholder="enter a number"/>
                <input ref={num2Ref} placeholder="enter a number"/>
                <button onClick={() => addBy2Num()}>Increment by 2 number</button>
            </div>
        </>
    );
};

export default Counter
