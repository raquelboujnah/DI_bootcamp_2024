import { useContext } from "react";
import { AppContext } from "../App";
import { ShowContext } from "./ShowCounter";


const Input = (props) => {
    const {setTitle} = useContext(AppContext)
    const {aaa} = useContext(ShowContext)
    return(
        <>
            <input onChange={()=>setTitle((title) => e.target.value)}/>
            <h1>{aaa}</h1>
        </>
    )
}

export default Input