const products = [
    { id: 1, name: "Samsung", desc: "Android", price: 49999, category: "Mobile" },
    { id: 2, name: "Iphone", desc: "iOS", price: 59999, category: "Mobile" },
    { id: 3, name: "Oppo", desc: "Android", price: 6999, category: "Mobile" },
    { id: 4, name: "MacBook", desc: "Apple Laptop", price: 149999, category: "Laptop" },
    { id: 5, name: "Dell XPS", desc: "Windows Laptop", price: 129999, category: "Laptop" },
    { id: 6, name: "iPad", desc: "Apple Tablet", price: 59999, category: "Tablet" }
];
let category = "ProductId"
let text = 1;

const resultArray = products.find((product) => product.id == text);
console.log(resultArray);