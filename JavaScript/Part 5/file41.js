// function makePayment(){
//     setTimeout(() => {
//         console.log("Payment is processed");
//         // f();
//     },5000);
    
// }
// function sendConfirmation(){
//     console.log("Order is placed")
// }
// //call back hell 
// // makePayment(sendConfirmation);
// makePayment().then(()=> sendConfirmation()).catch(err.)

function makePayment(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment is processed");
            resolve();   // tells promise success
        }, 5000);
    });
}

function sendConfirmation(){
    console.log("Order is placed");
}

makePayment()
    .then(() => sendConfirmation())
    .catch(err => console.log(err));


 