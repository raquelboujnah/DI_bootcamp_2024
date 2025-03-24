import { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/authusers/all', {
                headers: {
                    "x-access-token": "token"
                }
                ,withCredentials: true
            });
            
            setUsers(response.data)
        } catch (error) {
            console.log(error.response.data);
        };
    };

    return (
        <>
            <h2>Home</h2>
            {users.map(item => {
                return(
                    <div key={item.id}>
                        {item.id} {item.email}
                    </div>
                )
                
            })}
        </>
    );
};

export default Home;