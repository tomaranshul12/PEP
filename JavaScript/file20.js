const products = [
    { id: 1, name: "Samsung", desc: "Android", price: 49999, category: "Mobile" },
    { id: 2, name: "Iphone", desc: "iOS", price: 59999, category: "Mobile" },
    { id: 3, name: "Oppo", desc: "Android", price: 6999, category: "Mobile" },
    { id: 4, name: "MacBook", desc: "Apple Laptop", price: 149999, category: "Laptop" },
    { id: 5, name: "Dell XPS", desc: "Windows Laptop", price: 129999, category: "Laptop" },
    { id: 6, name: "iPad", desc: "Apple Tablet", price: 59999, category: "Tablet" }
];
let search = "Laptop"

// const resultArray = products.map((product)=>{
//     const obj ={
//         ...product,
//         quantity:1
//     };
//     return obj
// })
// const resultArray = products.map((product)=> product)

// console.log(resultArray);
const resultArray = products.filter((product) => {
    return product.category == search
})
console.log(resultArray);