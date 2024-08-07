import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";

const Users = () => {
    const users = useSelector(state => state.usersReducer.users);
    const status = useSelector(state => state.usersReducer.status);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])    

    if(status === 'loading') return <h2>Loading...</h2>
    if(status === 'failed') return <h2>Somthing went wrong, try in few minutes...</h2>

    return (
        <>
            {users.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}, {item.email}
                    </div>
                );
            })}
        </>
    );
};

export default Users