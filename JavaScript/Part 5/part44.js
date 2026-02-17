function f1(x) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(x%2===0){
            resolve();
        }else{
            reject("Odd number not allowed")
        }
        // console.log(x)
        // resolve()
    },3000)
  });
}

async function main() {
    let num = Math.random(Math.random()*10);
    console.log(num)
  try {
    await f1(num);
    console.log("Program completed")
  } catch (err) {
    console.log(err);
  }
}

main();
// function f2() {
//   console.log("This is f2 function");
// }
// f1()
//   .then(() => f2())
//   .catch((err) => console.log(err));

// async function main(){
//     await f1(5);
//     console.log("Program completed")
// }
// main();