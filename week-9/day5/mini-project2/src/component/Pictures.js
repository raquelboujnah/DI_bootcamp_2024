import {Link, useParams} from 'react-router-dom';
import { createClient } from "pexels";
import { useState, useEffect } from 'react';

const Pictures = () => {
    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState('sky')
    const params = useParams();
    const apiKey = "XIa9BbOlIhM9nd3JUFE7Iy7v6Gj9thox08ixikJQiMXI5LabK2x0vpt2"
    const client = createClient(apiKey);

    useEffect(()=>{
        getIMages(params?.query)

    }, [params.query])

    const getIMages = (val = query) => {
        client.photos.search({ query: val, per_page: 24 })
        .then((photosObj) => {
            setPhotos(photosObj.photos)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getIMages()

    }

    const hadleInput = (e) => {
        const value = e.target.value
        setQuery(value)
    }
    
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type='text' name='query' placeholder='Search' className='search' onChange={(e) => hadleInput(e)}/>
                <input type='submit' value='Search' className='button'/>
            </form>
            <div className='imageContainer'>
                {photos.map((item, idx) => {
                    return ( 
                        <div className='image' key={idx}> 
                            <img src={item.src.small}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pictures