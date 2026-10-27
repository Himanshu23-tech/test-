const fetchProduct = new Promise((resolve, reject) => {
    const product = {
        name: "Laptop",
        price: 50000,
        availability: "Available"
    };

    resolve(product)
});

fetchProduct
    .then((product) => {
        console.log("Product Name:", product.name)
        console.log("Price:", product.price)
        console.log("Availability:", product.availability)
    })
    .catch((error) => {
        console.log("Error:", error)
    })