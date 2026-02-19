// const emp1 = {
//     name:"John",
//     display:function () {
//         console.log(this.name)
//       }
// }
// emp1.display()

// const emp2 = {
//     name:"Cathy",
//     display:function () {
//         console.log(this.name)
//       }
// }
// rmp2.display

// function Employee(name){
//     this.name = name;
//     function display() {
//         console.log(this.name);
//       }
// }
// const emp1 = new Employee("John")
// emp1.display();
// const emp2 = new Employee("Cathy")
// emp2.display();


//prototype
function Employee(name){
    this.name = name;
}
Employee.prototype.display = function() {
    console.log(this.name);
};
const emp1 = new Employee("John");
emp1.display();
const emp2 = new Employee("Cathy");
emp2.display();
// To avoid creating duplicate methods for every object and improve memory efficiency.
