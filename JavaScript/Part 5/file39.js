//hoisting 
// console.log(name);  // undefined
// var name = "Anshul";
// Behind the scenes, JavaScript treats it like this:
// var name;
// console.log(name);
// name = "Anshul";//So it prints undefined, not an error.

//with let and const
// console.log(age);
// let age = 21;
//output:ReferenceError: Cannot access 'age' before initialization

// let name 
// console.log(name)
// name = "John"

//function hoisting 
greet();

function greet() {
    console.log("Hello!");//Works fine because function declarations are fully hoisted.
}
    
