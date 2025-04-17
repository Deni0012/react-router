import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts"
const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(url).
            then(res => setProducts(res.data)).catch(err => console.error(err))
    }, [])


    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Products;