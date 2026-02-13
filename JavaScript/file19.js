const products = [
    { id: 1, name: "Samsung",desc: "Android",price:99999},
    { id: 2, name: "Iphone",desc: "Os",price:99999},
    { id: 3, name: "Oppo",desc: "Android",price:99999}
];
const cart = products.map((product)=>{
    const obj ={
        ...product,
        quantity:1
    };
    return obj
})

console.log(cart);