import React, { useEffect, useState } from 'react';
import './TrendingProduct.css'; // Add this import

function TrendingProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products || [])); {/* setProduct will set array of products to the products array */ }
    }, []);

    return (
        <div className="trending-products-container">
            {products.filter(pro => pro.id <= 6).map(product => (
                <div className="card" key={product.id} >
                    <img src={product.thumbnail} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default TrendingProducts;