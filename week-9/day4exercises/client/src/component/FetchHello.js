import { useEffect } from "react";
import { useState } from "react";

const FetchHello = () => {
    const [hello, setHello] = useState('')
    useEffect(()=> {
        fetchExpress()
    },[])
    const fetchExpress = async() => {
        const res = await fetch('http://localhost:5000/api/hello');
        const data = await res.text()
        console.log(data);
        setHello(data)
    }
    return (
        <>
            <h1>{hello}</h1>
        </>
    )
}

export default FetchHello