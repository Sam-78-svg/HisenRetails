let products = [];

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        products = data.products;
        console.log(products);

        // Extract categories after products are loaded
        let category = [];
        products.forEach(product => {
            category.push(product.category);
        });

        console.log(category);
    });