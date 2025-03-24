import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from './userSlice.js';
import { filterAuthor } from '../posts/postSlice.js';

const UsersList = () => {
    const users = useSelector(state => state.userReducer.users)
    const status = useSelector(state => state.userReducer.status)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const filterPosts = (id) =>{        
        dispatch(filterAuthor({id}))
    }

    if(status === 'loading') return (<h2>Loading...</h2>);
    if(status === 'failed') return (<h2>Something went wrong...</h2>);

    return (
        <>
            <select onChange={(e)=> filterPosts(e.target.value)}>
                <option value={-1}>Select Author</option>
                {users.map(user => {
                    return (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    )
                })}
            </select>
        </>
    );
};


export default UsersList;