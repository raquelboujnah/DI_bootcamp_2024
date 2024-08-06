import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {addUser, addUserWithPrepare} from './usersSlice';

const Users = (props) => {
    const users = useSelector(state => state.usersReducer.users)
    const name = useRef();
    const email = useRef();  
    const dispatch = useDispatch();

    const pushUser = () => {
        const nameInput = name.current.value
        const emailInput = email.current.value
        dispatch(addUser({name: nameInput, email: emailInput}))
    }

    const pushUserWithPrepare = () => {
        const nameInput = name.current.value
        const emailInput = email.current.value
        dispatch(addUserWithPrepare(nameInput, emailInput))
    }

    return (
        <>
            <div>
                <h4>Add user:</h4>
                <input placeholder="Name" ref={name} />
                <input placeholder="Email" ref={email} />
                <button onClick={() => pushUserWithPrepare()}>Add</button>
            </div>
            <h4>All Users:</h4>
            {users.map((user) => {
                return(
                    <div key={user.id}>
                        <h5>{user.name}</h5>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </>
    )
}

export default Users