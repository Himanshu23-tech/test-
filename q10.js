const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Shoes", price: 2000 }
]

const [p1, p2, p3] = products

console.log("Product Names:")
//console.log(p1.name)
console.log(p2.name)
//console.log(p3.name)

const { name, price } = p2

console.log("Product Details:")
console.log("Name:", name)
console.log("Price:", price)