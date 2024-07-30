import { useState } from "react";
import Button from "./Button";

const Counter = () => {
    const [count, setCount] = useState(0)
    if(count > 5){
        throw new Error('Crashed...!!!')
    }
    return (
        <>
            <h3>{count}</h3>
            <Button setCount={setCount}/>
        </>
    )
}



export default Counter