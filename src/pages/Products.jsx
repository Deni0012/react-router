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
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-body">{product.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Products;