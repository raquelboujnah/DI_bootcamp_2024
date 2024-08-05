import { useState } from "react"

const FetchForm = () => {
    const [input, setInput] = useState('')
    const [message, setMessage] = useState('')

    const fetchForm = async(e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/world', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({input})
        });
        const data = await res.json()
        setMessage(data.message);
        console.log(data);
    }

    return (
        <>
            <form onSubmit={fetchForm}>
                <input type='text' name='input' onChange={(e)=>setInput(e.target.value)}/>
                <input type='submit' value='Submit'/>
            </form>
            {message && <p>{message}</p>}
        </>
    )
}

export default FetchForm