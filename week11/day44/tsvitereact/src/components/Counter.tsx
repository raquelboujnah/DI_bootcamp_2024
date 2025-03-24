import { ReactElement, ReactNode } from "react";

interface CounterProps {
    children: ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({children, setCount}: CounterProps): ReactElement => {
    return (
        <>
            <h2>Counter</h2>
            <h5>{children}</h5>
            <button onClick={()=> setCount(count => count + 1)}> + </button>
            <button onClick={()=> setCount(count => count - 1)}> - </button>
        </>
    )
}

export default Counter;