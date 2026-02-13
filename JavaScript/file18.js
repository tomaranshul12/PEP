// const products = ["product1","product2","product3"]

const products = [
    { id: 1, name: "Samsung",desc: "Android",price:99999},
    { id: 2, name: "Iphone",desc: "Os",price:99999},
    { id: 3, name: "Oppo",desc: "Android",price:99999}
];
// const cart = []
let cart = []

// products.forEach((product) => console.log(product));
products.forEach((product) => {
    // product.quantity =1
    // product.total = product.price * product.quantity
    // cart.push(product)
    const obj = {...product,quantity:1,total:product.price*product.quantity}
    cart = [...cart,obj]
})
console.log(cart)

