import { useContext } from "react";
import { AppContext } from "../App";
const Title = (props) => {
    const {title} = useContext(AppContext)
    return(
        <>
            <h1>Title: {title}</h1>
        </>
    )
}

export default Title