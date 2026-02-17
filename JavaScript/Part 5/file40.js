// //promises
// function f1(){
//     setTimeout(() => {
//         console.log("This is F1 funciton")
//     },5000);
    
// }
// function f2(){
//     console.log("This is F2 function")
// }
// f1()
// f2()


//promises
function makePayment(){
    setTimeout(() => {
        console.log("Payment is processed")
    },5000);
    
}
function sendConfirmation(){
    console.log("Order is placed")
}
makePayment()
sendConfirmation()


 