import { useEffect, useState } from "react";
import axios from "axios";
import LoginRegister from "../component/LoginRegister";

const Auth = ({children}) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() =>{
        verify()
    }, []);

    const verify = async() => {
        try {
            const response = await axios.get('http://localhost:5000/authusers/auth', {
                headers: {
                    'x-access-token': 'token'
                },
                withCredentials: true
            });
            if(response.status === 201) setRedirect(true);
            
        } catch (error) {
            setRedirect(false)
        }
    }

    return redirect ? children : <LoginRegister title='Login'/>
};

export default Auth