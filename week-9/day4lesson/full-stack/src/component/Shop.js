import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Shop = (props) => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');


    useEffect(()=>{
        fetchProducts()
    }, []);

    const fetchProducts = async() => {
        try{
            const result = await fetch('http://localhost:3000/api/products');
            const data = await result.json()
            setProducts(data)
        }catch(err){
            console.log(err);
        }
    }

    const addProduct = async(e) => {
        e.preventDefault()
        try{
            const result = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({name, price})
            });
            const data = await result.json()
            setProducts(data)
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <h1>Shop</h1>
            <form onSubmit={addProduct}>
                <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <input placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
                <input type="submit" value={'Add'}/>
            </form>
            {
                products.map(item => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <h5>{item.price}</h5>
                            <Link to={`/product/${item.id}`}>Buy now</Link>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Shop
