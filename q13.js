function checkStock(quantity) {
    if (quantity < 5) {
        throw new Error("Product quantity is below 5 units")
    }

    console.log("Sufficient stock available")
}

try {
    checkStock(3)
}
catch (error) {
    console.log("Error:", error.message)
}