import { useEffect, useState } from "react";
import './Product.css';
import './TrendingProduct.css'

function Products() {
    const [categoryName, setCategoryName] = useState("All");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products || []));
    }, []);

    // Fix: Use correct comparison operator and handle "All" case
    const filteredProducts = categoryName === "All"
        ? products
        : products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());

    return (
        <>
            <h1 className="productHeading">The Following are Available products!</h1>
            <div className="productContainer">
                <aside>
                    <h1>Category:</h1>
                    <form>
                        <select
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Fragrances">Fragrances</option>
                            <option value="Furniture">Furniture</option>
                        </select>
                    </form>
                </aside>
                <main>
                    <h1 className="categoryName">{categoryName}:</h1>
                    <div className="products">
                        <h1 style={{ fontSize: '14px', fontWeight: 'bolder' }}> {filteredProducts.length} Products Found</h1>

                        <div className="trending-products-container">
                            {filteredProducts.map(product => (
                                <div className="card" key={product.id}>
                                    <img src={product.thumbnail} alt={product.title} />
                                    <h2 className="productName"><b style={{ fontSize: '20px' }}>Name:</b> {product.title}</h2>
                                    <p className="description"><b style={{ fontSize: '20px' }}>Description:</b> {product.description}</p>
                                    <p className="productPrice">${product.price}</p>
                                    <button class="addToCart">
                                        <div class="button-overlay"></div>
                                        <span>Add</span>

                                    </button>
                                </div>

                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Products;
