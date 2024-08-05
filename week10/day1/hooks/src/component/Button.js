import { useContext } from "react";
import { AppContext } from "../App";
import Title from "./Title";

const Button = (props) => {
    const {setCount} = useContext(AppContext) 

    return(
        <>
            <button onClick={()=>setCount((count)=> count +1)}>+</button>
            <Title/>
        </>
    )
}

export default Button