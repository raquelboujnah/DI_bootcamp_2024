import { useEffect } from "react";

const FectchPost = () => {
    useEffect(()=>{
        afetch()
    },[])
 
    const afetch = async() => {
        try {
            const res = await fetch('https://webhook.site/8017ca83-8a5f-469d-bb4a-1dae4b536b93', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27
                })
            });
            const data = await res.text()
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    return <>hi</>
    
}

export default FectchPost