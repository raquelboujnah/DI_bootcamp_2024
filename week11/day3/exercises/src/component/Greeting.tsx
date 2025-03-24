import { ReactElement } from "react";

const Greeting = (props: {name: string}): ReactElement => {
    return (
        <h2>{props.name}</h2>
    )
}

export default Greeting