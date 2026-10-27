function fetchOrderHistory() {
    return new Promise((resolve) => {
        const orders = [
            { orderId: 101, product: "Laptop", price: 50000 },
            { orderId: 102, product: "Mobile", price: 20000 },
            { orderId: 103, product: "Shoes", price: 2000 }
        ];

        resolve(orders);
    });
}

async function displayOrders() {
    const orders = await fetchOrderHistory();

    console.log("Customer Order History:");

    for (const order of orders) {
        console.log("Order ID:", order.orderId);
        console.log("Product:", order.product);
        console.log("Price:", order.price);
        console.log("--------------------");
    }
}

displayOrders();