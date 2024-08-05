import { useContext, createContext } from "react";
import { AppContext } from "../App";
import Input from "./Input";

export const ShowContext = createContext()

const Showcounter = (props) => {
    const {count} = useContext(AppContext) 
    return(
        <>
        <ShowContext.Provider value={{aaa:'context from showContext'}}>
            < h2>Showcounter - {count}</h2>
            <Input/>
        </ShowContext.Provider>
        
        </>
    )
}

export default Showcounter