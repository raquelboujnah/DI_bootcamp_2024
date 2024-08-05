import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = (props) => {
    const params = useParams()
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetchProduct()
    }, [])

    const fetchProduct = async() => {
        try{
            const result = await fetch(`http://localhost:3000/api/products/${params.id}`);
            const data = await result.json()
            setProduct(data)
        }catch(err){
            console.log(err);
        }
        
    }
    
    return(
        <>
            <h2>Product</h2>   
            {
                product.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <h5>{item.price}</h5>
                            <Link to='/'>Continue shopping</Link>
                        </div>
                    )
                })
            }                 
        </>
    )
}

export default Product