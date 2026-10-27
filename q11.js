"use strict";
class Product {
    name
    productId
    price
    constructor(name, productId, price) {
        this.name = name;
        this.productId = productId;
        this.price = price;
    }
    displayDetails1() {
        console.log("Name:", this.name)
        console.log("Product ID:", this.productId)
        console.log("Price:", this.price)
    }
}
const a1 = new Product("Laptop", 101, 50000);
a1.displayDetails1();
