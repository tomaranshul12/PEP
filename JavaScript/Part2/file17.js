const products = ["product1","product2","product3"]
// for(let i=0;i<products.length;i++){
//     console.log(products[i])
// }
// products.forEach()

// function controller(f) {
//     console.log(f)
// }
// controller(10);

// let a = 10
// let name = "James"
// const f1 = () =>console.log("Hello World")
//  => console.log("Hello World"))

// function greet(){
//     console.log("Hello World")
// }
// const f1 = () => greet()
// f1();

function greet(f){
    f()
}
greet(() => console.log("Hello World"))