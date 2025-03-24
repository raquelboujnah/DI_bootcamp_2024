import { ReactElement } from "react";

type Props = {
    name?: string;
    age?: number
}
const UserCard = ({name, age}: Props): ReactElement => {
    return(
        <>
            <h4>{name? name: 'Raquel'}</h4>
            <p>{age? age: 22}</p>

        </>
    )
}

export default UserCard