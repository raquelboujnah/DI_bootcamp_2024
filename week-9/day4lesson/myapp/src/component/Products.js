import { useParams, Link, useNavigate } from "react-router-dom";

const Products = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const toshop = () => {
        navigate('/shop')
    }
    return(
        <>
            <h2>Products {params.id}</h2>
            <Link to='/shop'>Back to shop</Link>
            <div>
                <button onClick={()=>toshop()}>Back to shop</button>
            </div>
        </>
    )
}

export default Products