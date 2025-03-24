import { useEffect, ReactElement, useState } from "react";

const UseEffect = (): ReactElement => {
    const [data, setData] = useState<string[]>([]); 


    useEffect(()=>{
        fetchApi()
    }, [])

    const fetchApi = async (): Promise<void> => {
        try {
            const res = await fetch('url');
            const data = await res.json(); 
            setData(data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            {
                data.map((item, idx)=> {
                    <p key={idx}>{item}</p>
                })
            }
        </>
    )
}

export default UseEffect